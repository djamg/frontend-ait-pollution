const api = `https://amoghdevelopment.pythonanywhere.com/list2`;
/* api */
let temperature = document.querySelector("#value-temperature");
let humdity = document.querySelector("#value-humidity");
let co2 = document.querySelector("#value-co2");
let ammonia = document.querySelector("#value-ammonia");
let airpressure = document.querySelector("#value-airpressure");
let airquality = document.querySelector("#value-airquality");
let date = document.querySelector("#date-value");
let time = document.querySelector("#time-value");

var today = new Date();
date.textContent = today.toDateString();
time.textContent = today.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});;


fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      temperature.textContent = data.Temperature;
      humdity.textContent = data.Humidity;
      co2.textContent = Math.round(data.MQ5);
      ammonia.textContent = Math.round(data.MQ8);
      airpressure.textContent = "1.01";
      airquality.textContent = Math.round(data.MQ135);
    });
    