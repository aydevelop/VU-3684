<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  methods:{
    ...mapActions('auth',['handleAuthStateChange'])
  },
  mounted(){
    this.handleAuthStateChange()
  }
}
</script>
