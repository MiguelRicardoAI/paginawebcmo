	var i = 0;
		$(document).on("ready", main);

		function main(){
			var control = setInterval(cambiarSlider, 8000);
		}

		function cambiarSlider(){
			i++;
			if(i == $("#banner img").size()){
				i = 0;
			}
			$("#banner img").hide();
			$("#banner img").eq(i).fadeIn("medium");
		}