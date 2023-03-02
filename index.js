var inputTarefa = document.getElementById("input-tarefa")
var btnaddtarefa = document.getElementById("btn-add-tarefa")
var listatarefa = document.getElementById("lista-tarefas")
var idtarefa = 0;
var coin = document.getElementById("coin")

/*
var audio = new Audio('audio/mario.mp3');
setTimeout(toca, 2000)
function toca(){
    audio.play()
}
*/

var botao = new Audio("audio/moeda.mp3");
var bowser = new Audio("audio/bowser.wav")
var princesa = new Audio("audio/princesa.wav")
var luigi = new Audio("audio/luigi2.wav")
var mario = new Audio("audio/soumario.mp3")
var cano = new Audio("audio/caindocano.wav")
var yoshi = new Audio("yoshi.wav")


bowser.play();
princesa.play();
luigi.play();
mario.play();
cano.play();
yoshi.play();


btnaddtarefa.addEventListener("click", () => {
    if (inputTarefa.value != "") {
        idtarefa++;
        var li = document.createElement("li");
        li.id = idtarefa;
        li.innerHTML = `<span>${inputTarefa.value}</span> <a href="#" onclick="removertarefa(event)"><img class="lixeira-icone" name=${idtarefa} src="imagens/lixeira2.png"></a>`;
        listatarefa.appendChild(li);
        inputTarefa.value = "";
        botao.play();
        
        coin.style.animation = "moedasobe 0.5s";
        setTimeout(() => { coin.style.animation = "" }, 350)

    }
    else {
        alert("digite uma tarefa")
    }

});

function removertarefa(event) {
    var elementoParaRemover = document.getElementById(event.target.name)
    elementoParaRemover.remove();
}

