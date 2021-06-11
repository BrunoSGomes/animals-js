const animalImg = document.querySelectorAll('img')
const allImg = animalImg.forEach((img) => console.log(img))

const uniqAnimalImg = document.querySelectorAll('img[src^="img/imagem"]')
const allUniqImg = uniqAnimalImg.forEach((img) => console.log(img))

const linkInterno = document.querySelectorAll('[href^="#"]')
console.log(linkInterno)

const firstH2 = document.querySelector('.animais-descricao h2')
console.log(firstH2)

const allP = document.querySelectorAll('p')
const lastP = allP[allP.length - 1]
console.log(lastP)

allP.forEach((p) => console.log(p.innerText))