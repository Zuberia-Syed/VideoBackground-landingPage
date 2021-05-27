const menuToggle = document.querySelector('.toggle');
const showcaseToggle = document.querySelector('.showcase');

menuToggle.addEventListener('click',()=>{
    menuToggle.classList.toggle('active');
    showcaseToggle.classList.toggle('active');
})