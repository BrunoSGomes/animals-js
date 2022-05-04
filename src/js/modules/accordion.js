export default function initAccordionList() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')
    const activeClass = 'ativo'
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        function activeAccordion(event) {
            event.target.classList.toggle(activeClass)
            event.srcElement.nextElementSibling.classList.toggle(activeClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', (event) => {
                activeAccordion(event)
            })
        })
    }
}