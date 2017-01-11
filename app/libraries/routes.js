/**
 * Routing table
 */
export default [
  {
    name: 'login',
    path: '/login',
    meta: { requiresAuth: false },
    component: require('../views/login')
  },
  {
    name: 'default',
    path: '/',
    meta: { requiresAuth: true },
    redirect: { name: 'dashboard' }
  },
  {
    name: 'dashboard',
    path: '/dashboard',
    meta: { requiresAuth: true },
    component: () => System.import('../views/dashboard')
  },
  {
    name: 'posts',
    path: '/posts/:type?',
    meta: { requiresAuth: true },
    component: () => System.import('../views/posts')
  },
  {
    name: 'media',
    path: '/media',
    meta: { requiresAuth: true },
    component: () => System.import('../views/media')
  },
  {
    name: 'users',
    path: '/users',
    meta: { requiresAuth: true },
    component: () => System.import('../views/users')
  },
  {
    name: 'agents',
    path: '/agents',
    meta: { requiresAuth: true },
    component: () => System.import('../views/agents')
  },
  {
    name: 'sip',
    path: '/sip',
    meta: { requiresAuth: true },
    component: () => System.import('../views/sip')
  },
  {
    name: 'queues',
    path: '/queues',
    meta: { requiresAuth: true },
    component: () => System.import('../views/queues')
  },
  {
    name: 'dialplan',
    path: '/dialplan',
    meta: { requiresAuth: true },
    component: () => System.import('../views/dialplan')
  },
  {
    name: 'trunk',
    path: '/trunk',
    meta: { requiresAuth: true },
    component: () => System.import('../views/trunk')
  },
  {
    name: 'audio',
    path: '/audio',
    meta: { requiresAuth: true },
    component: () => System.import('../views/audio')
  },
  {
    name: 'callysquare',
    path: '/callysquare',
    meta: { requiresAuth: true },
    component: () => System.import('../views/callysquare')
  },
  {
    name: 'calendar',
    path: '/calendar',
    meta: { requiresAuth: true },
    component: () => System.import('../views/calendar')
  },
  {
    name: 'ticket',
    path: '/ticket',
    meta: { requiresAuth: true },
    component: () => System.import('../views/ticket')
  },
  {
    name: 'comments',
    path: '/comments',
    meta: { requiresAuth: true },
    component: () => System.import('../views/comments')
  },
  {
    name: 'themes',
    path: '/themes',
    meta: { requiresAuth: true },
    component: () => System.import('../views/themes')
  },
  {
    name: 'plugins',
    path: '/plugins',
    meta: { requiresAuth: true },
    component: () => System.import('../views/plugins')
  },
  {
    name: 'tools',
    path: '/tools',
    meta: { requiresAuth: true },
    component: () => System.import('../views/tools')
  },
  {
    name: 'options',
    path: '/options',
    meta: { requiresAuth: true },
    component: () => System.import('../views/options')
  },
  {
    name: 'about',
    path: '/about',
    meta: { requiresAuth: true },
    component: () => System.import('../views/about')
  },
  // ## demo views
  {
    name: 'demo',
    path: '/demo',
    meta: { requiresAuth: false },
    component: () => System.import('../views/demo/demo')
  },
  {
    name: 'components',
    path: '/components',
    meta: { requiresAuth: false },
    component: () => System.import('../views/demo/components')
  },
  {
    name: 'vuex',
    path: '/vuex',
    meta: { requiresAuth: false },
    component: () => System.import('../views/demo/vuex')
  },
  {
    name: 'proxy',
    path: '/demo/proxy',
    meta: { requiresAuth: false },
    component: () => System.import('../views/demo/proxy')
  },
  {
    name: 'parameter',
    path: '/demo/:name',
    meta: { requiresAuth: false },
    component: () => System.import('../views/demo/parameter')
  },
  // topbar
  {
    name: 'search_destination',
    path: '/search_destination',
    meta: { requiresAuth: true },
    component: () => System.import('../views/search_destination')
  },
  {
    name: 'status',
    path: '/status',
    meta: { requiresAuth: true },
    component: () => System.import('../views/status')
  },
  // ## not found
  {
    name: '404',
    path: '*',
    meta: { requiresAuth: false },
    component: () => System.import('../views/404')
  }
]

// // All components are loaded synchronously
// const views = [
//   require('../views/component'),
//   require('../views/dashboard'),
//   require('../views/about'),
//   require('../views/404')
// ]
//
// const defaultPage = views.find(p => p.default) || { path: '/' }
//
// const defaults = [{ name: 'default', path: '/', redirect: defaultPage.path }]
//
// export default defaults.concat(views.map(page => ({ name: page.name, path: page.path, component: page })))

// Asynchronous blocks all components
// https://github.com/wengang/vue-router-async-components/blob/master/src/main.js#L26
// TODO: code splite group
// https://github.com/webpack/webpack/issues/2369
// component: resolve => require.ensure([], () => resolve(require('../views/component')), 'component')
// component: () => System.import('../views/component')
// component: require('../views/dashboard')
