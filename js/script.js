var my_bd = new Date(1992, 7, 2, 23, 20);

function calculate_seconds(){
	secs = (new Date() - my_bd)/1000;
	$('#age').html(Math.floor(secs))
}

$(function () {
	var interval = setInterval(calculate_seconds, 1000);
})