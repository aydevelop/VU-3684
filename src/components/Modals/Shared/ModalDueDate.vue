<template>
    <div class="row">
        <q-input 
            clearable
            ref="date"
            class="col"
            label="Date" outlined :value="dueDate" :rules="[val => !!val || 'Field is required']"
            @input="$emit('update:dueDate', $event)">
            <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date :value="dueDate" @input="$emit('update:dueDate', $event)" />
                </q-popup-proxy>
                </q-icon>
            </template>
        </q-input>
    </div>
</template>

<script>
    export default {
        data:()=>({ }),
        props: ['dueDate']
    }
</script>

<style scoped>
</style>