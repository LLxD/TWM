export default {
  server: {
    proxy: {
      "/api": {
        target: "https://api.chucknorris.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
}
