let expression = "";

function press(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    document.getElementById("display").value = result;
    expression = result.toString();
  } catch (err) {
    document.getElementById("display").value = "Error";
    expression = "";
  }
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}
function Delete(){
    expression=expression.slice(0,-1)
    document.getElementById("display").value = expression
}