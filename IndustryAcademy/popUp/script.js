const button = document.querySelector('.button');
const wrapper = document.querySelector('.wrapper');
const closeIcon = document.querySelector('.close');

function showWrapper() {
    wrapper.classList.add("opened");
}

function hideWrapper() {
    wrapper.classList.remove("opened");
}

button.addEventListener('click', showWrapper);
closeIcon.addEventListener("click", hideWrapper);