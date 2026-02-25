console.log("Meu portfólio está interativo!");

const titulo =document.querySelector("h1");
titulo.textContent = "Meu portfólio interativo!";

const botao = document.querySelector("#btnMensagem");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "Você clicou no botão!";
});

const btn = document.querySelector("#btnMostrar");
const foto = document.querySelector("#foto");

btn.addEventListener("click", () => {
  foto.style.display = "block";
  setTimeout(() => {
    foto.style.opacity ="1";
  }, 100);
});