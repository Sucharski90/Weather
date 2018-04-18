console.log('working');

const weather_api = `http://api.openweathermap.org/data/2.5/weather?q=paris&appid=8ea4a4c502e12757ddbe03749288ce29`;
const btn = document.querySelector('button');

function getWeather() {
    $.ajax({
      method: "GET",
      url: weather_api,
      data: $("form").serialize(),
      success: onSuccess,
  
    });
  }

  function onSuccess(json) {
      console.log(json.main.temp);
  }

btn.addEventListener('click', event => {
    console.log('btn working');
    getWeather();
})



