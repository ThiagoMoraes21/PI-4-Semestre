window.onload = function() {
    var mixer = mixitup('.container');
    let navbar = document.querySelector('.navbar');
    let isIndexPage = document.querySelector('#indexPage');
    let votes = document.querySelectorAll('.votes');

    // count the votes of each element
    // votes.forEach(function(e) {
    //     e.addEventListener('click', function(event) {
    //         let voteNum = parseInt(e.textContent);
    //         let elValue = e.getAttribute('value');
    //         console.log(post._id);

    //         if(elValue != null && elValue != undefined && elValue != "") {
    //             voteNum -= 1;
    //             e.textContent = voteNum;
    //             e.setAttribute('value', '');
    //         } else {
    //             voteNum += 1;
    //             e.textContent = voteNum;
    //             e.setAttribute('value', 'voted');
    //         }
    //     })
    // });
    
    // verify if the current page is not the index page
    if (isIndexPage == undefined || isIndexPage == "" || isIndexPage == null) {
        // if not, adds the class bgColor to the navbar
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


