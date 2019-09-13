import Vue from 'vue'
import Router from 'vue-router'
//配置路由懒加载时,无需import
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉路径中的/#/
  routes: [
    { //路由重定向
      path: '/',
      redirect(){
        return '/HelloWorld'
      }
    },
    { //首页面
      path: '/',
      name: 'HelloWorld',
      // component: HelloWorld
      // 配置路由懒加载的写法
      component:reslove => (require(["@/components/HelloWorld"],reslove))
    }
  ]
})
