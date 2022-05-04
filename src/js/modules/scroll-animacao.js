export default function initScrollAnimation() {
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    if (sections) {
        const halfWindow = window.innerHeight * 0.7

        function scrollAnimation() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top
                const isSectionVisible = (sectionTop - halfWindow) < 0
                if (isSectionVisible) {
                    section.classList.add('ativo')
                }
            })
        }
        scrollAnimation()

        window.addEventListener('scroll', () => {
            scrollAnimation()
        })
    }
}