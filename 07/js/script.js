// Função para configurar eventos de validação
function configurarEventosDeValidacao() {
  configurarValidacaoNome();
  configurarValidacaoEmail();
  configurarValidacaoCpf();
}

// Função para configurar validação do Nome
function configurarValidacaoNome() {
  const nomeInput = document.getElementById('nomeInput');
  const mensagemNome = document.getElementById('mensagemNome');

  if ((nomeInput instanceof HTMLInputElement) && (mensagemNome instanceof HTMLParagraphElement)) {
    nomeInput.addEventListener('keydown', (evento) => {
      const regexNome = /^[a-zA-ZÀ-ÿ\s]*$/;
      if (!regexNome.test(nomeInput.value + evento.key)) {
        atualizarMensagem(mensagemNome, 'Formato inválido', 'red');
      } else {
        atualizarMensagem(mensagemNome, 'Formato válido', 'green');
      }
    });
  }
}

// Função para configurar validação do E-mail
function configurarValidacaoEmail() {
  const emailInput = document.getElementById('emailInput');
  const mensagemEmail = document.getElementById('mensagemEmail');

  if ((emailInput instanceof HTMLInputElement) && (mensagemEmail instanceof HTMLParagraphElement)) {
    emailInput.addEventListener('input', () => {
      const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
      if (!regexEmail.test(emailInput.value)) {
        atualizarMensagem(mensagemEmail, 'Formato inválido', 'red');
      } else {
        atualizarMensagem(mensagemEmail, 'Formato válido', 'green');
      }
    });
  }
}

// Função para configurar validação do CPF
function configurarValidacaoCpf() {
  const cpfInput = document.getElementById('cpfInput');
  const mensagemCpf = document.getElementById('mensagemCpf');

  if ((cpfInput instanceof HTMLInputElement) && (mensagemCpf instanceof HTMLParagraphElement)) {
    cpfInput.addEventListener('input', () => {
      const cpfFormatado = formatarCpf(cpfInput.value);
      cpfInput.value = cpfFormatado;

      if (cpfFormatado.length === 14) {
        atualizarMensagem(mensagemCpf, 'Formato válido', 'green');
      } else {
        atualizarMensagem(mensagemCpf, 'Formato inválido', 'red');
      }
    });
  }
}

// Função para formatar CPF
function formatarCpf(cpf) {
  let cpfLimpo = cpf.replace(/\D/g, '');
  if (cpfLimpo.length > 3) cpfLimpo = cpfLimpo.replace(/(\d{3})(\d)/, '$1.$2');
  if (cpfLimpo.length > 7) cpfLimpo = cpfLimpo.replace(/(\d{3})(\d)/, '$1.$2');
  if (cpfLimpo.length > 11)
    cpfLimpo = cpfLimpo.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  return cpfLimpo;
}

// Função para atualizar mensagens
function atualizarMensagem(elemento, mensagem, cor) {
  elemento.textContent = mensagem;
  elemento.style.color = cor;
}

// Função para configurar evento de confirmação ao limpar o formulário
function configurarConfirmacaoDeReset() {
  const formulario = document.getElementById('formulario');

  if (formulario instanceof HTMLElement) {
    formulario.addEventListener('reset', (event) => {
      event.preventDefault();
      exibirConfirmacaoDeReset(formulario);
    });
  }
}

// Função para exibir confirmação ao limpar formulário
function exibirConfirmacaoDeReset(formulario) {
  //@ts-ignore
  Swal.fire({
    title: 'Confirmação',
    text: 'Tem certeza de que deseja limpar o formulário?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não',
  }).then((result) => {
    if (result.isConfirmed) {
      formulario.reset();
      limparMensagens();
    }
  });
}

// Função para limpar mensagens de validação
function limparMensagens() {
  document.querySelectorAll('p').forEach((p) => (p.textContent = ''));
}

// Função para exibir conteúdo validado
function exibirConteudoValidado(event) {
  event.preventDefault(); // Impede que o formulário seja enviado

  const nomeInput = document.getElementById('nomeInput');
  const emailInput = document.getElementById('emailInput');
  const cpfInput = document.getElementById('cpfInput');
  const resultado = document.getElementById('resultado');

  if (
    nomeInput instanceof HTMLInputElement &&
    emailInput instanceof HTMLInputElement &&
    cpfInput instanceof HTMLInputElement &&
    resultado instanceof HTMLParagraphElement
  ) {
    resultado.textContent = `Nome: ${nomeInput.value}, Email: ${emailInput.value}, CPF: ${cpfInput.value}`;
    resultado.style.color = 'blue';
  }
}

// Função inicializadora
function inicializar() {
  configurarEventosDeValidacao();
  configurarConfirmacaoDeReset();

  const validarBtn = document.getElementById('validarBtn');
  if (validarBtn instanceof HTMLButtonElement) {
    validarBtn.addEventListener('click', exibirConteudoValidado);
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
