const form = document.getElementById('form_atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepção"/>'
const atividades =[]
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado </span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado </span>'

const notaMinima = parseFloat(prompt('digite a nota minima:'))


let linhas = ''


form.addEventListener('submit', function(e) {
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
    atulizaMediaFinal()
})


function adicionaLinha(){


    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtivade=document.getElementById('nota-atividade')

    if(atividades.includes(inputNomeAtividade.value)){
            alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    }   else {

        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat( inputNotaAtivade.value))
    
            let linha = '<tr>;'
            linha +=`<td> ${inputNomeAtividade.value} </td>`
            linha += `<td> ${inputNotaAtivade.value} </td>`
            linha += `<td>${inputNotaAtivade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
            linha += '</tr>'
            linhas += linha


    }



            inputNomeAtividade.value=''
            inputNotaAtivade.value=''
}
function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atulizaMediaFinal(){
    const mediaFinal = calculaMediaFInal()
    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
    console,log(media)
}

function calculaMediaFInal(){

    let somaDasNotas = 0
    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]

    }

    return somaDasNotas / notas.length
    console.log(media)
}