var data = null;

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();

  populateList(data);
}

var url = "http://api.openweathermap.org/data/2.5/weather?q=Edinburgh,uk&appid=" + apiKey;


var display = function(data){
    var container = document.getElementById('#main-conditions');
}

var populateList = function(main) {
  var data = document.querySelector('#main-conditions');

  console.log(data);

  data.main.forEach(function(main) {
    var div = document.createElement('#main-conditions');
    div.innerText = main.name;
    div.value = main.name;
    data.appendChild(div);
  });
}









window.onload = function(){
  makeRequest(url, function(){
    if (this.status !== 200) return;
    var jsonString = this.responseText;
    var data = JSON.parse(jsonString);
    console.log(data);
  });
  
  }
