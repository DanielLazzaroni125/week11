//  function greet(user, time = "day"){
//     console.log(`Good ${time} ${user}`);
    
// }

// greet("Daniel", "night");

// const greet = function (user){  
//     console.log(`Hello ${user}`);
// }

// greet("Daniel");

// const greet = (user, time) => {
//     console.log(`Good ${time} ${user}`);
// }

// greet("Daniel");
let r = prompt("Enter a radius. ");

function circleArea(radius){
    return Math.PI * radius * radius;
}

let area = circleArea(r).toFixed(2);

alert(`The area of circle with radius ${r} is ${area}`)