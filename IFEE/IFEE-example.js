/**
 * Immediately-invoked Function Expressions (IIFE)
 * 
 * @see https://imasters.com.br/front-end/sobre-funcoes-imediatas-javascript-iife
 * @author Christian Murata
 */

(function(){
	console.log('Hello World');
})();

/**
 * A função "frase" declara a variável texto na primeira execução (automática)
 * e retorna uma função anônima que concatena texto , sendo assim, a variável
 * texto, que está no escopo da IIFE, não é declarada toda vez que chamamos a
 * função frase.
 */
const frase = (function(){
	let texto = "";

	// função anônima que concatena textos
	return x => texto = !!texto ? texto.concat(" ", x) : texto.concat(x);
})();

frase("Hello");
frase("World");