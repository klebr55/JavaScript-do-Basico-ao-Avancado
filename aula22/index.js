// Operadores Lógicos em JavaScript

// 1. AND lógico (&&)
// Retorna true se ambos os operandos forem true
// Exemplo: true && false // Retorna false

// 2. OR lógico (||)
// Retorna true se pelo menos um dos operandos for true
// Exemplo: true || false // Retorna true

// 3. NOT lógico (!)
// Inverte o valor booleano do operando
// Exemplo: !true // Retorna false

// 4. Operador de coalescência nula (??)
// Retorna o operando do lado direito se o operando do lado esquerdo for null ou undefined
// Exemplo: null ?? "default" // Retorna "default"

// 5. Operador AND lógico de atribuição (&&=)
// Atribui o valor do lado direito ao operando do lado esquerdo se o operando do lado esquerdo for true
// Exemplo: let a = true; a &&= false; // a agora é false

// 6. Operador OR lógico de atribuição (||=)
// Atribui o valor do lado direito ao operando do lado esquerdo se o operando do lado esquerdo for false
// Exemplo: let a = false; a ||= true; // a agora é true

// 7. Operador de coalescência nula de atribuição (??=)
// Atribui o valor do lado direito ao operando do lado esquerdo se o operando do lado esquerdo for null ou undefined
// Exemplo: let a = null; a ??= "default"; // a agora é "default"

// Exemplos práticos:

// And (&&)

const expressaoAnd = true && true && true && true; // Vai retornar true pois todos são true
// console.log(expressaoAnd);

// Or (||) 

const expressaoOr = true || false; // Vai retornar true pois pelo menos um dos operandos é true
// console.log(expressaoOr);

// Negação (!)

const expressaoNegacao = !true; // Vai retornar false pois está negando o true
console.log(expressaoNegacao);