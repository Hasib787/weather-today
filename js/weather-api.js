fetch("http://api.weatherstack.com/current? access_key = 2c4c223ee33d74aa7fa05dc47c56ad0c&query="+city+"&units="+units)
.then(res=> res.json())
.then(data=> console.log(data))