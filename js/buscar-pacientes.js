var buttonAdd = document.querySelector("#buscar-pacientes")

buttonAdd.addEventListener("click", function(){
    console.log("Buscando Pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if ( xhr.status == 200){
          erroAjax.classList.remove("invisivel");
          var resposta = xhr.responseText;
          var pacientes = JSON.parse(resposta);

          pacientes.forEach( function(patient){

              addTablePatient(patient);
          });
        }else {
            console.log( xhr.status);
            console.log( xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }

    });

    xhr.send();

});
