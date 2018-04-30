console.log('working');

//create the api call and add a focus to the city input on page load
const btn = document.querySelector('button');
const api = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api_key = '&units=imperial&appid=8ea4a4c502e12757ddbe03749288ce29';
document.querySelector('#city').focus();

// get the checkboxes
const humidity = document.querySelector('#humidity');
const percipitation = document.querySelector('#percipitation');
const wind = document.querySelector('#wind');
const clouds = document.querySelector('#clouds');

// call weather info on click of the btn 
btn.addEventListener('click', event => {
    let city = document.querySelector('#city').value;
    let country = document.querySelector('#country');
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
      console.log("The current temp is " + json.main.temp + " degrees Fahrenheit");
  }
    function displayInfo() {
        const newDiv = document.createElement('div');
        newDiv.id = 'showWeather';
        let currentWeather = document.createTextNode("The current temp is " + " degrees Fahrenheit");
        newDiv.appendChild(currentWeather);


    }
    console.log(city);
    getWeather();
    displayInfo();
})

//get weather info on enter key press
window.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
    let city = document.querySelector('#city').value;
    let country = document.querySelector('#country');
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
      console.log("The current temp is " + json.main.temp + " degrees Fahrenheit");
  }
    function displayInfo() {
        const newDiv = document.createElement('div');
        newDiv.id = 'showWeather';
        let currentWeather = document.createTextNode("The current temp is " + " degrees Fahrenheit");
        newDiv.appendChild(currentWeather);


    }
    console.log(city);
    getWeather();
    displayInfo();
    }
})