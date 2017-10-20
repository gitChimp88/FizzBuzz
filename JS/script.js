function fizzBuzz() {
 
  var container = [];
  var max = prompt("Please enter the maximum number you would like to loop to");
  for(var i = 1;i <= max;i++) {
   
    if(i % 3 === 0 && i % 5 !== 0) {
      container.push("fizz");
      console.log("fizz");
    } if(i % 5 === 0 && i % 3 !== 0) {					
      
      container.push("buzz");
      console.log("buzz");
    } if(i % 3 === 0 && i % 5 === 0) {                                 
   
      container.push("fizzbuzz");
      console.log("fizzbuzz");
    } if(i % 3 !== 0 && i % 5 !== 0) { 
    
     container.push(i);
      console.log(i);
   
    }
  }
  return container;
}

fizzBuzz();