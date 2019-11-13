<template>
    <q-page class="q-pa-md">
        <q-list bordered  separator>
      
            <task v-for="(task, key) 
                in tasks"
                :key="key"
                :task="task"
                :id="key"
            ></task>

        </q-list>
    </q-page>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        components:{
            'task' : require('components/Tasks/Task.vue').default
        },
        computed:{
            ...mapGetters('tasks', ['tasks'])
        }
    }
</script>

<style scoped>
    .text-strike{
        text-decoration: line-through;
    }
</style>