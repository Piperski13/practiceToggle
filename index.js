// The word "toggle" means turn on/off.
function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {

    
    turnOffPreviousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const value = document.querySelector('.is-toggled');
  if(value){
    value.classList.remove('is-toggled');
  }
}

function toggleBox(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('border-toggle')) {
    // turnOffPreviousBox();
    button.classList.add('border-toggle');
  } else {
    button.classList.remove('border-toggle');
  }
}
// if the button is on, box is green

// function turnOffPreviousBox() {
//   const value = document.querySelector('.border-toggle');
//   if(value){
//     value.classList.remove('border-toggle');
//   }
// }