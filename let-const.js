const myConst = 'constant'

//myConst = 'another const'   // Error!

let x = 1

console.log(global.let) // undefined (out of scope)

var y = 1

console.log(global.var) // ok

// Regra geral: sempre usar const. Se vc precisar de uma variável, usar let com escopo local.
// Se vc precisa usar var, é indício de que se bloco deve ser quebrado em partes menores (code smell)