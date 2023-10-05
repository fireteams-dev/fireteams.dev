'use strict';
const config = require("@fireteams.dev/xo-config")
module.exports = {
    extends: [config, 'plugin:svelte/recommended'],
    "extensions": [
        "svelte", 'json'
    ],
    "plugins": [
        "svelte"
    ],
    "overrides": [
        {
            "files": [
                "**/*.svelte"
            ],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    ]
}
