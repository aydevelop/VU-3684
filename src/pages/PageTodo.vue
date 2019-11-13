<template>
    <q-page class="q-pa-md">
        <q-list bordered padding>
      
        <q-item
        v-for="task in tasks"
        :key="task.id"
        tag="label" v-ripple>
            <q-item-section side top>
                <q-checkbox v-model="task.complete" />
            </q-item-section>

            <q-item-section>
                <q-item-label>{{ task.name }}</q-item-label>
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
    export default {
        data:()=>({
            tasks:[
                {
                    id:1,
                    name: 'Go to shop',
                    complete: false,
                    dueDate: '2019/05/12',
                    dueTime: '18:30'
                },
                {
                    id:2,
                    name: 'Get bananes',
                    complete: true,
                    dueDate: '2019/05/13',
                    dueTime: '19:30'
                },
                {
                    id:3,
                    name: 'Get apples',
                    complete: false,
                    dueDate: '2019/05/14',
                    dueTime: '20:30'
                }
            ]
        })
    }
</script>

<style scoped>
</style>