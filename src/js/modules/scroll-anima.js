export default class ScrollAnima {
    constructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.halfWindow = window.innerHeight * 0.7;

        this.scrollAnimation = this.scrollAnimation.bind();
    }

    init() {
        this.scrollAnimation();
        window.addEventListener('scroll', this.scrollAnimation);
    }

    scrollAnimation() {
        this.sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - this.halfWindow) < 0;
            if (isSectionVisible) {
                section.classList.add('ativo');
            } else if (section.classList.contains('ativo')) {
                section.classList.remove('ativo');
            }
        });
    }
}
