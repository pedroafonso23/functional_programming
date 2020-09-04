// .filter is used to filter arrays

const randomNumbers = [36, 54, 75, 27]

// .filter tests each item of the array and returns a boolean, it true, adds to the new array, if false, ignores
const equalsRandomNumbers = randomNumbers.filter(item => true)  
const emptyArray = randomNumbers.filter(item => false)  

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)

console.log(randomNumbers)
console.log(equalsRandomNumbers)
console.log(emptyArray)
console.log(numbersGreaterThan37)

// ---- Example ----

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
]

const premiumUser = users.filter(user => user.premium)

console.log(users)
console.log(premiumUser)
