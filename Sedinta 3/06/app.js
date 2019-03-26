var form = document.querySelector('form'),
nameInput = document.getElementById('nameInput'),
passInput = document.getElementById('passInput'),
passRepeatInput = document.getElementById('passRepeatInput');

form.addEventListener('submit', function(e) {
  var nameValue = nameInput.value,
  passValue = passInput.value,
  passRepeatValue = passRepeatInput.value;

if (passValue === passRepeatValue) {
  console.log('Numele este: ' + nameValue + '; cu parola: ' + passValue);
} else {
  console.log('!egal');
  alert ('nu sunt egale');
}

  e.preventDefault();
});
