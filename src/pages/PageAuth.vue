<template>
    <q-page padding>
         <q-card class="auth-tabs">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <q-banner dense class="bg-grey-3">
              <template v-slot:avatar>
                <q-icon name="account_circle" color="primary" />
              </template>
              Login to access your Todos
            </q-banner>

              <div class="row q-mt-md">
                <q-input dense
                  v-model="logEmail"
                  outlined
                  class="col"
                  label="Email"
                  ref="email">
                </q-input>
              </div>
              <div class="row q-mt-md">
                <q-input dense
                  v-model="logPassword"
                  outlined
                  class="col"
                  label="Password"
                  ref="password"
                  >
                </q-input>
              </div>
              <div class="row q-mt-md">
                <q-space></q-space>
                <q-btn @click="logBtnClick" dense color="primary" label="Login">
                </q-btn>
              </div>
          </q-tab-panel>

          <q-tab-panel name="register">
            <q-banner dense class="bg-grey-3">
              <template v-slot:avatar>
                <q-icon name="account_circle" color="primary" />
              </template>
              Register to access your Todos
            </q-banner>

              <div class="row q-mt-md">
                <q-input dense
                  v-model="regEmail"
                  outlined
                  class="col"
                  label="Email"
                  ref="email">
                </q-input>
              </div>
              <div class="row q-mt-md">
                <q-input dense
                  v-model="regPassword"
                  outlined
                  class="col"
                  label="Password"
                  ref="password"
                  >
                </q-input>
              </div>
              <div class="row q-mt-md">
                <q-space></q-space>
                <q-btn @click="regBtnClick" dense color="primary" label="Register">
                </q-btn>
              </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-page>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        data:()=>({ 
              tab: 'login',

              regEmail: '',
              regPassword: '',

              logEmail: '',
              logPassword: ''
        }),
        methods:{
          ...mapActions('auth',['registerUser','loginUser']),
          regBtnClick(){
            this.registerUser(
              {"email": this.regEmail, "pass": this.regPassword}
            );
          },
          logBtnClick(){
            this.loginUser(
              {"email": this.logEmail, "pass": this.logPassword}
            );
          }
        }
    }
</script>

<style scoped>
</style>