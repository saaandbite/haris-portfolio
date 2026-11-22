import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the portfolio is a fully static page, so it can be
  // deployed to any static host or to Vercel as a plain static output.
  output: "export",
  images: {
    // next/image optimisation needs a server; with `output: export` the
    // contribution graph is a remote SVG, so disable optimisation.
    unoptimized: true,
  },
};

export default nextConfig;
