const contestants = document.querySelectorAll('.contestant') // returns a node list of all 

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose)) //use Array.from if your want to do fancy array stuff from a node list
