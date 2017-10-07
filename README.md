# 💵 react currency formatter

[![npm](https://img.shields.io/npm/dt/react-currency-formatter.svg)](https://www.npmjs.com/package/react-currency-formatter)
[![npm](https://img.shields.io/npm/v/react-currency-formatter.svg)](https://www.npmjs.com/package/react-currency-formatter)
[![David](https://img.shields.io/david/xDae/react-currency-formatter.svg)](https://david-dm.org/xDae/react-currency-formatter)
[![Travis](https://img.shields.io/travis/xDae/react-currency-formatter.svg)](https://travis-ci.org/xDae/react-currency-formatter)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()


### 💻  [DEMO!](https://xdae.github.io/react-currency-formatter/)

## Usage

#### Simple
```js
import Currency from 'react-currency-formatter';

<Currency
  quantity={45685}
  currency="EUR"
/>
```

#### Complex
```js
import Currency from 'react-currency-formatter';

<Currency
  quantity={45685}          // Required
  currency="USD"            // Optional (USD by default)
  locale="en_EN"            // Optional
  pattern="##,### !"        // Optional
  decimal=","               // Optional
  group="."                 // Optional
/>
```

## Support

Please [open an issue](https://github.com/xDae/react-currency-formatter/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/xDae/react-currency-formatter/compare/).
