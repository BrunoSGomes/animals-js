export default function initAccordionList() {
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const activeClass = 'ativo';

    function activeAccordion(event) {
        event.target.classList.toggle(activeClass);
        event.srcElement.nextElementSibling.classList.toggle(activeClass);
    }

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        accordionList.forEach((item) => {
            item.addEventListener('click', (event) => {
                activeAccordion(event);
            });
        });
    }
}
