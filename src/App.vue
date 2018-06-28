<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="goGo">前进</button>
      <button @click="goHome">回到首页</button>
    </div>
    <div>
      <router-link to="/">Hello页面</router-link> | 
      <router-link to="/hi">Hi页面</router-link> | 
      <router-link :to="{name: 'Hi>Hi1', params: {username: 'panpan', id: 888}}">Hi1页面</router-link> | 
      <router-link to="/hi/hi2">Hi2页面</router-link> | 
      <router-link to="/params/23/wolegejun">params页面</router-link> | 
      <router-link to="/gohome">gohome</router-link> | 
      <router-link to="/params/6/james">goparams</router-link> | 
      <router-link to="/hi2">Hi2-alias</router-link> | 
      <router-link to="/wolegejun">wolegejun</router-link> |
      <router-link to="/404">Error</router-link> |
    </div>
    <p>{{ $route.name }}</p>
    <transition name="fade" mode="out-in">
      <router-view/> 
    </transition> 
    <router-view name="left"/>
    <router-view name="right"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    goGo() {
      this.$router.go(1);
    },
    goHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}
</style>
