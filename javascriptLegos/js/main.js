//Create a counter

//Example
let nums = [42,19,77,33,57]

let sum = nums.reduce( (acc,c) => acc + c, 0  )

alert(sum)

//code snippet

nums.reduce( (acc,c) => acc + c, 0  )

// Other ways to count

//example 
function countDevelopers(list) {
    let europeanJSDev = 0;
    for(let i = 0; i < list.length; i++){
      
    if (list[i].continent === 'Europe' && list[i].language === 'JavaScript'){
        europeanJSDev++
        }
    }
    return europeanJSDev
}

//code snippet

europeanJSDev++


//You can call a function in a variable declaration  

function multThreeNum(num1, num2, num3){
    return(num1 * num2 * num3)
}

let returnedVal = multThreeNum(2,3,2)
console.log(returnedVal)
