(function () {
  var nav = document.getElementById("mobile-nav");
  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.removeAttribute("open");
      });
    });
  }

  var links = document.querySelectorAll("[data-nav]");
  var sections = [];
  links.forEach(function (link) {
    var id = link.getAttribute("href");
    if (!id || id.charAt(0) !== "#") return;
    var section = document.querySelector(id);
    if (section) sections.push(section);
  });

  function updateNav() {
    var marker = window.scrollY + 110;
    var current = sections[0];
    sections.forEach(function (section) {
      if (section.offsetTop <= marker) current = section;
    });
    var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll > 0 && window.scrollY >= maxScroll - 2) {
      current = sections[sections.length - 1];
    }
    var hash = "#" + current.id;
    links.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === hash);
    });
  }

  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();
})();
