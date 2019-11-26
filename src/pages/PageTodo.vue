<template>
    <q-page class="q-pa-md">
        <template v-if="!tasksDownloaded">
            <div class="text-center q-mt-lg">
                <q-spinner
                    color="primary"
                    size="3em"
                /> 
            </div>
        </template>

        <template  v-else>
            <div class="row q-mb-lg">
            <!-- <search /> -->
            <!-- {{ tasksSorted }} -->
            <sort />
        </div>
        <no-tasks @showAddTask="showAdTask=true" v-if="!Object.keys(tasksTodo).length" ></no-tasks>
        </template>

        <tasks-todo :tasksTodo="tasksTodo" :title="`Todo`" />
        <tasks-todo :tasksTodo="tasksCompleted" :title="`Completed`" />

          <div class="absolute-bottom text-right q-mb-lg q-mt-lg q-mr-lg">
                <q-btn
                    round
                    color="primary"
                    size="20px"
                    icon="add"
                    @click="showAdTask=true"
                />
            </div>

         <q-dialog v-model="showAdTask">
            <add-task @close="showAdTask = false" />
        </q-dialog>
    </q-page>
</template>

<script>
    import { mapGetters, mapState } from 'vuex'

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
            'search' : require('components/Tools/Search.vue').default,
            'sort' : require('components/Tools/Sort.vue').default
        },
        computed:{
            ...mapGetters('tasks', ['tasksTodo','tasksCompleted','tasksSorted']),
            ...mapState('tasks',['tasksDownloaded'])
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