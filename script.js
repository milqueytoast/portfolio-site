/* Mobile Nav */
const hamburger = document.getElementById('hamburger');
const dropdown = document.getElementById('dropdown');

hamburger.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', (event) => {
    if (!event.target.matches('.mobile button')) {
        dropdown.style.display = 'none';
    }
});

/* Popup */
document.querySelectorAll('.work img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup').style.display = 'block';
        document.querySelector('.popup img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup span').onclick = () => {
    document.querySelector('.popup').style.display = 'none';
}



