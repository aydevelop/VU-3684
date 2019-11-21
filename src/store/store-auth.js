import { firebaseAuth } from 'boot/firebase'

const state = {

}

const mutations = {

}

const actions = {
    registerUser({}, payload){
        firebaseAuth
        .createUserWithEmailAndPassword(payload.email, payload.pass)
        .then(res => {
            console.log('resp: ', res)
        }).catch(error => {
            console.log('error:', error)
        })
    },
    loginUser({}, payload){
        firebaseAuth
        .signInWithEmailAndPassword(payload.email, payload.pass)
        .then(res => {
            console.log('resp: ', res)
        }).catch(error => {
            console.log('error:', error)
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