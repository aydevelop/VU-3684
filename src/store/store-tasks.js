import Vue from 'vue'
import { uid } from 'quasar'
import { stat } from 'fs'

const state = {
    tasks:{
        'ID1':{
            name: 'Go to shop',
            complete: false,
            dueDate: '2019/05/12',
            dueTime: '18:30'
        },
        'ID2':{
            name: 'Get bananes',
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
    ]
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
    }
}

const actions = {
    updateTask({ commit }, data){
        commit('updateTask', data)
    },
    updateTaskComplete({ commit }, payload){
        commit('updateTaskComplete', payload)
    },
    deleteTask({ commit }, id){
        commit('deleteTask', id)
    },
    addTask({ commit }, task){
        
        let taskId = uid() 
        let payload = {
            id: taskId,
            task: task
        }

        commit('addTask', payload)
    }
}

const getters = {
    tasksTodo: (state) => {
        let keys =  Object.keys(state.tasks)
        let tasks = {}
        keys.forEach(function(key){
            let task = state.tasks[key]
            if(task.complete){
                tasks[key] = task
            }
        })        
        return tasks
    },
    tasksCompleted: (state) => {
        let keys =  Object.keys(state.tasks)
        let tasks = {}
        keys.forEach(function(key){
            let task = state.tasks[key]
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