$(document).ready(function () {
  // Load more button function

  $("#js-button").click(function () {
    $("#js-button").addClass("js-hide-btn");
    $("#js-last-element")
      .addClass("js-show-element")
      .removeAttr("id");
  });
});



(function() {

  var hamburger = {
    navToggle : document.querySelector('.nav-toggle'),
    nav: document.querySelector('.nav__menu'),

    doToggle: function(e) {
      //e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());