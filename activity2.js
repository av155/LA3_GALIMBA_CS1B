function iterationMapping(maxLimit) {
  for (let i = 0; i < maxLimit; i++) {
    for (let j = 0; j < maxLimit; j++) {
      let addedValue = i + j;
      console.log(`[${i}] [${j}] Added value is ${addedValue}`);
    }
  }
}

// Example usage:
let limit = prompt("Enter the Limit of the Double Loop:");
iterationMapping(parseInt(limit));

