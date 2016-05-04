(function(){
  var num = 0, zindex = 1, imageLength = $(".imageBorder div").length;
  function slideMainFunc(num){
    var argsObj = $(".imageBorder div"), slideWidth = argsObj.eq(num).width(), argsZindex = argsObj.eq(num).css("z-index");
    argsObj.eq(imageLength-1-num).animate({width: 0, zIndex: -1}, 3000, function(){
      num += 1;
      if(num == imageLength-1){
        $(".imageBorder div").eq(imageLength-1).css("width", "100%");
      }
      if(num == imageLength){
        num = 0;
        for(var i = 0; i < imageLength; i++){
          $(".imageBorder div").eq(i).css("width", "100%").css("zIndex", i+1);
        }
      }
      slideMainFunc(num)
    });
  }
  slideMainFunc(num, zindex);
})()