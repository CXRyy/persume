import Vue from 'vue'
import App from './App.vue'
import router from './router'

import'mint-ui/lib/style.css'

Vue.config.productionTip = false

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

import Vuex from 'vuex'
Vue.use(Vuex)
var store=new Vuex.Store({
  state:{
    cartCount:0
  },
  mutations:{
    increment(state,count){
      state.cartCount+=count;
    },
    substract(state){
      state.cartCount--;
    },
    clear(state){
      state.cartCount=0;
    }
  },
  getters:{
    optCartCount(state){
      return state.cartCount;
    }
  }
})



//1 引入组件
import {Header,Swipe,SwipeItem,Button} from "mint-ui"
//2 注册Header组件
Vue.component(Header.name,Header);
//3  注册Swipe SwipeItem组件
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);


//3.1引入axios组件库
import axios from 'axios'
//3.2 跨域保存session值
axios.defaults.withCredentials=true;
//3.3 注册组件
Vue.prototype.axios=axios;
//4 引入vue-resource库
import VueResource from "vue-resource";
//5 注册
Vue.use(VueResource)
//6.1 : 设置请求的根路径 
Vue.http.options.root = "http://127.0.0.1:3000/";
//6.2 :全局设置post 时候表单的数据组织格式为 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;
//6.3 :跨域访问保存session值的选项
Vue.http.options.withCredentials=true;
//7 创建新闻时间   过滤器
Vue.filter("datetimeFilter",function(val){//val 原先的日期对象
  //7.1 创建日期对象
  var date=new Date(val);
  //7.2 获取年月日时分秒
  var year=date.getFullYear();
  var month=date.getMonth()+1;
  var day=date.getDate();
  var hour=date.getHours();
  var minute=date.getMinutes();
  var second=date.getSeconds();
  //7.3 日期格式判断  07   08  09  10 
    // if(month<10){
    //   month="0"+month;
    // }    
    // if(day<10){
    //   day="0"+day;
    // }
  month<10&&(month="0"+month);
  day<10&&(day="0"+day);
  //7.4 拼接字符串返回
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
});

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
