

// "async" is optional
export default async ({ router }) => {
   router.beforeEach((to, from, next)=>{
      let loggedIn = localStorage.getItem('loggedIn')

      if(loggedIn){
         if(to.path != '/auth'){
            //next('/auth')
         }else{
            console.log('1')
            next()
         }
      }else{
         console.log('2')
         next()
      }

      console.log('3')
      next()
   })
}
