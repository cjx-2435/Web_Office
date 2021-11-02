import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import WrappedHome from '../views/WrappedHome.vue'
import NotFound from '../views/404.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'WrappedHome',
    component: WrappedHome,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'news_center',
        name: 'NewsCenter',
        component: () => import('@/views/NewsCenter.vue'),
      },
      {
        path: 'service_support',
        name: 'ServiceSupport',
        component: () => import('@/views/ServiceSupport.vue'),
      },
      {
        path: 'talent_recruitment',
        name: 'TalentRecruitment',
        component: () => import('@/views/TalentRecruitment.vue'),
      },
      {
        path: 'about_us',
        name: 'AboutUs',
        component: () => import('@/views/AboutUs.vue'),
      }
    ],

  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,  // 引入 组件
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
