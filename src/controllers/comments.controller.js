class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

    init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    // create comment form listener code here

      var self = this;
      this.$addCommentForm.on('click', 'input[type="submit"]', function(e){ //live event imageener
        var imageId = parseInt($(this).parents('ul').data('id'));
        var commentText = $(this).prev('input[type="text"]').val();

        $(this).prev('input[type="text"]').val(""); // clear out user input
        var newComment = new Comment(commentText, imageId);

        e.preventDefault();

        self.render(newComment);
        newComment.findImage(); 

      });
    }

}

 CommentsController.prototype.render = function(commentObject) {

    $(`ul[id="comments-${commentObject.id}"]`).append(commentObject.commentEl()); //was .appen(insertLi)

  }