const hamburger = document.getElementById('hamburger');
const dropdown = document.getElementById('dropdown');

hamburger.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
})

window.addEventListener('click', (event) => {
    if (!event.target.matches('.mobile button')) {
        dropdown.style.display = 'none';
    }
})