module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "plugins": ["lodash"],
    "extends": ["airbnb-base", "plugin:lodash/recommended", "prettier"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
    }
};