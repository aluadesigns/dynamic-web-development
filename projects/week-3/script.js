
window.addEventListener('load', init);

function init(){

    document.getElementById("submit").addEventListener("click", start);
    
    function start(){
    var city = document.getElementById("city").value;
    fetch("http://api.weatherapi.com/v1/current.json?key=24a0c19719d142e98c131224261202&q=" + city + "&aqi=no")
        .then(response => {
            data = response.json();
            console.log(data);
            return data;
        }).then(data => {
            if (data.error){
                console.log('error');
            }
            temp = data.current.temp_c;
            console.log(temp);
            document.querySelector(".main #temp").firstChild.nodeValue = temp;
            if (temp>25){
                document.getElementById("title").innerHTML = "it's hot";
            }

            else if (temp>10 && temp<25){
                document.getElementById("title").innerHTML = "I like this weather";
            }

            else{
                document.getElementById("title").innerHTML = "it's cold";
            }
        })




}
}