window.onload = function() {
    let navbar = document.querySelector('.navbar');
    let isIndexPage = document.querySelector('#indexPage');
    let votes = document.querySelectorAll('.vote');

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

    // count the votes of each element
    votes.forEach(function(e, index) {
        e.addEventListener('submit', function(event) {
            let postId = e.getAttribute('action').split('/')[1]; // get the id of the current card
            let vote = e[2].getAttribute('value'); // get the vote - liked or disliked
            let isVoted = e[3].getAttribute('class').split(' ')[2]; // get the voted class of a card
            let points = document.querySelectorAll('.points'); // get all cars's ids
            let cardButtons = document.querySelectorAll('.card-buttons'); // get the elements of the card buttons container

            if(vote == 'liked' && isVoted == undefined) { // add one point to the card's votes
                getPoints(postId, points, 1, true);
                toggleBtnClass(1);

            } else if (vote == 'liked' && isVoted != undefined) { // cancel the previous liked vote
                getPoints(postId, points, -1, true);
                toggleBtnClass(1);

            } else if (vote == 'disliked' && isVoted == undefined){ // subtracts one point from the card's votes
                getPoints(postId, points, -1, false);
                toggleBtnClass(0);

            } else if(vote == 'disliked' && isVoted != undefined) { // cancel the previous disliked vote
                getPoints(postId, points, 1, false);
                toggleBtnClass(0);

            } 

            // toggle voted classes on click
            function toggleBtnClass(el) {
                for (let k = 0; k < cardButtons.length; k++) {
                    if (postId == cardButtons[k].children[0][0].getAttribute('value')) {
                        cardButtons[k].children[el][3].classList.remove('btn-voted');
                        e[3].classList.toggle('btn-voted');
                    }
                }
            }

            // get points 
            function getPoints(cardId, cardPoints, vote, wasLiked) {
                for (let k = 0; k < cardButtons.length; k++) {
                    if (cardId == cardButtons[k].children[0][0].getAttribute('value')) {
                        dislikeVote = cardButtons[k].children[1][3].getAttribute('class').split(' ')[2];
                        likeVote = cardButtons[k].children[0][3].getAttribute('class').split(' ')[2];
                        if(dislikeVote != undefined && wasLiked != false) {
                            vote += 1;
                        } else if(likeVote != undefined && wasLiked != true) {
                            vote -= 1;
                        }
                    }
                }

                for (let i = 0; i < cardPoints.length; i++) {
                    if (cardId == cardPoints[i].getAttribute('value')) {
                        cardPoints[i].textContent = (parseInt(cardPoints[i].textContent) + vote);
                        return cardPoints[i].textContent;
                    }
                }
            }

        });
    });
    
    // checks if the page top is greater then 150px, if yes set the navbar color to purple
    if (document.documentElement.scrollTop >= 150 || document.documentElement.clientWidth < 992) {
        navbar.classList.add('bgColor');
    }

    // toggle navbar color on window resize
    window.onresize = function(){
        if (document.documentElement.clientWidth < 992) {
            navbar.classList.add('bgColor');
        } else {
            navbar.classList.remove('bgColor');
        }
    }

    // toggle navbar color on scroll
    window.onscroll = function() {
        // if the current page is the index page, it chages the color of the navbar on scroll
        if(isIndexPage != undefined && isIndexPage != "" && isIndexPage != null) {
            // checks if the page was scrolled
            if (document.documentElement.scrollTop >= 150 && document.documentElement.clientWidth > 992) {
                navbar.classList.add('bgColor');
            } else if (document.documentElement.clientWidth > 992) {
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
