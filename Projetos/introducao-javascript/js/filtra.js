var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); // cria RegExp("expressão_buscada", "i[case insensitive]")

            if (!expressao.test(nome)) { // testa se a expressão buscada se encontra dentro da string 'nome'
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
        });
    }
});
