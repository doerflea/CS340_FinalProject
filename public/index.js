var focus_variable = -1;
var catCards = document.getElementsByClassName('cat-card');
var last_target;

console.log(catCards)
//Adds event listener which changes focus variable and background color of cat card to each cat card
function addListToCats(){
  for(var i = 0; i < catCards.length; i++){
  catCards[i].addEventListener('click',function(event) {
      if(focus_variable > -1){
        last_target.style['background-color'] = "white";

     }
      event.currentTarget.style['background-color'] = "#ededf0";
      last_target = event.currentTarget;
      focus_variable = 0;

});
}
}
window.onload = addListToCats();
