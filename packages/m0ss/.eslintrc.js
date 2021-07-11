module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "standard",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "jsx-a11y",
        "prettier",
        "react-hooks",
    ],
    settings: {
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
        react: {
            version: "detect",
        },
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "react/prop-types": "off",
        "react/display-name": "off",
        "prettier/prettier":1,
        "react/jsx-filename-extension": "off",
        "react/jsx-props-no-spreading": "off",
        "import/prefer-default-export": "off",
        "react-hooks/rules-of-hooks": "error",
        "react/no-unescaped-entities": "off",
        "no-plusplus": "off",
        "no-shadow": "off",
        "no-use-before-define": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/camelcase": "off",
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
    },
};
