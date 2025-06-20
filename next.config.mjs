/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  env: {
    MICROCMS_SERVICE_DOMAIN: process.env.SERVICE_DOMAIN,
    MICROCMS_API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;