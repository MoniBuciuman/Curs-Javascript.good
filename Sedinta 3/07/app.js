var form = document.querySelector('form'),
nameInput = document.getElementById('nameInput'),
passInput = document.getElementById('passInput'),
passRepeatInput = document.getElementById('passRepeatInput'),
errorDiv = document.getElementById("errorMessage");

form.addEventListener('submit', function(e) {
  var nameValue = nameInput.value,
  passValue = passInput.value,
  passRepeatValue = passRepeatInput.value;

if (passValue === passRepeatValue) {
    var containsNumber = checkStringForNumbers(passValue);
  console.log('containsNumber: ', containsNumber);
  if(!containsNumber){
    errorDiv.style.display = "block";
}else{
  errorDiv.style.display = "none";

}
  console.log('Numele este: ' + nameValue + '; cu parola: ' + passValue);
} else {
  console.log('!egal');
}

  e.preventDefault();
});


function checkStringForNumbers(input){
  let str = String(input);
    for( let i = 0; i < str.length; i++){
        if(!isNaN(str.charAt(i))){           //if the string is a number, do the following
            return true;
        }
    }
    return false;
}
