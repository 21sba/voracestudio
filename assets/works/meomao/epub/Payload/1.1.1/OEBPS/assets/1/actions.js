pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 83;
pubcoder.page.title = pubcoder.page.title || "1";
pubcoder.page.number = pubcoder.page.number || 1;
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
var obj3045_onLoad_activeActionGroupIndex = -1;
var obj3045_onLoad_runningActionsCount = 0;
var obj3045_onLoad_loopCount = 0;
var obj3048_onLoad_activeActionGroupIndex = -1;
var obj3048_onLoad_runningActionsCount = 0;
var obj3048_onLoad_loopCount = 0;
var obj3048_onAppear_activeActionGroupIndex = -1;
var obj3048_onAppear_runningActionsCount = 0;
var obj3048_onAppear_loopCount = 0;
var obj3049_onLoad_activeActionGroupIndex = -1;
var obj3049_onLoad_runningActionsCount = 0;
var obj3049_onLoad_loopCount = 0;
var obj3049_onAppear_activeActionGroupIndex = -1;
var obj3049_onAppear_runningActionsCount = 0;
var obj3049_onAppear_loopCount = 0;
var obj3047_onLoad_activeActionGroupIndex = -1;
var obj3047_onLoad_runningActionsCount = 0;
var obj3047_onLoad_loopCount = 0;
var obj3047_onAppear_activeActionGroupIndex = -1;
var obj3047_onAppear_runningActionsCount = 0;
var obj3047_onAppear_loopCount = 0;
var obj3050_onLoad_activeActionGroupIndex = -1;
var obj3050_onLoad_runningActionsCount = 0;
var obj3050_onLoad_loopCount = 0;
var obj3060_onLoad_activeActionGroupIndex = -1;
var obj3060_onLoad_runningActionsCount = 0;
var obj3060_onLoad_loopCount = 0;
var obj3099_onTap_activeActionGroupIndex = -1;
var obj3099_onTap_runningActionsCount = 0;
var obj3099_onTap_loopCount = 0;
var obj3281_onTap_activeActionGroupIndex = -1;
var obj3281_onTap_runningActionsCount = 0;
var obj3281_onTap_loopCount = 0;
var obj3280_onTap_activeActionGroupIndex = -1;
var obj3280_onTap_runningActionsCount = 0;
var obj3280_onTap_loopCount = 0;
var obj3293_onTap_activeActionGroupIndex = -1;
var obj3293_onTap_runningActionsCount = 0;
var obj3293_onTap_loopCount = 0;
var obj3105_onTap_activeActionGroupIndex = -1;
var obj3105_onTap_runningActionsCount = 0;
var obj3105_onTap_loopCount = 0;
var obj3105_onLoad_activeActionGroupIndex = -1;
var obj3105_onLoad_runningActionsCount = 0;
var obj3105_onLoad_loopCount = 0;
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
		
