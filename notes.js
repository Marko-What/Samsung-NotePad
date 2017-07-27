(function() {
		$("nav div#button").on('click', function(){
			$('div#belezkaInput').css("display","block");
			$('div#belezka').css("display","none");
			$('div#fotBox').css("display","block");		
		});


		$("div#wrapper div#belezka div#bele_Main div#button_re").on('click', function(){
			var content = $(this).first("div#belezkaInput div#content").val();
			var colorClass = $(this).first("div#belezkaInput div#content").prop('class');
			$('div#belezkaInput div#fotBox').css("display","block");
			$('div#belezka').css("display","none");
			$('div#belezkaInput').addClass(colorClass);
			$('div#belezkaInput textarea').text(content);
		});

		$('div#boxColor.purple').click(function() {
			$('div#belezkaInput div#content').attr( "class", "purple" );
		});
		$('div#boxColor.yellow').click(function() {
			$('div#belezkaInput div#content').attr( "class", "yellow" );
		});
		$('div#boxColor.blue').click(function() {
			$('div#belezkaInput div#content').attr( "class", "blue" );
		});
		$('div#boxColor.green').click(function() {
			$('div#belezkaInput div#content').attr( "class", "green" );
		});
		$('div#boxColor.orange').click(function() {
			$('div#belezkaInput div#content').attr( "class", "orange" );
		});
		
		
		
		$('div#button_main.plus').click(function() {	
			$(this).closest('div#belezka ').css("height","auto");
		});
					
		$('div#button_main.right-end').click(function() {	
			$(this).closest('div#belezka').animate({"height" : "65px"},1100);
		});

		$('div#button_main.right').click(function() {	
				 out=confirm("STE SIGRNA DA zelite");
					if(out == true) { 
				$(this).closest('div#belezka').remove();
				var count1 = $( "div#belezka" ).size() -2 ;
				$('nav div#button span#count').text(count1);	
				}
		});


		$('div#fotBox div#belezkaItemButton.preklici').click(function(){
				$('div#belezkaInput').css("display","none");
				$('div#belezka').css("display","block");
				$('div#fotBox').css("display","none");
		});


		$('div#fotBox div#belezkaItemButton.shrani').click(function(){
				$('div#belezka').css("display","block");
				var content = $("div#belezkaInput textarea").val();
				var colorClass =$("div#belezkaInput div#content").prop('class');
				var belezka = $("div#belezka.default").clone(true);
					
				$('div#fotBox').css("display","none");
				$('div#belezkaInput').css("display","none");
				belezka.removeClass("default").appendTo("div#wrapper");
				$('div#wrapper div#belezka').last('div#belezka').addClass(colorClass);
				$('div#wrapper div#belezka div#content').last().text(content);
				var count1 = $( "div#belezka" ).size() -2 ;
				$('nav div#button span#count').text(count1);		
		});
})();
