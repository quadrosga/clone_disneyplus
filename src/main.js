document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const currentPosition = window.scrollY;

        if(currentPosition < heroHeight) {
            hideHeaderElements();
        }
        else {
            showHeaderElements();
        }
    })

    // Seção de atrações, programação das abas     
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const targetTab = button.target.dataset.tabButton;
            const Tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            hideAllTabs();
            Tab.classList.add('shows__list--is-active');
            removeActiveButton();
            button.target.classList.add('shows__tabs__button--is-active');
        })
    }
    // Seção FAQ, accordion (abrir e fechar ao clicar)
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', toggleAnswer);
    }
})

function hideHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function toggleAnswer(element) {
    const classe = 'faq__questions__item--is--open';
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(classe);
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for( let i = 0; i <buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}