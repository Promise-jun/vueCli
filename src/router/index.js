import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Hi,
        right: Hi2
      }
    },
    {
      path: '/hi',
      component: Hi,
      children: [
        { path: '/', name: 'Hi', component: Hi },
        { path: 'hi1', name: 'Hi>Hi1', component: Hi1 },
        { path: 'hi2', name: 'Hi>Hi2', component: Hi2 }
      ]
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params
    },
    // redirect 重定向
    {
      path: '/gohome',
      redirect: '/'
    },
    {
      path: '/goparams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    // alias 别名
    {
      path: '/hi2',
      component: Hi2,
      alias: '/wolegejun'
    },
    // 404 not found
    {
      path: '*',
      component: Error
    }
  ]
})
