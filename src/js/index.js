const personagens = document.querySelectorAll('.personagem');
const btn = document.querySelectorAll('.botao');


btn.forEach((botao, ind) => {
  botao.addEventListener('click', () => {

    removeBtn();

    botao.classList.add('selecionado');

    perfilAdd(ind);

  });

});

function removeBtn() {
  btn.forEach(botao => {
    botao.classList.remove('selecionado');
  });
}
// Seleciona um novo personagem...
function perfilAdd(a) {
  perfilRemove();
  personagens[a].classList.add("selecionado");
}
// Remove o personagem anterior...
function perfilRemove() {
  personagens.forEach(personagem => {
    personagem.classList.remove('selecionado');
  });
}

