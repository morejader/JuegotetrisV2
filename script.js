var $game = $('.game').blockrain({autoplay: true, autoplayRestart: false});

$("#themes input[name='theme']").click(function(){
	$game.blockrain('theme', $(this).val());
});
