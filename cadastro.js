// VALIDAR CAMPO SENHA SÃO IGUAIS NO CADASTRO
var validaSenha = document.getElementById("senha_cad")
  , confirmaSenha = document.getElementById("repita_senha");

function validatePassword(){
  if(validaSenha.value != confirmaSenha.value) {
    confirmaSenha.setCustomValidity("Senhas Digitadas Diferentes!");
  } else {
    confirmaSenha.setCustomValidity('');
  }
}

validaSenha.onchange = validatePassword;
confirmaSenha.onkeyup = validatePassword;