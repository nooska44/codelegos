# codeLegos
I am building my own code library to reinforce and play with JS. I am adding snippets of code to help me on my journey, I hope it helps you on yours!

### Calling Functions
- [Assigning a function call to a variable](https://github.com/nooska44/codelegos/blob/f8e0885ca498be404b6fabd2359b2bc4fabda2c1/javascriptLegos/js/functionInAVariableDeclaration.js#L7) let returnedVal = multiplyThreeNums(2,3,2)
- [Calling a Function with an Array](https://github.com/nooska44/codelegos/blob/f8e0885ca498be404b6fabd2359b2bc4fabda2c1/javascriptLegos/js/callArrForFunction#L12) compareArray([10, 4, 6, 10])

### Create Arrays
- [Create an array from a Node List](https://github.com/nooska44/codelegos/blob/f8e0885ca498be404b6fabd2359b2bc4fabda2c1/javascriptLegos/js/createArrays.js#L1) 
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

### Loops
- [For Each Loop Array Method](https://github.com/nooska44/codelegos/blob/f8e0885ca498be404b6fabd2359b2bc4fabda2c1/javascriptLegos/js/forEachLoopArrayMethod.js#L1) bestColours.forEach((x, i) => console.log(x, i))
- [For Loop](https://github.com/nooska44/codelegos/blob/f8e0885ca498be404b6fabd2359b2bc4fabda2c1/javascriptLegos/js/forLoopArray.js#L1) for (let i = 0; i < arr.length; i++)

### Reduce Method
- [Create a counter using the reduce method](https://github.com/nooska44/codelegos/blob/f8e0885ca498be404b6fabd2359b2bc4fabda2c1/javascriptLegos/js/createCounter.js#L3) let sum = nums.reduce( (acc,c) => acc + c, 0 )
- [For loop with additional steps - squaring numbers in the array and then reducing it to 1 number](https://github.com/nooska44/codelegos/blob/a14a2475525b20384d3822fffe15c34cffbf4f8a/javascriptLegos/js/reduceForLoop.js#L1) return nums.reduce(function(sum, n){return (n*n) + sum}, 0)  

### Sort Arrays
- [Sort Arrays into its Parts](https://github.com/nooska44/codelegos/blob/71c57bca3b05bb83d1eb7099f2ba753ac6ede804/javascriptLegos/js/sortArrIntoParts.js#L1)    let n=[]; walk.map(v=>{ if (v==='n')n.push(1);
- [Sort Array By a Specific Character](https://github.com/nooska44/codelegos/blob/d1bedc41719719af78bf9551d673581a21ae5a24/javascriptLegos/js/sortArrayWithSpecificCharacter.js#L1) return arr.sort((a, b) => a.charCodeAt([a.length-1]) - b.charCodeAt([b.length-1]))
- [Sort Numbers In an Array](https://github.com/nooska44/codelegos/blob/d1bedc41719719af78bf9551d673581a21ae5a24/javascriptLegos/js/sortNumbersInArray#L1) let numLowToHigh = numbers.sort((a, b) => a - b)

### Working with the DOM
- [Create a click event](https://github.com/nooska44/codelegos/blob/f8e0885ca498be404b6fabd2359b2bc4fabda2c1/javascriptLegos/js/createClickEvent.js#L1) document.querySelector('h1').addEventListener('click', cToF)
- [Create click targets](https://github.com/nooska44/codelegos/blob/f5eed3da349eafca6e64640ba41578ed239201c9/javascriptLegos/js/createClickTargets.js#L1) (click.target.classList.contains('rose'))
- [Hide and Show images in the DOM](https://github.com/nooska44/codelegos/blob/a0218f1ac41c1883181e87851249052a5b28a547/javascriptLegos/js/hideImages#L1) document.querySelector("#claire").style.display = 'none' || claire.classList.toggle('hidden') || sharleen.classList.add('hidden')
- [Putting text in the DOM](https://github.com/nooska44/codelegos/blob/a0218f1ac41c1883181e87851249052a5b28a547/javascriptLegos/js/showingValueInTheDOM#L1) document.querySelector('h2').innerText = temp
- [Add multiple smurf event listeners](https://github.com/nooska44/codelegos/blob/f8e0885ca498be404b6fabd2359b2bc4fabda2c1/javascriptLegos/js/addMultipleSmurfs.js#L1) const contestants = document.querySelectorAll('.contestant')
