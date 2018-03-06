
const testBtn = document.getElementById('testBtn');
testBtn.addEventListener('click', loadData);


function loadData () {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.fixer.io/latest', true);

  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  }

  xhr.send();
}
