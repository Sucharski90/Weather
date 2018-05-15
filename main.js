console.log('working');
document.querySelector('#city').focus();

//create the api call and add a focus to the city input on page load
const btn = document.querySelector('button');
const api = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api_key = '&units=imperial&appid=8ea4a4c502e12757ddbe03749288ce29';

//
function runCode() {
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
      console.log("The current temp is " + json.main.temp + "º F");
      let humidity = document.querySelector('#humidity').checked;
      let high = document.querySelector('#high').checked;
      let wind = document.querySelector('#wind').checked;
      let clouds = document.querySelector('#clouds').checked;
      if (humidity == true) {
        document.querySelector("#humidity-node").innerHTML = "The current amount of humidity is " + json.main.humidity + "%";
      } if (high == true) {
        document.querySelector("#high-node").innerHTML = "The high for today will be " + json.main.temp_max + "º F";
      } if (wind == true) {
        document.querySelector("#wind-node").innerHTML = "The current wind speed is " + json.wind.speed + " mph";
      } if (clouds == true) {
        document.querySelector("#clouds-node").innerHTML = "The current cloud coverage is " + json.clouds.all + "%";
      }
  };

    console.log(city);
    getWeather();
  };

//modal
  let modal = document.querySelector('.modal');
  let closeBtn = document.querySelector('.closeBtn');
  
  function openModal() {
    modal.style.display = 'block';
  };

  function closeModal() {
    modal.style.display = 'none';
  }
  function outsideClick(e) {
    if(e.target == modal) {
    modal.style.display = 'none';
    }
  }

//triggers event
window.addEventListener('keydown', e => {
  if (e.keyCode === 13) {
  runCode();
  openModal();
  }
});
btn.addEventListener('click', e => {
  runCode();
  openModal();
});
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);