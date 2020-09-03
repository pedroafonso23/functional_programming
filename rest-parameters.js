const sum = (...numbers) => 
    numbers.reduce((acc, curr) => acc + curr, 0)

console.log(sum(6, 2, 1, 1))    // 10