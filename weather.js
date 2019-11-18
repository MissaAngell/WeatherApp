// sample URL Open Weather : https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22

//link to sample URL on Open Weather : https://api.openweathermap.org/data/2.5/weather?zip=53717,us&appid=e73aeba8adce70bbc2ab74491f6d4923

//api key e73aeba8adce70bbc2ab74491f6d4923

$("#weather_btn").click(function(){
    
    //variables for the Open Weather API URL
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = 'e73aeba8adce70bbc2ab74491f6d4923';
    var zipInput = $('#zipCode').val();
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey;
    console.log(apiURL);
    
    $.get(apiURL, function(responseFromOW){
            console.log(responseFromOW);
            console.log("temp:", responseFromOW.main.temp);
            console.log("city:", responseFromOW.name);
            console.log("condition:", responseFromOW.weather[0].description);
        
            var temp = responseFromOW.main.temp;
            var city = responseFromOW.name;
            var condition = responseFromOW.weather[0].description;
    });
    
});