<template>
    <q-card>
        <modal-header>Edit task</modal-header>

        <form @submit.prevent="submitForm">
            <q-card-section>                
                <modal-task-name ref="name" :name.sync="taskToSubmit.name" />
                <modal-due-date ref="date" :dueDate.sync="taskToSubmit.dueDate" />
                <modal-due-time v-if="taskToSubmit.dueDate" ref="time" :dueTime.sync="taskToSubmit.dueTime" />             
            </q-card-section>
            <modal-buttons />
        </form>
    </q-card>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props: ['task', 'id'],
        components:{
            'modal-header': require('components/Modals/Shared/ModalHeader.vue').default,
            'modal-task-name': require('components/Modals/Shared/ModalTaskName.vue').default,
            'modal-due-date': require('components/Modals/Shared/ModalDueDate.vue').default,
            'modal-due-time': require('components/Modals/Shared/ModalDueTime.vue').default,
            'modal-buttons': require('components/Modals/Shared/ModalButtons.vue').default
        },
        data:()=>({
            taskToSubmit:{
                name: '',
                complete: false,
                dueDate: '',
                dueTime: ''
            }
        }),
        methods:{
            ...mapActions('tasks', ['updateTask']),
            submitForm(){

                this.$refs.name.$refs.name.validate()
                this.$refs.date.$refs.date.validate()
                this.$refs.time.$refs.time.validate()

                if(!this.$refs.name.$refs.name.hasError){
                    if(!this.$refs.date.$refs.date.hasError){
                        if(!this.$refs.time.$refs.time.hasError){    
                            this.submitTask()
                        }
                    }
                }

            },
            submitTask(){
                let data = this.taskToSubmit;
                this.updateTask({'id':this.id, 'task': data})
                this.$emit('close')
            }
        },
        mounted(){
            this.taskToSubmit = Object.assign({},this.task)
            
        }
    }
</script>

<style scoped>
</style>