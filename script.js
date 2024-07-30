let counter = 0;

const counterValue = document.querySelector('.counter-value');
const incrementBtn = document.querySelector('.increase');
const decrementBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {

    if(counter>0){
        counter--;
    }
    counterValue.innerHTML = counter;
});

// To reset the counter to zero
resetBtn.addEventListener('click', reset);

function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}

// dropdwon

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

