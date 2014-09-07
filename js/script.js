var my_bd = new Date(1992, 7, 2, 23, 20);

function calculate_seconds(){
	secs = (new Date() - my_bd)/1000;
	$('#age').html(Math.floor(secs))
}

function gotopart(letter){
	$('html, body').animate({
		scrollTop: $('#jump-'+letter).position().top
	},1000)
}

$(function () {
	var interval = setInterval(calculate_seconds, 1000);
	$('.part-link').each(function(){
		$(this).click(function(){
			var part_id = $(this).find('span span').html().toLowerCase()
			gotopart(part_id);
		})
	})
	$(document).keypress(function(event){
		var letter = String.fromCharCode(event.which)
		gotopart(letter);
	})
	$(document).scroll(function(){
		$('.part-link').each(function(){
				var color;
				var part_id = $(this).find('span span').html().toLowerCase()
				var part = $('#jump-'+part_id)
				var top = part.position().top
				pos = $(document).scrollTop()
				var color_threshoold = $(document).height() /10.0;
				var dist = top - pos;

				if (dist <= -2 * color_threshoold)
					color = '#bbb2af';
				if (dist <= -1 * color_threshoold  && dist > -2 * color_threshoold)
					color = '#5eb0cf';
				if (dist <= color_threshoold  && dist > -1 * color_threshoold)
					color = '#00adef';
				if (dist <= 2* color_threshoold  && dist > color_threshoold)
					color = '#2faedf';
				if (dist <= 4* color_threshoold  && dist > 2*color_threshoold)
					color = '#8cb1bf';
				if (dist > 4 * color_threshoold)
					color = '#bbb2af';

				$(this).find('span').css('color', color)
		})
	})

	$('a').each(function(){
		$(this).attr('target', '_blank')
	})

	$('a.namah').each(function(){
		addr = $(this).attr('href');
		// console.log(addr)
		addr = addr.replace(' -at- ', '@')
		$(this).attr('href', addr)
	})

	$('div.namah').each(function(){
		addr = $(this).html()
		addr = addr.replace(' -at- ', '@')
		$(this).html(addr)
	})



	gotopart('a');
})