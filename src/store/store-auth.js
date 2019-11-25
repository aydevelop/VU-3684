import { firebaseAuth } from 'boot/firebase'
import { Dialog } from 'quasar'

const state = {
    loggedIn: false
}

const mutations = {
    setLoggedIn(state, value){
        state.loggedIn = value
    }
}

const actions = {
    registerUser({}, payload){
        return firebaseAuth
        .createUserWithEmailAndPassword(payload.email, payload.pass)
        .then(res => {
            console.log('resp: ', res)
        })
    },
    loginUser({commit}, payload){
        return firebaseAuth
        .signInWithEmailAndPassword(payload.email, payload.pass)
        .then(res => {
            console.log('setLoggedIn true (loginUser)')
            commit('setLoggedIn', true)
            localStorage.setItem('loggedIn', true);
        })
    },
    logoutUser(){
        console.log('logoutUser')
        firebaseAuth.signOut();
        window.location.reload()
    },
    handleAuthStateChange({commit,dispatch}){
      firebaseAuth.onAuthStateChanged(function(user){
          if(user){
            console.log('setLoggedIn true')
            commit('setLoggedIn', true)
            localStorage.setItem('loggedIn', true);
            dispatch('tasks/fbReadData', null, { root: true})
        }else{
            console.log('setLoggedIn false')
            commit('setLoggedIn', false)
            localStorage.setItem('loggedIn', false);
          }
      })
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