
import { LocalStorage, SessionStorage } from 'quasar'
// "async" is optional
export default async ({ router }) => {
   router.beforeEach((to, from, next)=>{
      let loggedIn2 = localStorage.getItem('loggedIn')

      if(loggedIn2==0){
         if(to.path != '/auth'){
            if(router.currentRoute.path != '/auth'){
               next('/auth')               
            }else{
               next()
            }
         }else{
            next()
         }
      }else{
         next()
      }
   })
}
