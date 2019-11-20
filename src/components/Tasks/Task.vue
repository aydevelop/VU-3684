<template>
    <q-item
        @click.prevent="updateTaskComplete({ id: id, complete: !task.complete })" 
        :class="task.complete ? 'bg-red-2': 'bg-green-2'"
        tag="label" v-ripple>
            <q-item-section side top>
                <q-checkbox
                class="no-pointer-events"
                :value="task.complete" />
            </q-item-section>

            <q-item-section>
                <q-item-label :class="{'text-strike' : !task.complete}">
                    {{ task.name }}
                </q-item-label>
            </q-item-section>

            <q-item-section side top>
                <q-icon name="event" />               
                <q-item-label caption>{{ task.dueDate }}</q-item-label>
                <q-item-label caption>{{ taskDueTime }}</q-item-label>
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
    import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
    import { date } from 'quasar'

    export default {
        components:{
            'edit-task' : require('components/Modals/EditTask.vue').default,
        },
        props: ['task','id'],
        data:()=>({
            showEditTask: false
        }),
        computed:{
             ...mapState('sets', ['show12Hour']),
            taskDueTime(){
                if(this.show12Hour){
                    return date
                    .formatDate(this.task.dueDate + ' ' + this.task.dueTime, 'h:mmA');
                }
                return this.task.dueTime;
            }
        },
        methods:{
            ...mapActions('tasks', ['updateTask','deleteTask','updateTaskComplete']),
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