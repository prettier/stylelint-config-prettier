"use strict";
const stylelintConfigPrettier = require("./index");
const stylelint = require("stylelint");

exports.check = function (configFilePath) {
    if ("string" !== typeof configFilePath) {
        throw new Error("Usage: stylelint-config-prettier-check <pathToConfigFile>");
    }
    const stylelintConfig = stylelint.createLinter().getConfigForFile(configFilePath);
    stylelintConfig.then((config) => {
        const conflictRules = [];
        Object.keys(stylelintConfigPrettier.rules).forEach(function (conflictRuleName) {
            if (config.config.rules.hasOwnProperty(conflictRuleName)) {
                if (config.config.rules[conflictRuleName] !== null) {
                    if(config.config.rules[conflictRuleName][0] !== stylelintConfigPrettier.rules[conflictRuleName]){
                        conflictRules.push(conflictRuleName);
                    }
                }
            }
        });
        if (conflictRules.length !== 0) {
            throw new Error("Conflict rule(s) detected in " + configFilePath + ":\n" + conflictRules.join("\n"));
        }
        console.log("No conflict rule detected in " + configFilePath);
    });

};
