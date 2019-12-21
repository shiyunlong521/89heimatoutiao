import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.less'// 引入初始化样式
import ElementUI from 'element-ui'
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
