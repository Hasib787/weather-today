const url = 'http://api.weatherstack.com/current?';
const key ='2c4c223ee33d74aa7fa05dc47c56ad0c';
fetch(url ,key)
.then(res=> res.json())
.then(data=> console.log(data))