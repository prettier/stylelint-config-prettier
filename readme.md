# stylelint-config-prettier

> **Note**  
> As of Stylelint v15 [all style-related rules have been deprecated](https://stylelint.io/migration-guide/to-15#deprecated-stylistic-rules). If you are using v15 or higher and are not making use of these deprecated rules, [this plugin is no longer necessary](https://stylelint.io/migration-guide/to-15#:~:text=Additionally%2C%20you%20may%20no%20longer%20need%20to%20extend%20Prettier%27s%20Stylelint%20config).

[![NPM version][npm-img]][npm-url] [![Downloads][downloads-img]][npm-url]

Turns off all rules that are unnecessary or might conflict with Prettier. This lets you use your favorite shareable config without letting its stylistic choices get in the way when using Prettier.

## Installation

Install `stylelint-config-prettier`:

```
npm install --save-dev stylelint-config-prettier
```

Then, append `stylelint-config-prettier` to the [`extends` array](https://stylelint.io/user-guide/configuration/#extends) in your `.stylelintrc.*` file. Make sure to put it **last,** so it will override other configs.

```js
{
  "extends": [
    // other configs ...
    "stylelint-config-prettier"
  ]
}
```

## CLI helper tool

`stylelint-config-prettier` is shipped with a little CLI tool to help you check if your configuration contains any rules that are in conflict with Prettier.

In order to execute the CLI tool, first add a script for it to `package.json`:

```json
{
  "scripts": {
    "stylelint-check": "stylelint-config-prettier-check"
  }
}
```

Then run `npm run stylelint-check`.

## Attribution

- Inspired by [`eslint-config-prettier`](https://npm.im/eslint-config-prettier).
- CLI helper inspired by [`tslint-config-prettier`](https://github.com/alexjoverm/tslint-config-prettier).
- Original disabled ruleset copied from [`prettier-stylelint`](https://npm.im/prettier-stylelint).

----

[MIT](license)

[downloads-img]: https://img.shields.io/npm/dm/stylelint-config-prettier.svg?style=flat-square
[npm-img]:       https://img.shields.io/npm/v/stylelint-config-prettier.svg?style=flat-square
[npm-url]:       https://npmjs.org/package/stylelint-config-prettier
