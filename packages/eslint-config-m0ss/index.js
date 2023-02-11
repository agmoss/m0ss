module.exports = {
    extends: ["next", "turbo", "prettier"],
    rules: {
        "@next/next/no-html-link-for-pages": 0,
        "react/jsx-key": 0,
        "simple-import-sort/exports": 1,
        "simple-import-sort/imports": 1,
    },
    plugins: ["simple-import-sort"],
    parserOptions: {
        babelOptions: {
            presets: [require.resolve("next/babel")],
        },
    },
};
