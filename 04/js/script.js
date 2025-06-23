function inicializar() {
  const botaoMenuHamburger = document.getElementById('hamburgerBtn');
  const botoesDropdown = document.querySelectorAll('.dropdownBotao');
  const dropdowns = document.querySelectorAll('.dropdown');
  const menu = document.querySelector('.menu');
  const links = document.querySelectorAll('.dropdown a');
  
  botoesDropdown.forEach((botao) => {
    botao.addEventListener('click', (evento) =>
      alternarDropdown(evento, botao, dropdowns)
    );
  });

  links.forEach((link) =>
    link.addEventListener('click', () =>
      lidarComCliqueNoLink(menu, dropdowns)
    )
  );

  document.documentElement.addEventListener('click', () =>
    fechar(dropdowns)
  );

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') {
      fechar(dropdowns);
    }
  });

  if (botaoMenuHamburger instanceof HTMLButtonElement) {
    botaoMenuHamburger.addEventListener('click', () =>
      alternarMenuHamburger(menu)
    );
  }  
}

function alternarDropdown(evento, botao, dropdowns) {
  const dropdownId = botao.dataset.dropdown;
  const dropdownAlvo = document.getElementById(dropdownId);

  if (dropdownAlvo instanceof HTMLElement) {
    dropdowns.forEach((dropdown) => {
      if (dropdown !== dropdownAlvo) {
        dropdown.classList.remove('visivel');
      }
    });

    dropdownAlvo.classList.toggle('visivel');
    evento.stopPropagation();
  }
}

function lidarComCliqueNoLink(menu, dropdowns) {
  fechar(dropdowns);
  alternarMenuHamburger(menu);
}

function fechar(dropdowns) {
  dropdowns.forEach((dropdown) => dropdown.classList.remove('visivel'));
}

function alternarMenuHamburger(navMenu) {
  navMenu.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', inicializar);
