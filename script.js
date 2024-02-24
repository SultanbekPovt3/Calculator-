let display = document.getElementById("display");

function appendToDisplay(value) {
  // Если на дисплее отображается ошибка, просто заменяем текст на введенную цифру
  if (display.value === "Error") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function removeLastChar() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let result = eval(display.value);
    display.value = result.toString();
  } catch (error) {
    display.value = "Error";
  }
}