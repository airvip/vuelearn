<template>
  <div id="app">
    <button type="button" @click="increment">增加</button>
    <button type="button" @click="decrement">减少</button>
    <button type="button" @click="clickOdd">偶数才能点击+</button>
    <button type="button" @click="clickAsync">点击异步</button>

    <div>
      现在的数字：{{count}}
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  computed:mapGetters([
      'count'
    ]),
    /*computed:{
      count(){
        //console.log(this.$store.state.count);
        return this.$store.state.count;
      }
    },*/
  methods:mapActions([
      'increment',
      'decrement',
      'clickOdd',
      'clickAsync'
    ])
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
