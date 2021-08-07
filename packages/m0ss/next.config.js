const withTM = require("next-transpile-modules")([
    "lodash-es",
    "react-syntax-highlighter",
]);

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
    withTM({
        reactStrictMode: true,
        images: {
            domains: [
                "m0ss.blob.core.windows.net",
            ],
        },
    })
);
