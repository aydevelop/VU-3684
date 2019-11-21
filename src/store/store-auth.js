import { firebaseAuth } from 'boot/firebase'

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
        firebaseAuth
        .createUserWithEmailAndPassword(payload.email, payload.pass)
        .then(res => {
            console.log('resp: ', res)
        }).catch(error => {
            alert(error.message)
        })
    },
    loginUser({}, payload){
        firebaseAuth
        .signInWithEmailAndPassword(payload.email, payload.pass)
        .then(res => {
            console.log('resp: ', res)
        }).catch(error => {
            alert(error.message)
        })
    },
    logoutUser(){
        console.log('logoutUser')
        firebaseAuth.signOut();
    },
    handleAuthStateChange({commit}){
      firebaseAuth.onAuthStateChanged(function(user){
          if(user){
            commit('setLoggedIn', true)
          }else{
            commit('setLoggedIn', false)
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