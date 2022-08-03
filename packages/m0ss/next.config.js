const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
    reactStrictMode: true,
    productionBrowserSourceMaps: false,
    images: {
        domains: ["m0ss.dev"],
        formats: ["image/avif", "image/webp"],
    },
    output: "standalone"
});
