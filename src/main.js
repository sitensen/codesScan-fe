import Vue from 'vue'

import 'normalize.css/normalize.css'// CSS重置的现代替代方案

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import 'ant-design-vue/dist/antd.min.css';  // or 'ant-design-vue/dist/antd.less'

import Antd, { version } from 'ant-design-vue'


import '@/styles/index.scss' // 全局样式 css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon 图标
import '@/permission' // permission 控制

Vue.use(ElementUI, { locale })
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
