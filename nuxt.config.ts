// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'node:path';
require("dotenv").config({path:process.env.ENV_PATH})

module.exports = {
  env:process.env,
  devtools: { enabled: true },
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "~": path.resolve(__dirname, ""),
      assets: path.resolve(__dirname, "assets"),
    },
  },
  head: {
    title: 'nuxt_base_spa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'},
    ],
    script:[
      {
      src:'https://kit.fontawesome.com/e73c4d3d72.js',
      crossorigin:"anonymous"
      }
    ]
  },
  css:[],
  plugins:[],
  component:[],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // Sass loader 모듈 추가
    '@nuxtjs/style-resources'
  ],
  modules: [
  ],
  styleResources:{
    scss:[],
    css:[],
  }
}