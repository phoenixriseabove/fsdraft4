$(".button").on("click",function(){
    var button = $(this)
    $(this).addClass("pressed");

    setTimeout(function(){
        button.removeClass("pressed")},100);
});