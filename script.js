var operators = {
    '+': function(a, b) { return +a + (+b) },
    '-': function(a, b) { return a - b },
    '/': function(a, b) { return a / b },
    '*': function(a, b) { return a * b },
};
function calculator() {
  var cel = document.getElementById("NumberF").value;
 var celular = document.getElementById("NumberS").value;
  var operator = document.getElementById("NumberO").value;
  var result = document.getElementById("resul");
  if(cel && celular && operator)
    result.innerHTML = operators[operator](cel, celular);
};