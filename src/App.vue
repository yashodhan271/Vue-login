<template>
  <div id="app">
    <nav><NavView/>
    <router-view/>
    </nav>
    
    
    
    
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NavView from './components/Yash.vue'
import {onBeforeNount} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import firebase from "firebase/compat/app";


//import './Design/design.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'App',
  components: {
    
    NavView,
  },

  setup (){
const router = useRouter();
const route = useRoute();


onBeforeNount(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
      router.replace('/login');
    } else if (route.path =="/login" || route.path=="/register"){
      router.replace('/');
    }
  });
});
   
    
    
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
