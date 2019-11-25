

// "async" is optional
export default async ({ router }) => {
   router.beforeEach((to, from, next)=>{
      let loggedIn = localStorage.getItem('loggedIn')

      console.log("logged in " + loggedIn);
      if(loggedIn==false){
         console.log("1111")
         if(to.path != '/auth'){
            console.log("2")
            if(router.currentRoute.path != '/auth'){
               next('/auth')
            }else{
               next()
            }
            console.log("3")
         }else{
            next()
         }
      }else{
         console.log('2')
         next()
      }

      //console.log("loggedIn " + loggedIn)
      //console.log('333')
      //next()
   })
}
