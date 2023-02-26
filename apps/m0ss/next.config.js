const path = require("path");

module.exports = {
    reactStrictMode: true,
    transpilePackages: ["@m0ss/core", "react-md-renderer"],
    productionBrowserSourceMaps: false,
    images: {
        domains: ["m0ss.dev"],
        formats: ["image/avif", "image/webp"],
    },
    output: "standalone",
    experimental: {
        outputFileTracingRoot: path.join(__dirname, "../../"),
    },
};
