import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react';

import values from 'lodash.values';

import symbolsArray from '../src/symbols'
import defaultLocales from '../src/default-locales';

import Currency from '../src/main';

const stories = storiesOf('Currency Formatter', module);
stories.addDecorator((story, context) => withInfo('common info')(story)(context));
stories.addDecorator(withKnobs);

const currencyList = {};
Object.keys(symbolsArray).map(currency => currencyList[currency] = currency);

const locales = {};
values(defaultLocales).map(locale => locales[locale] = locale);

stories.add('Default', () => (
  <Currency
    quantity={89}
    currency={select('Currency', currencyList, 'USD')}
    symbol={text('Symbol', '$')}
    decimal={text('Decimal', undefined)}
    group={text('Group', undefined)}
    locale={select('Locale', locales, 'en')}
  />
));

stories.add('EUR Currency', () => (
  <Currency
    quantity={89}
    currency={select('Currency', currencyList, 'EUR')}
  />
));

stories.add('GBP Currency', () => (
  <Currency
    quantity={89}
    currency={select('Currency', currencyList, 'GBP')}
  />
));

stories.add('Customized symbol', () => (
  <Currency
    quantity={89}
    symbol={text('Currency', '💵')}
  />
));

stories.add('Changing pattern', () => (
  <Currency
    quantity={89}
    pattern="##,### !"
  />
));
