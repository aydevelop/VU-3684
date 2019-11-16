<template>
    <q-page class="q-pa-md">
        <q-list
            v-if="Object.keys(tasks).length"
            bordered  separator>
            
            <task v-for="(task, key) 
                in tasks"
                :key="key"
                :task="task"
                :id="key"
            ></task>

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
        </q-list>
    </q-page>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data:()=>({
            showAdTask: true
        }),
        components:{
            'task' : require('components/Tasks/Task.vue').default,
            'add-task' : require('components/Modals/AddTask.vue').default
        },
        computed:{
            ...mapGetters('tasks', ['tasks'])
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