import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6c8dd4b7 = () => interopDefault(import('..\\pages\\AllUsers.vue' /* webpackChunkName: "pages/AllUsers" */))
const _551f0d3d = () => interopDefault(import('..\\pages\\CreateUserLog.vue' /* webpackChunkName: "pages/CreateUserLog" */))
const _793448fa = () => interopDefault(import('..\\pages\\Loghome.vue' /* webpackChunkName: "pages/Loghome" */))
const _3e64f0bc = () => interopDefault(import('..\\pages\\SingleLog.vue' /* webpackChunkName: "pages/SingleLog" */))
const _2082f62d = () => interopDefault(import('..\\pages\\SuperUserLoghome.vue' /* webpackChunkName: "pages/SuperUserLoghome" */))
const _2a402384 = () => interopDefault(import('..\\pages\\UpdateUser.vue' /* webpackChunkName: "pages/UpdateUser" */))
const _6cbb10d2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _d1c9c08c = () => interopDefault(import('..\\pages\\_id.vue' /* webpackChunkName: "pages/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/AllUsers",
    component: _6c8dd4b7,
    name: "AllUsers"
  }, {
    path: "/CreateUserLog",
    component: _551f0d3d,
    name: "CreateUserLog"
  }, {
    path: "/Loghome",
    component: _793448fa,
    name: "Loghome"
  }, {
    path: "/SingleLog",
    component: _3e64f0bc,
    name: "SingleLog"
  }, {
    path: "/SuperUserLoghome",
    component: _2082f62d,
    name: "SuperUserLoghome"
  }, {
    path: "/UpdateUser",
    component: _2a402384,
    name: "UpdateUser"
  }, {
    path: "/",
    component: _6cbb10d2,
    name: "index"
  }, {
    path: "/:id",
    component: _d1c9c08c,
    name: "id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
