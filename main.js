console.log('working');

const btn = document.querySelector('button');

let city = document.querySelector('#city').value;
let country = document.querySelector('#country');

const api = 'http://api.openweathermap.org/data/2.5/weather?q=';
// let findCity = city;
const api_key = '&appid=8ea4a4c502e12757ddbe03749288ce29';
const weather_api = api + "new york" + api_key;


function getWeather() {
    $.ajax({
      method: "GET",
      url: weather_api,
      data: $("form").serialize(),
      success: onSuccess,
  
    });
  }

  function onSuccess(json) {
      console.log(json);
  }

btn.addEventListener('click', event => {
    // console.log(findCity);
    getWeather();
})


