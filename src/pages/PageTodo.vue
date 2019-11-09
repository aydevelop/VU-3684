<template>
    <q-page padding>
        <p>
            Todo Page
        </p>
    </q-page>
</template>

<script>
    export default {
        data:()=>({
            tasks:[
                {
                    id:1,
                    name: 'Go to shop',
                    complete: false
                },
                {
                    id:2,
                    name: 'Get bananes',
                    complete: false
                },
                {
                    id:3,
                    name: 'Get apples',
                    complete: false
                }
            ]
        })
    }
</script>

<style scoped>
</style>