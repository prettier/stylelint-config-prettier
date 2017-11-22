'use strict';

module.exports = {
    rules: {
        'indentation': null,

        'function-comma-newline-after': null,
        'function-comma-newline-before': null,
        'function-comma-space-after': null,
        'function-comma-space-before': null,
        'function-max-empty-lines': null,
        'function-parentheses-newline-inside': null,
        'function-parentheses-space-inside': null,

        // prettier doesnt care about this space lets keep it here
        // 'function-whitespace-after': 'always'|'never',

        'value-list-comma-newline-after': null,
        'value-list-comma-newline-before': null,
        'value-list-comma-space-after': null,
        'value-list-comma-space-before': null,
        'value-list-max-empty-lines': null,

        // this is fixable but lets keep it
        // 'custom-property-empty-line-before': 'never'

        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-colon-newline-after': null,
        'declaration-colon-space-after': null,
        'declaration-colon-space-before': null,
        'declaration-block-semicolon-newline-after': null,
        'declaration-block-semicolon-newline-before': null,
        'declaration-block-semicolon-space-after': null,
        'declaration-block-semicolon-space-before': null,
        "declaration-block-no-redundant-longhand-properties": null,
        "declaration-block-no-shorthand-property-overrides": null,

        // prettier always adds the trailing semicolon
        'declaration-block-trailing-semicolon': null,

        'block-closing-brace-empty-line-before': null,
        'block-closing-brace-newline-after': null,
        'block-closing-brace-newline-before': null,
        'block-closing-brace-space-after': null,
        'block-closing-brace-space-before': null,
        'block-opening-brace-newline-after': null,
        'block-opening-brace-newline-before': null,
        'block-opening-brace-space-after': null,
        'block-opening-brace-space-before': null,
        'selector-attribute-brackets-space-inside': 'never',

        // prettier doesnt care about this space
        // 'selector-attribute-operator-space-after': 'never'
        // 'selector-attribute-operator-space-before': 'never'

        'selector-attribute-quotes': 'always',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-descendant-combinator-no-non-space': true,
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-list-comma-newline-after': null,
        'selector-list-comma-newline-before': null,
        'selector-list-comma-space-after': null,
        'selector-list-comma-space-before': null,
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-parentheses-space-inside': 'never',

        // prettier doesnt care about this space
        // 'media-feature-range-operator-space-after': 'always',
        // 'media-feature-range-operator-space-before': 'always'

        'media-query-list-comma-newline-after': null,
        'media-query-list-comma-newline-before': null,
        'media-query-list-comma-space-after': 'always',
        'media-query-list-comma-space-before': 'never',
        'at-rule-name-newline-after': null,
        'at-rule-name-space-after': 'always',
        'at-rule-semicolon-newline-after': null,
        'at-rule-semicolon-space-before': 'never',

        // prettier doesnt care about this whitespace
        // 'comment-whitespace-inside': 'always'

        'max-empty-lines': null,
        'no-eol-whitespace': null,
        "number-leading-zero": null,
        "rule-empty-line-before": null,
        
        // misc other rules
        "color-hex-case": null
    }
};

