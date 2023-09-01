const meuBotao = document.getElementById("button");
const conteudo = document.getElementById("conteudoPrincipal");

//meuBotao.addEventListener("click",clicou);
function clicou(){
    alert("clicado " + conteudo.textContent);
}

meuBotao.addEventListener("click", () => {
    alert("clicado 2");
    clicou();
})

// Eventos
// mousedown
// mouseup
// mouseenter

