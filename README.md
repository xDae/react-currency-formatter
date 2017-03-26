# 💵 react currency formatter

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## Usage
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

## TODO
- [ ] create description
- [ ] create documentation
- [ ] create component playground (w/ Storybook)


[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo


