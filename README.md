# 💵 react currency formatter

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

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
  className="my-classname"  // Optional
  quantity={45685}          // Required
  currency="USD"            // Optional (USD by default)
  locale="en_EN"            // Optional
  pattern="##,### !"        // Optional
  decimal: ','              // Optional
  group: '.'                // Optional
/>
```

## Support

Please [open an issue](https://github.com/xDae/react-currency-formatter/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/xDae/react-currency-formatter/compare/).


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/react-currency-formatter

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

