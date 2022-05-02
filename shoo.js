const img = document.getElementsByTagName("img");

const dar =document.getElementById("again");

const ezen = document.getElementById("data-left");

const ezen2 = document.getElementById("data-right");

const onep = document.getElementById("playerone");

const twop = document.getElementById("playertwo");

const tem =document.getElementById("niilber");

const tem2 =document.getElementById("niilber2");

const play = document.getElementById("playing-part");

const winner = document.getElementById("winner");

const win = document.getElementById("win");

const x = Math.floor(Math.random()*6+1); 

const play1 = document.getElementById("play1");

const play2 = document.getElementById("play2");

const back =document.getElementById("background");

const res = document.getElementById("rest");

console.log(play1);

let unen = true

let y =0;
let c =0;

dar.addEventListener('click' , ()=>{
 
    if(unen){ 
        for (let i = 0; i < img.length; i++) { 
            let x = Math.floor(Math.random()*6+1); 
            img[i].src= [`shoo${x}.png`];
            y +=x;
        }
        if (y>=100) {
            winner.style.display = "flex";
            win.textContent += play1.textContent;
            back.style.display = "none"
            dar.style.display = "none"
            back.style.opacity = 0.5;
            res.style.display = "block"
        }
        tem.textContent = "point-" + y;
        ezen.style.display = "block"
        ezen2.style.display = "none"
        twop.style.boxShadow =  "-3px 3px 10px #C02425 inset"
        onep.style.boxShadow = "none"
        play.style.boxShadow = "-3px 3px 10px #C02425 inset"
    }
    else{
        for (let i = 0; i < img.length; i++) { 
            let x = Math.floor(Math.random()*6+1); 
            img[i].src= [`shoo${x}.png`];
            c +=x;
        }
        tem2.textContent = "point-" + c;
        if (c>=100) {
            winner.style.display = "flex";
            win.textContent += play2.textContent;
            back.style.display = "none"
            back.style.opacity = 0.5;
            dar.style.display = "none"
            res.style.display = "block"
        }
        ezen.style.display = "none"
        ezen2.style.display = "block"
        onep.style.boxShadow = "3px 3px 10px #C02425 inset"
        twop.style.boxShadow = "none"
        play.style.boxShadow = "3px 3px 10px #C02425 inset"
    }
    res.addEventListener('click' , () => {
    })
    unen = !unen;

});
onep.style.boxShadow = "3px 3px 10px #C02425 inset"


// pov: "you are the main character dancing on the stairs" ~ a playlist