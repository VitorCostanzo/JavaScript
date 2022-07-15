var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest(); // cria requisição de busca

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // abre requisição => .open("metodo_htpp", "url")
    xhr.send(); // envia a requisição para buscar na api
    xhr.addEventListener("load", function() { // ao carregar o resultado da requisição
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) { // status == 200 -> tudo ok
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText; // retorno da api como string
            var pacientes = JSON.parse(resposta); // converte a string recebida em objeto reconhecivel pelo js
            var nomes = retornaNomesTabela(); 

            nomes.forEach(nome => { // limpa os nomes repetidos do objeto recebido pela api
                pacientes = pacientes.filter(pac => pac.nome != nome);
            })

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else { // status != 200 -> erro na requisição
            erroAjax.classList.remove("invisivel");
        }
    });

});

function retornaNomesTabela(){ // retorna os nomes que já estão na tabela
    let pacientesTR = document.querySelectorAll(".paciente");
    let nomes = [];
    pacientesTR.forEach(pacTR => {
        let nome = pacTR.querySelector(".info-nome").textContent;
        nomes.push(nome);
    });
    return nomes;
}