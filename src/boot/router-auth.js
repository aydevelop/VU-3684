
import { LocalStorage, SessionStorage } from 'quasar'
// "async" is optional
export default ({ router }) => {
   router.beforeEach((to, from, next)=>{
      let loggedIn2 = localStorage.getItem('loggedIn')
      console.log("loggedIn2: "+loggedIn2)

      if(loggedIn2==null || loggedIn2==0){
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
