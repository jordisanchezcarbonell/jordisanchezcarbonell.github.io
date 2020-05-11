import Vue from 'vue'
import App from './App'
import AnimateWhenVisible from './components/AnimateWhenVisible'

import addPolyfills from './polyfills'
import './directives/validity'
import './styles/app.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.component('AnimateWhenVisible', AnimateWhenVisible)
Vue.config.productionTip = false;
import axios from 'axios'
import VueAxios from 'vue-axios'


addPolyfills().then(() => {
  new Vue({
    el: '#app',
    render: h => h(App),
  });
})
