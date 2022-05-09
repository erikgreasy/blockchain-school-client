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
          userRoles: ['*']
        }
      },
      {
        path: '/my-courses',
        name: 'Moje predmety',
        component: () => import('@/views/teacher_courses/Index.vue'),
        meta: {
          userRoles: ['teacher']
        }
      },
      {
        path: '/courses',
        name: 'Courses.index',
        component: () => import('@/views/courses/Index.vue'),
        meta: {
          userRoles: ['admin']
        }
      },
      {
        path: '/courses/:id',
        name: 'Courses.show',
        component: () => import('@/views/courses/Show.vue'),
        meta: {
          userRoles: ['*']
        }
      },
      {
        path: '/courses/:id/students',
        name: 'Študenti na predmete',
        component: () => import('@/views/courses/ShowStudents.vue'),
        meta: {
          userRoles: ['teacher', 'admin']
        }
      },
      {
        path: '/courses/create',
        name: 'Courses.create',
        component: () => import('@/views/courses/Create.vue'),
        meta: {
          userRoles: ['admin']
        }
      },
      {
        path: '/students',
        name: 'Students.index',
        component: () => import('@/views/students/Index.vue'),
        meta: {
          userRoles: ['admin']
        }
      },
      {
        path: '/students/:student_id/courses/:course_id/points',
        name: 'Hodnotenie študenta',
        component: () => import('@/views/students/Points.vue'),
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
        meta: {
          userRoles: ['admin']
        }
      },
      {
        path: '/users',
        name: 'Používatelia',
        component: () => import('@/views/users/Index.vue'),
        meta: {
          userRoles: ['admin']
        }
      },
      {
        path: '/users/:id',
        name: 'Detail',
        component: () => import('@/views/users/Show.vue'),
        meta: {
          userRoles: ['admin']
        }
      },
      {
        path: '/users/create',
        name: 'Vytvoriť nového',
        component: () => import('@/views/users/Create.vue'),
        meta: {
          userRoles: ['admin']
        }
      },
      {
        path: '/results',
        name: 'Results.index',
        component: () => import('@/views/results/Index.vue'),
        meta: {
          userRoles: ['*']
        }
      },
      {
        path: '/results/show',
        name: 'Results.show',
        component: () => import('@/views/results/Show.vue'),
        meta: {
          userRoles: ['*']
        }
      },
      {
        path: '/e-index',
        name: 'EIndex',
        component: () => import('@/views/EIndex.vue'),
        meta: {
          userRoles: ['student']
        }
      },
      {
        path: '/subject-registration',
        name: 'Registration.index',
        component: () => import('@/views/registration/Index.vue'),
        meta: {
          userRoles: ['student']
        }
      },
      {
        path: '/my-profile',
        name: 'My profile',
        component: () => import('@/views/MyProfile.vue'),
        meta: {
          userRoles: ['*']
        }
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
      
    if( !to.meta.userRoles?.includes('*') && !to.meta.userRoles?.includes(store.state.loggedUser.role)) {
      
      return {name: 'Dashboard'}
    }
})

export default router
