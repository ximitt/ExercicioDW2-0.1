const medicos = [
    {
        nome: 'Leticia',
        sobrenome: 'Costana',
        genero: 'Feminino',
        generoDR: "DRA",
        imagemPerfil: 'http://placekitten.com/400/400'

    },
    {
        nome: 'Adimaldo',
        sobrenome: 'Pinto',
        genero: 'Masculino',
        generoDR: "DR",
        imagemPerfil: 'http://placekitten.com/401/401'

    },
    {
        nome: 'Noah',
        sobrenome: 'Lutus',
        genero: 'Nao-binario',
        generoDR: "Dr(e)",
        imagemPerfil: 'http://placekitten.com/402/402'

    },
];
const htmlList = document.querySelector('#medicos');

for (let medico of medicos) {

    
    let apresentacao = "";

    switch (medico.genero) {
        case 'Nao-binario':
            apresentacao = `Dr(e) ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'Masculino':
            apresentacao = `Dr. ${medico.nome} ${medico.sobrenome}`;
            break;
        case 'Feminino':
            apresentacao = `Dr(a) ${medico.nome} ${medico.sobrenome}`;
            break;
        default:
            apresentacao = `Dr(a) não informou o genero`;


    }
     const p = document.createElement('p');
     p.textContent = `${apresentacao}`;
    htmlList.appendChild(p);

    const img = document.createElement('img')
    img.src = medico.imagemPerfil;
    htmlList.appendChild(img)

}
