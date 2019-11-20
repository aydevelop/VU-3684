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
    </q-page>
</template>

<script>
     import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        data:()=>({ }),
         computed:{
             ...mapState('sets', ['show12Hour']),
             show12HourFormat: {
                 get(){
                     return this.show12Hour
                 },
                 set(value){
                     this.setShow12Hour(value)
                 }
             }
         },
         methods:{
             ...mapActions('sets',['setShow12Hour'])
         }
    }
</script>

<style scoped>
</style>