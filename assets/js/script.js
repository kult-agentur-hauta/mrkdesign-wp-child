(function($){
 
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });
 
        return $(shuffled);
 
    };
 
})(jQuery);

jQuery(document).ready(function($) {
    function shufflePosts() {
        $('.page-id-170 .raven-posts .raven-grid-item').shuffle();
        $('.page-id-170 .raven-posts .raven-grid-item').show();
    }
    shufflePosts();
  // Custom codes.
  $('body').ajaxComplete(function() {
      shufflePosts();
  });
});
 
