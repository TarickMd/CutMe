(function($) {

  //Make the main function
  $.fn.cutMe = function(inputVal) {

  //Make the input values 
    var options = $.extend({
      size: 230,
      cutEnd: "...",
      url: "http://google.com.ua"
    }, inputVal);
    
    return this.each(function() {
      var textReal, textCut, cutEndHtml, textOff;
      var func = $(this);
      var init = function() {
          func.each(function() {
            textReal = $(this).html();
      
            //Make the truncated string plus cutEnd input value
            if (textReal.length > options.size) {
              textCut = $.trim(textReal)
              .substring(0, options.size)
              .split(" ")
              .slice(0, -1)
              .join(" ");
              $(this).html(textCut);
              $(this).append("<span> " + options.cutEnd + "</span>");
            } else if (textReal.length < options.size) {
                $(this).html(textReal);
              }
          });

          //select added end of our text
          cutEndHtml = $("span");
          //Make some styles for it
          $(cutEndHtml).css({ "color": "blue"});
          $(cutEndHtml).hover(function(){
            $(this).css({"cursor":"pointer",
                         "color": "red",
                         "background-color": "#FFFAFA"});
            }, function() {
            $(this).css({ "color": "blue",
                          "background-color": ""});
          });
          
          //event listener for click on the cutEnd text
          $(cutEndHtml).on("click", function() {
            //Not case sensative option
            if(options.cutEnd.toLowerCase() === "(read more)") {

              //Open url from options in new window
              window.open(options.url);

            } else {

                //Show the whole text
                $(this).empty();
                textOff = $.trim(textReal).substring(textCut.length, textReal.length);
                $(this).append(" " + textOff);

                //Change our styles
                $(cutEndHtml).hover(function(){
                  $(this).css({"cursor":"default",
                               "color": "black",
                               "background-color": ""});
                  }, function() {
                  $(this).css({ "color": ""});
                });

              }
          });
        };
      init();
    });
  };
})(jQuery);