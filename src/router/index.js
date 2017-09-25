import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Logger from '@/components/logger'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    		path: '/logger',
    		name: 'logger',
    		component: Logger
    }
  ]
})
