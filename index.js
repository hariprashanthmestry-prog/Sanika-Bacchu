const birthday = new Date("August 09, 2026 00:00:00").getTime();

setInterval(() => {

const now = new Date().getTime();

const gap = birthday - now;

const days = Math.floor(gap/(1000*60*60*24));

const hours = Math.floor((gap%(1000*60*60*24))/(1000*60*60));

const mins = Math.floor((gap%(1000*60*60))/60000);

const sec = Math.floor((gap%(60000))/1000);

document.getElementById("timer").innerHTML=

`${days} Days ${hours} Hours ${mins} Minutes ${sec} Seconds`;

},1000);

const text="Dear Bacchu ❤️, You are the best thing that has ever happened to me. Every smile of yours makes my world brighter. I promise to stand by your side forever. Happy Birthday My Love ❤️";

let i=0;

function type(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(type,50);

}

}

type();

document.getElementById("surprise").onclick=function(){

document.getElementById("message").style.display="block";

confetti();

}

document.getElementById("playMusic").onclick=function(){

document.getElementById("music").play();

}

function hearts(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*30)+"px";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(hearts,300);

function confetti(){

for(let i=0;i<200;i++){

const c=document.createElement("div");

c.innerHTML="🎉";

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.fontSize="30px";

c.style.animation="float 5s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},5000);

}

}