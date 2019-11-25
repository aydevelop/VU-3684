import Vue from 'vue'
import { uid } from 'quasar'
import { stat } from 'fs'
import { firebaseDb} from 'boot/firebase'
import { firebaseAuth } from '../boot/firebase'

const state = {
    tasks:{

    },
    tasks3:{
        'ID1':{
            name: 'Go to shop',
            complete: false,
            dueDate: '2019/05/12',
            dueTime: '18:30'
        },
        'ID2':{
            name: 'AGet bananes',
            complete: true,
            dueDate: '2019/05/13',
            dueTime: '19:30'
        },
        'ID3':{
            name: 'Get apples',
            complete: false,
            dueDate: '2019/05/14',
            dueTime: '20:30'
        }
    },
    tasks2:[
        {
            id:1,
            name: 'Go to shop',
            complete: false,
            dueDate: '2019/05/12',
            dueTime: '18:30'
        },
        {
            id:2,
            name: 'Get bananes',
            complete: true,
            dueDate: '2019/05/13',
            dueTime: '19:30'
        },
        {
            id:3,
            name: 'Get apples',
            complete: false,
            dueDate: '2019/05/14',
            dueTime: '20:30'
        }
    ],
    search_u: "",
    sort: "dueTime"
}

const mutations = {
    updateTask(state, payload){
        Object.assign(state.tasks[payload.id], payload.data)
    },
    updateTaskComplete(state, payload){
        state.tasks[payload.id].complete = payload.complete
    },
    deleteTask(state, id){
       Vue.delete(state.tasks, id)
    },
    addTask(state, payload){
        Vue.set(state.tasks, payload.id, payload.task)
    },
    setSearch(state, payload){
        state.search_u = payload
    },
    setSort(state, payload){
        state.sort = payload
    }
}

const actions = {
    updateTask({ commit }, payload){
        let userId = (firebaseAuth.currentUser.uid)
        let tref = firebaseDb.ref('tasks/'+userId+"/"+payload.id)
        tref.update(payload.task)
    },
    updateTaskComplete({ commit,dispatch }, payload){
        console.log("updateTaskComplete - " + JSON.stringify(payload))
        dispatch('updateTask', {id:payload.id, task:{complete:payload.complete}})
    },
    deleteTask({ commit }, id){
        console.log('deleteTask + ', id)
        let userId = (firebaseAuth.currentUser.uid)
        let tref = firebaseDb.ref('tasks/'+userId+"/"+id)
        tref.remove()
    },
    addTask({ dispatch }, task){
        
        let taskId = uid() 
        let payload = {
            id: taskId,
            task: task
        }

        let userId = (firebaseAuth.currentUser.uid)
        let tref = firebaseDb.ref('tasks/'+userId+"/"+payload.id)
        tref.set(payload.task)
    },
    setSearch({commit}, value){
        commit('setSearch', value)
    },
    setSort({commit}, value){
        commit('setSort', value)
    },

    fbReadData({commit}){ 
        let userId = (firebaseAuth.currentUser.uid)
        let userTasks = firebaseDb.ref('tasks/'+userId)
        
        userTasks.on('child_added', snap =>{
            let task = snap.val()
            let payload =
             {
                id: snap.key,
                task: task
            }
            commit('addTask', payload)
        })

        userTasks.on('child_changed', snap =>{
            let task = snap.val()
            let payload =
             {
                id: snap.key,
                data: task
            } 
            commit('updateTask', payload)
        })

        userTasks.on('child_removed', snap =>{
            let taskId = snap.key
            commit('deleteTask', taskId)
        })
    }
}

const getters = {
    tasksSorted: (state) => {
        //return state.tasks;
        
        let tasksSort = {},
        keys = Object.keys(state.tasks)

        //return keys;
        keys.sort((a,b) => {
            let taskA = state.tasks[a][state.sort].toLowerCase(),
                taskB = state.tasks[b][state.sort].toLowerCase()
            
            if(taskA > taskB) return 1;
            else if(taskA < taskB) return -1;
            else return 0;
        })

        keys.forEach((key) =>{
            tasksSort[key] = state.tasks[key]
        })

        return tasksSort
    },
    tasksFiltered3: (state) => {
        let tasksFiltered = {}
        if(state.search_u){
            Object.keys(state.tasks).forEach(function(key){
                let task = state.tasks[key]
                if(task.name.includes(state.search_u)){
                    tasksFiltered[key] = task
                }
            })
            return tasksFiltered
        }
        return state.tasks
    },
    tasksFiltered: (state) => {
        // let tasksFiltered = {}
        // if(state.search_u){
        //     Object.keys(state.tasks).forEach(function(key){
        //         let task = state.tasks[key]
        //         if(task.name.includes(state.search_u)){
        //             tasksFiltered[key] = task
        //         }
        //     })
        //     return tasksFiltered
        // }
        return state.tasks
    },
    tasksTodo: (state, getters) => {
        let tasksFiltered = getters.tasksSorted
        let keys =  Object.keys(tasksFiltered)
        let tasks = {}
        keys.forEach(function(key){
            let task = tasksFiltered[key]
            if(task.complete){
                tasks[key] = task
            }
        })        
        return tasks
    },
    tasksCompleted: (state, getters) => {
        let tasksFiltered = getters.tasksSorted
        let keys =  Object.keys(tasksFiltered)
        let tasks = {}
        keys.forEach(function(key){
            let task = tasksFiltered[key]
            if(!task.complete){
                tasks[key] = task
            }
        })        
        return tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}