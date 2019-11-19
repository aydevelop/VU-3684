<template>
<!-- <transition
  appear
  enter-active-class="animated zoomIn"
  leave-active-class="animated zoomOut"
> -->
    <div class="q-mb-lg q-mt-lg" v-if="Object.keys(tasksTodo).length">       
        <list-header>{{ title }}</list-header>  
        <q-list
            v-if="Object.keys(tasksTodo).length"
            bordered separator>
            
            <task v-for="(task, key) 
                in tasksTodo"
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

           
        </q-list>
    </div>
    <!-- </transition> -->
</template>

<script>
    export default {
        data:()=>({
            showAdTask: false,
            showEditTask: true
        }),
        props: ['tasksTodo','title'],
        components:{
            'task' : require('components/Tasks/Task.vue').default,
            'list-header' : require('components/Shared/ListHeader.vue').default
        }
    }
</script>

<style scoped>
</style>