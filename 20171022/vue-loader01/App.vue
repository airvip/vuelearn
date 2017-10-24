<template>
    <div id="app">
        <h3>vue-loader+ vue-router</h3>
        <div>
            <a v-link="{path:'/home'}">Home</a>
            <a v-link="{path:'/news'}">News</a>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Menu from './components/Menu.vue'

    export default{
        data(){
            return {
                msg:'^_^'
            };
        },
        methods:{
            change:function(){
                this.msg = 'change data'
            }
        },
        components:{
            'my-menu':Menu
        }
    }
</script>

<style>
	body{
	    backgroud:#CCC;
	}
</style>