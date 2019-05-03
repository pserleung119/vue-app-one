// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import firebase from 'firebase'

library.add(faHome)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: process.env.VUE_APP_FIREBASEKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_DBURL,
  projectId: 'personal-app-5ca3d',
  storageBucket: 'personal-app-5ca3d.appspot.com',
  messagingSenderId: process.env.VUE_APP_SENDERID
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount("#app");
