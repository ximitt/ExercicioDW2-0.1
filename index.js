const filmesFavoritos = [
    {
        nome: 'Harry Potter e o Prisioneiro de Azkaban',
        Generos: 'Fantasia',
        idade: 10,
        Lancamento: 2004,
        poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Harry_Potter_Prisioneiro_Azkaban_2004.jpg/250px-Harry_Potter_Prisioneiro_Azkaban_2004.jpg",
        atores: ['daniel radcliffe', 'emma watson', 'rupert grint',]
    },
    {
        nome: 'Cidade de Deus',
        genero: 'Crime',
        idade: 18,
        Lancamento: 2002,
        poster: "https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeus.jpg",
        atores: ['alexandre rodrigues', 'douglas silva', 'seu jorge',]

    },
    {
        nome: 'Projeto X',
        genero: 'comedia',
        idade: 18,
        Lancamento: 2012,
        poster: "https://media.fstatic.com/lTKYQsXjYpOH4Xmk8qSUCWx0wkU=/195x289/smart/filters:format(webp)/media/movies/covers/2012/01/c584817a3f3ff3ca88317829ea987aa9.jpg",
        atores: ['thomas mann', 'oliver cooper', 'jonathan daniel',]
    }
]


const htmlList = document.querySelector('#Filmes');

const anoReferencia = new Date().getFullYear();

for (let filme of filmesFavoritos) {

    const idadeFilme = anoReferencia - filme.Lancamento;

    const pNome = document.createElement('p');
    pNome.textContent = `Nome do filme: ${filme.nome}`;
    htmlList.appendChild(pNome);

    const pIdade = document.createElement('p');
    pIdade.textContent = `${filme.nome} tem ${idadeFilme} anos`;
    htmlList.appendChild(pIdade);

    const img = document.createElement('img')
    img.src = filme.poster;
    htmlList.appendChild(img)
    }