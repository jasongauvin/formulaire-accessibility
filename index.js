document.addEventListener('DOMContentLoaded', ()=>{
  console.log("chargée");
  //object
  let user=({
    login:document.getElementsByTagName('input')[0],
    mdp :document.getElementsByTagName('input')[1],
    traitement: function(){
      (this.login.value && this.mdp.value)? console.log('ok') : console.log('ko');
      localStorage.setItem('login',this.login.value)
      localStorage.setItem('mdp',this.mdp.value)

    }

  })
  let btn = document.getElementsByTagName('input')[2];
  console.log(user.mdp)
  btn.addEventListener('click',(event)=>{
    event.preventDefault();
    user.traitement();
  })
})
