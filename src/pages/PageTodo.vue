<template>
    <q-page class="q-pa-md">
        <div class="row q-mb-lg">
            <search />
            {{ tasksFiltered3 }}
        </div>
        <no-tasks @showAddTask="showAdTask=true" v-if="!Object.keys(tasksTodo).length" ></no-tasks>
        
        <tasks-todo :tasksTodo="tasksTodo" :title="`Todo`" />
        <tasks-todo :tasksTodo="tasksCompleted" :title="`Completed`" />

         <q-dialog v-model="showAdTask">
            <add-task @close="showAdTask = false" />
        </q-dialog>
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
            'no-tasks' : require('components/Tasks/NoTasks.vue').default,
            'search' : require('components/Tools/Search.vue').default
        },
        computed:{
            ...mapGetters('tasks', ['tasksTodo','tasksCompleted','tasksFiltered3'])
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