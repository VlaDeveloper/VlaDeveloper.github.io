$(document).ready(function(){
	$('#toggle_menu').on('click', function(){
		if($('.menu__items').css('display') === 'none'){
			$('.menu__items').css('display', 'block');
		}else{
			$('.menu__items').css('display', 'none');
		}
	});
	$(".menu__item a").mPageScroll2id({
		offset: 150,
		clickedClass: 'menu__link_active',
		onStart: function(){
			if($(window).width() <= '992'){
				$('.menu__items').css('display', 'none');
			}
		}
	});
	$('.menu__btn').magnificPopup()
});
