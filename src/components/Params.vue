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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
