<template>
    <q-list
        v-if="Object.keys(tasksTodo).length"
        bordered  separator>
        
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

        <q-dialog v-model="showAdTask">
            <add-task @close="showAdTask = false" />
        </q-dialog>
    </q-list>
</template>

<script>
    export default {
        data:()=>({ })
    }
</script>

<style scoped>
</style>