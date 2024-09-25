/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
  },
};

export default nextConfig;