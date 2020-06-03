var focus_variable = -1;
var catCards = document.getElementsByClassName('cat-card');
var cat_id = -1;

console.log(catCards)
//Adds event listener which changes focus variable and background color of cat card to each cat card
function addListToCats() {
  for (var i = 0; i < catCards.length; i++) {
    catCards[i].addEventListener('click', function (event) {
      if (cat_id > -1) {
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
feed.addEventListener('click', function () { stat("data-feed-stat", "feed-stat-text") });

var feed = document.getElementById("Groom");
feed.addEventListener('click', function () { stat("data-groom-stat", "data-groom-text") });

var feed = document.getElementById("Play");
feed.addEventListener('click', function () { stat("data-play-stat", "data-play-text") });
var xhr = new XMLHttpRequest();

function stat(att, text_el) {
  console.log(att);
  var att_value = document.getElementById(cat_id).getAttribute(att);
  if(att_value < 2){
  att_value = Number(att_value) + 1
  request_text = "/CatsPage/update_data/" + att.replace("data-", "").replace("-", "_") + "/" + att_value + "/" + cat_id;
  console.log(request_text)
  document.getElementById(cat_id).setAttribute(att, att_value);
  var textcon = document.getElementById(cat_id).getElementsByClassName(text_el)
  textcon[0].textContent = att_value + "/2";
  console.log(textcon[0].textContent)
  xhr.open("POST", request_text, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send()
  var data_total = document.getElementById(cat_id).getElementsByClassName(att).textContent = data_total;
  console.log("post sent")
}
}

function deleteCat(id) {
  console.log("deleteCat in index.js");
  if (window.confirm("Delete this cat?")) {
    request_text = "/DeleteCat/" + id;
    console.log(request_text);
    xhr.open("POST", request_text, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    console.log("post sent " + request_text)
  }
}
