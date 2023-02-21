let weather;
function preload() {
  weather = loadJSON('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m');
}

function setup() {
  createCanvas(500, 500);
  background(40);
  print("The Weather:")
  print("Located at: "+ weather.latitude+", "+weather.longitude);  
  print("Current temp: "+ weather.current_weather.temperature);
  print("Current wind speed: "+ weather.current_weather.windspeed);
  print("The hourly temperature is (in C): ")
  for(let i = 0; i < 5; i++){
    print(weather.hourly.temperature_2m[i]+" C");
  } 
}

