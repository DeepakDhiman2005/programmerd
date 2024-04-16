/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  trailingSlash: true,
  experimental: {
    serverComponentsExternalPackages: ["mongoose"]
  },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.flixcart.com',
              port: '',
              pathname: '/*/**',
            },
            {
              protocol: "https",
              hostname: "**.pixabay.com",
              port: '',
              pathname: '/*/**'
            },
            {
              protocol: "https",
              hostname: "**.geeksforgeeks.org",
              port: "",
              pathname: "/*/**"
            },
            {
              protocol: "https",
              hostname: "**.com",
              port: "",
              pathname: "/*/**"
            },
          ],
    },
    env: {
      MONGO_URI: "mongodb+srv://ProgrammerD:deepak8339@cluster0.tnmxvha.mongodb.net/programmerdData?retryWrites=true&w=majority",
      API_KEY: "https://programmerd.vercel.app",
      ACCESS_CONTROL_ALLOW_CREDENTIALS: "true",
      ACCESS_CONTROL_ALLOW_ORIGIN: "*",
      ACCESS_CONTROL_ALLOW_METHODS: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      ACCESS_CONTROL_ALLOW_HEADERS: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    }
}

module.exports = nextConfig
