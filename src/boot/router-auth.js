

// "async" is optional
export default async ({ router }) => {
   router.beforeEach((to, from, next)=>{
      var loggedIn2 = !!localStorage.getItem('loggedIn')

      if(loggedIn2){
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
