const $loginBtn = document.getElementById('login-btn');
const $mailInput = document.getElementById('mail-input');
const $passwordInput = document.getElementById('password-input');

const $evaluationForm = document.getElementById('evaluation-form');
const $submitBtn = document.getElementById('submit-btn');
const $formName = document.getElementById('input-name');
const $formLastame = document.getElementById('input-lastname');
const $formemail = document.getElementById('input-email');
const $formHouse = document.getElementById('house');
const $formFrontend = document.getElementById('frontend');
const $formBackend = document.getElementById('backend');
const $formFullstack = document.getElementById('fullstack');
const $textarea = document.getElementById('textarea');
const $agreeCheckBox = document.getElementById('agreement');
const $counter = document.getElementById('counter');

const $formData = document.getElementById('form-data');
const $nome = document.getElementById('nome');
const $email = document.getElementById('email');
const $casa = document.getElementById('casa');
const $familia = document.getElementById('familia');
const $materias = document.getElementById('materias');
const $avaliacao = document.getElementById('avaliacao');
const $observacoes = document.getElementById('observacoes');

$loginBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if ($mailInput.value === 'tryber@teste.com' && $passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

$agreeCheckBox.addEventListener('click', () => {
  if ($submitBtn.disabled) {
    $submitBtn.removeAttribute('disabled');
  }
});

$textarea.addEventListener('input', () => {
  const count = 500 - ($textarea.value.length);
  $counter.innerText = `${count}`;
});

// $textarea.addEventListener('keydown', (event) => {
//   let count = parseInt($counter.innerText, 10); // 500
//   const { key } = event; //  stackOverflow
//   if (key === 'Delete' || key === 'Backspace') {
//     if (count < 500) {
//       count += 1;
//       $counter.innerText = `${count}`;
//     }
//   } else if (count > 0) {
//     count -= 1;
//     $counter.innerText = `${count}`;
//   }
// });

function fillFamily() {
  let family = $familia.innerText;
  if ($formFrontend.checked) {
    family = `Família: ${$formFrontend.value}`;
  } else if ($formBackend.checked) {
    family = `Família: ${$formBackend.value}`;
  } else {
    family = `Família: ${$formFullstack.value}`;
  }
  return family;
}

function fillSubject() {
  let subject = '';
  for (let index = 1; index <= 6; index += 1) {
    const $formSubject = document.getElementById(`${index}`);
    if ($formSubject.checked) {
      subject += `${$formSubject.value}, `;
    }
  }
  return `Matérias: ${subject}`;
}

function fillRate() {
  let rate = '';
  for (let index = 1; index <= 10; index += 1) {
    const $formR = document.getElementById(`v${index}`);
    if ($formR.checked) {
      rate = `${$formR.value}`;
    }
  }
  return `Avaliação: ${rate}`;
}

function fillInfo(event) {
  event.preventDefault();
  $nome.innerText = `Nome: ${$formName.value} ${$formLastame.value}`;
  $email.innerText = `Email: ${$formemail.value}`;
  $casa.innerText = `Casa: ${$formHouse.value}`;
  $familia.innerText = fillFamily();
  $materias.innerText = fillSubject();
  $avaliacao.innerText = fillRate();
  $observacoes.innerText = `Observações: ${$textarea.value}`;
  $formData.style.display = 'block';
  $evaluationForm.style.display = 'none';
}
$submitBtn.addEventListener('click', fillInfo);
