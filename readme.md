# `stylelint-config-prettier`

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url]

Turns off all rules that are unnecessary or might conflict with Prettier.

This lets you use you favorite shareable config without letting its stylistic
choices get in the way when using Prettier.

## Installation

Install `stylelint-config-prettier`:

```
$ npm install --save-dev stylelint-config-prettier
```

Then, add `stylelint-config-prettier` to the `extends` array in your
`.stylelintrc.*` file. Make sure to put it **last,** so it gets the chance to
override other configs.

```json
{
  "extends": [
    "stylelint-config-prettier"
  ]
}
```

## Attribution

- Insprired by [`eslint-config-prettier`](http://npm.im/eslint-config-prettier).
- Original rules copied from [`prettier-stylelint`](http://npm.im/prettier-stylelint).

----

MIT © [Shannon Moeller](http://shannonmoeller.com)

[downloads-img]: http://img.shields.io/npm/dm/stylelint-config-prettier.svg?style=flat-square
[npm-img]:       http://img.shields.io/npm/v/stylelint-config-prettier.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/stylelint-config-prettier
