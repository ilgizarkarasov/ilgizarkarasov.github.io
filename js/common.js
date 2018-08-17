$(function() {

	// скролл btn
	
    var $btnTop = $(".btn-top")
	$(window).on("scroll", function(){
		if ($(window).scrollTop() >20){
			$btnTop.fadeIn();
		}else{
			$btnTop.fadeOut();
		}
	});

	$btnTop.on("click", function(){
		$("html,body").animate({scrollTop:0}, 800)
	});


  // слайдер

    $('.sl').slick({
     slidesToShow: 5,
 	 slidesToScroll: 1,
  	 autoplay: true,
 	 autoplaySpeed: 2000,
 	 arrows: false,

	  // the magic
	  responsive: [{

	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        infinite: true
	      }

	    }, {

	      breakpoint: 600,
	      settings: {
	       slidesToShow: 2,
	      }

	    }, {

	      breakpoint: 500,
	      settings: {
	       slidesToShow: 1,
	      }
	    }]

	    });

    // menu

    $('.menu-btn').on('click', function(e) {
	  e.preventDefault();
	  $('.menu').toggleClass('menu_active');
	})

	//E-mail Ajax Send

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	// video background

    var videobackground = new $.backgroundVideo($('header'), {
      "align": "centerY",
      "width": 1280,
      "height": 720,
      "path": "img/",
      "filename": "video",
      "types": ["mp4","ogg","webm"],
      "preload": true,
      "autoplay": true,
      "loop": true
    });

    // calc

    $('.calc select').change(function(){

		$edition = $('select#card_edition').val();
		$paper = $('select#card_paper').val();
		$color = $('select#card_color').val();
		$print_file = $('select#card_color option:selected').attr('data-print-file');
		$paper_ratio = $('select#card_paper option:selected').attr('data-paper-ratio');
		$color_format = $('select#card_color option:selected').attr('data-color');
		$print = $('select#card_color option:selected').attr('data-print');
		$division = 30;
		$final_edition = $edition / $division;
		$price = $final_edition * $paper_ratio + parseInt($print_file) + $final_edition*$print;
		console.log($price);
		$('span#final_price').text($price);
		
	});

	//	popup window

	$(".btn-open-form").click(function(){
       $("#feedback-background").toggle();  
    });

	 $(".exit-btn").click(function(){
       $("#feedback-background").toggle(); 
    });

	
});
