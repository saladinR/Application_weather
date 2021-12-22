const Apikey = 'aaa46d22f019ca7a19dad7294167b3ec';

let url=`https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${Apikey}&units=metric&lang=FR`;

fetch(url).then( (Response) => 
Response.json().then((data) => {
    console.log(data);
    document.querySelector('#city').innerHTML = "<i class='fas fa-city'></i>" + data.name;
    document.querySelector('#temp').innerHTML = "<i class='fas fa-thermometer-three-quarters'></i>" + data.main.temp + '°';
    document.querySelector('#wind').innerHTML ="<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
    document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
})
);

