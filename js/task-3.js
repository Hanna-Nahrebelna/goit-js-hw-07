/* 
* Напиши скрипт, який під час набору тексту в інпуті 
* input#name-input (подія input) підставляє його поточне значення 
* в span#name-output як імя для привітання. 
* Обовязково очищай значення в інпуті по краях від пробілів. 
* Якщо інпут порожній або містить лише пробіли, 
* то замість імені у спан має підставлятися рядок "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', (event) => {
    const inputValue = event.target.value.trim();

    if (inputValue) {
      nameOutput.textContent = inputValue;
    } else {
      nameOutput.textContent = 'Anonymous';
    }
  });

