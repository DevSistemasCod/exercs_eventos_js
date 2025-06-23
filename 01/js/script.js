
function inicializar() {
  let dropdownBtn = document.querySelector('.btnDropdown');
  let dropdownMenu = document.querySelector('.menuDropdown');

  //prettier-ignore
  if((dropdownBtn instanceof HTMLButtonElement) && (dropdownMenu instanceof HTMLDivElement)
  ){
      dropdownBtn.addEventListener("click", (evento) =>{
      dropdownMenu.classList.toggle("exibir");
      //dropdownMenu.classList, está acessando o objeto classList do elemento dropdownMenu
      //toggle(className, [force])
      //Adiciona ou remove classe exibir.
      evento.stopPropagation();
    });

    document.addEventListener('click', (evento) =>
      fecharDropdown(evento, dropdownBtn, dropdownMenu)
    );
  }
}

// Função para fechar o dropdown quando o usuário clica fora dele.
function fecharDropdown(evento, dropdownBtn, dropdownMenu) {
  let menusDropdown = document.querySelectorAll('.menuDropdown');

  if (!evento.target.matches('.btnDropdown')) {
    dropdownMenu.classList.remove('exibir');
    dropdownBtn.classList.remove('destaque');

    for (let i = 0; i < menusDropdown.length; i++) {
      let menuDropdown = menusDropdown[i];
      if (menuDropdown.classList.contains('exibir')) {
        menuDropdown.classList.remove('exibir');
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
