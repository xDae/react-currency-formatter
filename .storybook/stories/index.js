import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, text, number, select } from '@kadira/storybook-addon-knobs';

import _ from 'lodash';

import Currency from '../../src';

const stories = storiesOf('Currency Formatter', module);
stories.addDecorator(withKnobs);

const currencyList = {};
Object.keys(new Currency().symbols).map(currency => currencyList[currency] = currency);

const locales = {};
_.values(new Currency().defaultLocales, 'age').map(locale => locales[locale] = locale);

stories.addWithInfo('Default', () => (
  <Currency
    quantity={number('Quantiy', 89)}
    currency={select('Currency', currencyList, 'USD')}
    symbol={text('Symbol', '$')}
    decimal={text('Decimal', undefined)}
    group={text('Group', undefined)}
    locale={select('Locale', locales, 'en')}
  />
));

stories.addWithInfo('EUR Currency', () => (
  <Currency
    quantity={number('Quantiy', 52951)}
    currency={select('Currency', currencyList, 'EUR')}
  />
));

stories.addWithInfo('GBP Currency', () => (
  <Currency
    quantity={number('Quantiy', 7296)}
    currency={select('Currency', currencyList, 'GBP')}
  />
));

stories.addWithInfo('Customized symbol', () => (
  <Currency
    quantity={number('Quantiy', 4198)}
    symbol={text('Currency', '💵')}
  />
));

stories.addWithInfo('Changing pattern', () => (
  <Currency
    quantity={number('Quantiy', 7296)}
    pattern="##,### !"
  />
));
