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
        },
        'ID11':{
            name: 'Go to shop',
            complete: false,
            dueDate: '2019/05/12',
            dueTime: '18:30'
        },
        'ID22':{
            name: 'AGet bananes',
            complete: true,
            dueDate: '2019/05/13',
            dueTime: '19:30'
        },
        'ID33':{
            name: 'Get apples',
            complete: false,
            dueDate: '2019/05/14',
            dueTime: '20:30'
        },
        'ID111':{
            name: 'Go to shop',
            complete: false,
            dueDate: '2019/05/12',
            dueTime: '18:30'
        },
        'ID222':{
            name: 'AGet bananes',
            complete: true,
            dueDate: '2019/05/13',
            dueTime: '19:30'
        },
        'ID333':{
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
    },
    setSearch({commit}, value){
        commit('setSearch', value)
    },
    setSort({commit}, value){
        commit('setSort', value)
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