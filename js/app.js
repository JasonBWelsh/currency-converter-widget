// API data
const testBtn = document.getElementById('testBtn');
testBtn.addEventListener('click', loadData);

// function loadData () {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://api.fixer.io/latest', true);
//   xhr.onload = function() {
//     if (xhr.status === 200) {
//       console.log(xhr.responseText);
//     }
//   }
//
//   xhr.send();
// }

// Fetch method
function loadData () {
  fetch('https://api.fixer.io/latest')
  .then(function(res) {
    console.log(res.json());
  })
  console.log(inputCur);
}

// page elements

const inputContainer = document.querySelector('.input-container');
const inputAmount = document.querySelector('#input-amount');
const inputCurrenySelect = document.querySelector('select[name^="input"]');

const outputContainer = document.querySelector('.output-container');
const outputAmount = document.querySelector('#output-amount');
const outputCurrenySelect = document.querySelector('select[name^="output"]');

let inputCur = inputCurrenySelect.options[inputCurrenySelect.selectedIndex].textContent;
let outputCur = outputCurrenySelect.options[outputCurrenySelect.selectedIndex].textContent;

// get input current select value on change
console.log(inputCur);
inputCurrenySelect.addEventListener('change', () => {
  inputCur = inputCurrenySelect.options[inputCurrenySelect.selectedIndex].textContent;
  console.log(inputCur);
});

// get output current select value on change
console.log(outputCur);
outputCurrenySelect.addEventListener('change', () => {
  outputCur = outputCurrenySelect.options[outputCurrenySelect.selectedIndex].textContent;
  console.log(outputCur);
});

//test data i/o

function inputToOutput() {
  let input = inputAmount.value;
  outputAmount.value = input;
  console.log(input);
}

inputAmount.addEventListener('keyup', inputToOutput);



console.log(outputCurrenySelect);
