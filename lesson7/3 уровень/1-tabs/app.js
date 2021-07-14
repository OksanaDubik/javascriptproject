'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
let linkText = document.querySelector("const");
let navLinksList = document.getElementsByClassName("nav-link");


/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.


    changeText(event);
    changeActiveClass(event);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event
 */
function changeActiveClass(event) {
    for (let i = 0; i < navLinksList.length; i++) {

            if (!navLinksList[i].classList.contains("active")) {

                navLinksList[i].classList.add("active");
                navLinksList[i - 1].classList.remove("active");
            }

    }
}

/**
 * Эта фукнция должна читать текст (например через textContent) из
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event
 */
function changeText(event) {
    for (let i = 0; i < navLinksList.length; i++) {
       let text= navLinksList[i].textContent;
console.log(text);

    }


}