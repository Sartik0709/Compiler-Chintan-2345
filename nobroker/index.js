var links = document.querySelectorAll(".box a");

function changeColor(event) {
  links.forEach(function (link) {
    link.style.color = "black";
  });
  this.style.color = "red";
}
