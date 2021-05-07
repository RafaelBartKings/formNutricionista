var patient = document.querySelectorAll(".paciente");

var table = document.querySelector("table");

table.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){

      var targetEvent = event.target;
      var fatherTarget =  targetEvent.parentNode; // TR = paciente = remove
      fatherTarget.remove();

    }, 500);

});
