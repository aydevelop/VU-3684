<template>
    <div>
        <q-banner dense inline-actions class="dence text-white bg-purple-5 text-center list-h">
            <span class="text-body2">
                <slot></slot>
            </span> 
        </q-banner>
    </div>
</template>

<script> 
    export default {
        data:()=>({ })
    }
</script>

<style scoped>
    .list-h{
        border-top-left-radius: 10px !important;
        border-top-right-radius: 10px !important;
    }
</style>