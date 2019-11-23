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
    handleAuthStateChange({commit}){
      firebaseAuth.onAuthStateChanged(function(user){
          if(user){
            console.log('setLoggedIn true')
            commit('setLoggedIn', true)
            localStorage.setItem('loggedIn', true);
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