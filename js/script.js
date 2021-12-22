const Apikey = '';

let apiCall = function(city){
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}&units=metric&lang=FR`;

fetch(url).then( (Response) => 
Response.json().then((data) => {
    console.log(data);
    temp_wir = data.main.temp;
    console.log(temp_wir);
    document.querySelector('#city').innerHTML = "<i class='fas fa-city'></i>" + data.name;
    document.querySelector('#temp').innerHTML = "<i class='fas fa-thermometer-three-quarters'></i>" + data.main.temp + '°';
    document.querySelector('#wind').innerHTML ="<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
    document.querySelector('#humidity').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';

   
   

})
).catch(err => console.log('erreur :' + err));
}

    document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
   
        apiCall(ville);
    

})

