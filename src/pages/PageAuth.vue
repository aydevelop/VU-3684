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
                <q-btn @click="logBtnClick" :disable="loading" :loading="loading" dense color="primary" ref="logBtn" label="Login">
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
                <q-btn @click="regBtnClick" :disable="loading" :loading="loading" ref="regBtn" dense color="primary" label="Register">
                </q-btn>
              </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </q-page>
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    import { Dialog } from 'quasar'

    export default {
        data:()=>({ 
              loading: false,
              tab: 'login',

              regEmail: '',
              regPassword: '',

              logEmail: '',
              logPassword: ''
        }),
        methods:{
          ...mapActions('auth',['registerUser','loginUser']),
          regBtnClick(){
            this.loading = true
            this.registerUser(
              {"email": this.regEmail, "pass": this.regPassword}
            ).then(res => {
              this.logEmail = ''
              this.logPassword = ''
              this.tab = 'login'
              this.loading = false
            }).catch(error => {
                Dialog.create({
                    title: 'Error',
                    message: error.message
                })

                this.tab = 'register'                
                this.loading = false
            });
          },
          logBtnClick(){
            this.loading = true;
            this.loginUser(
              {"email": this.logEmail, "pass": this.logPassword}
            ).then(res => {
                this.$router.push('/')
            }).catch(error => {
                let msg = "";
                if(error.message){ msg = (error.message); }
                else{ msg = "Error loginUser"; }
                
                console.log(msg)
                Dialog.create({
                    title: 'Error',
                    message: msg
                })

                this.loading = false
            });
          }
        }
    }
</script>

<style scoped>
</style>