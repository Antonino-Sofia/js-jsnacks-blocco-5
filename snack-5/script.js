const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const result = [];

for (let i = 0; i < nums.length; i++) {
  const currentNumber = nums[i];

  if (currentNumber % 2 === 0) {
    result.push(currentNumber);
  }
}

console.log(result);

//FILTER

const resultFilter = nums.filter((num) => num % 2 === 0);

console.log(resultFilter);
