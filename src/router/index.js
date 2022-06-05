import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/Home.vue')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/VideoManage/VideoManage.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/UserManage/UserManage.vue')
      },
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/Other/PageOne.vue')
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/Other/PageTwo.vue')
      },
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
