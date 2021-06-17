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

function checkedBox() {
  const button = document.getElementById('submit-btn');
  const checkBox = document.getElementById('agreement');
  if (checkBox.checked === true) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

const sendForm = document.getElementById('agreement');
sendForm.addEventListener('click', checkedBox);
