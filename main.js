console.log('working');
document.querySelector('#city').focus();

//create the api call and add a focus to the city input on page load
const btn = document.querySelector('button');
const api = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api_key = '&units=imperial&appid=8ea4a4c502e12757ddbe03749288ce29';

//
function runCode() {
    let city = document.querySelector('#city').value;
    let weather_api = api + city + api_key;

    function getWeather() {
    $.ajax({
      method: "GET",
      url: weather_api,
      data: $("form").serialize(),
      success: onSuccess,
      error: onError,
    });
  }
    function onSuccess(json) {
      document.querySelector("#current-node").innerHTML = "The current temp is " + json.main.temp + "º F";
      let humidity = document.querySelector('#humidity').checked;
      let high = document.querySelector('#high').checked;
      let wind = document.querySelector('#wind').checked;
      let clouds = document.querySelector('#clouds').checked;
      if (humidity == true) {
        document.querySelector("#humidity-node").innerHTML = "Current amount of humidity is " + json.main.humidity + "%";
      } else {
        document.querySelector("#humidity-node").innerHTML = "";
      };
      if (high == true) {
        document.querySelector("#high-node").innerHTML = "High for today will be " + json.main.temp_max + "º F";
      } else {
        document.querySelector("#high-node").innerHTML = "";
      };
      if (wind == true) {
        document.querySelector("#wind-node").innerHTML = "Current wind speed is " + json.wind.speed + " mph";
      } else {
        document.querySelector("#wind-node").innerHTML = "";
      };
      if (clouds == true) {
        document.querySelector("#clouds-node").innerHTML = "Current cloud coverage is " + json.clouds.all + "%";
      }else {
        document.querySelector("#clouds-node").innerHTML = "";
      };
  };
    console.log(city);
    getWeather();
  };

  //handle errors
  function onError() {
    let city = document.querySelector('#city').value;
    if(city == "" || city != NaN) {
      document.querySelector("#current-node").innerHTML = "Enter a City"
    }
    //just to see if this works
    console.log("bad")
  }


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