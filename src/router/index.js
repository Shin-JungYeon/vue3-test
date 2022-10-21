import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import NcpComputingRouter from "@/router/ncp-router/NcpComputingRouter";
import NcpNetworkRouter from "@/router/ncp-router/NcpNetworkRouter";

import AwsComputingRouter from "@/router/aws-router/AwsComputingRouter";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cloud-service',
    name: 'Cloud Service',
    children: [
      {
        path: '/ncp',
        name: 'Naver Cloud Platform',
        children: [
          NcpComputingRouter,
          NcpNetworkRouter,
        ]
      },
      {
        path: '/aws-service',
        name: 'Amazon Web Service',
        children: [
          AwsComputingRouter,
        ]
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
