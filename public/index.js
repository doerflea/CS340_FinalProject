
//var cat_in_focus = 0;

/**
**Function Name: addListToCats
**Input: N/A
**Description: Adds event listener when cat card is created which changes cat_in_focus variable
*/
/*
function addListToCats(){
  for(var i = 0; i < catCards.length; i++){
  catCards[i].addEventListener('click',function(event) {
      catCards[cat_in_focus].style['background-color'] = "white";
      event.currentTarget.style['background-color'] = "#ededf0";
      cat_in_focus = event.currentTarget.getAttribute("data-cat-num");
});
}
}


function createCatCard(){
  img_num = Math.floor(Math.random() * 4); // Generates random number (0-3) in order to select a random cat img from catImage array
  var catHTML = Handlebars.templates.catCard({
    catID: "cat" + cat_tracker,
    catNUM: cat_tracker,
    age: 0,
    photoURL: kittenImgURL[img_num],
    color: img_num,
    feedStat: 0,
    groomStat: 0,
    playStat: 0,
    total: 0
  });
  var cats = document.getElementById('cats');
  cats.insertAdjacentHTML('beforeend',catHTML);
  addListToCats();
}*/
