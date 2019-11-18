<template>
    <q-page class="q-pa-md">

        <no-tasks v-if="!Object.keys(tasksTodo).length" ></no-tasks>
        
        <tasks-todo :tasksTodo="tasksTodo" :title="`Todo`" />
        <tasks-todo :tasksTodo="tasksCompleted" :title="`Completed`" />
    </q-page>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data:()=>({
            showAdTask: false,
            showEditTask: true
        }),
        components:{
            'task' : require('components/Tasks/Task.vue').default,
            'add-task' : require('components/Modals/AddTask.vue').default,
            'tasks-todo' : require('components/Tasks/TasksTodo.vue').default,
            'no-tasks' : require('components/Tasks/NoTasks.vue').default
        },
        computed:{
            ...mapGetters('tasks', ['tasksTodo','tasksCompleted'])
            // tasks(){
            //     return this.$store.getters['tasks/tasks']
            // }
        }
    }
</script>

<style scoped>
    .text-strike{
        text-decoration: line-through;
    }
</style>