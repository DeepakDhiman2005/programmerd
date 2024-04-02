/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.flixcart.com',
              port: '',
              pathname: '/*/**',
            }
          ],
    },
    env: {
      MONGO_URI: "mongodb+srv://ProgrammerD:deepak8339@cluster0.tnmxvha.mongodb.net/programmerdData?retryWrites=true&w=majority",
      API_KEY: "https://programmerd.vercel.app",
      ACCESS_CONTROL_ALLOW_CREDENTIALS: "true",
      ACCESS_CONTROL_ALLOW_ORIGIN: "*",
      ACCESS_CONTROL_ALLOW_METHODS: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      ACCESS_CONTROL_ALLOW_HEADERS: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    },
    async headers() {
      return [
          {
              // matching all API routes
              source: "/api/:path*",
              headers: [
                  // { key: "Access-Control-Allow-Credentials", value: "true" },
                  { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                  { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                  // { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                  { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
              ]
          }
      ]
  }
}

module.exports = nextConfig
