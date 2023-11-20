


    const email = document.getElementById('email')
    // const username =document.getElementById('username')
    const password = document.getElementById('password')
    const btn = document.getElementById('btn')
 
  

   


    btn?.addEventListener('click',()=>{
   
            let kayıt = [
               {
                  mail:email.value,
                  
                  sifre:password.value,
              
               }
                ]
                localStorage.setItem('kayıtlar',JSON.stringify(kayıt))
             
            
        
  
             
         
    
        })
    
       









// let email,password;

// const email = document.getElementById('email')
// const password = document.getElementById('password')

// localStorage.setItem('email',email);
// localStorage.setItem('password',password);





























    // btn?.addEventListener('click',()=>{
    //     if( email.value != "" && password.value != 0 ){
    //     let kayıt = [
    //        {
    //           mail:email.value,
              
    //          şifre:password.value,
              
    //        }
    //         ]
    //         localStorage.setItem('kayıtlar',JSON.stringify(kayıt))
    //         alert('kayıt başarılı')
    //     }
    //     tamamlandi.textContent='kayıt başarılı'
     
    //     tamamlandi.style.color='danger'

     
     

    // })

     
