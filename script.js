const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropdownMenu = document.querySelector(".dropdown-menu");

// Ensure dropdown is hidden by default
dropdownMenu.classList.remove("open");

toggleBtn.onclick = function () {
  const isOpen = dropdownMenu.classList.toggle("open");
  toggleBtnIcon.classList.toggle("fa-times", isOpen);
  toggleBtnIcon.classList.toggle("fa-bars", !isOpen);
};

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden"); // Add class to hide the loader

  loader.addEventListener("transitionend", () => {
    // Check if the loader is still a child of document.body before removing it
    if (loader && loader.parentNode) {
      document.body.removeChild(loader);
    }
  });
});
