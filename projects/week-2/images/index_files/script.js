
window.addEventListener('load', init);

function init(){

fetch("http://api.weatherapi.com/v1/current.json?key=24a0c19719d142e98c131224261202&q=New York&aqi=no")
.then(response => {
    data = response.json();
    console.log(data);
}).then(response => {
    temp = response.current.temp_c;
    console.log(temp);
})


}