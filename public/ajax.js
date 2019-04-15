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
        console.log(comment);
        $('#comments-section').append(
            `
            <li class="list-group-item">
                    <span class="lead">
                        ${comment.text}
                    </span>
                    <div class="clearfix"></div>
                </li>
            `
        );

        // clear the input value
        $('#new-todo-form').find('.form-control').val('');
    });
});