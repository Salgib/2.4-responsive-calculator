function alertButtonValue(event) {
  var button = event.target;
  var text = button.textContent;
  alert(text);
}

[].forEach.call(document.querySelectorAll('.word'), function(element){
  element.addEventListener('click', alertButtonValue);
}, false);
