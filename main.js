const api = `https://amoghdevelopment.pythonanywhere.com/list`;
/* api */
let temperature = document.querySelector("#value-temperature");
let humdity = document.querySelector("#value-humidity");
let co2 = document.querySelector("#value-co2");
let ammonia = document.querySelector("#value-ammonia");
let airpressure = document.querySelector("#value-airpressure");
let airquality = document.querySelector("#value-airquality")

fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      temperature.textContent = data.Temperature;
    });
    