var sad = confirm ("whod ou like to be cheered up?");
 while (sad) {
   alert("Whad do you call a boomerang that dosen't come back? ...a stick!");
   var yes = confirm("would you like to continue our session?")
   
   if (yes) {
     var response = prompt("Tell my about your troubles:", "Type your felling here");
     if (response) {
       alert("I am sorry you are feeling down about that. I know you can't see it, but I, the computer, will now give you a hug.  **hug**");
       sad = false;
     }
   } else {
     sad = false;
   }
 }
