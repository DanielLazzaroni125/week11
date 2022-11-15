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
    let radiusP = document.querySelector("#radius");
    let resultP = document.querySelector("#result");
    radiusP.textContent = radius;
    let calculatedArea = Math.PI * radius * radius;
    resultP.textContent = calculatedArea.toFixed(2);
    return calculatedArea
}

let area = circleArea(r).toFixed(2);

alert(`The area of circle with radius ${r} is ${area}`)