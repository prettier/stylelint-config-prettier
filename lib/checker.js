"use strict";
const readFileSync = require('fs').readFileSync;
const stripJsonComments = require('strip-json-comments');
const stylelintConfigPrettier = require("./index");

exports.check = function (configFilePath) {
	if (typeof configFilePath !== "string") {
		throw new Error("Usage: stylelint-config-prettier-check <pathToConfigFile>");
	}

	const rawData = readFileSync(configFilePath, 'utf8', (err) => {
		if (err) throw new Error(err);
	});

	const stylelintConfig = JSON.parse(stripJsonComments(rawData));

	const conflictRules = [];
	Object.keys(stylelintConfigPrettier.rules).forEach(function (conflictRuleName) {
		if (stylelintConfig.rules.hasOwnProperty(conflictRuleName)) {
			conflictRules.push(conflictRuleName);
		}
	});

	if (conflictRules.length !== 0) {
		throw new Error("Conflict rule(s) detected in " + configFilePath + ":\n" + conflictRules.join("\n"));
	}
	console.log("No conflict rule detected in " + configFilePath);
};
