$(".block").mouseover(function () {
	$(".details").text("Aliquam eu fringilla nunc, et iaculis ex. Pellentesque").css({
		"color": "white",
		"display": "block"
	});
	$(".block").mouseout(function () {
		$(".details").text("Aliquam eu fringilla nunc, et iaculis ex. Pellentesque").css("display", "none")
	});
});

$(".block_1").mouseover(function () {
	$(".details_1").text("Pellentesque nunc, et iaculis ex.").css({
		"color": "white",
		"display": "block"
	});
	$(".block_1").mouseout(function () {
		$(".details_1").text("Pellentesque nunc, et iaculis ex.").css("display", "none")
	});
});

$(".block_2").mouseover(function () {
	$(".details_2").text("Maecenas ut pretium justo, in consectetur  id egestas nisi.").css({
		"color": "white",
		"display": "block"
	});
	$(".block_2").mouseout(function () {
		$(".details_2").text("Maecenas ut pretium justo, in consectetur id egestas nisi.").css("display", "none")
	});
});
