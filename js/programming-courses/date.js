let inputDate = document.querySelector('.start-courses-input__results-search');
let textDate = document.querySelector('.content__block-data__start-courses-label');

inputDate.addEventListener('change', function() {
    textDate.textContent = inputDate.value;
});