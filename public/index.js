var focus_variable = -1;
var catCards = document.getElementsByClassName('cat-card');
var cat_id = -1;

var kittenImgURL = ["images/black-kitten.jpg", "images/orange-kitten.jpg", "images/siamese-kitten.jpg"];
var adultImgURL = ["images/black-adult.jpg", "images/orange-adult.jpg", "images/siamese-adult.jpg"];

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

var groom = document.getElementById("Groom");
groom.addEventListener('click', function () { stat("data-groom-stat", "groom-stat-text") });

var play= document.getElementById("Play");
play.addEventListener('click', function () { stat("data-play-stat", "play-stat-text") });
var xhr = new XMLHttpRequest();

function stat(att, text_el) {
  var att_value = document.getElementById(cat_id).getAttribute(att);
  var val = Number(document.getElementById(cat_id).getAttribute("data-play-stat")) +
    Number(document.getElementById(cat_id).getAttribute("data-groom-stat")) +
    Number(document.getElementById(cat_id).getAttribute("data-feed-stat"));
    var textcon = document.getElementById(cat_id).getElementsByClassName(text_el)
    console.log(textcon[0].textContent = att_value + "/2");

  if(att_value < 2){
    att_value = Number(att_value) + 1;
    document.getElementById(cat_id).setAttribute(att, att_value);
    textcon[0].textContent = att_value + "/2";
    img_swap();
    //Sent stat update to server
    request_text = "/CatsPage/update_data/" + att.replace("data-", "").replace("-", "_") + "/" + att_value + "/" + cat_id;
    //console.log(request_text)

    xhr.open("POST", request_text, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send()
  }
}

function img_swap(){
  //Check if cat is adult
  var val = Number(document.getElementById(cat_id).getAttribute("data-play-stat")) +
    Number(document.getElementById(cat_id).getAttribute("data-groom-stat")) +
    Number(document.getElementById(cat_id).getAttribute("data-feed-stat"));
    console.log(val)

  if(val == 6){
    var color_id = Number(document.getElementById(cat_id).getAttribute("data-color"));
    document.getElementById(cat_id).getElementsByClassName('catImg')[0].src = adultImgURL[1];
    var xhr = new XMLHttpRequest();
    request_text = "/CatsPage/update_img/" + cat_id + "/" + color_id;
    console.log(request_text)
    xhr.open("POST", request_text, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send()
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
