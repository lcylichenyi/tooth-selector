import Vue from 'vue'
import App from './App.vue'
import toothSelector from './lib/index.js'

Vue.use(toothSelector)
new Vue({
  el: '#app',
  render: h => h(App)
})
