var focus_variable = -1;
var catCards = document.getElementsByClassName('cat-card');
var cat_id = -1;

console.log(catCards)
//Adds event listener which changes focus variable and background color of cat card to each cat card
function addListToCats(){
  for(var i = 0; i < catCards.length; i++){
  catCards[i].addEventListener('click',function(event) {
      if(cat_id > -1){
        last_target.style['background-color'] = "white";
     }
      event.currentTarget.style['background-color'] = "#ededf0";
      last_target = event.currentTarget;
      cat_id = event.currentTarget.getAttribute("data-id");

});

}
}
window.onload = addListToCats();

var feed = document.getElementById("Feed");
feed.addEventListener('click',  function(){ stat("data-feed-stat","feed-stat-text")});

/*var feed = document.getElementById("Groom");
feed.addEventListener('click',  function(){ stat("data-groom-stat","data-groom-text" )});
var feed = document.getElementById("Play");
feed.addEventListener('click',  function(){ stat("data-play-stat","data-play-text" )});*/
var xhr = new XMLHttpRequest();

function stat(att,text){
  var data_total = document.getElementById(cat_id).getAttribute(att);
  if(data_total < 2){
    data_total++;
    document.getElementById(cat_id).setAttribute(att, data_total);
    xhr.open("POST", "/CatsPage/data-feed-stat", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
    cat_id: cat_id,
    stat: data_total
  }));
  console.log("post sent")
}
    //document.getElementById(cat_id).getElementsByClassName(text).textContent = data_total + "/2";
}
