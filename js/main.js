const btn = document.querySelector(".bttn");
const whatsapp = document.querySelector(".whatsapp");

btn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.onscroll = function () {
  if (window.scrollY >= 700) {
    btn.classList.add("show");
    whatsapp.style.opacity = "0.7";
  } else {
    btn.classList.remove("show");
    whatsapp.style.opacity = "1";
  }
};

//=====================================

const geardiv = document.querySelector(".gear");
const gearicon = geardiv.children[0];

const mainslider = document.querySelector(".setting-box");
let colorsLi = document.querySelectorAll(".colors-list li");

//==========================================
//toggle class ("open") to main div
geardiv.addEventListener("click", () => {
  mainslider.classList.toggle("open");
});

// close setting box when click outside it
document.addEventListener("mouseup", (e) => {
  if (!mainslider.contains(e.target)) {
    mainslider.classList.remove("open");
  }
});

//=========================================

//check if there is color in localstorage
if (localStorage.getItem("color")) {
  // add current color to document
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color")
  );
  //remove active class from lis
  colorsLi.forEach(function (li) {
    li.classList.remove("active");

    // add active class to current li
    if (li.dataset.color === localStorage.getItem("color")) {
      li.classList.add("active");
    }
  });
}

// loop over every list item
colorsLi.forEach((li) => {
  //add click event on lis
  li.addEventListener("click", function (e) {
    // change main color in root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // add color to local storage
    localStorage.setItem("color", e.target.dataset.color);

    //remove active class from lis
    colorsLi.forEach((li) => {
      li.classList.remove("active");
    });

    // add active to current li
    e.target.classList.add("active");
  });
});
