const person = { name: 'Pedro Afonso' }
const address = {
    city: 'New York',
    state: 'NY'
}

const pedro = {
    ...person,
    ...address,
    country: 'USA'
}

console.log(pedro)