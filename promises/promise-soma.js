/**
 * Soma com valores futuros utilizando promisses
 * 
 * @author Christian Murata
 */

const sum = (x, y, z) => {
    // return promisse
    return Promise.all([x, y, z])

    .then((values) => values.reduce((a, b) => a + b, 0))
}

// Os valores futuros para x, y e z
const x = 5;

const y = () => Promise.resolve(20);

const z = () => new Promise ((resolve) => setTimeout(resolve, 0, 20));

// A função sum realiza a soma para os valores futuros de x, y e z apos todas as
// promises correspondentes serem resolvidas. Dessa forma, sum retorna uma outra
// promisse.
sum(x, y(), z())

// Se as funcoes forem resolvidas corretamente exibe-se o valor da soma em then,
// caso contrario, exibe-se o erro em catch
.then((value) => console.log(value))
.catch((error) => console.log(error));