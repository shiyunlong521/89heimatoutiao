import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './styles/index.less'// 引入初始化样式
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
