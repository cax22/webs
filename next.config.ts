/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static site generation
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
