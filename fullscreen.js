/***
 * fullscreen.js
 * @author Jonas Monnier
 */

var FullScreen;

FullScreen = (function()
{
	var version = "0.1";
	var events = {};
	
	function FullScreen()
	{

	}
	
	FullScreen.toggle = function(element){
		if(FullScreen.isFullScreen())
			return FullScreen.cancelFullScreen();
		else
			return FullScreen.requestFullScreen(element);
	};
	
	FullScreen.requestFullScreen = function(element)
	{
		if(element == null)
			element = document.documentElement;
		
		if (element.requestFullScreen) {
		  	element.requestFullScreen();
		} else if (element.mozRequestFullScreen) {
		  	element.mozRequestFullScreen();
		} else if (element.webkitRequestFullScreen) {
		  	element.webkitRequestFullScreen();
		}else{
			return false;
		}
		return true;
	};
	
	FullScreen.cancelFullScreen = function()
	{
		if (document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if (document.mozCancelFullScreen) {
		  	document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
		  	document.webkitCancelFullScreen();
		}else{
			return false;
		}
		return true;
	};
	
	FullScreen.isFullScreen = function(){
		return ((document.fullScreenElement != undefined && document.fullScreenElement !== null) // HTML5 spec
			|| (document.mozFullScreen != undefined && document.mozFullScreen === true) // Mozilla
			|| (document.webkitIsFullScreen != undefined && document.webkitIsFullScreen === true)); // webkit
	};
	
	return FullScreen;
	
})();