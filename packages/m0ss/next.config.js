const withTM = require("next-transpile-modules")([
    "lodash-es",
    "react-syntax-highlighter"
]);

module.exports = withTM({
    reactStrictMode: true,
});
