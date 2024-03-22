const caixadeTexto = document.querySelector("input")
const botaoAdicionar = document.querySelector("button")
const listadeAlunos = document.querySelector("#lista")

botaoAdicionar.addEventListener("click",() => {

const valorDigitado = caixadeTexto.value;
const novoAluno = document.createElement("li");
novoAluno.classList.add("item-list");

const spanNomeAluno = document.createElement("span");
  spanNomeAluno.textContent = valorDigitado;

const botaoRemoverAluno = document.createElement("button");
  botaoRemoverAluno.textContent = " X ";
  botaoRemoverAluno.addEventListener("click", () => {
    listadeAlunos.removeChild(novoAluno);
});

novoAluno.appendChild(spanNomeAluno);
novoAluno.appendChild(botaoRemoverAluno);

caixadeTexto.value = '';
listadeAlunos.appendChild(novoAluno);
});

botaoAdicionar.addEventListener("click", () => {
    const valorDigitado = caixaTexto.value;
    console.log('Adicionou novo elemento a lista', valorDigitado);
  });