var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  var peso = paciente.querySelector(".info-peso").textContent;


  var altura = paciente.querySelector(".info-altura").textContent;



  var tdimc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValido = validaAltura(altura);

  if(!pesoValido){
    tdimc.textContent = "peso invalido";
    paciente.classList.add("paciente-invalido");
  }
  if(!alturaValido){
    tdimc.textContent = "altura invalida";
    paciente.classList.add("paciente-invalido");
  }
  if(pesoValido && alturaValido){
    var imc = calculaImc(peso, altura);
    tdimc.textContent = imc;
  }
}

function validaPeso(peso){
  if(peso>0 && peso<1000){
    return true;
  }else {
    return false;
  }
}

function validaAltura(altura){
  if(altura>0 && altura<3.00){
    return true;
  }else {
    return false;
  }
}

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}
