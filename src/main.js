// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import rainy from './assets/images/rainy-background.jpg';
import cloudy from './assets/images/cloudy-2.jpg';
import sunny from './assets/images/sunny-background.jpg';
// import { Tama } from './tamagotchi';
// import { Player } from './tamagotchi';

$(document).ready(function() {
  $("#locationButton").click(function() {
    const city = $("#location").val();
    $('location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY_WEATHER}`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      if (response.weather[0].main === "Rain" || response.weather[0].main === "Drizzle" || response.weather[0].main === "Thunderstorm") {
        $('.weather').text(`It is a rainy day!`);
        document.getElementById("background").style.backgroundImage = `url(${rainy})`;
      } else if (response.weather[0].main === "Clouds") {
        $('.weather').text(`It is a cloudy day!`);
        document.getElementById("background").style.backgroundImage = `url(${cloudy})`;
      } else {
        $('.weather').text(`It is a clear day!`);
        document.getElementById("background").style.backgroundImage = `url(${sunny})`;
      }
    };
  });
});