const form = document.getElementById('form_atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepção"/>'

let linhas = ''


form.addEventListener('submit', function(e) {
    e.preventDefault()

    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtivade=document.getElementById('nota-atividade')

        let linha = '<tr>;'
        linha +=`<td> ${inputNomeAtividade.value} </td>`
        linha += `<td> ${inputNotaAtivade.value} </td>`
        linha += `<td>${inputNotaAtivade.value > 7 ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>'
        linhas += linha

            const corpoTabela = document.querySelector('tbody')
            corpoTabela.innerHTML = linhas
            inputNomeAtividade.value=''
            inputNotaAtivade.value=''
})