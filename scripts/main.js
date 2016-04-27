
alert("It is the zombie apocalips. Your lotting a store and suddenly  a zombie bursts through the door !");
var weapen = prompt("You search around frantically for a weapon.  What you choose?  A bow and arrow, an axe, or a rubber chicken?");
var randomNumber = Math.round(Math.random()); 
alert ("you attack zombie with your" + " " + weapen);
if (randomNumber === 0){
    alert(" The zombie bites you. Your lose!!!");
} else if (randomNumber ===1){
  alert("You kill the zombie with your " + " " + weapen + ".You win!!!"); 
}
