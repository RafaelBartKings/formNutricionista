var  titulo = document.querySelector(".titulo");
titulo.textContent = "Fátima Nutricionista";

var pacientes = document.querySelectorAll(".paciente");



for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];


    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");


    pesoEhValido = validWeight(peso);
    alturaEhValida = validHeigh(altura);


    if (!pesoEhValido ) {
      console.log("Peso inválido!");
      pesoEhValido = false;
      tdImc.textContent = "Peso Inválido";
      paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
      console.log("Altura inválida!");
      alturaEhValida = false;
      tdImc.textContent = "Altura Inválida";
      paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
      var imc = calculaImc(peso, altura);
      tdImc.textContent = imc;
    }
}

function validWeight(peso) {

  if (peso >= 0 && peso < 1000) {
    return true
  }else {
    return false;
  }
}

function validHeigh(altura) {

  if (altura >= 0 && altura <= 3.0){
    return true;
  }else {
    return false;
  }
}

function calculaImc(peso, altura) {

  var imc = 0
  imc = peso / (altura * altura); // 100 / 2.00 * 2.00 = 100 / 4 >>>>25
  return imc.toFixed(2);

}
