<template>
    <q-page class="q-pa-md">
        <tasks-todo :tasksTodo="tasksTodo" />
        <tasks-todo :tasksTodo="tasksCompleted" />
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
            'tasks-todo' : require('components/Tasks/TasksTodo.vue').default
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