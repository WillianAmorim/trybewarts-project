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