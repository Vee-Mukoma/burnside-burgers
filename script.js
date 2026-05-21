//Navbar shadow on scroll effect
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//Order now button
const orderBtn = document.getElementById('order');

orderBtn.addEventListener('click', function() {
    window.location.href = 'order.html';
});