obj3045_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3045_onLoad_activeActionGroupIndex = -1;
		$("#obj3045").trigger("obj3045_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3045) {
				console.warn("de-queueing event obj3045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3045_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_3074();
function wait_3074() {
	window.obj3045_onLoad_runningActionsCount = obj3045_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj3045_onLoad_runningActionsCount = window.obj3045_onLoad_runningActionsCount - 1;
if (window.obj3045_onLoad_runningActionsCount < 0) {
	window.obj3045_onLoad_runningActionsCount = 0;
} else if (window.obj3045_onLoad_runningActionsCount == 0) {
	obj3045_onLoad_actionGroup1();
}
	}, 300);
}













};
obj3045_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3045_onLoad_activeActionGroupIndex = -1;
		$("#obj3045").trigger("obj3045_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3045) {
				console.warn("de-queueing event obj3045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3045_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj3045
(function(){
	window.obj3045_onLoad_runningActionsCount = obj3045_onLoad_runningActionsCount + 1;

	var selector = "#obj3045";
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
					window.obj3045_onLoad_runningActionsCount = window.obj3045_onLoad_runningActionsCount - 1;
if (window.obj3045_onLoad_runningActionsCount < 0) {
	window.obj3045_onLoad_runningActionsCount = 0;
} else if (window.obj3045_onLoad_runningActionsCount == 0) {
	obj3045_onLoad_actionGroup2();
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
				window.obj3045_onLoad_runningActionsCount = window.obj3045_onLoad_runningActionsCount - 1;
if (window.obj3045_onLoad_runningActionsCount < 0) {
	window.obj3045_onLoad_runningActionsCount = 0;
} else if (window.obj3045_onLoad_runningActionsCount == 0) {
	obj3045_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj3045 
move_3075();
function move_3075() {
	window.obj3045_onLoad_runningActionsCount = obj3045_onLoad_runningActionsCount + 1;

	var easing = "ease-out";
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
	var targetObject = $("#obj3045");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=20";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3045_onLoad_runningActionsCount = window.obj3045_onLoad_runningActionsCount - 1;
if (window.obj3045_onLoad_runningActionsCount < 0) {
	window.obj3045_onLoad_runningActionsCount = 0;
} else if (window.obj3045_onLoad_runningActionsCount == 0) {
	obj3045_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj3045_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3045_onLoad_activeActionGroupIndex = -1;
		$("#obj3045").trigger("obj3045_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3045) {
				console.warn("de-queueing event obj3045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3045_onLoad_activeActionGroupIndex = 2;
	





















};
obj3048_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3048_onLoad_activeActionGroupIndex = -1;
		$("#obj3048").trigger("obj3048_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3048) {
				console.warn("de-queueing event obj3048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3048_onLoad_activeActionGroupIndex = 0;
	





















//	action: runJqueryAnimation
//	target: obj3048 
(function () {
	window.obj3048_onLoad_runningActionsCount = obj3048_onLoad_runningActionsCount + 1;

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
	
	$("#obj3048").animate({ opacity: '1'}, 800, easing, function() {
		setTimeout(function() {
			window.obj3048_onLoad_runningActionsCount = window.obj3048_onLoad_runningActionsCount - 1;
if (window.obj3048_onLoad_runningActionsCount < 0) {
	window.obj3048_onLoad_runningActionsCount = 0;
} else if (window.obj3048_onLoad_runningActionsCount == 0) {
	obj3048_onLoad_actionGroup1();
}
		}, 1);
	});
})();
};
obj3048_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3048_onLoad_activeActionGroupIndex = -1;
		$("#obj3048").trigger("obj3048_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3048) {
				console.warn("de-queueing event obj3048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3048_onLoad_activeActionGroupIndex = 1;
	





















//	action: runJqueryAnimation
//	target: obj3048 
(function () {
	window.obj3048_onLoad_runningActionsCount = obj3048_onLoad_runningActionsCount + 1;

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
	
	$("#obj3048").animate({ opacity: '0.1'}, 800, easing, function() {
		setTimeout(function() {
			window.obj3048_onLoad_runningActionsCount = window.obj3048_onLoad_runningActionsCount - 1;
if (window.obj3048_onLoad_runningActionsCount < 0) {
	window.obj3048_onLoad_runningActionsCount = 0;
} else if (window.obj3048_onLoad_runningActionsCount == 0) {
	obj3048_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj3048_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3048_onLoad_activeActionGroupIndex = -1;
		$("#obj3048").trigger("obj3048_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3048) {
				console.warn("de-queueing event obj3048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3048_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj3048_onLoad();
function loop_obj3048_onLoad() {
	var loopCount = 0;
	window.obj3048_onLoad_loopCount = window.obj3048_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3048_onLoad_loopCount > loopCount) {
		window.obj3048_onLoad_loopCount = 0
		obj3048_onLoad_actionGroup3();
	} else {
		obj3048_onLoad_actionGroup0();
	}
}













};
obj3048_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3048_onLoad_activeActionGroupIndex = -1;
		$("#obj3048").trigger("obj3048_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3048) {
				console.warn("de-queueing event obj3048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3048_onLoad_activeActionGroupIndex = 3;
	





















};
obj3048_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3048_onAppear_activeActionGroupIndex = -1;
		$("#obj3048").trigger("obj3048_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3048) {
				console.warn("de-queueing event obj3048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3048_onAppear_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj3048 
scale_3089();
function scale_3089() {
	window.obj3048_onAppear_runningActionsCount = obj3048_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj3048";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3048';
	var transformOriginX = '0%';
	var transformOriginY = '50%';
	var scaleXValue = '0';
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
		scale_3089_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3089_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3089_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3089_completed() {
	setTimeout(function() {
		window.obj3048_onAppear_runningActionsCount = window.obj3048_onAppear_runningActionsCount - 1;
if (window.obj3048_onAppear_runningActionsCount < 0) {
	window.obj3048_onAppear_runningActionsCount = 0;
} else if (window.obj3048_onAppear_runningActionsCount == 0) {
	obj3048_onAppear_actionGroup1();
}
	}, 1);
}












};
obj3048_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3048_onAppear_activeActionGroupIndex = -1;
		$("#obj3048").trigger("obj3048_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3048) {
				console.warn("de-queueing event obj3048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3048_onAppear_activeActionGroupIndex = 1;
	








//	action: wait
wait_3090();
function wait_3090() {
	window.obj3048_onAppear_runningActionsCount = obj3048_onAppear_runningActionsCount + 1;
	setTimeout(function() {
		window.obj3048_onAppear_runningActionsCount = window.obj3048_onAppear_runningActionsCount - 1;
if (window.obj3048_onAppear_runningActionsCount < 0) {
	window.obj3048_onAppear_runningActionsCount = 0;
} else if (window.obj3048_onAppear_runningActionsCount == 0) {
	obj3048_onAppear_actionGroup2();
}
	}, 300);
}













};
obj3048_onAppear_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3048_onAppear_activeActionGroupIndex = -1;
		$("#obj3048").trigger("obj3048_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3048) {
				console.warn("de-queueing event obj3048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3048_onAppear_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj3048 
scale_3091();
function scale_3091() {
	window.obj3048_onAppear_runningActionsCount = obj3048_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj3048";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3048';
	var transformOriginX = '0%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '1';
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
		scale_3091_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3091_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3091_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3091_completed() {
	setTimeout(function() {
		window.obj3048_onAppear_runningActionsCount = window.obj3048_onAppear_runningActionsCount - 1;
if (window.obj3048_onAppear_runningActionsCount < 0) {
	window.obj3048_onAppear_runningActionsCount = 0;
} else if (window.obj3048_onAppear_runningActionsCount == 0) {
	obj3048_onAppear_actionGroup3();
}
	}, 1);
}












};
obj3048_onAppear_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3048_onAppear_activeActionGroupIndex = -1;
		$("#obj3048").trigger("obj3048_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3048) {
				console.warn("de-queueing event obj3048." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3048").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3048_onAppear_activeActionGroupIndex = 3;
	





















};
obj3049_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3049_onLoad_activeActionGroupIndex = -1;
		$("#obj3049").trigger("obj3049_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3049) {
				console.warn("de-queueing event obj3049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3049_onLoad_activeActionGroupIndex = 0;
	





















//	action: runJqueryAnimation
//	target: obj3049 
(function () {
	window.obj3049_onLoad_runningActionsCount = obj3049_onLoad_runningActionsCount + 1;

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
	
	$("#obj3049").animate({ opacity: '0.1'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3049_onLoad_runningActionsCount = window.obj3049_onLoad_runningActionsCount - 1;
if (window.obj3049_onLoad_runningActionsCount < 0) {
	window.obj3049_onLoad_runningActionsCount = 0;
} else if (window.obj3049_onLoad_runningActionsCount == 0) {
	obj3049_onLoad_actionGroup1();
}
		}, 1);
	});
})();
};
obj3049_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3049_onLoad_activeActionGroupIndex = -1;
		$("#obj3049").trigger("obj3049_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3049) {
				console.warn("de-queueing event obj3049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3049_onLoad_activeActionGroupIndex = 1;
	





















//	action: runJqueryAnimation
//	target: obj3049 
(function () {
	window.obj3049_onLoad_runningActionsCount = obj3049_onLoad_runningActionsCount + 1;

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
	
	$("#obj3049").animate({ opacity: '1'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3049_onLoad_runningActionsCount = window.obj3049_onLoad_runningActionsCount - 1;
if (window.obj3049_onLoad_runningActionsCount < 0) {
	window.obj3049_onLoad_runningActionsCount = 0;
} else if (window.obj3049_onLoad_runningActionsCount == 0) {
	obj3049_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj3049_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3049_onLoad_activeActionGroupIndex = -1;
		$("#obj3049").trigger("obj3049_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3049) {
				console.warn("de-queueing event obj3049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3049_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj3049_onLoad();
function loop_obj3049_onLoad() {
	var loopCount = 0;
	window.obj3049_onLoad_loopCount = window.obj3049_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj3049_onLoad_loopCount > loopCount) {
		window.obj3049_onLoad_loopCount = 0
		obj3049_onLoad_actionGroup3();
	} else {
		obj3049_onLoad_actionGroup0();
	}
}













};
obj3049_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3049_onLoad_activeActionGroupIndex = -1;
		$("#obj3049").trigger("obj3049_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3049) {
				console.warn("de-queueing event obj3049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3049_onLoad_activeActionGroupIndex = 3;
	





















};
obj3049_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3049_onAppear_activeActionGroupIndex = -1;
		$("#obj3049").trigger("obj3049_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3049) {
				console.warn("de-queueing event obj3049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3049_onAppear_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj3049 
scale_3083();
function scale_3083() {
	window.obj3049_onAppear_runningActionsCount = obj3049_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj3049";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3049';
	var transformOriginX = '0%';
	var transformOriginY = '50%';
	var scaleXValue = '0';
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
		scale_3083_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3083_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3083_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3083_completed() {
	setTimeout(function() {
		window.obj3049_onAppear_runningActionsCount = window.obj3049_onAppear_runningActionsCount - 1;
if (window.obj3049_onAppear_runningActionsCount < 0) {
	window.obj3049_onAppear_runningActionsCount = 0;
} else if (window.obj3049_onAppear_runningActionsCount == 0) {
	obj3049_onAppear_actionGroup1();
}
	}, 1);
}












};
obj3049_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3049_onAppear_activeActionGroupIndex = -1;
		$("#obj3049").trigger("obj3049_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3049) {
				console.warn("de-queueing event obj3049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3049_onAppear_activeActionGroupIndex = 1;
	








//	action: wait
wait_3088();
function wait_3088() {
	window.obj3049_onAppear_runningActionsCount = obj3049_onAppear_runningActionsCount + 1;
	setTimeout(function() {
		window.obj3049_onAppear_runningActionsCount = window.obj3049_onAppear_runningActionsCount - 1;
if (window.obj3049_onAppear_runningActionsCount < 0) {
	window.obj3049_onAppear_runningActionsCount = 0;
} else if (window.obj3049_onAppear_runningActionsCount == 0) {
	obj3049_onAppear_actionGroup2();
}
	}, 300);
}













};
obj3049_onAppear_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3049_onAppear_activeActionGroupIndex = -1;
		$("#obj3049").trigger("obj3049_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3049) {
				console.warn("de-queueing event obj3049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3049_onAppear_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj3049 
scale_3084();
function scale_3084() {
	window.obj3049_onAppear_runningActionsCount = obj3049_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj3049";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3049';
	var transformOriginX = '0%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '1';
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
		scale_3084_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3084_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3084_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3084_completed() {
	setTimeout(function() {
		window.obj3049_onAppear_runningActionsCount = window.obj3049_onAppear_runningActionsCount - 1;
if (window.obj3049_onAppear_runningActionsCount < 0) {
	window.obj3049_onAppear_runningActionsCount = 0;
} else if (window.obj3049_onAppear_runningActionsCount == 0) {
	obj3049_onAppear_actionGroup3();
}
	}, 1);
}












};
obj3049_onAppear_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3049_onAppear_activeActionGroupIndex = -1;
		$("#obj3049").trigger("obj3049_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3049) {
				console.warn("de-queueing event obj3049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3049_onAppear_activeActionGroupIndex = 3;
	





















};
obj3047_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3047_onLoad_activeActionGroupIndex = -1;
		$("#obj3047").trigger("obj3047_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3047) {
				console.warn("de-queueing event obj3047." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3047").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3047_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj3047
(function(){
	window.obj3047_onLoad_runningActionsCount = obj3047_onLoad_runningActionsCount + 1;

	var selector = "#obj3047";
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
		var animationDurationMs = 1500;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3047_onLoad_runningActionsCount = window.obj3047_onLoad_runningActionsCount - 1;
if (window.obj3047_onLoad_runningActionsCount < 0) {
	window.obj3047_onLoad_runningActionsCount = 0;
} else if (window.obj3047_onLoad_runningActionsCount == 0) {
	obj3047_onLoad_actionGroup1();
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
				window.obj3047_onLoad_runningActionsCount = window.obj3047_onLoad_runningActionsCount - 1;
if (window.obj3047_onLoad_runningActionsCount < 0) {
	window.obj3047_onLoad_runningActionsCount = 0;
} else if (window.obj3047_onLoad_runningActionsCount == 0) {
	obj3047_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj3047 
move_3078();
function move_3078() {
	window.obj3047_onLoad_runningActionsCount = obj3047_onLoad_runningActionsCount + 1;

	var easing = "ease-out";
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
	var targetObject = $("#obj3047");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-20";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj3047_onLoad_runningActionsCount = window.obj3047_onLoad_runningActionsCount - 1;
if (window.obj3047_onLoad_runningActionsCount < 0) {
	window.obj3047_onLoad_runningActionsCount = 0;
} else if (window.obj3047_onLoad_runningActionsCount == 0) {
	obj3047_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj3047_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3047_onLoad_activeActionGroupIndex = -1;
		$("#obj3047").trigger("obj3047_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3047) {
				console.warn("de-queueing event obj3047." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3047").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3047_onLoad_activeActionGroupIndex = 1;
	





















};
obj3047_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3047_onAppear_activeActionGroupIndex = -1;
		$("#obj3047").trigger("obj3047_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3047) {
				console.warn("de-queueing event obj3047." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3047").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3047_onAppear_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj3047 
scale_3094();
function scale_3094() {
	window.obj3047_onAppear_runningActionsCount = obj3047_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj3047";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3047';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1.02';
	var effectDuration = '2';
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
		scale_3094_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3094_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3094_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3094_completed() {
	setTimeout(function() {
		window.obj3047_onAppear_runningActionsCount = window.obj3047_onAppear_runningActionsCount - 1;
if (window.obj3047_onAppear_runningActionsCount < 0) {
	window.obj3047_onAppear_runningActionsCount = 0;
} else if (window.obj3047_onAppear_runningActionsCount == 0) {
	obj3047_onAppear_actionGroup1();
}
	}, 1);
}












};
obj3047_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3047_onAppear_activeActionGroupIndex = -1;
		$("#obj3047").trigger("obj3047_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3047) {
				console.warn("de-queueing event obj3047." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3047").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3047_onAppear_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj3047 
scale_3095();
function scale_3095() {
	window.obj3047_onAppear_runningActionsCount = obj3047_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj3047";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3047';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '1.2';
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
		scale_3095_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3095_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3095_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3095_completed() {
	setTimeout(function() {
		window.obj3047_onAppear_runningActionsCount = window.obj3047_onAppear_runningActionsCount - 1;
if (window.obj3047_onAppear_runningActionsCount < 0) {
	window.obj3047_onAppear_runningActionsCount = 0;
} else if (window.obj3047_onAppear_runningActionsCount == 0) {
	obj3047_onAppear_actionGroup2();
}
	}, 1);
}












};
obj3047_onAppear_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3047_onAppear_activeActionGroupIndex = -1;
		$("#obj3047").trigger("obj3047_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3047) {
				console.warn("de-queueing event obj3047." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3047").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3047_onAppear_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj3047_onAppear();
function loop_obj3047_onAppear() {
	var loopCount = 0;
	window.obj3047_onAppear_loopCount = window.obj3047_onAppear_loopCount + 1;
	if (loopCount != 0 && window.obj3047_onAppear_loopCount > loopCount) {
		window.obj3047_onAppear_loopCount = 0
		obj3047_onAppear_actionGroup3();
	} else {
		obj3047_onAppear_actionGroup0();
	}
}













};
obj3047_onAppear_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3047_onAppear_activeActionGroupIndex = -1;
		$("#obj3047").trigger("obj3047_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3047) {
				console.warn("de-queueing event obj3047." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3047").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3047_onAppear_activeActionGroupIndex = 3;
	





















};
obj3050_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3050_onLoad_activeActionGroupIndex = -1;
		$("#obj3050").trigger("obj3050_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3050) {
				console.warn("de-queueing event obj3050." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3050").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3050_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj3050
(function(){
	window.obj3050_onLoad_runningActionsCount = obj3050_onLoad_runningActionsCount + 1;

	var selector = "#obj3050";
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
					window.obj3050_onLoad_runningActionsCount = window.obj3050_onLoad_runningActionsCount - 1;
if (window.obj3050_onLoad_runningActionsCount < 0) {
	window.obj3050_onLoad_runningActionsCount = 0;
} else if (window.obj3050_onLoad_runningActionsCount == 0) {
	obj3050_onLoad_actionGroup1();
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
				window.obj3050_onLoad_runningActionsCount = window.obj3050_onLoad_runningActionsCount - 1;
if (window.obj3050_onLoad_runningActionsCount < 0) {
	window.obj3050_onLoad_runningActionsCount = 0;
} else if (window.obj3050_onLoad_runningActionsCount == 0) {
	obj3050_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj3050 
move_3058();
function move_3058() {
	window.obj3050_onLoad_runningActionsCount = obj3050_onLoad_runningActionsCount + 1;

	var easing = "ease-out";
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
	var targetObject = $("#obj3050");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=20";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3050_onLoad_runningActionsCount = window.obj3050_onLoad_runningActionsCount - 1;
if (window.obj3050_onLoad_runningActionsCount < 0) {
	window.obj3050_onLoad_runningActionsCount = 0;
} else if (window.obj3050_onLoad_runningActionsCount == 0) {
	obj3050_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj3050_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3050_onLoad_activeActionGroupIndex = -1;
		$("#obj3050").trigger("obj3050_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3050) {
				console.warn("de-queueing event obj3050." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3050").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3050_onLoad_activeActionGroupIndex = 1;
	





















};
obj3060_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3060_onLoad_activeActionGroupIndex = -1;
		$("#obj3060").trigger("obj3060_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3060) {
				console.warn("de-queueing event obj3060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3060_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj3060
(function(){
	window.obj3060_onLoad_runningActionsCount = obj3060_onLoad_runningActionsCount + 1;

	var selector = "#obj3060";
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
		var animationDurationMs = 2000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3060_onLoad_runningActionsCount = window.obj3060_onLoad_runningActionsCount - 1;
if (window.obj3060_onLoad_runningActionsCount < 0) {
	window.obj3060_onLoad_runningActionsCount = 0;
} else if (window.obj3060_onLoad_runningActionsCount == 0) {
	obj3060_onLoad_actionGroup1();
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
				window.obj3060_onLoad_runningActionsCount = window.obj3060_onLoad_runningActionsCount - 1;
if (window.obj3060_onLoad_runningActionsCount < 0) {
	window.obj3060_onLoad_runningActionsCount = 0;
} else if (window.obj3060_onLoad_runningActionsCount == 0) {
	obj3060_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3099
(function(){
	window.obj3060_onLoad_runningActionsCount = obj3060_onLoad_runningActionsCount + 1;

	var selector = "#obj3099";
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
		var animationDurationMs = 2000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3060_onLoad_runningActionsCount = window.obj3060_onLoad_runningActionsCount - 1;
if (window.obj3060_onLoad_runningActionsCount < 0) {
	window.obj3060_onLoad_runningActionsCount = 0;
} else if (window.obj3060_onLoad_runningActionsCount == 0) {
	obj3060_onLoad_actionGroup1();
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
				window.obj3060_onLoad_runningActionsCount = window.obj3060_onLoad_runningActionsCount - 1;
if (window.obj3060_onLoad_runningActionsCount < 0) {
	window.obj3060_onLoad_runningActionsCount = 0;
} else if (window.obj3060_onLoad_runningActionsCount == 0) {
	obj3060_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj3060 
move_3120();
function move_3120() {
	window.obj3060_onLoad_runningActionsCount = obj3060_onLoad_runningActionsCount + 1;

	var easing = "ease-out";
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
	var targetObject = $("#obj3060");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=20";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj3060_onLoad_runningActionsCount = window.obj3060_onLoad_runningActionsCount - 1;
if (window.obj3060_onLoad_runningActionsCount < 0) {
	window.obj3060_onLoad_runningActionsCount = 0;
} else if (window.obj3060_onLoad_runningActionsCount == 0) {
	obj3060_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj3099 
move_3122();
function move_3122() {
	window.obj3060_onLoad_runningActionsCount = obj3060_onLoad_runningActionsCount + 1;

	var easing = "ease-out";
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
	var targetObject = $("#obj3099");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=20";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj3060_onLoad_runningActionsCount = window.obj3060_onLoad_runningActionsCount - 1;
if (window.obj3060_onLoad_runningActionsCount < 0) {
	window.obj3060_onLoad_runningActionsCount = 0;
} else if (window.obj3060_onLoad_runningActionsCount == 0) {
	obj3060_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj3060_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3060_onLoad_activeActionGroupIndex = -1;
		$("#obj3060").trigger("obj3060_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3060) {
				console.warn("de-queueing event obj3060." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3060").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3060_onLoad_activeActionGroupIndex = 1;
	





















};
obj3099_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3099_onTap_activeActionGroupIndex = -1;
		$("#obj3099").trigger("obj3099_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3099) {
				console.warn("de-queueing event obj3099." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3099").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3099_onTap_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj3099 
scale_3116();
function scale_3116() {
	window.obj3099_onTap_runningActionsCount = obj3099_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj3099";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3099';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.95';
	var scaleYValue = '0.95';
	var effectDuration = '0.2';
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
		scale_3116_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3116_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3116_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3116_completed() {
	setTimeout(function() {
		window.obj3099_onTap_runningActionsCount = window.obj3099_onTap_runningActionsCount - 1;
if (window.obj3099_onTap_runningActionsCount < 0) {
	window.obj3099_onTap_runningActionsCount = 0;
} else if (window.obj3099_onTap_runningActionsCount == 0) {
	obj3099_onTap_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj3060 
scale_3117();
function scale_3117() {
	window.obj3099_onTap_runningActionsCount = obj3099_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj3060";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3060';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.95';
	var scaleYValue = '0.95';
	var effectDuration = '0.2';
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
		scale_3117_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3117_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3117_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3117_completed() {
	setTimeout(function() {
		window.obj3099_onTap_runningActionsCount = window.obj3099_onTap_runningActionsCount - 1;
if (window.obj3099_onTap_runningActionsCount < 0) {
	window.obj3099_onTap_runningActionsCount = 0;
} else if (window.obj3099_onTap_runningActionsCount == 0) {
	obj3099_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj3113 
playAudio_3115();
function playAudio_3115() {
	window.obj3099_onTap_runningActionsCount = obj3099_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3113")[0];
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
		    window.obj3099_onTap_runningActionsCount = window.obj3099_onTap_runningActionsCount - 1;
if (window.obj3099_onTap_runningActionsCount < 0) {
	window.obj3099_onTap_runningActionsCount = 0;
} else if (window.obj3099_onTap_runningActionsCount == 0) {
	obj3099_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3099_onTap_runningActionsCount = window.obj3099_onTap_runningActionsCount - 1;
if (window.obj3099_onTap_runningActionsCount < 0) {
	window.obj3099_onTap_runningActionsCount = 0;
} else if (window.obj3099_onTap_runningActionsCount == 0) {
	obj3099_onTap_actionGroup1();
}
	}
}









};
obj3099_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3099_onTap_activeActionGroupIndex = -1;
		$("#obj3099").trigger("obj3099_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3099) {
				console.warn("de-queueing event obj3099." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3099").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3099_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj3099 
scale_3118();
function scale_3118() {
	window.obj3099_onTap_runningActionsCount = obj3099_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj3099";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3099';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.2';
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
		scale_3118_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3118_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3118_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3118_completed() {
	setTimeout(function() {
		window.obj3099_onTap_runningActionsCount = window.obj3099_onTap_runningActionsCount - 1;
if (window.obj3099_onTap_runningActionsCount < 0) {
	window.obj3099_onTap_runningActionsCount = 0;
} else if (window.obj3099_onTap_runningActionsCount == 0) {
	obj3099_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj3060 
scale_3119();
function scale_3119() {
	window.obj3099_onTap_runningActionsCount = obj3099_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj3060";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj3060';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.2';
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
		scale_3119_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3119_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3119_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3119_completed() {
	setTimeout(function() {
		window.obj3099_onTap_runningActionsCount = window.obj3099_onTap_runningActionsCount - 1;
if (window.obj3099_onTap_runningActionsCount < 0) {
	window.obj3099_onTap_runningActionsCount = 0;
} else if (window.obj3099_onTap_runningActionsCount == 0) {
	obj3099_onTap_actionGroup2();
}
	}, 1);
}












};
obj3099_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3099_onTap_activeActionGroupIndex = -1;
		$("#obj3099").trigger("obj3099_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3099) {
				console.warn("de-queueing event obj3099." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3099").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3099_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_3110();
function runjs_3110() {
	window.obj3099_onTap_runningActionsCount = obj3099_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj406"));
	
	setTimeout(function() {
		window.obj3099_onTap_runningActionsCount = window.obj3099_onTap_runningActionsCount - 1;
if (window.obj3099_onTap_runningActionsCount < 0) {
	window.obj3099_onTap_runningActionsCount = 0;
} else if (window.obj3099_onTap_runningActionsCount == 0) {
	obj3099_onTap_actionGroup3();
}
	}, 1);
}







};
obj3099_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3099_onTap_activeActionGroupIndex = -1;
		$("#obj3099").trigger("obj3099_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3099) {
				console.warn("de-queueing event obj3099." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3099").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3099_onTap_activeActionGroupIndex = 3;
	

//	action: show 
//	selector: #obj406
(function(){
	window.obj3099_onTap_runningActionsCount = obj3099_onTap_runningActionsCount + 1;

	var selector = "#obj406";
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
					window.obj3099_onTap_runningActionsCount = window.obj3099_onTap_runningActionsCount - 1;
if (window.obj3099_onTap_runningActionsCount < 0) {
	window.obj3099_onTap_runningActionsCount = 0;
} else if (window.obj3099_onTap_runningActionsCount == 0) {
	obj3099_onTap_actionGroup4();
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
				window.obj3099_onTap_runningActionsCount = window.obj3099_onTap_runningActionsCount - 1;
if (window.obj3099_onTap_runningActionsCount < 0) {
	window.obj3099_onTap_runningActionsCount = 0;
} else if (window.obj3099_onTap_runningActionsCount == 0) {
	obj3099_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3099_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3099_onTap_activeActionGroupIndex = -1;
		$("#obj3099").trigger("obj3099_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3099) {
				console.warn("de-queueing event obj3099." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3099").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3099_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_3112();
function goToPage_3112() {
	window.obj3099_onTap_runningActionsCount = obj3099_onTap_runningActionsCount + 1;
	$("#anchor16")[0].click();
	window.obj3099_onTap_runningActionsCount = window.obj3099_onTap_runningActionsCount - 1;
if (window.obj3099_onTap_runningActionsCount < 0) {
	window.obj3099_onTap_runningActionsCount = 0;
} else if (window.obj3099_onTap_runningActionsCount == 0) {
	obj3099_onTap_actionGroup5();
}
}





















};
obj3099_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3099_onTap_activeActionGroupIndex = -1;
		$("#obj3099").trigger("obj3099_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3099) {
				console.warn("de-queueing event obj3099." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3099").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3099_onTap_activeActionGroupIndex = 5;
	





















};
obj3281_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3281_onTap_activeActionGroupIndex = -1;
		$("#obj3281").trigger("obj3281_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3281) {
				console.warn("de-queueing event obj3281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3281_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj3280
(function(){
	window.obj3281_onTap_runningActionsCount = obj3281_onTap_runningActionsCount + 1;

	var selector = "#obj3280";
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
		var animationDurationMs = 300;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj3281_onTap_runningActionsCount = window.obj3281_onTap_runningActionsCount - 1;
if (window.obj3281_onTap_runningActionsCount < 0) {
	window.obj3281_onTap_runningActionsCount = 0;
} else if (window.obj3281_onTap_runningActionsCount == 0) {
	obj3281_onTap_actionGroup1();
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
				window.obj3281_onTap_runningActionsCount = window.obj3281_onTap_runningActionsCount - 1;
if (window.obj3281_onTap_runningActionsCount < 0) {
	window.obj3281_onTap_runningActionsCount = 0;
} else if (window.obj3281_onTap_runningActionsCount == 0) {
	obj3281_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj3113 
playAudio_3295();
function playAudio_3295() {
	window.obj3281_onTap_runningActionsCount = obj3281_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3113")[0];
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
		    window.obj3281_onTap_runningActionsCount = window.obj3281_onTap_runningActionsCount - 1;
if (window.obj3281_onTap_runningActionsCount < 0) {
	window.obj3281_onTap_runningActionsCount = 0;
} else if (window.obj3281_onTap_runningActionsCount == 0) {
	obj3281_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3281_onTap_runningActionsCount = window.obj3281_onTap_runningActionsCount - 1;
if (window.obj3281_onTap_runningActionsCount < 0) {
	window.obj3281_onTap_runningActionsCount = 0;
} else if (window.obj3281_onTap_runningActionsCount == 0) {
	obj3281_onTap_actionGroup1();
}
	}
}


//	action: Run JavaScript
runjs_3285();
function runjs_3285() {
	window.obj3281_onTap_runningActionsCount = obj3281_onTap_runningActionsCount + 1;

	XPUB.stopSoundtrack();
	
	setTimeout(function() {
		window.obj3281_onTap_runningActionsCount = window.obj3281_onTap_runningActionsCount - 1;
if (window.obj3281_onTap_runningActionsCount < 0) {
	window.obj3281_onTap_runningActionsCount = 0;
} else if (window.obj3281_onTap_runningActionsCount == 0) {
	obj3281_onTap_actionGroup1();
}
	}, 1);
}







};
obj3281_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3281_onTap_activeActionGroupIndex = -1;
		$("#obj3281").trigger("obj3281_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3281) {
				console.warn("de-queueing event obj3281." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3281").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3281_onTap_activeActionGroupIndex = 1;
	





















};
obj3280_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3280_onTap_activeActionGroupIndex = -1;
		$("#obj3280").trigger("obj3280_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3280) {
				console.warn("de-queueing event obj3280." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3280").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3280_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3280 
hide_3288();
function hide_3288() {
	var selector = "#obj3280";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3280_onTap_runningActionsCount = obj3280_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3280_onTap_runningActionsCount = window.obj3280_onTap_runningActionsCount - 1;
if (window.obj3280_onTap_runningActionsCount < 0) {
	window.obj3280_onTap_runningActionsCount = 0;
} else if (window.obj3280_onTap_runningActionsCount == 0) {
	obj3280_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3288(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3280_onTap_runningActionsCount = window.obj3280_onTap_runningActionsCount - 1;
if (window.obj3280_onTap_runningActionsCount < 0) {
	window.obj3280_onTap_runningActionsCount = 0;
} else if (window.obj3280_onTap_runningActionsCount == 0) {
	obj3280_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}











//	action: playAudio
//	target: obj3113 
playAudio_3296();
function playAudio_3296() {
	window.obj3280_onTap_runningActionsCount = obj3280_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3113")[0];
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
		    window.obj3280_onTap_runningActionsCount = window.obj3280_onTap_runningActionsCount - 1;
if (window.obj3280_onTap_runningActionsCount < 0) {
	window.obj3280_onTap_runningActionsCount = 0;
} else if (window.obj3280_onTap_runningActionsCount == 0) {
	obj3280_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3280_onTap_runningActionsCount = window.obj3280_onTap_runningActionsCount - 1;
if (window.obj3280_onTap_runningActionsCount < 0) {
	window.obj3280_onTap_runningActionsCount = 0;
} else if (window.obj3280_onTap_runningActionsCount == 0) {
	obj3280_onTap_actionGroup1();
}
	}
}


//	action: Run JavaScript
runjs_3289();
function runjs_3289() {
	window.obj3280_onTap_runningActionsCount = obj3280_onTap_runningActionsCount + 1;

	XPUB.startSoundtrack();
	
	setTimeout(function() {
		window.obj3280_onTap_runningActionsCount = window.obj3280_onTap_runningActionsCount - 1;
if (window.obj3280_onTap_runningActionsCount < 0) {
	window.obj3280_onTap_runningActionsCount = 0;
} else if (window.obj3280_onTap_runningActionsCount == 0) {
	obj3280_onTap_actionGroup1();
}
	}, 1);
}







};
obj3280_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3280_onTap_activeActionGroupIndex = -1;
		$("#obj3280").trigger("obj3280_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3280) {
				console.warn("de-queueing event obj3280." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3280").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3280_onTap_activeActionGroupIndex = 1;
	





















};
obj3293_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3293_onTap_activeActionGroupIndex = -1;
		$("#obj3293").trigger("obj3293_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3293) {
				console.warn("de-queueing event obj3293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3293_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj3105
(function(){
	window.obj3293_onTap_runningActionsCount = obj3293_onTap_runningActionsCount + 1;

	var selector = "#obj3105";
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
					window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup1();
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
				window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3300
(function(){
	window.obj3293_onTap_runningActionsCount = obj3293_onTap_runningActionsCount + 1;

	var selector = "#obj3300";
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
					window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup1();
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
				window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj3303
(function(){
	window.obj3293_onTap_runningActionsCount = obj3293_onTap_runningActionsCount + 1;

	var selector = "#obj3303";
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
					window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup1();
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
				window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj3113 
playAudio_3297();
function playAudio_3297() {
	window.obj3293_onTap_runningActionsCount = obj3293_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3113")[0];
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
		    window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup1();
}
	}
}









};
obj3293_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3293_onTap_activeActionGroupIndex = -1;
		$("#obj3293").trigger("obj3293_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3293) {
				console.warn("de-queueing event obj3293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3293_onTap_activeActionGroupIndex = 1;
	








//	action: wait
wait_3307();
function wait_3307() {
	window.obj3293_onTap_runningActionsCount = obj3293_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup2();
}
	}, 1000);
}













};
obj3293_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3293_onTap_activeActionGroupIndex = -1;
		$("#obj3293").trigger("obj3293_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3293) {
				console.warn("de-queueing event obj3293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3293_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj3300 
hide_3309();
function hide_3309() {
	var selector = "#obj3300";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3293_onTap_runningActionsCount = obj3293_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3309(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj3303 
hide_3310();
function hide_3310() {
	var selector = "#obj3303";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3293_onTap_runningActionsCount = obj3293_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3310(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj3105 
hide_3308();
function hide_3308() {
	var selector = "#obj3105";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3293_onTap_runningActionsCount = obj3293_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3308(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3293_onTap_runningActionsCount = window.obj3293_onTap_runningActionsCount - 1;
if (window.obj3293_onTap_runningActionsCount < 0) {
	window.obj3293_onTap_runningActionsCount = 0;
} else if (window.obj3293_onTap_runningActionsCount == 0) {
	obj3293_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3293_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3293_onTap_activeActionGroupIndex = -1;
		$("#obj3293").trigger("obj3293_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3293) {
				console.warn("de-queueing event obj3293." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3293").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3293_onTap_activeActionGroupIndex = 3;
	





















};
obj3105_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3105_onTap_activeActionGroupIndex = -1;
		$("#obj3105").trigger("obj3105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3105) {
				console.warn("de-queueing event obj3105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3105_onTap_activeActionGroupIndex = 0;
	








//	action: wait
wait_3302();
function wait_3302() {
	window.obj3105_onTap_runningActionsCount = obj3105_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj3105_onTap_runningActionsCount = window.obj3105_onTap_runningActionsCount - 1;
if (window.obj3105_onTap_runningActionsCount < 0) {
	window.obj3105_onTap_runningActionsCount = 0;
} else if (window.obj3105_onTap_runningActionsCount == 0) {
	obj3105_onTap_actionGroup1();
}
	}, 100);
}













};
obj3105_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3105_onTap_activeActionGroupIndex = -1;
		$("#obj3105").trigger("obj3105_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3105) {
				console.warn("de-queueing event obj3105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3105_onTap_activeActionGroupIndex = 1;
	





















};
obj3105_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3105_onLoad_activeActionGroupIndex = -1;
		$("#obj3105").trigger("obj3105_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3105) {
				console.warn("de-queueing event obj3105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3105_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj3105 
hide_3108();
function hide_3108() {
	var selector = "#obj3105";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3105_onLoad_runningActionsCount = obj3105_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3105_onLoad_runningActionsCount = window.obj3105_onLoad_runningActionsCount - 1;
if (window.obj3105_onLoad_runningActionsCount < 0) {
	window.obj3105_onLoad_runningActionsCount = 0;
} else if (window.obj3105_onLoad_runningActionsCount == 0) {
	obj3105_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3108(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3105_onLoad_runningActionsCount = window.obj3105_onLoad_runningActionsCount - 1;
if (window.obj3105_onLoad_runningActionsCount < 0) {
	window.obj3105_onLoad_runningActionsCount = 0;
} else if (window.obj3105_onLoad_runningActionsCount == 0) {
	obj3105_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3105_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3105_onLoad_activeActionGroupIndex = -1;
		$("#obj3105").trigger("obj3105_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3105) {
				console.warn("de-queueing event obj3105." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3105").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3105_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj3045: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3045_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3045_onLoad is still running");
	return;
}
var obj3045_onLoad_runningActionsCount = 0;
var obj3045_onLoad_loopCount = 0;
obj3045_onLoad_actionGroup0();
});










/*
 *
 *   obj3048: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3048_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3048_onLoad is still running");
	return;
}
var obj3048_onLoad_runningActionsCount = 0;
var obj3048_onLoad_loopCount = 0;
obj3048_onLoad_actionGroup0();
});




/*
 *
 *   obj3048: Event Appear
 *
 */
$("#obj3048").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(3048, "onDisappear") || 
		pubcoder.isActionListRunning(3048, "onAppear")) {
		console.warn("queueing event obj3048." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 3048, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj3048_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3048_onAppear is still running");
	return;
}
var obj3048_onAppear_runningActionsCount = 0;
var obj3048_onAppear_loopCount = 0;
obj3048_onAppear_actionGroup0();
});





/*
 *
 *   obj3049: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3049_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3049_onLoad is still running");
	return;
}
var obj3049_onLoad_runningActionsCount = 0;
var obj3049_onLoad_loopCount = 0;
obj3049_onLoad_actionGroup0();
});




/*
 *
 *   obj3049: Event Appear
 *
 */
$("#obj3049").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(3049, "onDisappear") || 
		pubcoder.isActionListRunning(3049, "onAppear")) {
		console.warn("queueing event obj3049." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 3049, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj3049_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3049_onAppear is still running");
	return;
}
var obj3049_onAppear_runningActionsCount = 0;
var obj3049_onAppear_loopCount = 0;
obj3049_onAppear_actionGroup0();
});





/*
 *
 *   obj3047: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3047_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3047_onLoad is still running");
	return;
}
var obj3047_onLoad_runningActionsCount = 0;
var obj3047_onLoad_loopCount = 0;
obj3047_onLoad_actionGroup0();
});




/*
 *
 *   obj3047: Event Appear
 *
 */
$("#obj3047").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(3047, "onDisappear") || 
		pubcoder.isActionListRunning(3047, "onAppear")) {
		console.warn("queueing event obj3047." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 3047, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj3047_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3047_onAppear is still running");
	return;
}
var obj3047_onAppear_runningActionsCount = 0;
var obj3047_onAppear_loopCount = 0;
obj3047_onAppear_actionGroup0();
});





/*
 *
 *   obj3050: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3050_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3050_onLoad is still running");
	return;
}
var obj3050_onLoad_runningActionsCount = 0;
var obj3050_onLoad_loopCount = 0;
obj3050_onLoad_actionGroup0();
});










/*
 *
 *   obj3060: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3060_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3060_onLoad is still running");
	return;
}
var obj3060_onLoad_runningActionsCount = 0;
var obj3060_onLoad_loopCount = 0;
obj3060_onLoad_actionGroup0();
});








/*
 *
 *   obj3099: Event Touch Down
 *
 */
$("#obj3099").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3099_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3099_onTap is still running");
	return;
}
var obj3099_onTap_runningActionsCount = 0;
var obj3099_onTap_loopCount = 0;
obj3099_onTap_actionGroup0();
});










/*
 *
 *   obj3281: Event Touch Down
 *
 */
$("#obj3281").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3281_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3281_onTap is still running");
	return;
}
var obj3281_onTap_runningActionsCount = 0;
var obj3281_onTap_loopCount = 0;
obj3281_onTap_actionGroup0();
});










/*
 *
 *   obj3280: Event Touch Down
 *
 */
$("#obj3280").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3280_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3280_onTap is still running");
	return;
}
var obj3280_onTap_runningActionsCount = 0;
var obj3280_onTap_loopCount = 0;
obj3280_onTap_actionGroup0();
});










/*
 *
 *   obj3293: Event Touch Down
 *
 */
$("#obj3293").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3293_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3293_onTap is still running");
	return;
}
var obj3293_onTap_runningActionsCount = 0;
var obj3293_onTap_loopCount = 0;
obj3293_onTap_actionGroup0();
});




















/*
 *
 *   obj3105: Event Touch Down
 *
 */
$("#obj3105").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj3105_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3105_onTap is still running");
	return;
}
var obj3105_onTap_runningActionsCount = 0;
var obj3105_onTap_loopCount = 0;
obj3105_onTap_actionGroup0();
});


/*
 *
 *   obj3105: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3105_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3105_onLoad is still running");
	return;
}
var obj3105_onLoad_runningActionsCount = 0;
var obj3105_onLoad_loopCount = 0;
obj3105_onLoad_actionGroup0();
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
	
$("#obj3046").trigger('SCEventShow');
$("#obj3048").trigger('SCEventShow');
$("#obj3049").trigger('SCEventShow');
$("#obj3281").trigger('SCEventShow');
$("#obj3293").trigger('SCEventShow');
$("#obj3105").trigger('SCEventShow');
$("#obj896").trigger('SCEventShow');
$("#obj3113").trigger('SCEventShow');
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
});