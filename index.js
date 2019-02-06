// document.addEventListener('DOMContentLoaded', ()=>{
//   console.log("chargée");
//   //object
//   let user=({
//     login:document.getElementsByTagName('input')[0],
//     mdp :document.getElementsByTagName('input')[1],
//     traitement: function(){
//       (this.login.value && this.mdp.value)? console.log('ok') : console.log('ko');
//       localStorage.setItem('login',this.login.value)
//       localStorage.setItem('mdp',this.mdp.value)

//     }

//   })
//   let btn = document.getElementsByTagName('input')[2];
//   console.log(user.mdp)
//   btn.addEventListener('click',(event)=>{
//     event.preventDefault();
//     user.traitement();
//   })
// })

document.addEventListener("DOMContentLoaded",()=>{
  console.log("dom chargé");
  //process
  let btn=document.getElementsByTagName('input')[2];
  let clearBtn=document.getElementsByTagName('input')[0];
  //Objet formulaire
  

  let user = ({
      warning : document.querySelector('.warning'),
      verif : document.getElementsByTagName('input'),
      test : function(){
          if(!this.verif[0].value || !this.verif[1].value){
            
            this.warning.style.display="block";
            //alert("remplir les champs");
            this.warning.textContent="Remplir les champs";
          }
          else{
            
            console.log(this.verif[0].value+' '+this.verif[1].value);
            this.warning.style.display="block";
            this.warning.innerHTML="Votre login "+this.verif[0].value+"<br>Votre mot de passe "+this.verif[1].value;
            this.warning.style.background="rgba(0,200,0,1)";
            this.verif[0].value="";
            this.verif[1].value="";
            this.verif[2].setAttribute("disabled","true");
          }
      }

  })

  btn.addEventListener('click', (event)=>{
    event.preventDefault();
    user.test();
  })
  
  clearBtn.addEventListener('click', ()=>{//nettoyer les champs
    user.verif[0].value="";
    user.verif[1].value="";
    
  })
  console.log(user)

});