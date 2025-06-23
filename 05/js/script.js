
function inicializar() {
  let menuItems = document.querySelectorAll('.menuItem');

  if (menuItems) {
    menuItems.forEach((item) => {
      item.addEventListener('click', (evento) => {
        toggleMenu(evento, item);
      });
    });
  }

  document.addEventListener('click', () => {
    fecharMenus();
  });
}

// Alterna a classe 'exibir' no item clicado
function toggleMenu(evento, item) {
  //Evitar navegação indesejada:
  //O comportamento padrão do link pode interferir na experiência do usuário
  //O navegador pode rolar a página para o topo (se href="#" ou href estiver vazio).
  evento.preventDefault();
  evento.stopPropagation();

  if (item.classList.contains('exibir')) {
    item.classList.remove('exibir');
  } else {
    let menuItems = document.querySelectorAll('.menuItem');
    menuItems.forEach((menuItem) => menuItem.classList.remove('exibir'));
    item.classList.add('exibir');
  }
}


function fecharMenus() {
  let menuItems = document.querySelectorAll('.menuItem');
  menuItems.forEach((item) => item.classList.remove('exibir'));
}


document.addEventListener('DOMContentLoaded', inicializar)
