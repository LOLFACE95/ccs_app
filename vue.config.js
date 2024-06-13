const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
  ? '/ccs_app/' // Zastąp 'nazwa-repozytorium' nazwą twojego repozytorium
  : '/'
  
})
