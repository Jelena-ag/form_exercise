const inputSelect = document.querySelector('.input-select');
const icon = document.querySelector('.contact__form-icon');
const select = document.querySelector('.contact__form-select');

inputSelect.addEventListener('click', () => {
    select.classList.toggle('show'); 
    icon.classList.toggle('icon-rotate');  
})

icon.addEventListener('click', () => {
	select.classList.toggle('show');
	icon.classList.toggle('icon-rotate');
});
