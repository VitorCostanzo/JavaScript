var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut"); // parentNode -> referencia para a tag pai da que está sendo analisada

    setTimeout(function() { // setTimeout("comando", "tempo_de_espera")
        event.target.parentNode.remove();
    }, 500);

});
