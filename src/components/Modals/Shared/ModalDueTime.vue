<template>
     <div class="row">
            <q-input 
                clearable
                class="col" 
                ref="time"
                label="Time" outlined :value="dueTime" mask="time" :rules="[val => !!val || 'Field is required']"
                @input="$emit('update:dueDate', $event)">

                <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time :value="dueTime" @input="$emit('update:dueTime', $event)">
                    </q-time>
                    </q-popup-proxy>
                </q-icon>
                </template>
            </q-input>
        </div>
</template>

<script>
    export default {
        data:()=>({ }),
        props: ['dueTime']
    }
</script>

<style scoped>
</style>