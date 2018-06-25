<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">Hello页面</router-link> | 
      <router-link to="/hi">Hi页面</router-link> | 
      <router-link :to="{name: 'Hi>Hi1', params: {username: 'panpan', id: 888}}">Hi1页面</router-link> | 
      <router-link to="/hi/hi2">Hi2页面</router-link> | 
      <router-link to="/params/23/wolegejun">params页面</router-link>
    </div>
    <p>{{ $route.name }}</p>
    <router-view/>
    <router-view name="left"/>
    <router-view name="right"/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
