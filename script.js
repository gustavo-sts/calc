const resultadoConta = document.querySelector("#resultado");
const botoesNumeros = document.querySelectorAll("#num"); // Mudança de nome para clareza
const botoesOperadores = document.querySelectorAll("#op"); // Mudança de nome para clareza
const botaoIgual = document.querySelector("#res"); // Mudança de nome para clareza
const limpar = document.querySelector('#clear')

let expressao = ""; // Variável para armazenar a expressão completa

// Carregue a biblioteca Math.js (opcional, se não estiver pré-carregada)
if (typeof math === "undefined") {
  // Carregue o Math.js aqui
}

botoesNumeros.forEach((botao) => {
  botao.addEventListener("click", (evento) => {
    const valorClicado = evento.target.textContent;
    expressao += valorClicado; // Armazena o valor clicado na variável expressão
    resultadoConta.textContent = expressao; // Atualiza o resultado com a expressão completa
  });
});

botoesOperadores.forEach((botao) => {
  botao.addEventListener("click", (evento) => {
    const valorClicado = evento.target.textContent;
    expressao += valorClicado; // Armazena o operador clicado na variável expressão
    resultadoConta.textContent = expressao; // Atualiza o resultado com a expressão completa
  });
});

limpar.addEventListener('click', ()=>{
  resultadoConta.textContent = expressao = ''
})

botaoIgual.addEventListener("click", () => {
  resultadoConta.innerHTML = eval(resultadoConta.textContent)
});
