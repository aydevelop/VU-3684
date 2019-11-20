import Vue from 'vue'
import { stat } from '@nodelib/fs.stat'

const state = {
   show12Hour: true
}

const mutations = {
    setShow12Hour(state, value){
        state.show12Hour = value
    }
}

const actions = {
   setShow12Hour({commit}, value){
       commit('setShow12Hour', value)
   }
}

const getters = {
  
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}