/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) {
    // Fix module resolution for @swc/helpers deep imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@swc/helpers/_/_class_private_field_init': path.resolve(__dirname, 'node_modules/@swc/helpers/esm/_class_private_field_init.js'),
    };

    // Also try to resolve the pattern with fallbacks
    config.resolve.fallback = {
      ...config.resolve.fallback,
    };

    return config;
  },
}

module.exports = nextConfig
