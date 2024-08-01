let counter = 0;

const counterValue = document.querySelector(".counter-value");
const incrementBtn = document.querySelector(".increase");
const decrementBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
  counter++;
  counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
  }
  counterValue.innerHTML = counter;
});

// To reset the counter to zero
resetBtn.addEventListener("click", reset);

function reset() {
  counter = 0;
  counterValue.innerHTML = counter;
}

// dropdown

const dropbtn = document.querySelector(".dropbtn");
const dropdown = document.querySelector(".dropdown-content");
const options = document.querySelectorAll(".dropdown-content div");

dropbtn.addEventListener("click", function () {
  dropdown.classList.toggle("show");
});

// replacing drop button text
options.forEach((option) => {
  option.addEventListener("click", function (event) {
    var selectedText = event.target.innerText;
    dropbtn.innerText = selectedText;
    dropdown.classList.remove("show");
  });
});

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = dropdown;
    if (dropdowns.classList.contains("show")) {
      dropdowns.classList.remove("show");
    }
  } else if (event.target == modal) {
    modal.style.display = "none";
  }
};

// modal

const openBtn = document.querySelector(".open-button");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-button");

openBtn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

//Closing windows
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = dropdown;
    if (dropdowns.classList.contains("show")) {
      dropdowns.classList.remove("show");
    }
  }
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// accordion

const accordion = document.querySelectorAll(".accordion");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {

    for (let j = 0; j < accordion.length; j++) {
      if (accordion[j] !== this) {
        accordion[j].classList.remove("active");
        accordion[j].parentElement.classList.remove("open-tab");
        accordion[j].nextElementSibling.style.display = "none";
      }
    }

    this.classList.toggle("active"); //using this line to track state (for ease of styling)
  
    if(this.classList.contains("active")){
      this.parentElement.classList.add("open-tab");
    }
    else{
      this.parentElement.classList.remove("open-tab");

    }

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
