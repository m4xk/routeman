import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import VueResource from 'vue-resource';

Vue.use(Element,{locale});
Vue.use(VueResource);



Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');
