
var randomNumber = Math.round(Math.random()*15);
//var randomNumber = 0;


 
if (randomNumber%3 === 0 && randomNumber !=0){
    alert("fizz");
}

else if (randomNumber%5 === 0 && randomNumber !=0){
    alert("buzz");
}
else if (randomNumber%3 === 0 && randomNumber%5 === 0){
    alert("fizzbuzz")
}

else { 
   console.log(randomNumber);
}

