var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

//extraindo informações do paciente no form
var paciente = obtemPacienteDoFormlario(form);


  var erros = validaPaciente(paciente);
  console.log(erros);
  if(erros.length > 0){
    exibeMensagenDeErro(erros);
    return;
  }


adicionarPacienteNaTabala(paciente);

  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

function adicionarPacienteNaTabala(paciente){
//cria a tr do paciente jutamente com as td's
  var pacienteTr = montaTr(paciente);
  //adiciona o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormlario(form){
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function validaPaciente(paciente){
  var erros = [];

  if(paciente.nome.length == 0){
    erros.push("o nome não pode ser em branco");
  }
  if(!validaPeso(paciente.peso)){
    erros.push("peso invalido");
  }
  if(!validaAltura(paciente.altura)){
    erros.push("altura invalida");
  }
  if(paciente.peso.length == 0){
    erros.push("o peso não pode ser em branco");
  }
  if(paciente.altura.length == 0){
    erros.push("a altura não pode ser em branco");
  }
  if(paciente.gordura.length == 0){
    erros.push("gordura não pode ser em branco");
  }

  return erros;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));


  return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function exibeMensagenDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
  }
