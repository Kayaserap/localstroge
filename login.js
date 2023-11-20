

const email = document.getElementById('email')

const password = document.getElementById('password')
const btn = document.getElementById('btn')
const p= document.querySelector('.p')










btn?.addEventListener('click',()=>{
    if( email.value != '' && password.value !=0 ){
       
          
      let user = [
        {
           mail:UserMail,
           
           sifre:Userpassword,
       
        }
            
      ]  
      
    
        localStorage.getItem('kayıtlar',JSON.stringify(kayıt))
        user.push("users");
        localStorage.setItem('userMail','UserPassword')
       
      }
     
     p.style.color="danger";
     p.textContent='kayıt başarılı';
     
     else{
      p.style.color="info";
      p.textContent='kayıt başarısız';
   
 
  }
     
    })



   
   


