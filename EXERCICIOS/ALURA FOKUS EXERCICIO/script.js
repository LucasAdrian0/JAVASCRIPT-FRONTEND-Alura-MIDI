const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const textoTitulo = document.getElementsByClassName('.app__title')
const textoSublinhado = document.getElementsByClassName('.app__title-strong')

//não funcionou nada que eu tentei//

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    //descrição do texto quando estiver no 'foco'
    alterarTexto('Otimize sua produtividade,')

})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    //descrição do texto quando estiver no 'descanso curto'
    alterarTexto('class','Que tal dar uma respirada?')  

    
})
longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    //descrição do texto quando estiver no 'descanso longo'
    alterarTexto('Hora de voltar à Superfície.')

})
function alterarContexto(contexto){
        html.setAttribute('data-contexto',contexto)
        banner.setAttribute('src',`/imagens/${contexto}.png`)
}
//teste - função para alterar o texto escrito
function alterarTexto(contexto) {
    html.setAttribute('app__title',contexto)
    textoTitulo.setAttribute('h1',`${contexto}`)
}