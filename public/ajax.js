$('#new-comment-form').submit(function(e){
    // prevent form to submit
    e.preventDefault();

    // take the current object and stringify it 
    let newComment = $(this).serialize();
    // make the post request sending the new json data
    $.post('/todos', newComment, function (data) {
        $('#todo-list').append(
            `
           <li class="list-group-item">
                <span class="lead">
                    ${data.text}
                </span>
                <div class="pull-right">
                    <a href="/todos/${data._id}/edit" class="btn btn-sm btn-warning">Edit</a>
                    <form style="display: inline" method="POST" action="/todos/${data._id}?_method=DELETE">
                        <button type="submit" class="btn btn-sm btn-danger">Delete</button>
                    </form>
                </div>
                <div class="clearfix"></div>
            </li>
         `
        );

        $('#new-todo-form').find('.form-control').val('');
    });
});