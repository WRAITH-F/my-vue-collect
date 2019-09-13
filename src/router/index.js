import Vue from 'vue'
import Router from 'vue-router'
//配置路由懒加载时,无需import
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  //去掉链接中的/#/
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect(){
        return '/HelloWorld'
      }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      // component: HelloWorld
      // 配置路由懒加载的写法
      component:reslove => (require(["@/components/HelloWorld"],reslove))
    }
  ]
})
