let navBar = document.querySelector(".navigation");

window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    navBar.classList.add("nav-shrink");
  } else {
    navBar.classList.remove("nav-shrink");
  }
});
