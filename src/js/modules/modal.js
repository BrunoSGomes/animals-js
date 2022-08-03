export default class Modal {
    constructor(botaoAbrir, botaoFechar, containerModal) {
        this.botaoAbrir = document.querySelector(botaoAbrir);
        this.botaoFechar = document.querySelector(botaoFechar);
        this.containerModal = document.querySelector(containerModal);

        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.clickForaModal = this.clickForaModal.bind(this);
    }

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvents();
        }
        return this;
    }

    addModalEvents() {
        this.botaoAbrir.addEventListener('click', this.eventToggleModal);
        this.botaoFechar.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.clickForaModal);
    }

    toggleModal() {
        this.containerModal.classList.toggle('ativo');
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    clickForaModal(event) {
        if (event.target === this.containerModal) this.toggleModal(event);
    }
}
