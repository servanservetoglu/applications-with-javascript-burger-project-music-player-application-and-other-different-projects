document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY';
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Diyarbakır&limit=5&appid=9fe0a4eae3eae6842fc506b8bf9e4cd5`)
      .then(response => response.json())
      .then(data => {
        const weatherResult = document.getElementById('weatherResult');
        if (data.cod === 200) {
          const iconCode = data.weather[0].icon;
          const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
          weatherResult.innerHTML = `
            <h3>Weather in ${data.name}</h3>
            <img src="${iconUrl}" alt="Weather icon" class="weather-icon">
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
          `;
        } else {
          weatherResult.innerHTML = `<p>${data.message}</p>`;
        }
      })
      .catch(error => {
        console.error('Error fetching the weather data:', error);
      });
  });
  