/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;

// const withPlugins = require("next-compose-plugins");
// const optimizedImages = require("next-optimized-images");

// module.exports = withPlugins([
//   [
//     optimizedImages,
//     {
//       /* config for next-optimized-images */
//     },
//   ],

//   // your other plugins here
// ]);
