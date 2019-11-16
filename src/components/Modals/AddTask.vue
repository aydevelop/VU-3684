<template>
    <q-card>
        <q-card-section class="row">
        <div class="text-h6">Add Task</div>
        <q-space />
        <q-btn
            v-close-popup
            flat
            round
            dense
            icon="close"
        />
        </q-card-section>

        <form @submit.prevent="submitForm">
            <q-card-section>
                <div class="row q-mb-md">
                    <q-input 
                    clearable
                    ref="name"
                    autofocus
                    :rules="[val => !!val || 'Field is required']"
                    v-model="taskToSubmit.name" outlined label="Task name" class="col" />
                </div>

                <div class="row q-mb-md">
                    <q-input 
                        clearable
                        ref="date"
                        class="col"
                        label="Date" outlined v-model="taskToSubmit.dueDate" :rules="[val => !!val || 'Field is required']">
                        <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                <q-date v-model="taskToSubmit.dueDate" @input="() => $refs.qDateProxy.hide()" />
                            </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>

                <div class="row q-mb-md" v-if="taskToSubmit.dueDate">
                    <q-input 
                        clearable
                        class="col" 
                        ref="time"
                        label="Time" outlined v-model="taskToSubmit.dueTime" mask="time" :rules="[val => !!val || 'Field is required']">
                        <template v-slot:append>
                        <q-icon name="access_time" class="cursor-pointer">
                            <q-popup-proxy transition-show="scale" transition-hide="scale">
                            <q-time v-model="taskToSubmit.dueTime">
                                <div class="row items-center justify-end q-gutter-sm">
                                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                                    <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                                </div>
                            </q-time>
                            </q-popup-proxy>
                        </q-icon>
                        </template>
                    </q-input>
                </div>

            </q-card-section>

            <q-card-actions align="right">
                <q-btn
                flat label="Save" color="primary"
                type="submit" />
            </q-card-actions>
        </form>
    </q-card>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data:()=>({
            taskToSubmit:{
                name: '',
                complete: false,
                dueDate: '',
                dueTime: ''
            }
        }),
        methods:{
            ...mapActions('tasks', ['addTask']),
            submitForm(){

                this.$refs.name.validate()
                this.$refs.date.validate()
                this.$refs.time.validate()

                if(!this.$refs.name.hasError){
                    if(!this.$refs.date.hasError){
                        if(!this.$refs.time.hasError){    
                            this.submitTask()
                        }
                    }
                }

            },
            submitTask(){
                this.addTask(this.taskToSubmit)
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
</style>