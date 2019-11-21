<template>
  <q-layout view="hhh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title class="absolute-center">
          Todo list
        </q-toolbar-title>

        <q-btn v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right" />
        
        <q-btn v-else
          flat
          @click="logoutUser"
          icon-right="account_circle"
          label="Logout"
          class="absolute-right" />


        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab v-for="nav in navs" :key="nav.label" 
           :icon="nav.icon" 
           :label="nav.label" 
           :to="nav.to" exact
         />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>

        <q-item 
         v-for="nav in navs"
         :key="nav.to"
         class="text-grey-4"
         clickable :to="nav.to" exact 
         >
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      navs:[
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  },
  computed:{
    ...mapState('auth',['loggedIn'])
  },
  methods:{
    ...mapActions('auth',['logoutUser'])
  }
}
</script>

<style lang="scss">
  @media screen and (min-width:1024px){
    .q-footer{
      display: none
    }
  }

  .q-drawer{ 
      .q-router-link--exact-active{
        color:white !important
      }
    }
</style>
