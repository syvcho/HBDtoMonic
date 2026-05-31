$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
	var vw;

	// 1. Reusable function for responsive balloons
	function positionBalloons() {
		var w = $(window).width();
		var h = $(window).height();
		var bWidth = $('.balloons').width();
		var space = w / 8; // Divide width by 8 to get 7 even spaces
		var topPos = h * 0.2; // Position 20% down from the top

		$('#b11').animate({top: topPos, left: (space * 1) - (bWidth / 2)}, 500);
		$('#b22').animate({top: topPos, left: (space * 2) - (bWidth / 2)}, 500);
		$('#b33').animate({top: topPos, left: (space * 3) - (bWidth / 2)}, 500);
		$('#b44').animate({top: topPos, left: (space * 4) - (bWidth / 2)}, 500);
		$('#b55').animate({top: topPos, left: (space * 5) - (bWidth / 2)}, 500);
		$('#b66').animate({top: topPos, left: (space * 6) - (bWidth / 2)}, 500);
		$('#b77').animate({top: topPos, left: (space * 7) - (bWidth / 2)}, 500);
	}

	// 2. Call it when the window resizes
	$(window).resize(function(){
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		positionBalloons();
	});

$('#turn_on').click(function(){
		$(this).fadeOut('slow');

        // Mobile audio autoplay fix: unlock audio on direct user click
        var audio = $('.song')[0];
        audio.play();
        audio.pause();

		// 1. Turn on Lights (Starts immediately)
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');

		// 2. Play Music & Flash Lights (Wait 4 seconds)
        setTimeout(function() {
            audio.play();
            $('#bulb_yellow').addClass('bulb-glow-yellow-after');
            $('#bulb_red').addClass('bulb-glow-red-after');
            $('#bulb_blue').addClass('bulb-glow-blue-after');
            $('#bulb_green').addClass('bulb-glow-green-after');
            $('#bulb_pink').addClass('bulb-glow-pink-after');
            $('#bulb_orange').addClass('bulb-glow-orange-after');
            $('body').css('background-color','#FFF'); // fixed typo from original code
            $('body').addClass('peach-after');
        }, 4000);

		// 3. Drop Banner (Wait 9 seconds)
        setTimeout(function() {
            $('.bannar').addClass('bannar-come');
        }, 9000);

		// 4. Fly Balloons (Wait 15 seconds)
        setTimeout(function() {
            $('.balloon-border').animate({top:-500},8000);
            $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
            $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
            loopOne();
            loopTwo();
            loopThree();
            loopFour();
            loopFive();
            loopSix();
            loopSeven();
        }, 15000);

        // 5. Fade in Cake (Wait 21 seconds)
        setTimeout(function() {
            $('.cake').fadeIn('slow');
        }, 21000);

        // 6. Show "Light Candle" button (Wait 24 seconds)
        setTimeout(function() {
            $('#light_candle').fadeIn('slow');
        }, 24000);
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		
		// 3. Call it when the Happy Birthday button is clicked
		positionBalloons();

		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
			$(this).fadeOut('slow');
			$('.message').fadeIn('slow');
			
			var i;

			function msgLoop (i) {
				$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
					i=i+1;
					$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
					
					// THIS IS THE IMPORTANT PART: It counts your 9 lines of text
					if(i==9){
						// After the 9th line (~Kois), wait 2 seconds, then show the letter and button
						setTimeout(function() {
							$('.whatsapp-prompt').fadeIn('slow');
						}, 2000);
					}
					else{
						msgLoop(i);
					}			
				});
			}
			
			msgLoop(0);
		});
});