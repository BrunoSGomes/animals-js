export default class AccordionList {
    constructor(list) {
        this.accordionList = document.querySelectorAll(list);
        this.activeClass = 'ativo';
    }

    init() {
        if (this.accordionList.length) {
            this.toggleAccordion(this.accordionList[0]);
            this.addAccordionEvent();
        }
    }

    addAccordionEvent() {
        this.accordionList.forEach((item) => {
            item.addEventListener('click', () => this.toggleAccordion(item));
        });
    }

    toggleAccordion(item) {
        item.target.classList.toggle(this.activeClass);
        item.srcElement.nextElementSibling.classList.toggle(this.activeClass);
    }
}
