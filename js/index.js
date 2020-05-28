showup();
function showup() {
  var x = document.querySelector(".contact_2");
  x.addEventListener("click", find);
  console.log("running");
}

function find(e) {
  console.log(e.target.classList);
  if ((e.classList = "fas fa-sort-down")) {
    var x = document.querySelector(".image_put");
    x.style.display === "block";
  }
}
