const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  devServer: { //① api 요청이 있을때 어디에서 처리할지를 설정
    proxy: { 
      '/api': { 
        target: 'http://localhost:3002/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  outputDir: '../backend/public',  //② 배포 파일의 위치를 지정
})
