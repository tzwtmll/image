module.exports = {
  output: "export",
  basePath: "/image",
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["res.cloudinary.com"],
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
