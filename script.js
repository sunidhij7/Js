if (document.querySelector(".counter")) {
  let counter = 0;
  const counterValue = document.querySelector(".counter__value");
  const incrementBtn = document.querySelector(".counter__buttons--increase ");
  const decrementBtn = document.querySelector(".counter__buttons--decrease");
  const resetBtn = document.querySelector(".counter__buttons--reset");

  incrementBtn.addEventListener("click", () => {
    counter++;
    counterValue.innerHTML = counter;
  });

  decrementBtn.addEventListener("click", () => {
      counter--;
    counterValue.innerHTML = counter;
  });

  resetBtn.addEventListener("click", reset);
  function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
  }

  var nextPage = "./dropdown.html";
}
if (document.querySelector(".dropdown")) {
  const dropdownOpenTrigger = document.querySelector(
    ".dropdown__trigger-button"
  );
  const dropdown = document.querySelector(".dropdown__panel");
  const options = document.querySelectorAll(".dropdown__panel__option");

  dropdownOpenTrigger.addEventListener("click", function () {
    dropdown.classList.toggle("show");
  });

  // replacing drop button text
  options.forEach((option) => {
    option.addEventListener("click", function (event) {
      const selectedText = event.target.innerText;
      dropdownOpenTrigger.innerText = selectedText;
      dropdown.classList.remove("show");
    });
  });

  window.onclick = function (event) {
    if (!event.target.matches(".dropdown__trigger-button")) {
      if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
      }
    }
  };
  var prevPage = "./index.html";
  var nextPage = "./modal.html";
}
if (document.querySelector(".modal")) {
  const openBtn = document.querySelector(".modal__trigger-button");
  const modal = document.querySelector(".modal__background-panel");
  const closeBtn = document.querySelector(
    ".modal__background-panel__foreground-panel--close-trigger"
  );

  openBtn.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  //Closing windows
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  var prevPage = "./dropdown.html";
  var nextPage = "./accordion.html";
}
if (document.querySelector(".accord")) {
  const accordion = document.querySelectorAll(".accordion");
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      for (let j = 0; j < accordion.length; j++) {
        if (accordion[j] !== this) {
          accordion[j].classList.remove("active");
          accordion[j].parentElement.classList.remove("open-tab");
          accordion[j].nextElementSibling.style.display = "none";
        }
      }

      this.classList.toggle("active"); //using this line to track state (for ease of styling)

      if (this.classList.contains("active")) {
        this.parentElement.classList.add("open-tab");
      } else {
        this.parentElement.classList.remove("open-tab");
      }

      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  var prevPage = "./modal.html";
}

//Navigation through buttons
const nextBtn = document.querySelector(".next-button");
const backBtn = document.querySelector(".back-button");
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    window.location.href = nextPage;
  });
}
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = prevPage;
  });
}
