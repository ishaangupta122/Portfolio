window.addEventListener("scroll", function () {
  const navbar = document.getElementById("header");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navigation_list");
  const navbar1 = document.getElementById("navigation_list1");
  const navbar2 = document.getElementById("navigation_list2");
  const navbar3 = document.getElementById("navigation_list3");
  const navbar4 = document.getElementById("navigation_list4");
  const navbar5 = document.getElementById("navigation_list5");

  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    navbar1.classList.add("scrolled");
    navbar2.classList.add("scrolled");
    navbar3.classList.add("scrolled");
    navbar4.classList.add("scrolled");
    navbar5.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    navbar1.classList.remove("scrolled");
    navbar2.classList.remove("scrolled");
    navbar3.classList.remove("scrolled");
    navbar4.classList.remove("scrolled");
    navbar5.classList.remove("scrolled");
  }
});
