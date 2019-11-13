<template>
    <q-item
        :class="task.complete ? 'bg-green-1': 'bg-orange-1'"
        tag="label" v-ripple>
            <q-item-section side top>
                <q-checkbox v-model="task.complete" />
            </q-item-section>

            <q-item-section>
                <q-item-label :class="{'text-strike' : task.complete}">
                    {{ task.name }} / {{ id }}
                </q-item-label>
            </q-item-section>

            <q-item-section side top>
                <q-icon name="event" />               
                <q-item-label caption>{{ task.dueDate }}</q-item-label>
                <q-item-label caption>{{ task.dueTime }}</q-item-label>
            </q-item-section>
        
        </q-item>
</template>

<script>
    export default {
        props: ['task','id'],
        data:()=>({ })
    }
</script>

<style scoped>
</style>