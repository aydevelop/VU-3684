<template>
        <q-select 
        filled 
        v-model="sortBy" 
        emit-value
        map-options
        :options="options" 
        label="Sort by" 
        class="col qsel"
        stack-label />

      
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      options: [
        {
            label: 'Name',
            value: 'name'
        },
        {
            label: 'Date',
            value: 'dueDate'
        }
      ]
    }
  },
  computed:{
      ...mapState('tasks', ['sort']),
      sortBy:{
          get(){
              return this.sort
          },
          set(value){
              this.setSort(value)
          }
      }
  },
  methods:{
    ...mapActions('tasks',['setSort'])
  }
}
</script>

<style scoped>
.qsel{
  width: 100% !important;
}
</style>