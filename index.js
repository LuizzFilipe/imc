var titulo = document.querySelector(".titulo"); titulo.textContent = " Aparecida Nutricionista ";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEValido = true;
    var alturaEValida = true;

    if (peso < 0 || peso > 1000) {
        console.log("Peso inválido!")
        pesoEValido = false;
        tdImc.textContent = "Peso Inválido";
    }

    if (altura < 0 || altura > 3.00) {
        console.log("Altura inválida!");
        alturaEValida = false;
        tdImc.textContent = "Altura Inválida";
    }

    if (alturaEValida && pesoEValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
