(function() {
		re="none";
		$("nav div#button").on('click', function(){
			$('div#belezkaInput').css("display","block");
			$('div#belezka').css("display","none");
			$('div#fotBox').css("display","block");	
			$('nav').css("display","none");		
		});

		/**later refactor modify existing content button */
		
		$("div#button_main.re").on('click', function(){
			re = "active";		
			var contentActive =$(this).parents('div#belezka').children('div#content').text();
	
			var colorClass =$(this).closest('div#belezka').prop('class');
			current = $(this).closest("div#belezka").contents();
			$('div#belezkaInput').css("display","block");
			$('div#belezka').css("display","none");
			$('div#fotBox').css("display","block");	
			$('nav').css("display","none");	
			
			$('div#belezkaInput div#content').attr( "class", colorClass );
			$('div#belezkaInput textarea').val(contentActive);
			
		});


	

/**later refactor modify existing content button */



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
				$('nav').css("display","block");
				
				 
		});


		$('div#fotBox div#belezkaItemButton.shrani').click(function(){
				if(re == "active"){
				$('div#belezka').css("display","block");
				$('nav').css("display","block");
				var content = $("div#belezkaInput textarea").val();
				var colorClass =$("div#belezkaInput div#content").prop('class');
				current.closest('div#belezka').attr('class',colorClass);				
				/*current.addClass(colorClass);*/
				
				$('div#fotBox').css("display","none");
				$('div#belezkaInput').css("display","none");
				current.closest('div#content').text(content);
				/*remove color class, rather styles color :inherit*/
				current.closest('div#content').attr('class',colorClass);				
				re = "none";	
				}
				else {
				$('div#belezka').css("display","block");
				$('nav').css("display","block");
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
					
		}	
		});
})();
