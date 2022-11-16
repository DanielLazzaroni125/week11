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
// let r = prompt("Enter a radius. ");

// function circleArea(radius){
//     let radiusP = document.querySelector("#radius");
//     let resultP = document.querySelector("#result");
//     radiusP.textContent = radius;
//     let calculatedArea = Math.PI * radius * radius;
//     resultP.textContent = calculatedArea.toFixed(2);
//     return calculatedArea
// }

// let area = circleArea(r).toFixed(2);

// alert(`The area of circle with radius ${r} is ${area}`)

const unorderedList = document.querySelector(".shopping");

function populateList(list){
    for (let i = 0; i < list.length; i++){
        let listItem = document.createElement("li")
        listItem.textContent = list[i]
        unorderedList.appendChild(listItem);
    }
}

const shoppingList = ["cheese", "bread", "pepper"];
populateList(shoppingList)

function changeListStyle(){
    unorderedList.classList.remove("circlelist");
    unorderedList.classList.add("squarelist");
}

changeListStyle()