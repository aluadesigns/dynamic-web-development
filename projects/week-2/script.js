var kz = true;

window.addEventListener('load', init);

function init() {

const mountain = document.getElementById("mountain");
const text = document.getElementById("main-text");
// const pink = document.getElementById("pink");
// const orange = document.getElementById("pink");
// const blue=  document.getElementById("pink");

let colors = document.getElementsByClassName("colors");

for(let i=0; i < colors.length; i++){
    window.addEventListener("scroll", () => {
    
    const scroll = window.scrollY;

    if (scroll >=250 && scroll <=1000) {
      const opacity = scroll/250*0.6;
        colors[i].style.opacity = opacity;
    }

    else if (scroll<250 && scroll>200) {
    const opacity = scroll/250*0.1;

     colors[i].style.opacity = opacity;

    }

    else  {
        colors[i].style.opacity = 0;
    }
    })
}

window.addEventListener("mousedown", () => {

    if (kz){
    text.innerHTML = "Алматы Қазақстандағы ең ірі қала, елдің оңтүстік-шығыс бөлігінде орналасқан. Ол бұрын астана болған және Транс-Іле Алатауының солтүстік баурайында, теңіз деңгейінен 700–900 метр биіктікте орналасқан. Бұл жерде Үлкен Алматы мен Кіші Алматы өзендері жазыққа шығады."
    }

    else{
    text.innerHTML = "Almaty is the largest city in Kazakhstan, located in the southeast part of the country. It was formerly the capital and lies in the northern foothills of the Trans-Ili Alatau at an elevation of 700–900 meters, where the Big Almaty and Small Almaty rivers emerge onto the plain."
    }
     kz =!kz;
} )


window.addEventListener("scroll", () => {
    const scroll = window.scrollY;


    if (scroll>0 && scroll<= 250) {
    const scale = 1+ scroll*0.04;
    mountain.style.transform = `scale(${scale})`;
    mountain.style.left = scroll*2 + "pt";
    console.log(scale);
    console.log(scroll);

    text.style.opacity = 100 - scroll/3 + "%";
    }

    else if(scroll>250) { 
    const scale = 1+ scroll*0.04;
    mountain.style.transform = `scale(11.5)`;
    mountain.style.left = 500 + "pt";
    }
});
    

}