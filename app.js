var app = function() {
var url = "https://api.punkapi.com/v2/beers";
var request = new XMLHttpRequest();

request.open("Get", url);

request.addEventListener('load', function() {
  var beers = JSON.parse(this.responseText);
  displayBeers(beers);
})


}


window.addEventListener("DOMContentLoaded", app);
