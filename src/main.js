import Vue from 'vue'
import App from './App.vue'
//import store from './store.js'
//import { initializeApp } from 'firebase/app';
import firebase from "firebase/compat/app";
import router from './routes/index'
import "firebase/compat/storage";


Vue.config.productionTip = false


const firebaseConfig = {
    apiKey: "AIzaSyCEuPLW7HriDCpwY0ZzufTPkYVPkeQ4_Q4",
    authDomain: "vuetrading-30623.firebaseapp.com",
    projectId: "vuetrading-30623",
    storageBucket: "vuetrading-30623.appspot.com",
    messagingSenderId: "157954249906",
    appId: "1:157954249906:web:240fad3d1d29fe0ce525ab"
  };


firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
