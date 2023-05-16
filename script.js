let weather = {
     apiKey: "API KEY GOES HERE",
     fetchWeather: function (city) {
       fetch(
         "https://api.openweathermap.org/data/2.5/weather?q=" +
           city +
           "&units=metric&appid=" +
           this.apiKey
       )
         .then((response) => {
           if (!response.ok) {
             alert("No weather found.");
             throw new Error("No weather found.");
           }
           return response.json();
         })
         .then((data) => this.displayWeather(data));
     },