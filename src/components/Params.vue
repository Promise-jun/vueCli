<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>newsid: {{ $route.params.newsId }}</p>
    <p>newstitle: {{ $route.params.newsTitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'params page.'
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('准备进入params组件');
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('准备离开params组件');
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
