// var myDiv = $('.card-text');
// myDiv.text(myDiv.text().substring(0,90));

let navbar = document.querySelector('.navbar');

window.onscroll = function() {
    if(document.documentElement.scrollTop >= 150) {
        navbar.classList.add('bgColor');
    } else {
        navbar.classList.remove('bgColor');
    }
}