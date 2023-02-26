module.exports = {
    extends: [
        "next",
        "turbo",
        "prettier",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    rules: {
        "@next/next/no-html-link-for-pages": 0,
        "react/jsx-key": 0,
        "simple-import-sort/exports": 1,
        "simple-import-sort/imports": 1,
        "no-unused-vars": 0,
        "unused-imports/no-unused-imports": 2,
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-restricted-imports": [
            2,
            {
                paths: [
                    {
                        name: "@material-ui/core",
                        importNames: ["makeStyles", "useTheme"],
                        message:
                            "Import 'makeStyles', and 'useTheme' from '@material-ui/core/styles'.",
                    },
                ],
            },
        ],
    },
    plugins: ["simple-import-sort", "unused-imports", "@typescript-eslint"],
    parserOptions: {
        babelOptions: {
            presets: [require.resolve("next/babel")],
        },
    },
};
