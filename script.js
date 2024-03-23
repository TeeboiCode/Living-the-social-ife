let menuBtn = document.getElementById('menuBtn');
let siderNav = document.querySelector('.siderNav');
let closeBtn = document.getElementById('closeBtn');
const aboutPgBtn = document.getElementById('about');
let body = document.querySelector('body')
const loadingPageHome = document.getElementById('loadingPageHome');
const loadingPageOthers = document.getElementById('loadingPageOthers');
const loadingPagewidget = document.getElementById('loadingPagewidget');
const loadingPagewidget2 = document.getElementById('loadingPagewidget2');
const loadingPagewidget3 = document.getElementById('loadingPagewidget3');
const loadingPagewidget4 = document.getElementById('loadingPagewidget4');
// const articleReadMore = document.querySelectorAll('.article-read-more');
const articleReadMore = document.querySelector('.article-read-more');

menuBtn.addEventListener('click', function() {
    siderNav.style.top ='0px';
});

closeBtn.addEventListener('click', function() {
    siderNav.style.top ='-500px';
});

document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        loadingPageHome.style.display = 'none';
    }, 3000); 
});

document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        loadingPageOthers.style.display = 'none';
    }, 1000); 
});


document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        loadingPagewidget.style.display = 'none';
    }, 4000); 
});
document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        loadingPagewidget2.style.display = 'none';
    }, 4500); 
});
document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        loadingPagewidget3.style.display = 'none';
    }, 5000); 
});
document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(function() {
        loadingPagewidget4.style.display = 'none';
    }, 5500); 
});




articleReadMore.addEventListener('click', function () {
    const remainingText = this.parentElement.querySelector('.remainingText');
    if (remainingText.style.display === 'block') {
        remainingText.style.display = 'none'; 
        articleReadMore.textContent = 'CONTINUE READING...'; 
    } else if (remainingText.style.display === 'none') {
        remainingText.style.display = 'block';
        articleReadMore.textContent = 'REDUCE TEXT'; 
    } 

});



// for (let i = 0; i < articleReadMore.length; i++) {
//     articleReadMore[i].addEventListener('click', function () {
//         // event.preventDefault();
//         const remainingText = this.parentElement.querySelector('.remainingText');

//         if (remainingText.style.display === 'none') {
//             remainingText.style.display = 'inline'; 
//             this.textContent = 'REDUCE TEXT'; 
//         } else {
//             remainingText.style.display = 'none';
//             this.textContent = 'CONTINUE READING...'; 
//         }
//     })
    
// };
