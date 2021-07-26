function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo')
            })
            tabContent[index].classList.add('ativo')
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index)
            })
        })
    }
}
initTabNav()

function initAccordionList() {
    const accordionList = document.querySelectorAll('.js-accordion dt')
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
initAccordionList()

function initSmoothScroll() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', (event) => {
            scrollToSection(event)
        })
    })
}
initSmoothScroll()

function initScrollAnimation() {
    const sections = document.querySelectorAll('.js-scroll')
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
initScrollAnimation()

