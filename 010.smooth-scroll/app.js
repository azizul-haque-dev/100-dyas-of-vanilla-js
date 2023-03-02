const links = document.querySelectorAll(".list li a");
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let href = e.target.getAttribute("href");
    console.log(href);
    const element = document.querySelector(href);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });
});
// function smoothScrool(e) {
//   e.preventDefault();
//   let href = this.getAttribute("href");
//   let item = document.querySelector(href);
//   console.log(item);
//   //   document.querySelector(href).scrollIntoView({
//   //     behavior: "smooth",
//   //   });
// }
