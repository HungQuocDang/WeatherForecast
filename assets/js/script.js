

var cityName = 0;
var temperature1 = 0;
var weather = 0;
var windSpeed = 0;
//var humidity = 0;

function doSearchCity() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;
  let selectedCity=x;
  console.log("selectedCity: ", selectedCity);


numMaxDays=5;
let matrixWeather=[];

//http://api.openweathermap.org/geo/1.0/direct?q=Ottawa,CA&limit=5&appid=072c5a4ab04eb390a91ac908259464d0
//https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=072c5a4ab04eb390a91ac908259464d0


let textA="https://api.openweathermap.org/geo/1.0/direct?q=";

let textB=selectedCity;
let textC=",CA&limit=5&appid=072c5a4ab04eb390a91ac908259464d0";
let resultAB=textA.concat(textB);
let resultABC=resultAB.concat(textC);
weatherUrl=resultABC;

//var weatherUrl="https://api.openweathermap.org/geo/1.0/direct?q=Montreal,CA&limit=5&appid=072c5a4ab04eb390a91ac908259464d0";
//var weatherUrl="https://api.openweathermap.org/geo/1.0/direct?q=Ottawa,CA&limit=5&appid=072c5a4ab04eb390a91ac908259464d0";
console.log("weatherUrl", weatherUrl);

fetch(weatherUrl)
//fetch("https://api.openweathermap.org/geo/1.0/direct?q=Ottawa,CA&limit=5&appid=072c5a4ab04eb390a91ac908259464d0")
  .then(response => response.json()).then(cityNameInfo => {
    console.log("entrance:",cityNameInfo);
    var lat = cityNameInfo[0].lat;
    var lon = cityNameInfo[0].lon;
    console.log("cityNameInfo",cityNameInfo);
    //console.log("cityNameInfo.lenght",cityNameInfo[0].lenght);
    console.log("lon", lon);
    console.log("lat", lat);
    //jsonlat=JSON.parse(lat);
    //jsonlon=JSON.parse(lon);
    //console.log("jsonlon", jsonlon);
    //console.log("jsonlat", jsonlat);

    var searchedCity = cityNameInfo[0].name;
    console.log("searchedCity A:", searchedCity );
    var url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=072c5a4ab04eb390a91ac908259464d0`;
    fetch(url)
      .then(response => response.json()).then(forecastInfo => {
     
       
        //console.log("forecastInfo",forecastInfo);

        for (let k=0; k<=numMaxDays; k++)  {
        let temDay=(forecastInfo.daily[k].temp.day);
        let humidity=(forecastInfo.daily[k].humidity);
        let windSpeed=(forecastInfo.daily[k].wind_speed);
        let weatherIcon=(forecastInfo.daily[k].weather[0].icon);
        let weatherIcodDescrpipt=(forecastInfo.daily[k].weather[0].description);
        
                  var listWeather = {
                    temDayN: temDay,
                    humidityN:humidity,
                    windSpeedN: windSpeed,
                    weatherIconN: weatherIcon,
                    weatherIcodDescrpiptN: weatherIcodDescrpipt,
                    searchedCityN: searchedCity           
                  }
        matrixWeather.push(listWeather);      
       }
       console.log("todayDateNumA", todayDateNum);
       console.log("matrixWeather[1].weatherIcodDescrpiptN", matrixWeather[1].weatherIcodDescrpiptN);
      });

  })
console.log("matrixWeather", matrixWeather);

var localTime=0;
var today = dayjs();
var currentHour=dayjs().hour();
var todayTime = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY, HH:ss'));
todayTime =(today.format('h:mm:ss a'));
console.log("todayTime", todayTime);
todayDate=today.format('MMM D, YYYY, HH:ss');
nowYear=2023;
nowMonth=6-1;
nowDate=31;
//w: var d = new Date(nowYear, nowMonth, nowDate);
var d = new Date(nowYear, nowMonth, nowDate);
var dayFuture = dayjs(d);
console.log("dayFuture", dayFuture[0]);
//todayDatePlusOne=(today+).format('MMM D, YYYY, HH:ss');
todayDateNum=today.format('D');
console.log("todayDate", todayDate);
//console.log("todayDate+1", todayDatePlusOne);
console.log("todayDateNum", todayDateNum);
localStorage.clear();

//api.openweathermap.org/data/2.5/forecast/daily?q=Ottawa,&cnt=5&appid=072c5a4ab04eb390a91ac908259464d0

var a1Http= "https:";
  var a2Http="//openweathermap.org/img/wn/";
  var openWeatherCode="10d";
  var a3Http="@2x.png";
  var totalHttp=a1Http+a2Http+openWeatherCode+a3Http;
  console.log("totalHttp",totalHttp);
  var totalHttp2= totalHttp;
  console.log("totalHttp2",totalHttp2);

 // var iconurl = "https://openweathermap.org/img/wn/10d@2x.png";

 var iconurl=totalHttp;
  $('#wicon').attr('src', iconurl);


}

