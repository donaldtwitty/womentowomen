(function () {
    "use strict";

    const select = (el) => document.querySelector(el);

    const on = (type, el, listener) => select(el).addEventListener(type, listener);

    const typed = select('.typed')
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
});
