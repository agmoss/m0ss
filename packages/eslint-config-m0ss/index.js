module.exports = {
    extends: ["next", "turbo", "prettier"],
    rules: {
        "@next/next/no-html-link-for-pages": 0,
        "react/jsx-key": 0,
        "simple-import-sort/exports": 1,
        "simple-import-sort/imports": 1,
        "no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
    },
    plugins: ["simple-import-sort", "unused-imports"],
    parserOptions: {
        babelOptions: {
            presets: [require.resolve("next/babel")],
        },
    },
};
