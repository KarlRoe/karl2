//This code is a bit rudimentary.
//This is more of a proof of concept than code for production.
//The only thing it needs to do, however, is to check if the field has any value. The rest is done with CSS

$(document).ready(function(){
  function updateText(event){
    var input=$(this);
    setTimeout(function(){
      var val=input.val();
      if(val!="")
        input.parent().addClass("floating-placeholder-float");
      else
        input.parent().removeClass("floating-placeholder-float");
    },1)
  }
  $(".floating-placeholder input").keydown(updateText);
  $(".floating-placeholder input").change(updateText);
  $('#divvy').addClass('hidden').hide();
  
});

  	var myDiv = document.getElementById("myDiv");
	var fa = document.getElementById("fa");
	var step = -430;
	var moved = false;
	var myCity;
	function moveRight(){
	if(!moved)
	  {
		  myDiv.style.left = 0 + "px";
		  var el_left = myDiv.offsetLeft;
		  el_left += (step - 450);
		  myDiv.style.left = el_left + "px";
		  moved = true;
		  if ($('#divvy').hasClass('hidden')) {
            $('#divvy').removeClass('hidden').fadeIn(1000);
	      }
		  else {
			$('#divvy').addClass('hidden').fadeOut(1000);
        }
		$('#divvy2').addClass('hidden').fadeOut(1000);
		
	  }
	  
	  myCity = document.getElementById("name");
	  
	  
	}
	
	$('li').click(function(){
  var name = $(this).attr('name');
  if ( name == 'on' )
      {
        $(this).attr('name', 'off');
        $(this).removeClass('clicked')
        $(this).css('z-index','10');
        $(this).transition({ scale: 1}, {duration: 100});
		 } else {
        $(this).attr('name','on')
        $(this).addClass('clicked')
        $(this).css('z-index','15');
        $(this).transition({ scale: 1.2 }, {duration: 100});
		 };
});

  var availHeight = $('.content-body').outerHeight() -
                    $('.content-mask').outerHeight();
  new Dragdealer('content-scroller', {
    horizontal: false,
    vertical: true,
    yPrecision: availHeight,
    animationCallback: function(x, y) {
      $('.content-body').css('margin-top', y * availHeight);
    }
  });
