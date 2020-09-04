// .reduce receives a function, executes it for each array item, and returns a reduced data (a string, a number, etc)

const numbers = [1, 3, 5]

const sumResults = numbers.reduce((accumulator, item) => accumulator + item, 0) // The argument "0" is the initial value of acc. If it is not given, in the first iteration, acc will have the value of the first array item.
const timesResults = numbers.reduce((accumulator, item) => accumulator * item, 1)

console.log(numbers)
console.log(sumResults)
console.log(timesResults)

// ---- Exercice ----

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
]

const pedroScore = phaseScores.reduce((acc, phaseScore) => {
    if (phaseScore.name === 'Pedro H. Silva') {
        acc += phaseScore.score
    }

    return acc
}, 0)

console.log('Total Pedro score: ', pedroScore)