import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
        meta: {
          userRoles: ['student']
        }
      },
      {
        path: '/courses',
        name: 'Courses.index',
        component: () => import('@/views/courses/Index.vue'),
      },
      {
        path: '/courses/:id',
        name: 'Courses.show',
        component: () => import('@/views/courses/Show.vue'),
      },
      {
        path: '/courses/create',
        name: 'Courses.create',
        component: () => import('@/views/courses/Create.vue'),
      },
      {
        path: '/students',
        name: 'Students.index',
        component: () => import('@/views/students/Index.vue'),
      },
      {
        path: '/students/:id',
        name: 'Students.show',
        component: () => import('@/views/students/Show.vue'),
      },
      {
        path: '/students/create',
        name: 'Students.create',
        component: () => import('@/views/students/Create.vue'),
      },
      {
        path: '/results',
        name: 'Results.index',
        component: () => import('@/views/results/Index.vue'),
      },
      {
        path: '/results/show',
        name: 'Results.show',
        component: () => import('@/views/results/Show.vue'),
      },
      {
        path: '/e-index',
        name: 'EIndex',
        component: () => import('@/views/EIndex.vue'),
      },
      {
        path: '/subject-registration',
        name: 'Registration.index',
        component: () => import('@/views/registration/Index.vue'),
      },
      {
        path: '/my-profile',
        name: 'My profile',
        component: () => import('@/views/MyProfile.vue'),
      },
      {
        path: '/change-password',
        name: 'Change password',
        component: () => import('@/views/ChangePassword.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pages/Login'),
  },
  {
    path: '/application',
    name: 'Application',
    component: () => import('@/views/Application.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
