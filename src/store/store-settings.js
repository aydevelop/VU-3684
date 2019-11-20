import Vue from 'vue'
import { stat } from '@nodelib/fs.stat'

const state = {
   show12Hour: true,
   taskOneList: false
}

const mutations = {
    setShow12Hour(state, value){ state.show12Hour = value },
    setTaskOneList(state, value) { state.taskOneList = value }
}

const actions = {
  
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