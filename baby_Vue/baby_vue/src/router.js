import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Test from "./components/Test.vue"
import List from "./components/ListContainer.vue"
import Home from "./components/tabbar/Home"
import NewList from "./components/news/NewList"
import NewsInfo from "./components/news/NewsInfo"
import GoodsList from "./components/good/GoodsList"
import GoodsInfo from "./components/good/GoodsInfo.vue"
import Login from "./components/login/Login.vue"
import Cart from "./components/tabbar/Cart.vue"
import Search from "./components/tabbar/Search.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:"/home"},
    {path:'/test',component:Test},
    {path:'/list',component:List},
    {path:'/home',component:Home},
    {path:'/cart',component:Cart},
    {path:"/newslist",component:NewList},
    {path:"/newsinfo",component:NewsInfo},
    {path:"/goodslist",component:GoodsList},
    {path:"/goodsinfo/:id",component:GoodsInfo},
    {path:"/login",component:Login},
    {path:"/search",component:Search}
  ]
});
//http://127.0.0.1:3001/#/test