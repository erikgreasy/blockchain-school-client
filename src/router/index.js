import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'
import store from '@/store'

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
        path: '/courses/garant',
        name: 'Garantove predmety',
        component: () => import('@/views/garant/Courses.vue'),
      },
      {
        path: '/my-courses',
        name: 'Moje predmety',
        component: () => import('@/views/teacher_courses/Index.vue'),
      },
      {
        path: '/courses/:id/edit',
        name: 'Upraviť predmet',
        component: () => import('@/views/teacher_courses/Edit.vue'),
      },
      {
        path: '/courses',
        name: 'Prehľad predmetov',
        component: () => import('@/views/courses/Index.vue'),
      },
      {
        path: '/courses/:id',
        name: 'Detail predmetu',
        component: () => import('@/views/courses/Show.vue'),
      },
      {
        path: '/courses/:id/students',
        name: 'Študenti na predmete',
        component: () => import('@/views/courses/ShowStudents.vue'),
      },
      {
        path: '/courses/create',
        name: 'Nový predmet',
        component: () => import('@/views/courses/Create.vue'),
      },
      {
        path: '/students',
        name: 'Zoznam študentov',
        component: () => import('@/views/students/Index.vue'),
      },
      {
        path: '/students/:student_id/courses/:course_id/points',
        name: 'Hodnotenie študenta',
        component: () => import('@/views/students/Points.vue'),
      },
      {
        path: '/students/:id',
        name: 'Detail študenta',
        component: () => import('@/views/students/Show.vue'),
      },
      {
        path: '/students/create',
        name: 'Nový študent',
        component: () => import('@/views/students/Create.vue'),
      },
      {
        path: '/users',
        name: 'Používatelia',
        component: () => import('@/views/users/Index.vue'),
      },
      {
        path: '/users/:id',
        name: 'Detail',
        component: () => import('@/views/users/Show.vue'),
      },
      {
        path: '/users/create',
        name: 'Vytvoriť nového',
        component: () => import('@/views/users/Create.vue'),
      },
      {
        path: '/results',
        name: 'Hodnotenie',
        component: () => import('@/views/results/Index.vue'),
      },
      {
        path: '/results/show',
        name: 'Results.show',
        component: () => import('@/views/results/Show.vue'),
      },
      {
        path: '/e-index',
        name: 'E index',
        component: () => import('@/views/EIndex.vue'),
      },
      {
        path: '/subject-registration',
        name: 'Registration.index',
        component: () => import('@/views/registration/Index.vue'),
      },
      {
        path: '/my-profile',
        name: 'Môj profil',
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

router.beforeEach(async (to) => {
  if (
    // make sure the user is authenticated
    store.state.loggedUser == null &&
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return {name: 'Login'}
  }

  if (
    // make sure the user is authenticated
    store.state.loggedUser !== null &&
    to.name === 'Login'
  ) {
    // redirect the user to the login page
    return {name: 'Dashboard'}
  }
})

export default router
