
var buttonAdd = document.querySelector("#adicionar-paciente");
buttonAdd.addEventListener("click", function(){
  event.preventDefault();

  var form = document.querySelector("#form-add");
// Extraindo informacoes do form (1)
  var patient = gainPatientForm(form);

  var error = validPatient(patient);

  if (error.length > 0) {
    showMensageError(error);
    return;
  }

  addTablePatient(patient);

  form.reset();
  var mensageErro = document.querySelector("#mensagem-erro");
  mensageErro.innerHTML = "";

});

function addTablePatient(patient) {
    var patientTr = assemblyTr(patient);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(patientTr);

}

function showMensageError(error){
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    error.forEach(function(erro){
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);

    });
}

function gainPatientForm(form) { // Extraindo informacoes do form (1)

    var patient = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.gordura.value,
      imc: calculaImc(form.peso.value, form.altura.value)
    }
    return patient;
}

function assemblyTr(patient) { // Cria a Tr e a Td do paciente (2)

    var patientTr = document.createElement("tr");
    patientTr.classList.add("patient");

    patientTr.appendChild(assemblyTd(patient.nome, "info-nome"));
    patientTr.appendChild(assemblyTd(patient.peso, "info-peso"));
    patientTr.appendChild(assemblyTd(patient.altura, "info-altura"));
    patientTr.appendChild(assemblyTd(patient.gordura, "info-gordura"));
    patientTr.appendChild(assemblyTd(patient.imc, "info-imc"));

    return patientTr;

}

function assemblyTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validPatient(patient) {

    var error =[];

    if (patient.nome.length == 0){
      error.push("O nome não pode estar em branco");
    }

    if (!validWeight(patient.peso)) error.push("O peso é inválido!");
    if (!validHeigh(patient.altura)) error.push("O altura é inválido!");

    if (patient.gordura.length == 0){
      error.push("A gordura não pode estar em branco");
    }

    if (patient.peso.length == 0){
      error.push("O peso não pode estar em branco");
    }

    if (patient.altura.length == 0){
      error.push("O altura não pode estar em branco");
    }

    return error;
}
