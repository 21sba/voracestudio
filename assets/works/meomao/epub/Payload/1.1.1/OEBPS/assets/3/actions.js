pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 3;
pubcoder.page.title = pubcoder.page.title || "3";
pubcoder.page.number = pubcoder.page.number || 3;
pubcoder.page.alias = pubcoder.page.alias || "";

var ua = navigator.userAgent.toLowerCase();
var touchDownEvent;
var touchUpEvent;
var isMobile;
var aigX = 0, aigY = 0;
var askAudioPermission = false;

/*
 * 
 * Init Action Lists
 *
 * 
 */
var obj78_onAppear_activeActionGroupIndex = -1;
var obj78_onAppear_runningActionsCount = 0;
var obj78_onAppear_loopCount = 0;
var obj84_onLoad_activeActionGroupIndex = -1;
var obj84_onLoad_runningActionsCount = 0;
var obj84_onLoad_loopCount = 0;
var obj121_onTap_activeActionGroupIndex = -1;
var obj121_onTap_runningActionsCount = 0;
var obj121_onTap_loopCount = 0;
var obj121_onLoad_activeActionGroupIndex = -1;
var obj121_onLoad_runningActionsCount = 0;
var obj121_onLoad_loopCount = 0;
var obj266_onLoad_activeActionGroupIndex = -1;
var obj266_onLoad_runningActionsCount = 0;
var obj266_onLoad_loopCount = 0;
var obj1816_onLoad_activeActionGroupIndex = -1;
var obj1816_onLoad_runningActionsCount = 0;
var obj1816_onLoad_loopCount = 0;
var obj1820_onLoad_activeActionGroupIndex = -1;
var obj1820_onLoad_runningActionsCount = 0;
var obj1820_onLoad_loopCount = 0;
var obj2044_onLoad_activeActionGroupIndex = -1;
var obj2044_onLoad_runningActionsCount = 0;
var obj2044_onLoad_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
 $(window).on(PubCoder.Events.PageLoad, function(){
	window.eventObj = {};
	/*
	 * 
	 * Init SCAnimation
	 * 
	 * 
	 */
	
	/*
	 *
	 *   Init Shake
	 *
	 */
	window.addEventListener('shake', function () {
		
	}, false);
	
	/*
	 *
	 *   Init Masked Images
	 *
	 */
	 
 	/*
	 * 
	 * Init SCPhotogallery
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCQuizMulti
	 * 
	 * 
	 */
	
 	/*
	 * 
	 * Init SCDrawer
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWPanZoom
	 * 
	 * 
	 */
	
    
 	/*
	 * 
	 * Init SCWMemoryGame
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCCrosswords
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCFillInTheGaps
	 * 
	 * 
	 */
	
	/*
	 * 
	 * Init SCTrueFalse
	 * 
	 * 
	 */
	
	
	/*
	 * 
	 * Init SCMatchWordWithPicture
	 * 
	 * 
	 */
	
    
    
	if(! navigator.userAgent.match(/PubCoderHelper/i)) {
		/*
		 *
	 	 *   Action Groups
	 	 *
	 	 */
		
obj78_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78_onAppear_activeActionGroupIndex = -1;
		$("#obj78").trigger("obj78_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78) {
				console.warn("de-queueing event obj78." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78_onAppear_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj78 
move_105();
function move_105() {
	window.obj78_onAppear_runningActionsCount = obj78_onAppear_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj78");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj78_onAppear_runningActionsCount = window.obj78_onAppear_runningActionsCount - 1;
if (window.obj78_onAppear_runningActionsCount < 0) {
	window.obj78_onAppear_runningActionsCount = 0;
} else if (window.obj78_onAppear_runningActionsCount == 0) {
	obj78_onAppear_actionGroup1();
}
		}, 1);
	});
}



















};
obj78_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78_onAppear_activeActionGroupIndex = -1;
		$("#obj78").trigger("obj78_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78) {
				console.warn("de-queueing event obj78." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78_onAppear_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj78 
move_106();
function move_106() {
	window.obj78_onAppear_runningActionsCount = obj78_onAppear_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj78");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj78_onAppear_runningActionsCount = window.obj78_onAppear_runningActionsCount - 1;
if (window.obj78_onAppear_runningActionsCount < 0) {
	window.obj78_onAppear_runningActionsCount = 0;
} else if (window.obj78_onAppear_runningActionsCount == 0) {
	obj78_onAppear_actionGroup2();
}
		}, 1);
	});
}



















};
obj78_onAppear_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj78_onAppear_activeActionGroupIndex = -1;
		$("#obj78").trigger("obj78_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78) {
				console.warn("de-queueing event obj78." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78_onAppear_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj78_onAppear();
function loop_obj78_onAppear() {
	var loopCount = 0;
	window.obj78_onAppear_loopCount = window.obj78_onAppear_loopCount + 1;
	if (loopCount != 0 && window.obj78_onAppear_loopCount > loopCount) {
		window.obj78_onAppear_loopCount = 0
		obj78_onAppear_actionGroup3();
	} else {
		obj78_onAppear_actionGroup0();
	}
}













};
obj78_onAppear_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj78_onAppear_activeActionGroupIndex = -1;
		$("#obj78").trigger("obj78_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 78) {
				console.warn("de-queueing event obj78." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj78").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj78_onAppear_activeActionGroupIndex = 3;
	





















};
obj84_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84_onLoad_activeActionGroupIndex = -1;
		$("#obj84").trigger("obj84_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84) {
				console.warn("de-queueing event obj84." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_238();
function wait_238() {
	window.obj84_onLoad_runningActionsCount = obj84_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj84_onLoad_runningActionsCount = window.obj84_onLoad_runningActionsCount - 1;
if (window.obj84_onLoad_runningActionsCount < 0) {
	window.obj84_onLoad_runningActionsCount = 0;
} else if (window.obj84_onLoad_runningActionsCount == 0) {
	obj84_onLoad_actionGroup1();
}
	}, 300);
}













};
obj84_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84_onLoad_activeActionGroupIndex = -1;
		$("#obj84").trigger("obj84_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84) {
				console.warn("de-queueing event obj84." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj84 
scale_239();
function scale_239() {
	window.obj84_onLoad_runningActionsCount = obj84_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj84";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj84';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
	var scaleYValue = '0';
	var effectDuration = '0';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_239_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_239_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_239_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_239_completed() {
	setTimeout(function() {
		window.obj84_onLoad_runningActionsCount = window.obj84_onLoad_runningActionsCount - 1;
if (window.obj84_onLoad_runningActionsCount < 0) {
	window.obj84_onLoad_runningActionsCount = 0;
} else if (window.obj84_onLoad_runningActionsCount == 0) {
	obj84_onLoad_actionGroup2();
}
	}, 1);
}












};
obj84_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84_onLoad_activeActionGroupIndex = -1;
		$("#obj84").trigger("obj84_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84) {
				console.warn("de-queueing event obj84." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj84
(function(){
	window.obj84_onLoad_runningActionsCount = obj84_onLoad_runningActionsCount + 1;

	var selector = "#obj84";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj84_onLoad_runningActionsCount = window.obj84_onLoad_runningActionsCount - 1;
if (window.obj84_onLoad_runningActionsCount < 0) {
	window.obj84_onLoad_runningActionsCount = 0;
} else if (window.obj84_onLoad_runningActionsCount == 0) {
	obj84_onLoad_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj84_onLoad_runningActionsCount = window.obj84_onLoad_runningActionsCount - 1;
if (window.obj84_onLoad_runningActionsCount < 0) {
	window.obj84_onLoad_runningActionsCount = 0;
} else if (window.obj84_onLoad_runningActionsCount == 0) {
	obj84_onLoad_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84_onLoad_activeActionGroupIndex = -1;
		$("#obj84").trigger("obj84_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84) {
				console.warn("de-queueing event obj84." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84_onLoad_activeActionGroupIndex = 3;
	









//	action: scale
//	target: obj84 
scale_241();
function scale_241() {
	window.obj84_onLoad_runningActionsCount = obj84_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj84";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj84';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
	var scaleYValue = '1';
	var effectDuration = '0.3';
	var effectEasing = 'ease';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_241_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_241_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_241_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_241_completed() {
	setTimeout(function() {
		window.obj84_onLoad_runningActionsCount = window.obj84_onLoad_runningActionsCount - 1;
if (window.obj84_onLoad_runningActionsCount < 0) {
	window.obj84_onLoad_runningActionsCount = 0;
} else if (window.obj84_onLoad_runningActionsCount == 0) {
	obj84_onLoad_actionGroup4();
}
	}, 1);
}












};
obj84_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84_onLoad_activeActionGroupIndex = -1;
		$("#obj84").trigger("obj84_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84) {
				console.warn("de-queueing event obj84." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	selector: #obj86
(function(){
	window.obj84_onLoad_runningActionsCount = obj84_onLoad_runningActionsCount + 1;

	var selector = "#obj86";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj84_onLoad_runningActionsCount = window.obj84_onLoad_runningActionsCount - 1;
if (window.obj84_onLoad_runningActionsCount < 0) {
	window.obj84_onLoad_runningActionsCount = 0;
} else if (window.obj84_onLoad_runningActionsCount == 0) {
	obj84_onLoad_actionGroup5();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj84_onLoad_runningActionsCount = window.obj84_onLoad_runningActionsCount - 1;
if (window.obj84_onLoad_runningActionsCount < 0) {
	window.obj84_onLoad_runningActionsCount = 0;
} else if (window.obj84_onLoad_runningActionsCount == 0) {
	obj84_onLoad_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84_onLoad_activeActionGroupIndex = -1;
		$("#obj84").trigger("obj84_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84) {
				console.warn("de-queueing event obj84." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84_onLoad_activeActionGroupIndex = 5;
	








//	action: wait
wait_96();
function wait_96() {
	window.obj84_onLoad_runningActionsCount = obj84_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj84_onLoad_runningActionsCount = window.obj84_onLoad_runningActionsCount - 1;
if (window.obj84_onLoad_runningActionsCount < 0) {
	window.obj84_onLoad_runningActionsCount = 0;
} else if (window.obj84_onLoad_runningActionsCount == 0) {
	obj84_onLoad_actionGroup6();
}
	}, 2000);
}













};
obj84_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84_onLoad_activeActionGroupIndex = -1;
		$("#obj84").trigger("obj84_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84) {
				console.warn("de-queueing event obj84." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84_onLoad_activeActionGroupIndex = 6;
	

//	action: show 
//	selector: #obj121
(function(){
	window.obj84_onLoad_runningActionsCount = obj84_onLoad_runningActionsCount + 1;

	var selector = "#obj121";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "fadeIn";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj84_onLoad_runningActionsCount = window.obj84_onLoad_runningActionsCount - 1;
if (window.obj84_onLoad_runningActionsCount < 0) {
	window.obj84_onLoad_runningActionsCount = 0;
} else if (window.obj84_onLoad_runningActionsCount == 0) {
	obj84_onLoad_actionGroup7();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj84_onLoad_runningActionsCount = window.obj84_onLoad_runningActionsCount - 1;
if (window.obj84_onLoad_runningActionsCount < 0) {
	window.obj84_onLoad_runningActionsCount = 0;
} else if (window.obj84_onLoad_runningActionsCount == 0) {
	obj84_onLoad_actionGroup7();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84_onLoad_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84_onLoad_activeActionGroupIndex = -1;
		$("#obj84").trigger("obj84_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84) {
				console.warn("de-queueing event obj84." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84_onLoad_activeActionGroupIndex = 7;
	





















};
obj121_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj121_onTap_activeActionGroupIndex = -1;
		$("#obj121").trigger("obj121_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 121) {
				console.warn("de-queueing event obj121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj121_onTap_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj3123 
playAudio_3127();
function playAudio_3127() {
	window.obj121_onTap_runningActionsCount = obj121_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3123")[0];
	var playFromBeginning = true;
	var waitForCompletion = false;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj121_onTap_runningActionsCount = window.obj121_onTap_runningActionsCount - 1;
if (window.obj121_onTap_runningActionsCount < 0) {
	window.obj121_onTap_runningActionsCount = 0;
} else if (window.obj121_onTap_runningActionsCount == 0) {
	obj121_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj121_onTap_runningActionsCount = window.obj121_onTap_runningActionsCount - 1;
if (window.obj121_onTap_runningActionsCount < 0) {
	window.obj121_onTap_runningActionsCount = 0;
} else if (window.obj121_onTap_runningActionsCount == 0) {
	obj121_onTap_actionGroup1();
}
	}
}









};
obj121_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj121_onTap_activeActionGroupIndex = -1;
		$("#obj121").trigger("obj121_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 121) {
				console.warn("de-queueing event obj121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj121_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_271();
function runjs_271() {
	window.obj121_onTap_runningActionsCount = obj121_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj266"));
	
	setTimeout(function() {
		window.obj121_onTap_runningActionsCount = window.obj121_onTap_runningActionsCount - 1;
if (window.obj121_onTap_runningActionsCount < 0) {
	window.obj121_onTap_runningActionsCount = 0;
} else if (window.obj121_onTap_runningActionsCount == 0) {
	obj121_onTap_actionGroup2();
}
	}, 1);
}







};
obj121_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj121_onTap_activeActionGroupIndex = -1;
		$("#obj121").trigger("obj121_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 121) {
				console.warn("de-queueing event obj121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj121_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj266
(function(){
	window.obj121_onTap_runningActionsCount = obj121_onTap_runningActionsCount + 1;

	var selector = "#obj266";
	if ($(selector).hasClass("SCImage")) {
		var lastIndex = $(selector).length-1;
		$(selector).each(function (index, element) {
			if ($(element).hasClass("SCImage")) {
				try {
					const img = $("img", element)[0];
					img.decode()
						.then(function() { showObject(element, index == lastIndex); })
						.catch(function(encodingError) {
							console.error(encodingError);
							showObject(element, index == lastIndex);
						});
				} catch (err) {
					showObject(element, index == lastIndex);
				}
			} else {
				showObject(element, index == lastIndex);
			}
		});
	} else {
		showObject(selector, true);
	}
	
	function showObject(element, isLast) {
		$(element).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
		var animationType = "slideInRight";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj121_onTap_runningActionsCount = window.obj121_onTap_runningActionsCount - 1;
if (window.obj121_onTap_runningActionsCount < 0) {
	window.obj121_onTap_runningActionsCount = 0;
} else if (window.obj121_onTap_runningActionsCount == 0) {
	obj121_onTap_actionGroup3();
}
				}
				$(element).trigger('SCEventShow');
			}, 1);
			return;
		};
	
		$(element).css("animation-duration", animationDurationMs + "ms");
		$(element).css("animation-iteration-count", animationIterationCount);
	
		setTimeout(function() {
			$(element).css("display", "block");
			$(element).removeClass("animated " + animationType);
			if (isLast) {
				window.obj121_onTap_runningActionsCount = window.obj121_onTap_runningActionsCount - 1;
if (window.obj121_onTap_runningActionsCount < 0) {
	window.obj121_onTap_runningActionsCount = 0;
} else if (window.obj121_onTap_runningActionsCount == 0) {
	obj121_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj121_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj121_onTap_activeActionGroupIndex = -1;
		$("#obj121").trigger("obj121_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 121) {
				console.warn("de-queueing event obj121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj121_onTap_activeActionGroupIndex = 3;
	
//	action: goToPage
goToPage_273();
function goToPage_273() {
	window.obj121_onTap_runningActionsCount = obj121_onTap_runningActionsCount + 1;
	$("#anchor24")[0].click();
	window.obj121_onTap_runningActionsCount = window.obj121_onTap_runningActionsCount - 1;
if (window.obj121_onTap_runningActionsCount < 0) {
	window.obj121_onTap_runningActionsCount = 0;
} else if (window.obj121_onTap_runningActionsCount == 0) {
	obj121_onTap_actionGroup4();
}
}





















};
obj121_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj121_onTap_activeActionGroupIndex = -1;
		$("#obj121").trigger("obj121_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 121) {
				console.warn("de-queueing event obj121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj121_onTap_activeActionGroupIndex = 4;
	





















};
obj121_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj121_onLoad_activeActionGroupIndex = -1;
		$("#obj121").trigger("obj121_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 121) {
				console.warn("de-queueing event obj121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj121_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj121 
move_926();
function move_926() {
	window.obj121_onLoad_runningActionsCount = obj121_onLoad_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj121");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-10";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj121_onLoad_runningActionsCount = window.obj121_onLoad_runningActionsCount - 1;
if (window.obj121_onLoad_runningActionsCount < 0) {
	window.obj121_onLoad_runningActionsCount = 0;
} else if (window.obj121_onLoad_runningActionsCount == 0) {
	obj121_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj121_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj121_onLoad_activeActionGroupIndex = -1;
		$("#obj121").trigger("obj121_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 121) {
				console.warn("de-queueing event obj121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj121_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj121 
move_927();
function move_927() {
	window.obj121_onLoad_runningActionsCount = obj121_onLoad_runningActionsCount + 1;

	var easing = "ease";
	switch(easing) {
		case "ease-in":
		  easing = "easieEaseIn";
		  break;
		case "ease-out":
		  easing = "easieEaseOut";
		  break;
		case "linear":
		  easing = "easieLinear";
		  break;
		case "ease":
		  easing = "easieEaseInOut";
		  break;
		case "bounce-in":
		  easing = "easeInBounce";
		  break;
		case "bounce-out":
		  easing = "easeOutBounce";
		  break;
		case "elastic-in":
		  easing = "easeInElastic";
		  break;
		case "elastic-out":
		  easing = "easeOutElastic";
		  break;
	}
	var targetObject = $("#obj121");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=10";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj121_onLoad_runningActionsCount = window.obj121_onLoad_runningActionsCount - 1;
if (window.obj121_onLoad_runningActionsCount < 0) {
	window.obj121_onLoad_runningActionsCount = 0;
} else if (window.obj121_onLoad_runningActionsCount == 0) {
	obj121_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj121_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj121_onLoad_activeActionGroupIndex = -1;
		$("#obj121").trigger("obj121_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 121) {
				console.warn("de-queueing event obj121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj121_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj121_onLoad();
function loop_obj121_onLoad() {
	var loopCount = 0;
	window.obj121_onLoad_loopCount = window.obj121_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj121_onLoad_loopCount > loopCount) {
		window.obj121_onLoad_loopCount = 0
		obj121_onLoad_actionGroup3();
	} else {
		obj121_onLoad_actionGroup0();
	}
}













};
obj121_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj121_onLoad_activeActionGroupIndex = -1;
		$("#obj121").trigger("obj121_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 121) {
				console.warn("de-queueing event obj121." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj121").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj121_onLoad_activeActionGroupIndex = 3;
	





















};
obj266_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj266_onLoad_activeActionGroupIndex = -1;
		$("#obj266").trigger("obj266_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 266) {
				console.warn("de-queueing event obj266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj266_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj266 
hide_393();
function hide_393() {
	var selector = "#obj266";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj266_onLoad_runningActionsCount = obj266_onLoad_runningActionsCount + 1;
	
	var animationType = "slideOutLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj266_onLoad_runningActionsCount = window.obj266_onLoad_runningActionsCount - 1;
if (window.obj266_onLoad_runningActionsCount < 0) {
	window.obj266_onLoad_runningActionsCount = 0;
} else if (window.obj266_onLoad_runningActionsCount == 0) {
	obj266_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_393(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj266_onLoad_runningActionsCount = window.obj266_onLoad_runningActionsCount - 1;
if (window.obj266_onLoad_runningActionsCount < 0) {
	window.obj266_onLoad_runningActionsCount = 0;
} else if (window.obj266_onLoad_runningActionsCount == 0) {
	obj266_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj266_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj266_onLoad_activeActionGroupIndex = -1;
		$("#obj266").trigger("obj266_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 266) {
				console.warn("de-queueing event obj266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj266_onLoad_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_394();
function runjs_394() {
	window.obj266_onLoad_runningActionsCount = obj266_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj266"));
	
	setTimeout(function() {
		window.obj266_onLoad_runningActionsCount = window.obj266_onLoad_runningActionsCount - 1;
if (window.obj266_onLoad_runningActionsCount < 0) {
	window.obj266_onLoad_runningActionsCount = 0;
} else if (window.obj266_onLoad_runningActionsCount == 0) {
	obj266_onLoad_actionGroup2();
}
	}, 1);
}







};
obj266_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj266_onLoad_activeActionGroupIndex = -1;
		$("#obj266").trigger("obj266_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 266) {
				console.warn("de-queueing event obj266." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj266").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj266_onLoad_activeActionGroupIndex = 2;
	





















};
obj1816_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1816_onLoad_activeActionGroupIndex = -1;
		$("#obj1816").trigger("obj1816_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1816) {
				console.warn("de-queueing event obj1816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1816_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj1816 
playAudio_1818();
function playAudio_1818() {
	window.obj1816_onLoad_runningActionsCount = obj1816_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj1816")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1816_onLoad_runningActionsCount = window.obj1816_onLoad_runningActionsCount - 1;
if (window.obj1816_onLoad_runningActionsCount < 0) {
	window.obj1816_onLoad_runningActionsCount = 0;
} else if (window.obj1816_onLoad_runningActionsCount == 0) {
	obj1816_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1816_onLoad_runningActionsCount = window.obj1816_onLoad_runningActionsCount - 1;
if (window.obj1816_onLoad_runningActionsCount < 0) {
	window.obj1816_onLoad_runningActionsCount = 0;
} else if (window.obj1816_onLoad_runningActionsCount == 0) {
	obj1816_onLoad_actionGroup1();
}
	}
}


//	action: setMovieVolume
//	target: obj1816 
setAudioVolume_2048();
function setAudioVolume_2048() {
	window.obj1816_onLoad_runningActionsCount = obj1816_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj1816")[0];
	myAudio.volume = 0.4;
	window.obj1816_onLoad_runningActionsCount = window.obj1816_onLoad_runningActionsCount - 1;
if (window.obj1816_onLoad_runningActionsCount < 0) {
	window.obj1816_onLoad_runningActionsCount = 0;
} else if (window.obj1816_onLoad_runningActionsCount == 0) {
	obj1816_onLoad_actionGroup1();
}
}







};
obj1816_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1816_onLoad_activeActionGroupIndex = -1;
		$("#obj1816").trigger("obj1816_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1816) {
				console.warn("de-queueing event obj1816." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1816").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1816_onLoad_activeActionGroupIndex = 1;
	





















};
obj1820_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1820_onLoad_activeActionGroupIndex = -1;
		$("#obj1820").trigger("obj1820_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1820) {
				console.warn("de-queueing event obj1820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1820_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj1820 
playAudio_1822();
function playAudio_1822() {
	window.obj1820_onLoad_runningActionsCount = obj1820_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj1820")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj1820_onLoad_runningActionsCount = window.obj1820_onLoad_runningActionsCount - 1;
if (window.obj1820_onLoad_runningActionsCount < 0) {
	window.obj1820_onLoad_runningActionsCount = 0;
} else if (window.obj1820_onLoad_runningActionsCount == 0) {
	obj1820_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1820_onLoad_runningActionsCount = window.obj1820_onLoad_runningActionsCount - 1;
if (window.obj1820_onLoad_runningActionsCount < 0) {
	window.obj1820_onLoad_runningActionsCount = 0;
} else if (window.obj1820_onLoad_runningActionsCount == 0) {
	obj1820_onLoad_actionGroup1();
}
	}
}









};
obj1820_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1820_onLoad_activeActionGroupIndex = -1;
		$("#obj1820").trigger("obj1820_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1820) {
				console.warn("de-queueing event obj1820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1820_onLoad_activeActionGroupIndex = 1;
	





















};
obj2044_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2044_onLoad_activeActionGroupIndex = -1;
		$("#obj2044").trigger("obj2044_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2044) {
				console.warn("de-queueing event obj2044." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2044").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2044_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj2044 
playAudio_2046();
function playAudio_2046() {
	window.obj2044_onLoad_runningActionsCount = obj2044_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj2044")[0];
	var playFromBeginning = true;
	var waitForCompletion = true;
	if (playFromBeginning) {
		try {
			myAudio.currentTime = 0;
		} catch (err) {
			console.log(err);
			myAudio.src = myAudio.src;
		}
	}
	myAudio.play();
	if (waitForCompletion) {
		var actionEnded = function() {
			this.removeEventListener('pause',arguments.callee,false);
			this.removeEventListener('ended',arguments.callee,false);
		    window.obj2044_onLoad_runningActionsCount = window.obj2044_onLoad_runningActionsCount - 1;
if (window.obj2044_onLoad_runningActionsCount < 0) {
	window.obj2044_onLoad_runningActionsCount = 0;
} else if (window.obj2044_onLoad_runningActionsCount == 0) {
	obj2044_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2044_onLoad_runningActionsCount = window.obj2044_onLoad_runningActionsCount - 1;
if (window.obj2044_onLoad_runningActionsCount < 0) {
	window.obj2044_onLoad_runningActionsCount = 0;
} else if (window.obj2044_onLoad_runningActionsCount == 0) {
	obj2044_onLoad_actionGroup1();
}
	}
}









};
obj2044_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2044_onLoad_activeActionGroupIndex = -1;
		$("#obj2044").trigger("obj2044_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2044) {
				console.warn("de-queueing event obj2044." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2044").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2044_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		







































/*
 *
 *   obj78: Event Appear
 *
 */
$("#obj78").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(78, "onDisappear") || 
		pubcoder.isActionListRunning(78, "onAppear")) {
		console.warn("queueing event obj78." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 78, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj78_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj78_onAppear is still running");
	return;
}
var obj78_onAppear_runningActionsCount = 0;
var obj78_onAppear_loopCount = 0;
obj78_onAppear_actionGroup0();
});















/*
 *
 *   obj84: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj84_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84_onLoad is still running");
	return;
}
var obj84_onLoad_runningActionsCount = 0;
var obj84_onLoad_loopCount = 0;
obj84_onLoad_actionGroup0();
});


















/*
 *
 *   obj121: Event Touch Down
 *
 */
$("#obj121").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj121_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj121_onTap is still running");
	return;
}
var obj121_onTap_runningActionsCount = 0;
var obj121_onTap_loopCount = 0;
obj121_onTap_actionGroup0();
});


/*
 *
 *   obj121: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj121_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj121_onLoad is still running");
	return;
}
var obj121_onLoad_runningActionsCount = 0;
var obj121_onLoad_loopCount = 0;
obj121_onLoad_actionGroup0();
});










/*
 *
 *   obj266: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj266_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj266_onLoad is still running");
	return;
}
var obj266_onLoad_runningActionsCount = 0;
var obj266_onLoad_loopCount = 0;
obj266_onLoad_actionGroup0();
});




















/*
 *
 *   obj1816: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1816_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1816_onLoad is still running");
	return;
}
var obj1816_onLoad_runningActionsCount = 0;
var obj1816_onLoad_loopCount = 0;
obj1816_onLoad_actionGroup0();
});










/*
 *
 *   obj1820: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1820_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1820_onLoad is still running");
	return;
}
var obj1820_onLoad_runningActionsCount = 0;
var obj1820_onLoad_loopCount = 0;
obj1820_onLoad_actionGroup0();
});










/*
 *
 *   obj2044: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2044_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2044_onLoad is still running");
	return;
}
var obj2044_onLoad_runningActionsCount = 0;
var obj2044_onLoad_loopCount = 0;
obj2044_onLoad_actionGroup0();
});























































		
		
		/*
		 *
	 	 *  Page is ready to be played
	 	 *
	 	 */
		XPUB.ready();
	 }
});
$(window).on(pubcoder.events.pagePlay, function() {
	$(window).trigger(pubcoder.events.pageReady);
	if (pubcoder.isInteractionObserverSupported) {
		var ob = new IntersectionObserver(function(entries) {
			$(entries).each(function (index, entry) {
				if (entry.isIntersecting) {
					$(entry.target).trigger(pubcoder.events.appear);
				} else {
					$(entry.target).trigger(pubcoder.events.disappear);
				}
			});
		}, {
			root: null,
			rootMargin: "0px",
			threshold: 0
		});
		$(".SCView").each(function (i, el) {
			ob.observe(el);
		});	
	}
	
$("#obj70").trigger('SCEventShow');
$("#obj72").trigger('SCEventShow');
$("#obj77").trigger('SCEventShow');
$("#obj78").trigger('SCEventShow');
$("#obj79").trigger('SCEventShow');
$("#obj266").trigger('SCEventShow');
$("#obj884").trigger('SCEventShow');
$("#obj1816").trigger('SCEventShow');
$("#obj1820").trigger('SCEventShow');
$("#obj2044").trigger('SCEventShow');
$("#obj3123").trigger('SCEventShow');
	//Buongiorno prof
// Function to apply the typewriter effect to a single element
function typewriterEffect(element, delay = 0) {
    const text = element.textContent; // Get the text content
    element.textContent = ''; // Clear the text content
    let i = 0;
    // Function to type one character at a time
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i); // Add the next character
            i++;
            setTimeout(type, 50); // Adjust typing speed (50ms per character)
        }
    }
    // Start the typewriter effect after the specified delay
    setTimeout(type, delay);
}
// Function to handle multiple elements sequentially
function startSequentialTypewriter(elements) {
    let delay = 0; // Initial delay
    const typingSpeed = 50; // Typing speed in milliseconds per character
    elements.forEach(element => {
        const textLength = element.textContent.length; // Get the number of characters in the line
        typewriterEffect(element, delay); // Start the typewriter effect with the calculated delay
        delay += textLength * typingSpeed + 200; // Update delay for the next line
    });
}
// Set up Intersection Observer to detect when elements are visible
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { // If the element is visible
            const typewriterElements = document.querySelectorAll('.typewriter');
            startSequentialTypewriter(typewriterElements); // Start the sequential typewriter effect
            observer.unobserve(entry.target); // Stop observing after starting the effect
        }
    });
}, { threshold: 0.5 }); // Adjust threshold (0.5 = 50% of the element is visible)
// Find all elements with the class "typewriter" and observe them
document.querySelectorAll('.typewriter').forEach(element => {
    observer.observe(element); // Start observing the element
});
// Function to generate a random number within a range
function getRandomOffset() {
    return (Math.random() * 20 - 10); // Random number between -10 and 10
}
// Function to generate a random rotation within a range
function getRandomRotation() {
    return (Math.random() * 6 - 3); // Random number between -3 and 3 degrees
}
// Function to apply the wiggle effect
function wiggleElements() {
    const wiggledElements = document.querySelectorAll('.wiggled');
    wiggledElements.forEach(element => {
        const xOffset = getRandomOffset();
        const yOffset = getRandomOffset();
        const rotation = getRandomRotation();
        // Apply the random offset and rotation to the element's transform property
        element.style.transform = `translate(${xOffset}px, ${yOffset}px) rotate(${rotation}deg)`;
    });
}
// Set an interval to continuously wiggle the elements
setInterval(wiggleElements, 100); // Adjust the interval (in milliseconds) for faster/slower wiggle
});