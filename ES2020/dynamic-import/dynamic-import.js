/**
 * Dynamic Import - importacao de arquivos/modulos JS de maneira assincrona, sob
 * demanda, de maneira nativa no navegador.
 * 
 * Nota: Modulos possuem a extencao .mjs
 * 
 * @see https://www.youtube.com/watch?v=zjN7pbK7aKQ
 * @see https://www.freecodecamp.org/news/javascript-new-features-es2020/
 * @author Christian Murata
 */

 (async() => {
    const {sum, sub} = await import('./calc.mjs');

    console.log(sum(1, 2), sub(2, 2));
 })();