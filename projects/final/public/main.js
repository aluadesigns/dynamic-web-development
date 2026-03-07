window.onload = () => {
    const input = document.getElementById("input");
    const typing = document.getElementById("typing");
    
    //adding the letter spacing and shrink properties to typing
    typing.l = 0;
    typing.shrink = false;

    input.addEventListener("input", ()=>{
    typing.innerHTML = input.value;

});

    display();
    move();

}

const display = async () => {
    
    const alltext = document.getElementById("alltext");

    const request = await fetch("/passdata");
    console.log(request);
    const json = await request.json();
    console.log(json);

    //clear the alltext before adding new divs
    alltext.innerHTML = "";

    json.posts.forEach(t => {
        const text = document.createElement("div"); //create new div, every time the browser gets a new post
        text.innerHTML = t.name;

        //adding the letter spacing and shrink properties for each new div
        text.l = 0; 
        text.shrink = false;

        alltext.append(text);
    })
    
}

const move = () => {

    const innertext = document.querySelectorAll("#typing, #alltext div");
    const windoW = window.innerWidth;

    //for each t, I am adding t.l and t.shrink properties. their initial state was already defined above through text.l and text.shrink so each new div starts as a letter spacing =  0 and shrink = false, and inside the loop it will change for each div created.
    innertext.forEach(t => {

        const textW = t.getBoundingClientRect().width;

        if (textW >= windoW){ 
            t.shrink = true;
        }

        if (t.shrink) {
            t.l-=2;
        }

        else { 
         t.l+=2;
        }

        if (t.l<=0) {
         t.shrink = false;
        }

        t.style.letterSpacing = t.l + "px"; 
        console.log(t.shrink);
        console.log(t.l);

        });
    
    //loops through my move function to create the animation
    requestAnimationFrame(move);
    
};
