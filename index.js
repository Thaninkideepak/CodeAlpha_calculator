const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Bonus: Keyboard Support
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if ((/\d|[+\-*/.]/).test(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
