export default class AnimaNumeros {
    constructor(numeros, observerTarget, observerClass) {
        this.numeros = document.querySelectorAll(numeros);
        this.observerTarget = document.querySelector(observerTarget);
        this.observerClass = observerClass;

        this.handleMutation = this.handleMutation.bind(this);
    }

    init() {
        if (this.numeros.length && this.observerTarget) this.addMutationObserver();
        return this;
    }

    static incrementarNumero(num) {
        const total = +num.innerText;
        const incremento = Math.floor(total / 100);
        let start = 0;
        const timer = setInterval(() => {
            start += incremento;
            num.innerText = start;
            if (start > total) {
                num.innerText = total;
                clearInterval(timer);
            }
        }, 25 * Math.random());
    }

    animaNumeros() {
        this.numeros.forEach((num) => this.constructor.incrementarNumero(num));
    }

    handleMutation(mutation) {
        if (mutation[0].target.classList.contains(this.observerClass)) {
            this.observer.disconnect();
            this.animaNumeros();
        }
    }

    addMutationObserver() {
        this.observer = new MutationObserver(this.handleMutation);
        this.observer.observe(this.observerTarget, { attributes: true });
    }
}
