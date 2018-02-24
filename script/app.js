;
$(function(){

	/*		Фиксированная-верхняя полоса прокрутки		*/
$(window).scroll(function(){
	var ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
	$('#scrollBar-progress').width(ratio + '%');
});
/*		Фиксированная-верхняя полоса прокрутки		*/

/*		Подключаем стилизацию для блоков кода		*/
hljs.initHighlightingOnLoad();
/*		Подключаем стилизацию для блоков кода		*/

});