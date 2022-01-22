let btnCourses = document.getElementById('btn__all-courses');
let textBtnCourses = document.getElementById('text-btn__all-courses');
let windowCourses = document.getElementById('window__all-courses');

btnCourses.onclick = function() {
    if(!windowCourses.classList.contains('active__show-window')) {
        windowCourses.classList.add('active__show-window');
        textBtnCourses.classList.add('active__text-btn__all-courses');
    } else {
        windowCourses.classList.remove('active__show-window');
        textBtnCourses.classList.remove('active__text-btn__all-courses');
    }
}

let intervalId;

document.querySelectorAll('.element__all-course').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        const menuCourses = document.querySelector(`[data-target=${menu}]`);
        document.querySelectorAll('.ul__courses').forEach(e => {
            if(!menuCourses.classList.contains('open')) {
                e.classList.remove('active__ul-courses');
                e.classList.remove('open');
                menuCourses.classList.add('active__ul-courses');
                intervalId = setTimeout(() => {
                    menuCourses.classList.add('open');
                }, 0);
            } else {
                menuCourses.classList.remove('active__ul-courses');
                intervalId = setTimeout(() => {
                    menuCourses.classList.remove('open');
                }, 0);
            }
        });
    });
});

// top-schools

let choiceCourses = document.querySelector('.btn-nav__branch-courses');
let courses = document.querySelector('.ul-nav__branch-courses');

choiceCourses.addEventListener('click', function() {
    courses.classList.toggle('active__branch-courses');
    choiceCourses.classList.toggle('active__branch-courses');
})