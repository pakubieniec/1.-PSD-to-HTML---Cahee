const mobileBtn = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const offElement = document.querySelectorAll(".fa-solid");

function openMenu() {
  menu.classList.toggle("off");
  for (let i = 0; i < offElement.length; i++) {
    offElement[i].classList.toggle("off");
  }
}

mobileBtn.addEventListener("click", openMenu);
