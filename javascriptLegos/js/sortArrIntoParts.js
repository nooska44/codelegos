function isValidWalk(walk) {                                                      //function with an array
  let n=[],s=[],e=[],w=[];                                                        // way to declare multiple variables - longer way is more readable. Arrs are empty to push the occurances to 
  walk.map(v=>{                                                                   //Map method - creates a new array. declares the role v will play
  if (v==='n')n.push(1);
  if (v==='s')s.push(1);
  if (v==='e')e.push(1);
  if (v==='w')w.push(1);
})
  return (n.length===s.length)&&(w.length===e.length)&&(walk.length===10)
}
