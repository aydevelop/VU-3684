<template>
    <q-page class="q-pa-md">
        <q-list bordered  separator>
      
        <q-item
        :class="task.complete ? 'bg-green-1': 'bg-orange-1'"
        v-for="(task, key ) in tasks"
        :key="task.id"
        tag="label" v-ripple>
            <q-item-section side top>
                <q-checkbox v-model="task.complete" />
            </q-item-section>

            <q-item-section>
                <q-item-label :class="{'text-strike' : task.complete}">
                    {{ task.name }} / {{ key }}
                </q-item-label>
            </q-item-section>

            <q-item-section side top>
                <q-icon name="event" />               
                <q-item-label caption>{{ task.dueDate }}</q-item-label>
                <q-item-label caption>{{ task.dueTime }}</q-item-label>
            </q-item-section>
        
        </q-item>

        </q-list>
    </q-page>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
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