function inicializar() {
  let dropdownBtn = document.querySelector('.btnDropdown');
  let dropdownMenu = document.querySelector('.menuDropdown');

  //prettier-ignore
  if((dropdownBtn instanceof HTMLButtonElement) && (dropdownMenu instanceof HTMLDivElement)
  ){
    dropdownBtn.addEventListener("click", (evento) =>{
    dropdownMenu.classList.toggle("exibir");
    evento.stopPropagation(); // Impede que o clique no dropdown propague para o documento
    });
    document.addEventListener('click', (evento) =>
      fecharDropdown(evento, dropdownBtn, dropdownMenu)
    );
  }
}

function fecharDropdown(evento, dropdownBtn, dropdownMenu) {
  if (!evento.target.matches('.btnDropdown')) {
    dropdownMenu.classList.remove('exibir');
    dropdownBtn.classList.remove('destaque');
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
