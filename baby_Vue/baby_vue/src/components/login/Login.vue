<template>
    <div class="app-login">
        <div class="mui-card">
            <div class="mui-card-header"><h3>用户登录</h3></div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!--<form action="#">-->
                        用户名：<input type="text" placeholder="请输入用户名" value="" v-model="uname"/>
                        密码：<input type="password" placeholder="请输入密码" value="" v-model="upwd"/>
                        <mt-button size="large" @click="handlerLogin">登录</mt-button>
                    <!--</form>-->
                </div>
            </div>
            <div class="mui-card-footer"></div>
        </div>
    </div>
</template>
<script>
    import {Toast} from "mint-ui";
    export default {
        data(){
            return  {
                uname:"",
                upwd:""
            }
        },
        methods:{
            handlerLogin(){
                //console.log(123);
                //1 获取参数
                var u=this.uname;
                var p=this.upwd;
                var url="http://127.0.0.1:3000/users/login?uname="+u+"&upwd="+p;
                this.axios.get(url).then(result=>{
                    //console.log(result);
                    if(result.data.code==1){
                        this.$router.push("/home");
                    }else{
                        Toast("用户名或密码有误");
                    }
                });
            }
        },
        created(){
            
        }
    }
</script>
<style>

</style>