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