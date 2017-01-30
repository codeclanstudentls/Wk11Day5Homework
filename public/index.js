var data = null;

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var url = "http://api.openweathermap.org/data/2.5/weather?q=Edinburgh,uk&appid=" + apiKey;

// var displayData = function() {
//   var ul document.createElement('ul');
//   ul.innerHTML = 'main' + data.main.humidity;
//   mainList.appendChild('li');

//   var li document.createElement('li');


// }

var populateList = function(data) {
  var mainListDiv = document.querySelector('#main');
  // var mainListDiv = document.querySelector('#wind');
  var mainList = document.createElement('ul');
 
  var humidity = document.createElement('li');
  humidity.innerText = "Humidity = " + data.main.humidity;
  mainList.appendChild(humidity);
  mainListDiv.appendChild(mainList);
  
  var pressure = document.createElement('li');
  pressure.innerText = "Pressure = " + data.main.pressure;
  mainList.appendChild(pressure);
  mainListDiv.appendChild(mainList);

  var wind = document.createElement('li');
  wind.innerText = "Wind (mph) = " + data.wind.speed;
  mainList.appendChild(wind);
  mainListDiv.appendChild(mainList);

  var temperature = document.createElement('li');
  temperature.innerText = "Temperature ℃ = " + Math.ceil(data.main.temp  - 273.15);
  
  mainList.appendChild(temperature);
  mainListDiv.appendChild(mainList);


}


// var handleButtonClick = function(event){

//   var buttonResult = document.querySelector('#button-result');
//   buttonResult.innerHTML =  
//   console.log(event);
// }

// var searchButton = document.querySelector('button');
//   var url = 'http://openweathermap.org/'
//   button.onclick = function(){
//       makeRequest(url, requestComplete);

// }

// var tempSelectButton = document.querySelector('button');
//   button.onclick = function(){

//   }


var app = function(){
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var input = document.querySelector('input');
  input.onkeyup = handleKeyPress;

  var select = document.querySelector('select');
  select.onchange = handleSelectChange;
}



window.onload = function(){
  makeRequest(url, function(){
    if (this.status !== 200) return;
    var jsonString = this.responseText;
    var data = JSON.parse(jsonString);
    console.log(data);

    populateList(data);

  });
  
  }
