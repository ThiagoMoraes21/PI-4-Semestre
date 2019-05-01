// var myDiv = $('.card-text');
// myDiv.text(myDiv.text().substring(0,90));

window.onload = function() {
    let navbar = document.querySelector('.navbar');
    let isIndexPage = document.querySelector('#indexPage');
    console.log(isIndexPage);
    
    if (isIndexPage == undefined || isIndexPage == "" || isIndexPage == null) {
        navbar.classList.add('bgColor');
    }

    window.onscroll = function() {
        if(isIndexPage != undefined && isIndexPage != "" && isIndexPage != null) {
            if(document.documentElement.scrollTop >= 150) {
                navbar.classList.add('bgColor');
            } else {
                navbar.classList.remove('bgColor');
            }
        }
    }

}
function toggleSection(id) {
    let e = document.getElementById(id);
    let arrow = document.querySelector('.fa-angle-down');

    if(e.style.display == 'none'){
        e.style.display = 'block';
        arrow.classList.toggle('arrow-up');
    } else {
        e.style.display = 'none';
        arrow.classList.toggle('arrow-up');
    }
}


