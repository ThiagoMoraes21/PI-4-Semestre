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
