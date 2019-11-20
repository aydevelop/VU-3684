import Vue from 'vue'
import Vuex from 'vuex'

import tasks from './store-tasks'
import sets from './store-settings'

Vue.use(Vuex)


export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tasks,
      sets
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
