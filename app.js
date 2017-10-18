var displayBeers = function(beerArray) {
  beerArray.forEach(function(beer){
    renderBeerTile(beer);
  })
}

var renderBeerTile = function(beer){
  var framingDiv = document.getElementById("main");
  var div = document.createElement("div");
  div.className = "beer-container"

  var p1 = document.createElement("p");
  var p2 = document.createElement("p");
  p1.innerHTML = "<b>" + beer.name + "</b>";
  p2.innerText = beer.tagline;

  var img = document.createElement("img")
  img.src = beer.image_url;
  img.height = 200;
  div.appendChild(p1)
  div.appendChild(p2)
  div.appendChild(img)
  framingDiv.appendChild(div)
  addIngredients(beer);

  // framingDiv.addEventListener("click", function(beer){
  //   displayExtraDetails(beer);
  //   console.log("hover function... yah?", beer);
  // })
}

var displayExtraDetails = function(beer){
  console.log(beer);
  var malt = document.createElement("p")
  malt.innerText = "Malt(s):"
  var ul = document.createElement("ul");
  var li1 = document.createElement("li")
  var description = document.createElement("p");
  description.innerText = beer.description;
  var foodPairing = document.createElement("p");
  foodPairing.innerText = "This lovely brew pairs with";
  // for(var i = 0; i < 10; i++){
  //   if(!undefined){foodPairing.innerText += ", " + this.beer.food_pairing[i] ;}
  // };
  var ingredients = document.createElement("p");
  ingredients.innerText = "Ingredients are: ";
  var malt = [];
  var hops = [];
  for(var i = 0; i < 10; i++){

  }
  div.appendChild(description);
  div.appendChild(foodPairing);

}

var app = function() {
  var url = "https://api.punkapi.com/v2/beers";
  var request = new XMLHttpRequest();

  request.open("Get", url);

  request.addEventListener('load', function() {
    var beers = JSON.parse(this.responseText);
    displayBeers(beers);
  })
  request.send();
}



window.addEventListener("DOMContentLoaded", app);
