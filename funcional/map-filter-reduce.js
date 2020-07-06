/**
 * MAP FILTER REDUCE JS
 * 
 * @see https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
 * @see https://medium.com/@programadriano/javascript-conhecendo-map-filter-e-reduce-ce072d8f0ec5
 * @see https://medium.com/@osuissa/javascript-quando-usar-map-filter-ou-reduce-31aa10e33e9
 * @author Christian Murata
 */

const animais = [
	{ nome: 'Moscow', tipo: 'dog', idade: 5 },
	{ nome: 'Patoli', tipo: 'cat', idade: 2 },
	{ nome: 'Jarvis', tipo: 'dog', idade: 7 },
	{ nome: 'Debian', tipo: 'dog', idade: 3 },
	{ nome: 'Fedora', tipo: 'cat', idade: 2 },
];

// map - percorre todo o array e realiza determinada operação

const nomes = animais.map(animal => animal.nome);

// filter - percorre todo array e realiza um filtro no mesmo

const dogs = animais.filter(animal => animal.tipo == 'dog');

// reduce -itera cada elemento do array, para no final retornar um unico valor

const somaIdade = animais.reduce((count, animal) => count + animal.idade, 0);