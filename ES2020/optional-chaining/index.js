/**
 * Optional Chaining - verifica se determinado valor existe em um objeto, 
 * retorna undefined caso nao econtre nada e o determinado valor, caso exista. 
 * Funciona da seguinte maneira:
 * 
 * obj?.prop
 * obj?.[expr]
 * arr?.[index]
 * func?.(args)
 * 
 * @see https://www.freecodecamp.org/news/javascript-new-features-es2020/
 * @see https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 * @author Christian Murata
 */

const data = {
    users: [{
        name: 'Christian Murata',
        animes: [
            {
                name: 'naruto',
                info: {
                    genre: 'ninja',
                    finished: 'true',
                },
                favorites: [
                    {
                        name: 'Sasuke',
                        alive: true,
                    },
                ]
            },
            
            {
                name: 'Shingeki no Kyojin',
                info: {
                    genre: 'titan',
                    finished: 'false',
                },
                favorites: [
                    {
                        name: 'Levi',
                        alive: true,
                    },

                    {
                        name: 'Mikasa',
                        alive: true,
                    }
                ],
            }
        ]
    }]
}

const genre = data.users[0].animes[0].info?.genre;

if(genre)
    console.log(genre);

else
    console.log('Genre not Found')