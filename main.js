console.log('working');

const btn = document.querySelector('button');
const api = 'http://api.openweathermap.org/data/2.5/weather?q=';
const api_key = '&units=imperial&appid=8ea4a4c502e12757ddbe03749288ce29';
let weather_api = api + city + api_key;

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
    let city = document.querySelector('#city').value;
    let country = document.querySelector('#country');
    console.log(city);
    getWeather();
})


