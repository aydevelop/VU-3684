<template>
    <div>
         <q-banner dense class="bg-grey-3">
            <template v-slot:avatar>
                <q-icon name="check" color="primary" />
            </template>
                No tasks to do today!
            <template v-slot:action>
                <q-btn @click="$emit('showAddTask')" flat color="primary" label="Add Task" />
            </template>
        </q-banner>
    </div>
</template>

<script>
    export default {
        data:()=>({ })
    }
</script>

<style scoped>
</style>