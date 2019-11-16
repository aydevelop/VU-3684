<template>
    <div class="row q-mb-md">
        <q-input 
        clearable
        ref="name"
        autofocus
        @input="$emit('update:name', $event)"
        :rules="[val => !!val || 'Field is required']"
        :value="name" outlined label="Task name" class="col" />
    </div>
</template>

<script>
    export default {
        data:()=>({ }),
        props:['name']
    }
</script>

<style scoped>
</style>