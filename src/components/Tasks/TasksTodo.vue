<template>
<!-- <transition
  appear
  enter-active-class="animated zoomIn"
  leave-active-class="animated zoomOut"
> -->
    <div class="q-mb-lg q-mt-lg" v-if="Object.keys(tasksTodo).length">       
        <list-header v-if="!taskOneList" >{{ title }}</list-header>  
        <q-list
            v-if="Object.keys(tasksTodo).length"
            bordered separator>
            
            <task v-for="(task, key) 
                in tasksTodo"
                :key="key"
                :task="task"
                :id="key"
            ></task>

           

           
        </q-list>
    </div>
    <!-- </transition> -->
</template>

<script>
    import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
    
    export default {
        data:()=>({
            showAdTask: false,
            showEditTask: true
        }),
        computed:{
            ...mapState('sets', ['taskOneList'])
        },
        props: ['tasksTodo','title'],
        components:{
            'task' : require('components/Tasks/Task.vue').default,
            'list-header' : require('components/Shared/ListHeader.vue').default
        }
    }
</script>

<style scoped>
</style>