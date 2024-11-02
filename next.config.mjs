/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.postimg.cc", // The PostImage domain
				pathname: "/**", // Match all paths from this domain
			},
		],
	},
};

export default nextConfig;

/*
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["i.postimg.cc"], // Add the PostImage domain here
	},
};

export default nextConfig;
*/
