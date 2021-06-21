window.onscroll = function() {myFunction()};
  
var header = document.getElementById("myheader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
function c(min,max){
return Math.floor(Math.random()*(max-min))+min;
}
var day;
	switch (new Date().getDay()){
		case  0:
		day ="Sunday";
		break;
		case 1:
		day="Monday";
		break;
		case 2:
		day="Tuesday";
		break;
		case 3:
		day = "Wednesday";
		break;
		case 4:
		day = "Thursday"
		break;
		case 5:
		day = "Friday";
		break;
		case 6:
		day ="Saturday";
	}
  document.getElementById("hari").innerHTML="Today is " +day;
  $(document).ready(function(){
    $('.r').addClass('l');
    $('.r').hover(function(){
      $(this).addClass('h');
    },
    function(){ 
      $(this).removeClass('h');
    }
    );
    $('.r').click(function(event){
      $(this).addClass('a');
      event.preventDefault();
    });
  });