import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './store-tasks'
import sets from './store-settings'
import auth from './store-auth'

Vue.use(Vuex)


export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tasks,
      sets,
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
