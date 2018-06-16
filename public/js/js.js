var btn = document.getElementById("look-btn");
var default_img = document.getElementById("default-img");
var screen_pannel = document.getElementById("screen-panel");

var step_color = 0;
var step_number = 0;
var color = ['yellow','red', 'blue', 'green', 'cyan','purple','pink','orange'];
btn.onclick = function(){ changeTextAndColor()};

function changeTextAndColor()
{
	//hide the default img
	default_img.style.display="none";

	if(step_color>=color.length) {
		step_color = 0
	}
	
	screen_pannel.style.backgroundColor=color[step_color];
	screen_pannel.innerHTML = step_number +1;
	step_color++;
	step_number++;

};


