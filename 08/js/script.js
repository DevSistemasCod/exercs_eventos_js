function main() {
  let entradaTexto = document.getElementById('entradaTexto');
  let contador = document.getElementById('contador');

  //prettier-ignore
  if ( (entradaTexto instanceof HTMLInputElement) && (contador instanceof HTMLParagraphElement)) {
    //O evento input foi usado para capturar alterações no campo de entrada, 
    // incluindo adições e remoções de caracteres.    
    //entradaTexto.addEventListener('keydown', () => {
    entradaTexto.addEventListener('input', () => {
      contarCaracteres(entradaTexto.value, contador);
    });
  }
}

function contarCaracteres(texto, contador) {
  let tamanhoTexto = texto.length;

  if (tamanhoTexto >= 30) {
    contador.style.color = 'red';
    contador.textContent = `${tamanhoTexto} máximo de caracteres ultrapassado!`;
  } else {
    contador.style.color = 'black';
    contador.textContent = tamanhoTexto;
  }
}

document.addEventListener('DOMContentLoaded', main);
