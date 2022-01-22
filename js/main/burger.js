let btnBurger = document.querySelector('.btn-burger');
let showMenuBurger = document.querySelector('.show__menu-burger');
let btnCloseBurger = document.querySelector('.btn-burger__close');

btnBurger.addEventListener('click', () => {
    showMenuBurger.classList.add('show-menu__burger-active');
    btnCloseBurger.style.display='block';
    btnBurger.style.display='none';
});

btnCloseBurger.addEventListener('click', () => {
    showMenuBurger.classList.remove('show-menu__burger-active');
    btnCloseBurger.style.display='none';
    btnBurger.style.display='block';
});

let interval;

document.querySelectorAll('.element-courses__menu-burger').forEach(e => {
    e.addEventListener('click', e => {
        const menuBurgerCourses = e.currentTarget.dataset.path;
        const menuCoursesBurger = document.querySelector(`[data-target=${menuBurgerCourses}]`);
        let branchCoursesMenu = document.querySelector('.ul-courses__menu-burger');
        let backMenu = document.querySelectorAll('.btn-back__burger-menu');

        document.querySelectorAll('.block__branch-courses__burger-menu').forEach(e => {
            if(!menuCoursesBurger.classList.contains('opens')) {
                e.classList.remove('block__branch-courses__burger-menu__active');
                e.classList.remove('opens');
                menuCoursesBurger.classList.add('block__branch-courses__burger-menu__active');
                interval = setTimeout(() => {
                    menuCoursesBurger.classList.add('opens');
                }, 0);
                branchCoursesMenu.style.display='none';
            } 
            backMenu.forEach(e => {
                e.addEventListener('click', e => {
                    branchCoursesMenu.style.display='block';
                    menuCoursesBurger.classList.remove('block__branch-courses__burger-menu__active');
                    interval = setTimeout(() => {
                        menuCoursesBurger.classList.remove('opens');
                    }, 0);
                });
            });
        });
    });
});
