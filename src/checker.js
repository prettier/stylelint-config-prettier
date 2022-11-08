'use strict';

const { resolve } = require('path');
const stylelint = require('stylelint');
const stylelintConfigPrettier = require('./index');

function tryRequire(mod) {
	try {
		return require(mod);
	} catch (error) {
		return null;
	}
}

const getConfigForFile = tryRequire('stylelint/lib/getConfigForFile');

const { hasOwnProperty } = Object.prototype;

async function getConfig(linter, resolvedPath) {
	if (linter.getConfigForFile) {
		return await linter.getConfigForFile(resolvedPath);
	}

	if (getConfigForFile) {
		return await getConfigForFile(linter, resolvedPath);
	}

	throw new Error(`Could not get config for file: ${resolvedPath}`);
}

async function check(path) {
	const resolvedPath = resolve(process.cwd(), path || '');
	const linter = stylelint.createLinter();
	const config = await getConfig(linter, resolvedPath);

	const prettierRules = stylelintConfigPrettier.rules;
	const configRules = config.config.rules;
	const conflictingRules = [];

	function isEmpty(value) {
		return value === null || (Array.isArray(value) && value.length === 0);
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
}

exports.check = check;
