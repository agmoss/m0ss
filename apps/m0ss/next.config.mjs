import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@m0ss/core", "react-md-renderer"],
    productionBrowserSourceMaps: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "m0ss.dev",
            },
        ],
        formats: ["image/avif", "image/webp"],
    },
    output: "standalone",
    outputFileTracingRoot: path.join(__dirname, "../../"),
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
