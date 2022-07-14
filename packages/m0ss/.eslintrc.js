module.exports = {
    extends: ["next", "next/core-web-vitals"],
    rules: {
        "react/display-name": 0,
        "simple-import-sort/exports": 1,
        "simple-import-sort/imports": 1,
    },
    plugins: [
        "simple-import-sort",
    ],
};
