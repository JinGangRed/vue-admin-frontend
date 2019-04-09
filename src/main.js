import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import "@/styles/index.less";
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'

Vue.use(Element, {
  size: 'small'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')