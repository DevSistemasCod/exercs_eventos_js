function inicializar() {
  let nomeInput = document.getElementById('nomeInput');
  let mensagem = document.getElementById('mensagem');

  //prettier-ignore
  if ((nomeInput instanceof HTMLInputElement) && (mensagem instanceof HTMLParagraphElement)) {
     nomeInput.addEventListener('keydown', (evento) => {
        const tecla = nomeInput.value + evento.key; // Inclui a tecla pressionada
        const regex = /^[a-zA-ZÀ-ÿ\s]*$/;

        if (!regex.test(tecla)) {
          mensagem.textContent = 'Formato inválido';
          mensagem.style.color = 'red';
        } else {
          mensagem.textContent = 'Formato válido';
          mensagem.style.color = 'green';
        }
      });
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
