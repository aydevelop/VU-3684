<template>
    <q-item
        @click.prevent="updateTask({ id: id, complete: !task.complete })" 
        :class="task.complete ? 'bg-green-1': 'bg-orange-1'"
        tag="label" v-ripple>
            <q-item-section side top>
                <q-checkbox
                class="no-pointer-events"
                :value="task.complete" />
            </q-item-section>

            <q-item-section>
                <q-item-label :class="{'text-strike' : task.complete}">
                    {{ task.name }}
                </q-item-label>
            </q-item-section>

            <q-item-section side top>
                <q-icon name="event" />               
                <q-item-label caption>{{ task.dueDate }}</q-item-label>
                <q-item-label caption>{{ task.dueTime }}</q-item-label>
            </q-item-section>

            <q-item-section side>
                <div class="row">
                    <q-btn
                        @click.stop="showEditTask = true"
                        flat
                        round
                        dense
                        color="primary"
                        icon="edit"
                    />
                    <q-btn
                        @click.stop="itemDelete(id)"
                        flat
                        round
                        dense
                        color="red"
                        icon="delete"
                    />
                </div>
           </q-item-section>
           <q-dialog v-model="showEditTask">
                <edit-task 
                :task="task"
                :id="id"
                @close="showEditTask = false" />
            </q-dialog>
        </q-item>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        components:{
            'edit-task' : require('components/Modals/EditTask.vue').default
        },
        props: ['task','id'],
        data:()=>({
            showEditTask: false
         }),
        methods:{
            ...mapActions('tasks', ['updateTask','deleteTask']),
            itemDelete(id){
                this.$q.dialog({
                    title: 'Confirm',
                    message: 'Really delete?',
                    ok:{
                        push: true
                    },
                    cancel:{
                        color: 'negative'
                    },
                    persistent: true
                }).onOk(()=> {
                    this.deleteTask(id)
                })
            }
        }
    }
</script>

<style scoped>
</style>