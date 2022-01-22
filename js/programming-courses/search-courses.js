let btnAllCourses = document.querySelector('.element-branch__courses-filters');
let windowAllCourses = document.querySelector('.ul__show-branch__courses-filters');

btnAllCourses.addEventListener('click', () => {
    windowAllCourses.classList.toggle('active__show-branch');
    btnAllCourses.classList.toggle('element-branch__up-arrow')
})

let btnSorting = document.querySelector('.btn-sorting__displayed-cards');
let listSorting = document.querySelector('.ul-sorting__displayed-cards');
let mobileBtnSorting = document.querySelector('.btn-sorting__displayed-cards._mobile');

btnSorting.addEventListener('click', function() {
    btnSorting.classList.toggle('active__btn-sorting');
    listSorting.classList.toggle('active__ul-sorting');
});

mobileBtnSorting.addEventListener('click', function() {
    listSorting.classList.toggle('active__ul-sorting');
});

let openBtnFilters = document.querySelector('.open__btn-filters__results-search');
let textOpenBtnFilters = document.querySelector('.text-btn-open__results-search');
let imgOpenBtnFilters = document.querySelector('.img-btn-open__results-search');
let resultSearch = document.querySelector('.results-search');

openBtnFilters.addEventListener('click', function() {
    if(!resultSearch.classList.contains('_active-result-search')) {
        resultSearch.classList.add('_active-result-search');
        textOpenBtnFilters.innerHTML = 'закрыть';
        imgOpenBtnFilters.style.display='none';
    } else {
        resultSearch.classList.remove('_active-result-search');
        textOpenBtnFilters.innerHTML = 'фильтровать';
        imgOpenBtnFilters.style.display='block';
    }
});