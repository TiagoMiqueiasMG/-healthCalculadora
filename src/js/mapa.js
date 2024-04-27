const description = document.querySelector(".tooltip");

document.querySelectorAll("path").forEach((el) =>
  el.addEventListener("mouseover", (event) => {
    event.target.className = "enabled";
    description.classList.add("active");
    description.innerHTML = event.target.id;
  })
);

document.querySelectorAll("path").forEach((el) =>
  el.addEventListener("mouseout", () => {
    description.classList.remove("active");
  })
);

document.onmousemove = function (e) {
  description.style.left = e.pageX + "px";
  description.style.top = e.pageY - 70 + "px";
};

<<<<<<< HEAD

// //  Botão Topo

// const backToTopButton = document.querySelector('.back-to-top')

// const backToTop = () => {
// if (window.scrollY >= 100) {
// backToTopButton.classList.add('show')
// } else {
// backToTopButton.classList.remove('show')
// }
// }

// window.addEventListener('scroll', function () {
// backToTop()
// })
=======
>>>>>>> 4142904653bfc321c4c209bd3339739227f5bf95
