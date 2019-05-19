window.onload = function() {
    var mixer = mixitup('.container');
    let navbar = document.querySelector('.navbar');
    let isIndexPage = document.querySelector('#indexPage');
    let votes = document.querySelectorAll('.vote');

    // short cards by their points 
    mixer.sort('order:desc')
        .then(function (state) {
            console.log(state.activeSort.attribute === 'order'); // true
            console.log(state.activeSort.order === 'desc'); // true
        });

    // count the votes of each element
    votes.forEach(function(e) {
        e.addEventListener('submit', function(event) {
            let postId = e.getAttribute('action').split('/')[1];
            let vote = e[2].getAttribute('value');
            let points = document.querySelectorAll('.points');
            console.log(postId);
            console.log(vote);
            console.log(points[0].getAttribute('value'));

            if(vote == 'liked') {
                // search for the card's points and increment it 
                for(let i = 0; i < points.length; i++) {
                    if(postId == points[i].getAttribute('value')){
                        points[i].textContent = (parseInt(points[i].textContent) + 1);
                        return points[i].textContent;
                    } 
                }
            } else {
                // search for the card's points and decrease it 
                for (let i = 0; i < points.length; i++) {
                    if (postId == points[i].getAttribute('value')) {
                        points[i].textContent = (parseInt(points[i].textContent) - 1);
                        return points[i].textContent;
                    }
                }
            }
        })
    });
    
    // verify if the current page is not the index page
    if (isIndexPage == undefined || isIndexPage == "" || isIndexPage == null) {
        // if not, adds the class bgColor to the navbar
        navbar.classList.add('bgColor');
    } 
    
    if (document.documentElement.scrollTop >= 150) {
        navbar.classList.add('bgColor');
    } 

    window.onscroll = function() {
        // if the current page is the index page, it chages the color of the navbar on scroll
        if(isIndexPage != undefined && isIndexPage != "" && isIndexPage != null) {
            // checks if the page was scrolled
            if(document.documentElement.scrollTop >= 150) {
                navbar.classList.add('bgColor');
            } else {
                // if it's in the top, take off the class with the color
                navbar.classList.remove('bgColor');
            }
        }
    }

}

// toggle the content of a section when the button was clicked
function toggleSection(id) {
    let e = document.getElementById(id);
    let arrow = document.querySelector('.fa-angle-down');

    // if the containter is not visible, make's it visible
    if(e.style.display == 'none'){
        e.style.display = 'block';
        arrow.classList.toggle('arrow-up');
    } else {
        // else, make's it invisible
        e.style.display = 'none';
        arrow.classList.toggle('arrow-up');
    }
}


