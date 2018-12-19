import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import list from '@/pages/list'
import DetailsPage from '@/pages/DetailsPage'
import person from '@/pages/person'
import user from '@/pages/user'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', redirect: '/Index' },
    {path: '/Index',name: 'Index',component: Index},
    {path: '/list/:id', name:'list',component: list},
    {path: '/DetailsPage/:id', name:'DetailsPage',component: DetailsPage},
    {path: '/person/:id', name:'person',component: person},
    {path: '/user', name:'user',component: user},
   
  ]
})
