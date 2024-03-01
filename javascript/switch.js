$(document).ready(function(){
	var cardToggle = 0;

$('.switch').on('click', function(event){
    event.preventDefault();
		if(cardToggle == 0 ){
			$(this).text('Login');
			$('.box-log').animate({
				right: '350px'
			});
			$('.box-sign').animate({
				right: '0'
			});	

			cardToggle = 1;

		}else{
			$(this).text('Sign Up');
			$('.box-log').animate({
				right: '0'
			});
			$('.box-sign').animate({
				right: '-350px'
			});

			cardToggle = 0;
		}
	})
})