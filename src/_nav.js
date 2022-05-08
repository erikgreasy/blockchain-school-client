export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
    userRoles: ['student', 'teacher']
  },
  {
    component: 'CNavItem',
    name: 'Courses',
    to: '/courses',
    icon: 'cil-user',
  },
  {
    component: 'CNavItem',
    name: 'Students',
    to: '/students',
    icon: 'cil-user',
    userRoles: ['teacher'],
  },
  {
    component: 'CNavItem',
    name: 'Priebežné hodnotenie',
    to: '/results',
    icon: 'cil-user',
    userRoles: ['student']
  },
  {
    component: 'CNavItem',
    name: 'E-index',
    to: '/e-index',
    icon: 'cil-notes',
    userRoles: ['student']
  },
  {
    component: 'CNavItem',
    name: 'Môj profil',
    to: '/my-profile',
    icon: 'cil-settings',
    userRoles: ['student']
  },
  {
    component: 'CNavItem',
    name: 'Zápis/Registrácia',
    to: '/subject-registration',
    icon: 'cil-notes',
    userRoles: ['student']
  },
]
