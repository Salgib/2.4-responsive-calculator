function alertButtonValue(event) {
  var button = event.target;
  var text = button.textContent;
  alert(text);
}

[].forEach.call(document.querySelectorAll('.word'), function(element){
  element.addEventListener('click', alertButtonValue);
}, false);

function alertNumberPlusNumber(event) {
  var button = event.target;
  var number = Number(button.textContent);
  alert(number + number);
}

[].forEach.call(document.querySelectorAll('.number'), function(element){
  element.addEventListener('click', alertNumberPlusNumber);
}, false);
