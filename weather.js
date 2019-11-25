// sample URL Open Weather : https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22

//link to sample URL on Open Weather : https://api.openweathermap.org/data/2.5/weather?zip=53717,us&appid=e73aeba8adce70bbc2ab74491f6d4923

//api key e73aeba8adce70bbc2ab74491f6d4923

$("#weather_btn").click(function () {

    //variables for the Open Weather API URL
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = 'e73aeba8adce70bbc2ab74491f6d4923';
    var apiUnits = '&units=imperial';
    var zipInput = $('#zipCode').val();
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey + apiUnits;
    console.log(apiURL);

    $.get(apiURL, function (responseFromOW) {
        console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("city:", responseFromOW.name);
        console.log("condition:", responseFromOW.weather[0].main);

        var temp = responseFromOW.main.temp;
        var city = responseFromOW.name;
        var condition = responseFromOW.weather[0].main;

        $('#city').html(city);
        $('#degrees').html(temp);
        $('#typeweather').html(condition);




        if (responseFromOW.weather[0].main === 'Clouds') {
            $('#picture').css('background-image', 'url(img/cloudy.jpeg)');
        } else if (responseFromOW.weather[0].main === 'Clear') {
            $('#picture').css('background-image', 'url(img/clear.jpg)');
        } else if (responseFromOW.weather[0].main === 'Tornado') {
            $('#picture').css('background-image', 'url(img/tornado.jpg)');
        } else if (responseFromOW.weather[0].main === 'Snow'){
            $('#picture').css('background-image', 'url(img/snow.jpg)');
        } else if (responseFromOW.weather[0].main === 'Rain'){
            $('#picture').css('background-image', 'url(img/rain.jpg)');
        } else if (responseFromOW.weather[0].main === 'Thunderstorm'){
            $('#picture').css('background-image', 'url(img/thunderstorm.jpg)');
        } else if (responseFromOW.weather[0].main === 'Mist'){
            $('#picture').css('background-image', 'url(img/mist.jpg)');
        } else if (responseFromOW.weather[0].main === 'Fog'){
            $('#picture').css('background-image', 'url(img/fog.jpg)');
        } else if (responseFromOW.weather[0].main === 'Drizzle'){
            $('#picture').css('background-image', 'url(img/drizzle.jpg)');
        }
    });



});
