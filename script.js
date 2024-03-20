let menuBtn = document.getElementById('menuBtn');
let siderNav = document.querySelector('.siderNav');
let closeBtn = document.getElementById('closeBtn');

menuBtn.addEventListener('click', function() {
    siderNav.style.top ='0px';
});

closeBtn.addEventListener('click', function() {
    siderNav.style.top ='-500px';
})