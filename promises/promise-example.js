/**
 * Exemplo de uso de promisses
 * Promise.all e tratamentos de excessoes utilizando promisses
 * 
 * Promisse.all - retorna uma unica Promise que resolve quando todas as promises
 * no argumento iteravel forem resolvidas ou quando o iterável passado como 
 * argumento nao possui promises. Eh rejeitada assim que a primeira promisse no
 * argumento for rejeitada.
 * 
 * @author Christian Murata
 */

// promise 1
const p1 = () => Promise.resolve(3);

// promise 2
const p2 = () => new Promise ((resolve) => {
    setTimeout(resolve, 0, 10);
});

// Tratamento de excessao atraves do REJECT (apenas para getY)
p2().then(
    (value) => { console.log(`Estamos no then: ${value}`); },
    (error) => { console.log(`Erro aqui: ${error}`); }
)

// Tratamento de excessao atraves do CATCH (Promisse.all)
Promise.all([p1(), p2()])
    .then((values) => console.log(values))
    .catch((error) => console.log(`Erro: ${error}`));