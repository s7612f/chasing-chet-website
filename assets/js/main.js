(function () {
  var nav = document.querySelector(".site-nav");
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add("is-solid");
    } else {
      nav.classList.remove("is-solid");
    }
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();
