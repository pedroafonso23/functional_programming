// Promisse: Objeto que representa o sucesso ou a falha de uma opração assíncrona
// JS é assíncrono e mono thread

let randomNumber = 9

setTimeout(() => {
    randomNumber += 100
    console.log(randomNumber)
}, 4000)

console.log(randomNumber)

// Output:
// 9
// 109

// Request são operações assíncronas

// Criar Promisse
const aPromise = new Promise((resolve, reject) => {
    const aNumber = 37
    resolve(aNumber)
    reject(aNumber + 100)
})

// Consumir Promisse
aPromise.then(value => {
    console.log(value)  // 37
})

// Encadear then e capturar erro com catch
aPromise
    .then(value => value)
    .then(value => {
        console.log(value)  // 37
    })
    .catch(rejectValue => {
        console.log(rejectValue)    // 137
    })

// Request para uma API

const url = 'https://dog.ceo/api/breeds/image/random'

// fetch faz uma requisião HTTP e retorna os dados dela, e retorna uma Promisse
fetch(url)
    .then(dogData => {
        if (dogData.ok) {
            throw new Error(`HTTP error, status ${dogData.status}`)
        }
        console.log(dogData)
    })
    .catch(error => {
        console.log(error.message)
    })