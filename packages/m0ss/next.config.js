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
        webpack5: true,
        productionBrowserSourceMaps: false,
        images: {
            domains: ['m0ss.dev', 'example2.com'],
          },
    })
);
