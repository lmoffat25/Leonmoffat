import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './assets/styles/globalStyles.scss'


import Landing from './templates/Landing'
import Home from './templates/Home'
import WhataWorld from './templates/WhataWorld'
import Mezclamayor from './templates/Mezclamayor'
import Baf from './templates/Baf'
import ToquesMed from './templates/ToquesMed'
import VinsJura from './templates/JuraWines'
import Audio from './templates/Audio'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Landing }, //Default,
  { path: '/WhataWorld', component: WhataWorld },
  { path: '/Home', component: Home },
  {path: '/Mezclamayor', component: Mezclamayor},
  {path: '/Baf', component: Baf},
  {path: '/ToquesMed', component: ToquesMed},
  {path: '/VinsJura', component: VinsJura},
  {path: '/HistoireAudio', component: Audio}
];


const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  watch:{
    $route (to, from){
      console.log('this works');
    }
}
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
