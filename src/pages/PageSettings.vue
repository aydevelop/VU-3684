<template>
    <q-page padding>

        <q-list bordered padding>
            <q-item-label header>Settings</q-item-label>
            <q-item tag="label" v-ripple>
                <q-item-section>
                <q-item-label>Show 12 hour time format</q-item-label>
                </q-item-section>
                <q-item-section side >
                <q-toggle v-model="show12HourFormat" color="blue" 
                val="battery" />
                </q-item-section>
            </q-item>
            {{ show12Hour }}
        </q-list>

         <q-list bordered padding>
            <q-item-label header>Settings</q-item-label>
            <q-item tag="label" v-ripple>
                <q-item-section>
                <q-item-label>Show tasks in one list</q-item-label>
                </q-item-section>
                <q-item-section side >
                <q-toggle v-model="showOneList" color="blue" 
                val="battery" />
                </q-item-section>
            </q-item>
            {{ taskOneList }}
        </q-list>

    </q-page>
</template>

<script>
    import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

    export default {
        data:()=>({ }),
         computed:{
             ...mapState('sets', ['show12Hour','taskOneList']),
             show12HourFormat: {
                 get(){
                     return this.show12Hour
                 },
                 set(value){
                     this.setShow12Hour(value)
                 }
             },
             showOneList: {
                 get(){
                     return this.taskOneList
                 },
                 set(value){
                     this.setTaskOneList(value)
                 }
             }
         },
         methods:{
             ...mapMutations('sets',['setShow12Hour','setTaskOneList'])
         }
    }
</script>

<style scoped>
</style>