import outsideClick from './outside-click.js';

export default class MenuMobile {
    constructor(menuButton, menuList, events) {
        this.menuButton = document.querySelector(menuButton);
        this.menuList = document.querySelector(menuList);
        this.activeClass = 'active';

        if (events === undefined) this.events = ['touchstart', 'click'];
        else this.events = events;

        this.openMenu = this.openMenu.bind(this);
    }

    init() {
        if (this.menuButton && this.menuList) {
            this.addMenuMobileEvents();
        }
        return this;
    }

    openMenu(event) {
        event.preventDefault();
        this.menuButton.classList.add(this.activeClass);
        this.menuList.classList.add(this.activeClass);
        outsideClick(this.menuList, this.events, () => {
            this.menuButton.classList.remove(this.activeClass);
            this.menuList.classList.remove(this.activeClass);
        });
    }

    addMenuMobileEvents() {
        this.events.forEach((userEvent) => {
            this.menuButton.addEventListener(userEvent, this.openMenu);
        });
    }
}
