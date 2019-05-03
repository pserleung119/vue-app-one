
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/PageIndex'
import User from '@/pages/PageUser'
import Signup from '@/pages/PageSignup'
import Signin from '@/pages/PageSignin'
import NotFound from '@/pages/PageNotFound'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '*', // All unmatched path
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    redirectToPagesRequireAuth(to, next)
  } else {
    redirectToPagesDisallowAuth(to, next, false, '/User')
  }
})

const redirectToPagesRequireAuth = (to, next) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      next()
    } else {
      next({
        path: '/SignIn',
        query: { redirect: to.fullPath }
      })
    }
  })
}

const redirectToPagesDisallowAuth = (to, next) => {
  firebase.auth().onAuthStateChanged(user => {
    if (!user || !(user && to.name.match(/Sign[in]|[up]/))) {
      next()
    } else {
      next({
        path: '/User',
        query: { redirect: to.fullPath }
      })
    }
  })
}

export default router
