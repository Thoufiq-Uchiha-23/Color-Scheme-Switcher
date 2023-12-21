const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (mode) {
    console.log(mode);
    console.log(mode.target);
    if (mode.target.id === 'grey') {
      body.style.backgroundColor = '#aaa';
    }
    if (mode.target.id === 'white') {
      body.style.backgroundColor = 'white';
    }
    if (mode.target.id === 'blue') {
      body.style.backgroundColor = 'rgb(61, 61, 233)';
    }
    if (mode.target.id === 'yellow') {
      body.style.backgroundColor = 'rgb(230, 230, 61)';
    }
  });
});
