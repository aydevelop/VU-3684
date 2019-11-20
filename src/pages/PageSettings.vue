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
            
            <q-item tag="label" v-ripple>
                <q-item-section>
                <q-item-label>Show tasks in one list</q-item-label>
                </q-item-section>
                <q-item-section side >
                <q-toggle v-model="showOneList" color="blue" 
                val="battery" />
                </q-item-section>
            </q-item>
        </q-list>

         <q-list bordered padding>
            <q-item-label header>More</q-item-label>
            <q-item to="/settings/help" tag="label" v-ripple>
                <q-item-section>
                <q-item-label>Help</q-item-label>
                </q-item-section>
                <q-item-section side>
                    <q-icon name="chevron_right" />
                </q-item-section>
            </q-item>
            <q-item @click="visitOurWebsite" tag="label" v-ripple>
                <q-item-section>
                <q-item-label>Visit our website</q-item-label>
                </q-item-section>
                <q-item-section side>
                    <q-icon name="chevron_right" />
                </q-item-section>
            </q-item>
        </q-list>

    </q-page>
</template>

<script>
    import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
    import { openURL } from 'quasar'

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
             ...mapMutations('sets',['setShow12Hour','setTaskOneList']),
             visitOurWebsite(){
                 openURL('http://www.google.com')
             }
         }
    }
</script>

<style scoped>
</style>