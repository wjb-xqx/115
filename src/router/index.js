import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import list from '@/pages/list'
import DetailsPage from '@/pages/DetailsPage'
import person from '@/pages/person'
import user from '@/pages/user'
import myInfo from '@/pages/myInfo'
import changePassword from '@/pages/changePassword'
import tg from '@/pages/tg'
import zxtg from '@/pages/zxtg'
import ComZ from '@/common/ComZ'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', redirect: '/Index' },
    {path: '/Index',name: 'Index',component: Index},
    {path: '/list/:id', name:'list',component: list},
    {path: '/DetailsPage/:id', name:'DetailsPage',component: DetailsPage},
    {path: '/person/:id', name:'person',component: person},
    {path: '/user', name:'user',component: user,
      children:[
        {path:'/user',name:'myInfo',component: myInfo},
       ]
    },
    {path: '/changePassword', name:'user',component: user,
       children:[
        {path:'/changePassword',name:'changePassword',component: changePassword},
        {path:'/myInfo',name:'myInfo',component: myInfo},
        ]
    },
    {path: '/myInfo', name:'user',component: user,
       children:[
        {path:'/myInfo',name:'myInfo',component: myInfo},
        ]
    },
    {path: '/tg', name:'user',component: user,
       children:[
        {path:'/tg',name:'tg',component: tg},
        ]
    },
    {path: '/zxtg', name:'user',component: user,
       children:[
        {path:'/zxtg',name:'zxtg',component: zxtg},
        ]
    },
    {path: '/person', name:'person',component: person},
    {path: '/ComZ', name:'ComZ',component: ComZ},
  ]
})
