<template>
  <div id="app">
    <div id="cicle-button">
      <el-button type="success" class="getyiyan" round @click="get">获取一言</el-button>
    </div>
    <div id="myMsg">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-button type="info" @click="get" class="getyiyan" size="mini">获取一言</el-button>
        </div>
        <div class="yiyantext">
         『  {{myMsg}}  』
        </div>
      </el-card>
    </div>
    <!--我的组件按钮组-->
    <div class="hide">
      <Mybutton @click.native="show"></Mybutton>
    </div>
    

  </div>
</template>

<script>
import Mybutton from '../components/Button.vue'
import axios from 'axios'

export default {
  components:{
   Mybutton
  },
  name: 'app',
  data () {
    return {
      myMsg: ''
    }
  },
  mounted(){
    this.get();
  },
  methods:{
    show(){
      alert(1);
    },
    get(){
      axios.get('https://sslapi.hitokoto.cn/?c=e&encode=text')
        .then(function (response) {
          console.log(response);
          this.myMsg = response.data
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss">
.hide{
  display:none;
}
.getyiyan{
  margin: 0px auto;
  display:block;
}
#myMsg{
  margin:10px auto;
}
.yiyantext{
  text-align:center;
}
</style>
