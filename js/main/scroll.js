function scrollTo(element) {
    window.scroll({
        left:0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

let buttonScroll = document.querySelector('.btn__scroll-start');
let sectionScroll = document.querySelector('.header');

buttonScroll.addEventListener('click', () => {
    scrollTo(sectionScroll);
})