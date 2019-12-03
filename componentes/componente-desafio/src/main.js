import Vue from 'vue'
import 'plugins/vuetify'
import App from './App.vue'

import Nav from '@/components/Nav.vue'
import ToolBar from '@/components/ToolBar.vue'
import Content from '@/components/Content.vue'
import Footer from '@/components/Footer.vue'

Vue.config.productionTip = false

Vue.component('mynav', Nav);
Vue.component('tool-bar', ToolBar);
Vue.component('mycontent', Content);
Vue.component('myfooter', Footer);

new Vue({
  render: h => h(App)
}).$mount('#app')
