let h1 = 0;

function myFunction() {

  var x = document.getElementById("Gen1");
  x.classList.toggle("hiddenH");
  var y = document.getElementById("bottomH");
    y.classList.toggle("hiddenH");

  if (h1 === 0 ){
  var y = document.getElementById("nameH");
  y.innerHTML="Click to hide first generation details";
   h1 = 1;
}
  else {
    var y = document.getElementById("nameH");
  y.innerHTML="Click to show first generation details";
    h1=0;
  }
  }