// on keyup function event
const po =document.getElementById("inpu");
function hi(){
  const counter = po.value.length;
  document.getElementById("character").innerHTML = counter;
  if (counter > 280){
    po.style.borderColor = "red"
    document.getElementById("character").innerHTML = "stop";
  }
  else{
    po.removeAttribute("style");
  }
}
// const actio = document.getElementById("inpu");
// function hi(){
//   const counter = actio.value.length;
//   document.getElementById("character").innerHTML = counter;
// }