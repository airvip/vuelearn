<template>
    <h1>welcome</h1>
    <p @click="change" v-text='msg'></p>
</template>

<script>
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
        }
    }
</script>

<style>
	body{
	    backgroud:#CCC;
	}
</style>