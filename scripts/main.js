var myCoffee = {
  flavor: "espresso",
  temperature:"piping hot",
  ounces: 100,
  milk:true,
  
  reheat: function () {
    if(myCoffee.temperature === "cold") {
      myCoffee.temperature = "piping hot";
      alert("your coffee has been reheated !")
    }
    
  }
  
  
};

myCoffee.temperature = "cold";
myCoffee.reheat();

