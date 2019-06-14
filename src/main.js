import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'
import Vuetify from 'vuetify'
import './plugins/vuetify'
import BuyModalComponent from './components/Shared/BuyModal'
import * as fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/messaging'
import store from './store'

Vue.use(Router)
Vue.use(Vuetify)
Vue.component('app-buy-modal', BuyModalComponent)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyCQUZlacApLGG6AzWhUSzrtdmepb4NPp_Q",
      authDomain: "comments-62b2d.firebaseapp.com",
      databaseURL: "https://comments-62b2d.firebaseio.com",
      projectId: "comments-62b2d",
      storageBucket: "comments-62b2d.appspot.com",
      messagingSenderId: "1073474008859"
    })
    fb.auth().onAuthStateChanged(user => {
      if(user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
}).$mount('#app')