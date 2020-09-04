// map is used to transform one array into another
// map always returns a valor

const numbers = [1, 2, 3]

// numbers.map((item, index, array) => {})  // Only the parameter "item" is mandatory

const doubleNumbers = numbers.map(item => item * 2)

console.log(numbers)
console.log(doubleNumbers)

// ---- Example ----

const prices = [20, 10, 30, 25, 15, 40, 80, 5]

const salePrices = prices.map(price => price / 2)

console.log(prices)
console.log(salePrices)

// ---- Ex2 ----

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
  ]

  const saleProducts = products.map(product => {
      if (product.price >= 30) {
        return { name: product.name, price: product.price / 2 }   // Returning a new object based on the products object, but with half price for items equals or more expansive than 30
        
        // You don't want to do this, because on functional prog. you don't modify things itself, you create new things modified
        // product.price = product.price / 2
        // return product
      }

      return product
  })

  console.log(products)
  console.log(saleProducts)