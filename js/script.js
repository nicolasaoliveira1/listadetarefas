let contador = 0
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
    let valorInput = input.value;
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        ++contador;
        let novoItem = `<div id = "${contador}"class="item">
            <div onclick = "marcarTarefa(${contador})" class="item-icone">
                <i id ="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick = "marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick = "deletar(${contador})"class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
            </div>
        </div>`;
        // adicionar item no main
        main.innerHTML += novoItem
        //zerar input
        input.value = "";
        input.focus()
    }

};

function deletar(idx) {
    var tarefa = document.getElementById(idx);
    tarefa.remove();
}

function marcarTarefa(idx) {
    var item = document.getElementById(idx);
    var classe = item.getAttribute("class");
    if (classe == "item") {
        item.classList.add("clicado");
        var icone = document.getElementById("icone_" + idx);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-checkbox-marked-circle");
        item.parentNode.appendChild(item);

    } else {
        item.classList.remove("clicado");
        var icone = document.getElementById("icone_" + idx);
        icone.classList.remove("mdi-checkbox-marked-circle");
        icone.classList.add("mdi-circle-outline");
    }
}


input.addEventListener("keyup", function (event) {
    //se teclou enter
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})