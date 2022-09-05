var randomNumber1= (Math.floor(Math.random()*6+1));
var random_img="dice"+randomNumber1+".png";
var img = document.querySelectorAll("img")[0];
img.setAttribute("src", random_img);

if (randomNumber1 ===1){
  document.querySelector("h2").innerHTML=" Thats 1!";
}
else if(randomNumber1===2){
document.querySelector("h2").innerHTML=" Thats 2!";

}
else if(randomNumber1===3){
document.querySelector("h2").innerHTML=" Thats 3!";

}
else if(randomNumber1===4){
document.querySelector("h2").innerHTML=" Thats 4!";

}
else if(randomNumber1===5){
document.querySelector("h2").innerHTML=" Thats 5!";

}

else if(randomNumber1===6){
document.querySelector("h2").innerHTML=" Thats 6!";

}
else{
document.querySelector("h").innerHTML=" Draw !!";
}
