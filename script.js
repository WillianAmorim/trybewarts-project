// Função de clicar no botão
function btnClick() {
  const login = document.getElementById('login');
  const pass = document.getElementById('pass');
  if (login.value === 'tryber@teste.com' && pass.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

const clickButton = document.getElementById('submit');
clickButton.addEventListener('click', btnClick);

// Função de conferir se o checkbox foi checkado
function checkedBox() {
  const button = document.getElementById('submit-btn');
  const checkBox = document.getElementById('agreement');
  if (checkBox.checked === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

// Evento de habilitar o botão quando o checkbox for checado
const sendForm = document.getElementById('agreement');
sendForm.addEventListener('click', checkedBox);

// Função para contabilizar o número de caracteres na textarea
function countText() {
  const check = document.getElementById('textarea').value;
  const total = 500 - check.length;
  document.getElementById('counter').innerHTML = total;
}

// Evento para atualizar o contador
const refreshCounter = document.getElementById('textarea');
refreshCounter.addEventListener('keyup', countText);
