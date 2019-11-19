<template>
    <div>
       <q-input 
        outlined 
        v-model="searchField" 
        label="Search">

            <template v-slot:prepend>
                <q-icon name="place" />
            </template>
            <template v-slot:append>
                <q-icon name="close" @click="searchField = ''" class="cursor-pointer" />
            </template>

      </q-input>
      {{ search_u }}
    </div>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    export default {
        data:()=>({
            
         }),
         computed:{
            ...mapState('tasks', ['search_u']),
             searchField:{
                 get(){
                     return this.search_u
                 },
                 set(value){
                     this.setSearch(value)
                 }
             }
         },
         methods:{
             ...mapActions('tasks', ['setSearch'])
         }
    }
</script>

<style scoped>
</style>