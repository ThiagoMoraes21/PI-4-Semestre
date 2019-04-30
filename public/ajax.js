$('#new-comment-form').submit(function(e){
    // prevent form to submit
    e.preventDefault();

    // take the current object and stringify it 
    let newComment = $(this).serialize();
    let commentInput = $('#commentInput').val();
    // make the post request sending the new json data
    $.post('/:id/comments', newComment, function (comment) {
        if(commentInput != undefined && commentInput != "" && commentInput != null) {
            // append the new comment to the comments section
            $('#comments-section').append(
              ` <li class="list-group-item">
                    <span class="lead">
                        ${comment.text}
                    </span>
                </li>`
            );
    
            // clear the input value
            $('#commentInput').val("");
        } else {
            console.log('NOOP');
        }

    });
});