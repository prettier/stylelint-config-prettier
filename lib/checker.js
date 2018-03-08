"use strict";
const stylelintConfigPrettier = require("./index");
const stylelint = require("stylelint");

exports.check = function () {
    const stylelintConfig = stylelint.createLinter().getConfigForFile();
    const conflictRules = [];
    stylelintConfig.then((config) => {
            Object.keys(stylelintConfigPrettier.rules).forEach(function (conflictRuleName) {
                if (config.config.rules.hasOwnProperty(conflictRuleName)) {
                    if (config.config.rules[conflictRuleName] !== null) {
                        if (config.config.rules[conflictRuleName][0] !== stylelintConfigPrettier.rules[conflictRuleName]) {
                            conflictRules.push(conflictRuleName);
                        }
                    }
                }
            });
            if (conflictRules.length !== 0) {
                throw new Error("Conflict rule(s) detected in your stylelint configuration :\n" + conflictRules.join("\n"));
            }
            console.log("No conflict rule detected in your stylelint configuration.");
        }
    ).catch((error) => {
        console.error(error);
    });

};
