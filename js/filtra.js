var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var patients = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < patients.length; i++){
            var paciente = patients[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expresso = new RegExp(this.value, "i");


            if (!expresso.test(nome)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < patients.length; i++) {
            var paciente = patients[i];
            paciente.classList.remove("invisivel");
        }
    }
});
