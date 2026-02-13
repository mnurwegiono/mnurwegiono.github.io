(function(){
  const pages = document.querySelectorAll(".page");
  const links = document.querySelectorAll(".navlink[data-route]");
  const toggle = document.querySelector(".nav-toggle");
  const navlist = document.getElementById("navlist");
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // clone homepage News into News page
  const newsHome = document.querySelector("#about .news-list");
  const newsCloneWrap = document.getElementById("newsClone");
  if (newsHome && newsCloneWrap) {
    const clone = newsHome.cloneNode(true);
    newsCloneWrap.appendChild(clone);
  }

  function setActive(route){
    pages.forEach(p => p.classList.toggle("active", p.dataset.page === route));
    links.forEach(a => a.classList.toggle("active", a.dataset.route === route));

    if (navlist && navlist.classList.contains("open")) {
      navlist.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  }

  function routeFromHash(){
    const h = (location.hash || "#about").replace("#","");
    if (h === "news") return "news";
    // allow deep links to other sections/pages
    const known = ["about","profile","teaching","research","publications","contact","news"];
    return known.includes(h) ? h : "about";
  }

  window.addEventListener("hashchange", () => setActive(routeFromHash()));
  setActive(routeFromHash());

  links.forEach(a=>{
    a.addEventListener("click", () => setActive(a.dataset.route));
  });

  if (toggle && navlist){
    toggle.addEventListener("click", ()=>{
      const open = navlist.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
})();
