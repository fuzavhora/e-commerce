// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "unsplash.com",
//       },
//     ],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rukminim2.flixcart.com",
      },
      {
        protocol : "https",
        hostname: "fakestoreapi.com"
      }
    ],
  },
};

export default nextConfig;

