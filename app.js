function checkWeather() {
    document.getElementById('search-btn').addEventListener('click', function () {
        let searchedName = document.getElementById('searched-name');
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchedName.value + '&units=metric&appid=32080273d50f07d0d025b1d2f54ae46b')
            .then(res => res.json())
            .then(data => {
                let currentTemp = document.getElementById('current-temp')
                currentTemp.innerText = data.main.temp + ' ' + `°C`;
                let cityName = document.getElementById('city-name');
                cityName.innerText = data.name + ',' + data.sys.country;
                let clouds = document.getElementById('description');
                clouds.innerText = data.weather[0].description;
                weatherIcon = document.getElementById('weather-icon');
                let iconSrc = data.weather[0].icon;
                weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconSrc}@2x.png")/>`
                let feelsLike = data.main.feels_like;
                let humidity = data.main.humidity;
                let tempMax = data.main.temp_max;
                let tempMin = data.main.temp_min;
                let extraInfo = document.getElementById('extra-info');
                extraInfo.innerText = `Feels like : ${feelsLike} °C, Humidity : ${humidity}%, Max-temp : ${tempMax}  °C, Min-temp : ${tempMin} °C`;
            })
    })
}
checkWeather();
