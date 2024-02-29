document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById('input_box');
  let buttons = document.querySelectorAll('button');
  let string = "";

  buttons.forEach(button => {
      button.addEventListener('click', (e) => {
          const buttonText = e.target.innerHTML;

          if (buttonText === '=') {
              try {
                  string = eval(string);
                  input.value = string;
              } catch (error) {
                  input.value = 'Error';
              }
          } else if (buttonText === 'c') {
              string = '';
              input.value = string;
          } else {
              string += buttonText;
              input.value = string;
          }
      });
  });
});