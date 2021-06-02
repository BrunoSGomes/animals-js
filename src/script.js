const title = document.querySelector('.title')

function onClickTitle() {
    alert('Clicou no título')
}

title.addEventListener('click', onClickTitle)

console.log(`Página atual: ${location.href}`)
console.log(`Linguagem do navegador: ${navigator.language}`)
console.log(`Largura do monitor: ${innerWidth}`)