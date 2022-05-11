export default [
  {
    component: 'CNavItem',
    name: 'Domov',
    to: '/dashboard',
    icon: 'cil-speedometer',
    userRoles: ['*']
  },
  {
    component: 'CNavItem',
    name: 'Predmety',
    to: '/courses',
    icon: 'cil-book',
    userRoles: ['admin']
  },
  {
    component: 'CNavItem',
    name: 'Moje predmety',
    to: '/my-courses',
    icon: 'cil-book',
    userRoles: ['teacher']
  },
  {
    component: 'CNavItem',
    name: 'Študenti',
    to: '/students',
    icon: 'cil-user',
    userRoles: [''],
  },
  {
    component: 'CNavItem',
    name: 'Používatelia',
    to: '/users',
    icon: 'cil-user',
    userRoles: ['admin'],
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
    name: 'Zápis/Registrácia',
    to: '/subject-registration',
    icon: 'cil-notes',
    userRoles: ['student']
  },
  {
    component: 'CNavItem',
    name: 'Môj profil',
    to: '/my-profile',
    icon: 'cil-settings',
    userRoles: ['*']
  },
]
