export default function outsideClick(element, userEvents, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside);
            userEvents.forEach((userEvent) => {
                html.removeEventListener(userEvent, handleOutsideClick);
            });
            callback();
        }
    }

    if (!element.hasAttribute(outside)) {
        userEvents.forEach((userEvent) => setTimeout(() => {
            html.addEventListener(userEvent, handleOutsideClick);
        }));
        element.setAttribute(outside, '');
    }
}
