$('.new-comment-form').submit(function(e){
    // prevent form to submit
    e.preventDefault();

    // take the current object and stringify it 
    let newComment = $(this).serialize();
    let commentInput = $('#commentInput').val();
    // make the post request sending the new json data
    $.post('/:id/comments', newComment, function (comment) {
        console.log(comment);
        if(commentInput != undefined && commentInput != "" && commentInput != null) {
            // append the new comment to the comments section
            $('#comments-section').append(
              ` <li class="list-group-item">
                    <div class="row comments">
                        <div class="col-2">
                            <div class="user-pic-comment"><i class="fas fa-user"></i></div>
                        </div>
                        <span class="col-10 lead">
                            ${comment.text}
                        </span>
                    </div>
                </li>`
            );
    
            // clear the input value
            $('#commentInput').val("");
        } else {
            console.log('comment input can\'t be empty!');
        }

    });
});

$('.vote').submit(function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    var formAction = $(this).attr('action');

    $.ajax({
        url: formAction,
        data: formData,
        type: 'PUT',
        success: function(data) {
            // do something
        }
    });
});