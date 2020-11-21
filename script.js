var $game = $('.game').blockrain({ autoplay: true, autoplayRestart: false });

$("#themes input[name='theme']").click(function() {
    documentgetElementById("q").value = $game.blockrain('theme', $(this).val());
});