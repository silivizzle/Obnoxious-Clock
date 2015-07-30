$(document).ready(function(){
	function displayTime(){
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridiem = "AM";

		if (seconds < 10) {
		    seconds = "0" + seconds;
		}
		if (minutes < 10) {
		    minutes = "0" + minutes;
		}
		if (hours > 12) {
		    hours = hours - 12;
		    meridiem = "PM";
		}
		if (hours === 0) {
		    hours = 12;    
		}

		var clockDiv = document.getElementById('clock');
		clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
		
	};

	var index = 0;
	var index2 = 3;
	var index3 = 6;
	function changeColor(){
		var colors =	['black', 'silver', 'gray', 'maroon', 'red', 
						'purple', 'fuchsia', 'green', 'olive', 'lime', 
						'yellow', 'navy', 'blue', 'teal', 'aqua'];
		if (index == colors.length){
			index = 0;
		}
		if (index2 == colors.length){
			index2 = 0;
		}

		if (index3 == colors.length){
			index3 = 0;
		}

		$('#header').css('color', colors[index]);
		$('body').css('background-color', colors[index2]);
		$('#clock').css('color', colors[index3]);
		index++;
		index2++;
		index3++;
	}

	setInterval(displayTime, 1000);
	setInterval(changeColor, 100);

});