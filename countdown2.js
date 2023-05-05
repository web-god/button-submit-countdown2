var button = document.getElementById('js-btn'),
    timer = document.getElementById('js-timer'),
    reset = document.getElementById('js-reset');


button.addEventListener('click', doSubmit);
reset.addEventListener('click', resetButton);


function doSubmit() {
  
  if (button.classList.contains('do-submit')) { return; }

  // do clicked animation
  button.classList.add('do-submit');
  
  // TODO handle submit, should return amountLoaded
  
  // manually feed amountLoaded as if receiving 0-100% values
  setTimeout(function() {
    doTimer(0);
  }, 1200);
  
  setTimeout(function() {
    doTimer(15);
  }, 1200);

  setTimeout(function() {
    doTimer(75); 
  }, 2000);

  setTimeout(function() {
    doTimer(100);
  }, 2800);
}


function doTimer(amountLoaded) { 
  
  timer.style.strokeDashoffset = 3.83 * (100 - amountLoaded) + 'px';

  if (amountLoaded === 100) {
    setTimeout(function() {
      button.classList.add('success');
    }, 500);
  }
}


function resetButton() {
  // reset button classes
  button.classList.add('reset');
  setTimeout(function() {
    button.classList.remove('success');
    button.classList.remove('do-submit');
    button.classList.remove('reset');
  }, 500);
  // reset timer animation
  timer.style.strokeDashoffset = '383px';
  // reset timer counter
  time = 110;
}
