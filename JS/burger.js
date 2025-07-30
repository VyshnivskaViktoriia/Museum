document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-body');
    const nav = document.querySelector('.head_nav');
    const content = document.querySelector('.head_content')

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        content.classList.toggle('active');
    });
});