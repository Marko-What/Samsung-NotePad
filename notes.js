(function() {
		$("nav div#button").on('click', function(){
			$('div#belezkaInput').css("display","block");
			$('div#belezka').css("display","none");
			$('div#fotBox').css("display","block");		
		});


		$("div#wrapper div#belezka div#bele_Main div#button_re").on('click', function(){
			var content = $(this).first("div#belezkaInput div#content").val();
			var colorClass =$(this).first("div#belezkaInput div#content").prop('class');
		/*	$(this).closest('div#belezka').remove();*/
			$('div#belezkaInput').css("display","block");
			$('div#belezka').css("display","none");
			$('div#fotBox').css("display","block");	
			$('div#belezkaInput').addClass(colorClass);
			$('div#belezkaInput textarea').text(content);
		});



		$('div#fotBox div#purple').click(function() {
			$('div#belezkaInput div#content').attr( "class", "purple" );
		});
		$('div#fotBox div#yellow').click(function() {
			$('div#belezkaInput div#content').attr( "class", "yellow" );
		});
		$('div#fotBox div#blue').click(function() {
			$('div#belezkaInput div#content').attr( "class", "blue" );
		});
		$('div#fotBox div#green').click(function() {
			$('div#belezkaInput div#content').attr( "class", "green" );
		});
		$('div#fotBox div#orange').click(function() {
			$('div#belezkaInput div#content').attr( "class", "orange" );
		});
		
		
		
		$('div#wrapper div#bele_Main div#button').click(function() {	
		$(this).closest('div#belezka').animate(1500).css("height","auto");
		});
					
		$('div#bele_Main div#button_right-end').click(function() {	
		$(this).closest('div#belezka').css("height","65px");
		});

		$('div#wrapper div#belezka div#bele_Main div#button_right').click(function() {	
			confirm("STE SIGRNA DA zelite");
	/*	$(this).closest('div#belezka').slideUp(400);*/
		$(this).closest('div#belezka').remove();
		var count1 = $( "div#belezka" ).size() -2 ;
		$('nav div#button span#count').text(count1);	
		});


		

			$('div#fotBox div#buttons div#preklici').click(function(){
			$('div#belezkaInput').css("display","none");
			$('div#belezka').css("display","block");
			$('div#fotBox').css("display","none");
		});

		



		$('div#fotBox div#buttons div#shrani').click(function(){
			$('div#belezka').css("display","block");
			var content = $("div#belezkaInput textarea").val();
			var colorClass =$("div#belezkaInput div#content").prop('class');
				/*var belezka = $("div#wrapper").first("div#belezka");*/
					var belezka = $("div#belezka.default").clone(true);
					
				console.log(belezka);
				
					
				
			
			/*	$(belezka).css("display","block");*/
			
				
			$('div#fotBox').css("display","none");
			$('div#belezkaInput').css("display","none");
			/*$('div#belezka').css("display","block");*/
			
			
			/*$("div#wrapper").prepend(belezka);*/
			
			
			/*belezka.addClass(colorClass).text(content);*/
			belezka.removeClass("default").appendTo("div#wrapper");
			$('div#wrapper div#belezka').last('div#belezka').addClass(colorClass);
			$('div#wrapper div#belezka div#content').last().text(content);
						/*.nth(1).first("div#content")
						.addClass('red');*/
						/*.text(content);*/
			/*$('div#belezka').first().addClass(colorClass);*/
			/*$("div#wrapper").after('sdsdsds');*/
				var count1 = $( "div#belezka" ).size() -2 ;
				/*alert( "Size: " + count1);*/
				/*var text12 = '+ Ustvari belezko ...' . count1;*/
			$('nav div#button span#count').text(count1);		
			});
})();
