let filterInput = document.getElementById("filterInput");

filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  //get value of input
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  //get names ul
  let names = document.getElementById("names");
  //get lis from ul
  let li = names.querySelectorAll("li.collection-item");

  //loop through collection-item lis
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];

    //if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
