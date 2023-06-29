/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
   experimental: {
    nextScriptWorkers: true,
  },
  
}

module.exports = nextConfig
