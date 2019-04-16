$('#new-comment-form').submit(function(e){
    // prevent form to submit
    e.preventDefault();

    // take the current object and stringify it 
    let newComment = $(this).serialize();
    console.log('newComment: ');
    console.log(newComment);

    // make the post request sending the new json data
    $.post('/:id/comments', newComment, function (comment) {
        console.log('comment: ');
        console.log(comment.text);
        
        try {
            // append the new comment to the comments section
            $('#comments-section').append(
              ` <li>
                    ${comment.text}
                </li>`
            );

            // clear the input value
            $('#comment-input').val('');
        } catch(err) {
            throw err;
        }
    });
});