$(document).ready(function() {
  // Load more button function

  $("#js-button").click(function() {
    $("#js-button").addClass("js-hide-btn");
    $("#js-last-element")
      .addClass("js-show-element")
      .removeAttr("id");
  });
});
