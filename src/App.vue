<template>
  <div id="app">
    <Navbar :activeLogin="activeLogin"/>
    <Login :closeLogin="closeLogin" v-show="active_login" />
    <router-view :closeLogin="closeLogin"/>
    <Footer />
  </div>
</template>


<script>
import './assets/css/app.scss' 
import Navbar from './components/navbar/index.vue'
import Footer from './components/footer/index.vue'
import Login from './components/tw_login/index.vue'

export default {
  name: 'Home',
  data(){
    return{
      active_login: false,
    }
  },
  components: {
    Navbar,
    Footer,
    Login
  },
  updated(){
    this.goTop()
  },
  methods:{
    activeLogin(){
      console.log(this.active_login)
      this.active_login = true
    },
    closeLogin(){
      this.active_login = false
    },
    goTop(){
        document.documentElement.scrollTop = 0;
    }
  }

}
</script>
