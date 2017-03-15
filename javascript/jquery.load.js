$(window).load(function () {

//    // Dropdown menu

//    $('#topnav ul li').hover(function () {
//        //$('header nav ul li ul').slideToggle();
//        $(this).siblings().children('ul').slideUp();
//        $(this).children('ul').slideToggle();
//        if ($(this).children('ul').length) {
//            $(this).children('a').toggleClass('hover');
//        }
//        $(this).siblings().children('a').removeClass('hover');
//    });


	// Mobile dropdown menu
	
	var pull = $('#show_menu');
	var menu = $('#topnav>ul');
	
	pull.click(function () {
			menu.slideToggle();
	});
	
	// Nav scroll

	$(document).on("scroll",function() {

		if($(document).scrollTop()>0){
			$('#pageheader header').addClass("scroll");
		}
		else{
			$('#pageheader header').removeClass("scroll");
		}

	});

	if ($(document).scrollTop() > 0) {
	    $('#pageheader header').addClass("scroll");
	}


    // Tooltip

    $('.info_tooltip').hover(function () {
	    var tooltip = $(this).attr('data-tooltip-info');
	    $('<p class="tooltip"></p>')
            .html(tooltip)
            .appendTo('body')
            .fadeIn('fast');
	}, function () {
	    $('.tooltip').remove();
	}).mousemove(function (e) {
	    var mousex = e.pageX + 20;
	    var mousey = e.pageY + 10;
	    $('.tooltip')
        .css({ top: mousey, left: mousex })
	});

    $('.click_tooltip').click(function (e) {
        if ($('.tooltip_dialog').length) {
            $('.tooltip_dialog').remove();
        }
        else {
            var tooltip = $(this).attr('data-tooltip-info');
            $('<p class="tooltip_dialog"></p>')
                .html(tooltip + '<span class="tooltip_dialog_close">X</span>')
                .appendTo('body');
            $('.tooltip_dialog').fadeIn('fast');
            var mousex = e.pageX + 20;
            var mousey = e.pageY + 10;
            $('.tooltip_dialog')
            .css({ top: mousey, left: mousex })
            $('.tooltip_dialog_close').click(function () {
                $('.tooltip_dialog').remove();
            });
        }
    });

});

