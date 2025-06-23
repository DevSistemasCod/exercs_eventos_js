function inicializar() {
  let palavraDeEntrada = document.getElementById('palavraDeEntrada');
  let caixaSugestao = document.getElementById('caixaSugestao');

  //prettier-ignore
  if ((palavraDeEntrada instanceof HTMLInputElement) && (caixaSugestao instanceof HTMLElement)
  ) {
    let palavraPredefinida = [ 'casa', 'casado', 'casinha',
      'cachorro', 'carro', 'carreto', 'computador', 'camisa', 'celular', 
      'caneta', 'cadeira', 'banana', 'bolacha', 'bola', 'bicicleta', 'barco',
      'abacaxi', 'abacate', 'amor', 'amora', 'amigo', 'azul', 'arvore'];

    palavraDeEntrada.addEventListener('input', () => {
      atualizarSugestoes(palavraDeEntrada, caixaSugestao, palavraPredefinida);
    });

    document.addEventListener('click', (evento) => {
      esconderSugestoes(evento, caixaSugestao, palavraDeEntrada);
    });
  }
}

function atualizarSugestoes(palavraDeEntrada, caixaSugestao, palavraPredefinida) {
  let textoMinusculo = palavraDeEntrada.value.toLowerCase();

  while (caixaSugestao.firstChild) {
    caixaSugestao.removeChild(caixaSugestao.firstChild);
  }

  if (textoMinusculo.length >= 3) {
    let sugestoesFiltradas = palavraPredefinida.filter((palavra) =>
      palavra.toLowerCase().startsWith(textoMinusculo)
    );

    if (sugestoesFiltradas.length > 0) {
      sugestoesFiltradas.forEach((sugestao) => {
        let itemSugerido = document.createElement('div');
        itemSugerido.classList.add('suggestion-item');
        itemSugerido.textContent = sugestao;
        itemSugerido.addEventListener('click', () => {
          palavraDeEntrada.value = sugestao; 
          while (caixaSugestao.firstChild) {
            caixaSugestao.removeChild(caixaSugestao.firstChild);
          }
          caixaSugestao.style.display = 'none';
        });
        caixaSugestao.appendChild(itemSugerido);
      });
      caixaSugestao.style.display = 'block';
    } else {
      caixaSugestao.style.display = 'none';
    }
  } else {
    caixaSugestao.style.display = 'none';
  }
}

function esconderSugestoes(evento, caixaSugestao, palavraDeEntrada) {
  //prettier-ignore 
  if (!caixaSugestao.contains(evento.target) && (evento.target !== palavraDeEntrada)) {
    caixaSugestao.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
