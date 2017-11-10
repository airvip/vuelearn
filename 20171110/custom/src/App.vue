<template>
  <div id="app">
    {{msg}}
    <Loading></Loading>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<style lang="scss">

</style>
