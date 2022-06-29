function squareSum(nums){                          // function to square numbers and add all of the squared numbers together
  return nums.reduce(function(sum, n){             // use the reduced function on nums. sum is the first/previous value, n is the current value.
    return (n*n) + sum                             // the current value is squared and then added to the previous value
  }, 0)                                            // 0 is the starting value
}
