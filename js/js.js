$(window).scroll(function () {
	if ($(this).scrollTop() >= 200) {
		$("#navBar").addClass("noTransparrent");
	}
	else {
		$("#navBar").removeClass("noTransparrent");
	}

});

$(document).ready(function () {
	$("a.scroll").on('click', function (event) {

		var hash = this.hash;

		$('html, body').animate({ scrollTop: $(hash).offset().top - 90 }, 800, function () { });

	});
	function checkVisible(elm, eval) {
		eval = eval || "visible";
		var vpH = $(window).height(),
			st = $(window).scrollTop(),
			y = $(elm).offset().top,
			elementHeight = $(elm).height();

		if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
		if (eval == "above") return ((y < (vpH + st)));
	}

	$(function () {
		$("#commentForm").validate();
	});
	//هو العنصر الذي الذي سيتحول الى دائرة.circle
	$('.circle').circleProgress({
		startAngle: -Math.PI / 2, // هذه القيمة تحدد الزاوية التي تبدأ عنها المكتبة برسم الدائرة
		fill: "#0575e6", // هذه هي قيمة لون النسبة المكتملة
	}).on('circle-animation-progress', function (event, progress, stepValue) {
		$(this).find('span').html(Math.round(stepValue * 100) + '%');
	});




});