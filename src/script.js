const menu = document.querySelector('.menu')

if (!menu.classList.contains('ativo')) {
    menu.classList.add('nao-possui-ativo')
} else {
    menu.classList.add('possui-ativo')
}

menu.className += ' azul'
console.log(menu.className)

// attributes

const animais = document.querySelector('.animais')
console.log(animais.attributes.class)

const img = document.querySelector('img')
console.log(img.getAttribute('src'))

img.setAttribute('alt', 'É uma raposa')
console.log(img.getAttribute('alt'))

const possuiAlt = img.hasAttribute('alt')
console.log(possuiAlt)

allMenu = document.querySelectorAll('.menu')
allMenu.forEach((el) => {
    el.classList.add('ativo')
})
console.log(allMenu)

allMenu.forEach((el) => {
    el.classList.remove('ativo')
})
allMenu[0].classList.add('ativo')
console.log(allMenu)

imgs = document.querySelectorAll('img')
imgs.forEach((img) => {
    if (img.hasAttribute('alt')) {
        console.log('essa imagem possui atributo alt')
    } else {
        console.log('essa imagem não possui atributo alt')
    }
})

const hrefMenu = menu.querySelectorAll('li')
const hrefDev = hrefMenu[hrefMenu.length - 1]
const hrefLink = hrefDev.querySelector('a')
hrefLink.setAttribute('href', 'https://github.com/BrunoSGomes')