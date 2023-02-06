function carregamento(){
var usuario = document.getElementById('.login')
var senha   = document.getElementById('.senha')

   if (!usuario || !senha) {
    alert("Por favor, preencha todos os campos")
  } 
   if (senha.length < 8) {
    alert("A senha deve ter pelo menos 8 caracteres");
    return
  }

}

 