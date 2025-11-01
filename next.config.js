/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use static HTML export mode so we can deploy to GitHub Pages
  output: 'export',
  // When serving from GitHub Pages under a repo (https://<user>.github.io/<repo>/)
  // Next's asset and page paths must be prefixed with the repo name.
  basePath: '/flysafe',
  assetPrefix: '/flysafe',
  // Export with trailing slashes so directories work nicely on static hosts
  trailingSlash: true,
}

module.exports = nextConfig
