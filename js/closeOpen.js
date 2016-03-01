/*var openBlock = 0;

var data = {"seconds_valid": 3600 };
$.ajax({
	url: 'https://cors-anywhere.herokuapp.com/https://api.sproutvideo.com/v1/videos',
	type: 'GET',
	headers: {
		'SproutVideo-Api-Key': 'd6d25efc65e930d9d8e65a19a95be891'
	}
})
	.then(function(response, status, xhr) {
		console.log(response, status, xhr);
	});*/

var bedList = [
	{
		"id": 1,
		"name": "Bronze Iron Bed Frame",
		"price": "133",
		"image": "http://image.jpg"
	},
	{
		"id": 2,
		"name": "Bronze Iron Queen Bed",
		"price": "201",
		"image": "http://image.jpg"
	},
	{
		"id": 3,
		"name": "Bronze Iron Bed Frame",
		"price": "133",
		"image": "http://image.jpg"
	},
	{
		"id": 4,
		"name": "Bronze Iron Bed Frame",
		"price": "133",
		"image": "http://image.jpg"
	},
	{
		"id": 5,
		"name": "Bronze Iron Bed Frame",
		"price": "133",
		"image": "http://image.jpg"
	}
];


$("#1, #2, #3").click(function () {
	$(this).toggle("hide", function () {
		$("#textExample").css({
			"visibility": "visible",
			"textIndent": "20px",
			"paddingTop": "50px",
			"width": "80%",
			"margin": "0 auto"
		});
		openBlock++;
		if (openBlock == 3) {
			$('#1, #2, #3').show('2000');

		}
	});
});

$('#link').click(function () {
	$(this).text('...');
	$('#someText').show("slow");
	$('#link').hide();
});
$('#someText').click(function () {
	$('#someText').hide("fast");
	$('#link').show();
	if ('#link'){
		$('#1, #2, #3').show('2000');
	}
});

/*Fast order block*/
$(".qv_icon").click(function (){
	$('.qvMod').show("slow").addClass("qvProduct");
	$('.img_qv').slideDown(2000);
	$(".block_content").css("opacity", "0.4");

});
$(".buttonClose").click(function (){
	$('.qvMod').hide("fast");
	$(".block_content").css("opacity", "1");
});

