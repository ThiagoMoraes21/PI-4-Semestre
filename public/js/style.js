window.onload = function() {
    let navbar = document.querySelector('.navbar');
    let isIndexPage = document.querySelector('#indexPage');
    let votes = document.querySelectorAll('.vote');

    // count the votes of each element
    votes.forEach(function(e) {
        e.addEventListener('submit', function(event) {
            let postId = e.getAttribute('action').split('/')[1];
            let vote = e[2].getAttribute('value');
            let points = document.querySelectorAll('.points');
            let voted = false;
            console.log(postId);
            console.log(vote);
            console.log(points[0].getAttribute('value'));

            if(vote == 'liked') {
                getPoints(postId, points, +1);
            } else if(vote == 'disliked'){
                getPoints(postId, points, -1);
            }

            // get points 
            function getPoints(cardId, cardPoints, vote) {
                for (let i = 0; i < cardPoints.length; i++) {
                    if (cardId == cardPoints[i].getAttribute('value')) {
                        cardPoints[i].textContent = (parseInt(cardPoints[i].textContent) + vote);
                        // e[2].setAttribute('value', 'liked_true');
                        return cardPoints[i].textContent;
                    }
                }
            }

        });
    });


    // verify if the current page is not the index page
    if (isIndexPage == undefined || isIndexPage == "" || isIndexPage == null) {
        // if not, adds the class bgColor to the navbar
        navbar.classList.add('bgColor');
    } else {
        var mixer = mixitup('.container');
        // short cards by their points 
        mixer.sort('order:desc')
            .then(function (state) {
                console.log(state.activeSort.attribute === 'order'); // true
                console.log(state.activeSort.order === 'desc'); // true
            });
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
