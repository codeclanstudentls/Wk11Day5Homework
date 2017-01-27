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
//   var li document.createElement('li');

//}

var populateList = function(data) {
  var mainListDiv = document.querySelector('#main');
  var mainList = document.createElement('ul');
 
  var humidity = document.createElement('li');
  humidity.innerText = "Humidity = " + data.main.humidity;
  mainList.appendChild(humidity);
  mainListDiv.appendChild(mainList);
  
  var pressure = document.createElement('li');
  pressure.innerText = "Pressure = " + data.main.pressure;
  mainList.appendChild(pressure);
  mainListDiv.appendChild(mainList);

  var temperature = document.createElement('li');
  temperature.innerText = "Temperature (Celsius) = " + (data.main.temp - 273);
  mainList.appendChild(temperature);
  mainListDiv.appendChild(mainList);


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
