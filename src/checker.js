'use strict';

const stylelintConfigPrettier = require('./index');
const stylelint = require('stylelint');
const { resolve } = require('path');

const { hasOwnProperty } = Object.prototype;

function check(path) {
	const resolvedPath = resolve(process.cwd(), path || '');

	return stylelint
		.createLinter()
		.getConfigForFile(resolvedPath)
		.then((config) => {
			const prettierRules = stylelintConfigPrettier.rules;
			const configRules = config.config.rules;
			const conflictingRules = [];

			function isEmpty(value) {
				return (
					value === null ||
					(Array.isArray(value) && value.length === 0)
				);
			}

			Object.keys(prettierRules).forEach((rule) => {
				if (
					hasOwnProperty.call(configRules, rule) &&
					!isEmpty(configRules[rule]) &&
					configRules[rule][0] !== prettierRules[rule]
				) {
					conflictingRules.push(rule);
				}
			});

			return conflictingRules.length ? conflictingRules : null;
		});
}

exports.check = check;
