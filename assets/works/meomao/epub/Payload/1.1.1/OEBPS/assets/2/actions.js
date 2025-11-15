pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 2;
pubcoder.page.title = pubcoder.page.title || "2";
pubcoder.page.number = pubcoder.page.number || 2;
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
var obj38_onLoad_activeActionGroupIndex = -1;
var obj38_onLoad_runningActionsCount = 0;
var obj38_onLoad_loopCount = 0;
var obj38_onAppear_activeActionGroupIndex = -1;
var obj38_onAppear_runningActionsCount = 0;
var obj38_onAppear_loopCount = 0;
var obj367_onLoad_activeActionGroupIndex = -1;
var obj367_onLoad_runningActionsCount = 0;
var obj367_onLoad_loopCount = 0;
var obj32_onLoad_activeActionGroupIndex = -1;
var obj32_onLoad_runningActionsCount = 0;
var obj32_onLoad_loopCount = 0;
var obj34_onLoad_activeActionGroupIndex = -1;
var obj34_onLoad_runningActionsCount = 0;
var obj34_onLoad_loopCount = 0;
var obj51_onLoad_activeActionGroupIndex = -1;
var obj51_onLoad_runningActionsCount = 0;
var obj51_onLoad_loopCount = 0;
var obj246_onTap_activeActionGroupIndex = -1;
var obj246_onTap_runningActionsCount = 0;
var obj246_onTap_loopCount = 0;
var obj246_onShake_activeActionGroupIndex = -1;
var obj246_onShake_runningActionsCount = 0;
var obj246_onShake_loopCount = 0;
var obj67_onTap_activeActionGroupIndex = -1;
var obj67_onTap_runningActionsCount = 0;
var obj67_onTap_loopCount = 0;
var obj67_onLoad_activeActionGroupIndex = -1;
var obj67_onLoad_runningActionsCount = 0;
var obj67_onLoad_loopCount = 0;
var obj262_onLoad_activeActionGroupIndex = -1;
var obj262_onLoad_runningActionsCount = 0;
var obj262_onLoad_loopCount = 0;
var obj863_SCEventRun_activeActionGroupIndex = -1;
var obj863_SCEventRun_runningActionsCount = 0;
var obj863_SCEventRun_loopCount = 0;
var obj1803_onLoad_activeActionGroupIndex = -1;
var obj1803_onLoad_runningActionsCount = 0;
var obj1803_onLoad_loopCount = 0;
var obj1809_onLoad_activeActionGroupIndex = -1;
var obj1809_onLoad_runningActionsCount = 0;
var obj1809_onLoad_loopCount = 0;
var obj2041_onLoad_activeActionGroupIndex = -1;
var obj2041_onLoad_runningActionsCount = 0;
var obj2041_onLoad_loopCount = 0;
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
		
	$("#obj246").trigger('SCEventShake');
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
		
obj38_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38_onLoad_activeActionGroupIndex = -1;
		$("#obj38").trigger("obj38_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38) {
				console.warn("de-queueing event obj38." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj38 
scale_355();
function scale_355() {
	window.obj38_onLoad_runningActionsCount = obj38_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj38";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj38';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '0.97';
	var effectDuration = '0.6';
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
		scale_355_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_355_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_355_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_355_completed() {
	setTimeout(function() {
		window.obj38_onLoad_runningActionsCount = window.obj38_onLoad_runningActionsCount - 1;
if (window.obj38_onLoad_runningActionsCount < 0) {
	window.obj38_onLoad_runningActionsCount = 0;
} else if (window.obj38_onLoad_runningActionsCount == 0) {
	obj38_onLoad_actionGroup1();
}
	}, 1);
}












};
obj38_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38_onLoad_activeActionGroupIndex = -1;
		$("#obj38").trigger("obj38_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38) {
				console.warn("de-queueing event obj38." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj38 
scale_356();
function scale_356() {
	window.obj38_onLoad_runningActionsCount = obj38_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj38";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj38';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.4';
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
		scale_356_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_356_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_356_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_356_completed() {
	setTimeout(function() {
		window.obj38_onLoad_runningActionsCount = window.obj38_onLoad_runningActionsCount - 1;
if (window.obj38_onLoad_runningActionsCount < 0) {
	window.obj38_onLoad_runningActionsCount = 0;
} else if (window.obj38_onLoad_runningActionsCount == 0) {
	obj38_onLoad_actionGroup2();
}
	}, 1);
}












};
obj38_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38_onLoad_activeActionGroupIndex = -1;
		$("#obj38").trigger("obj38_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38) {
				console.warn("de-queueing event obj38." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj38_onLoad();
function loop_obj38_onLoad() {
	var loopCount = 0;
	window.obj38_onLoad_loopCount = window.obj38_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj38_onLoad_loopCount > loopCount) {
		window.obj38_onLoad_loopCount = 0
		obj38_onLoad_actionGroup3();
	} else {
		obj38_onLoad_actionGroup0();
	}
}













};
obj38_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38_onLoad_activeActionGroupIndex = -1;
		$("#obj38").trigger("obj38_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38) {
				console.warn("de-queueing event obj38." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38_onLoad_activeActionGroupIndex = 3;
	





















};
obj38_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38_onAppear_activeActionGroupIndex = -1;
		$("#obj38").trigger("obj38_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38) {
				console.warn("de-queueing event obj38." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38_onAppear_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj38 
move_243();
function move_243() {
	window.obj38_onAppear_runningActionsCount = obj38_onAppear_runningActionsCount + 1;

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
	var targetObject = $("#obj38");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-10";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj38_onAppear_runningActionsCount = window.obj38_onAppear_runningActionsCount - 1;
if (window.obj38_onAppear_runningActionsCount < 0) {
	window.obj38_onAppear_runningActionsCount = 0;
} else if (window.obj38_onAppear_runningActionsCount == 0) {
	obj38_onAppear_actionGroup1();
}
		}, 1);
	});
}



















};
obj38_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38_onAppear_activeActionGroupIndex = -1;
		$("#obj38").trigger("obj38_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38) {
				console.warn("de-queueing event obj38." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38_onAppear_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj38 
move_244();
function move_244() {
	window.obj38_onAppear_runningActionsCount = obj38_onAppear_runningActionsCount + 1;

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
	var targetObject = $("#obj38");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=10";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj38_onAppear_runningActionsCount = window.obj38_onAppear_runningActionsCount - 1;
if (window.obj38_onAppear_runningActionsCount < 0) {
	window.obj38_onAppear_runningActionsCount = 0;
} else if (window.obj38_onAppear_runningActionsCount == 0) {
	obj38_onAppear_actionGroup2();
}
		}, 1);
	});
}



















};
obj38_onAppear_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj38_onAppear_activeActionGroupIndex = -1;
		$("#obj38").trigger("obj38_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38) {
				console.warn("de-queueing event obj38." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38_onAppear_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj38_onAppear();
function loop_obj38_onAppear() {
	var loopCount = 3;
	window.obj38_onAppear_loopCount = window.obj38_onAppear_loopCount + 1;
	if (loopCount != 0 && window.obj38_onAppear_loopCount > loopCount) {
		window.obj38_onAppear_loopCount = 0
		obj38_onAppear_actionGroup3();
	} else {
		obj38_onAppear_actionGroup0();
	}
}













};
obj38_onAppear_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj38_onAppear_activeActionGroupIndex = -1;
		$("#obj38").trigger("obj38_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 38) {
				console.warn("de-queueing event obj38." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj38").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj38_onAppear_activeActionGroupIndex = 3;
	





















};
obj367_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj367_onLoad_activeActionGroupIndex = -1;
		$("#obj367").trigger("obj367_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 367) {
				console.warn("de-queueing event obj367." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj367").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj367_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_377();
function wait_377() {
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount < 0) {
	window.obj367_onLoad_runningActionsCount = 0;
} else if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup1();
}
	}, 2000);
}













};
obj367_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj367_onLoad_activeActionGroupIndex = -1;
		$("#obj367").trigger("obj367_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 367) {
				console.warn("de-queueing event obj367." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj367").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj367_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj367
(function(){
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;

	var selector = "#obj367";
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
					window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount < 0) {
	window.obj367_onLoad_runningActionsCount = 0;
} else if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup2();
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
				window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount < 0) {
	window.obj367_onLoad_runningActionsCount = 0;
} else if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj367_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj367_onLoad_activeActionGroupIndex = -1;
		$("#obj367").trigger("obj367_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 367) {
				console.warn("de-queueing event obj367." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj367").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj367_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj367 
hide_372();
function hide_372() {
	var selector = "#obj367";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1200;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount < 0) {
	window.obj367_onLoad_runningActionsCount = 0;
} else if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_372(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount < 0) {
	window.obj367_onLoad_runningActionsCount = 0;
} else if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}

//	action: move
//	target: obj367 
move_370();
function move_370() {
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;

	var easing = "ease-in";
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
	var targetObject = $("#obj367");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-80";
	var moveY = "+=-200";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1200, easing, function() {
		setTimeout(function() {
			window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount < 0) {
	window.obj367_onLoad_runningActionsCount = 0;
} else if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup3();
}
		}, 1);
	});
}







//	action: scale
//	target: obj367 
scale_371();
function scale_371() {
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj367";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj367';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.3';
	var scaleYValue = '1.3';
	var effectDuration = '1.2';
	var effectEasing = 'ease-in';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_371_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_371_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_371_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_371_completed() {
	setTimeout(function() {
		window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount < 0) {
	window.obj367_onLoad_runningActionsCount = 0;
} else if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup3();
}
	}, 1);
}












};
obj367_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj367_onLoad_activeActionGroupIndex = -1;
		$("#obj367").trigger("obj367_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 367) {
				console.warn("de-queueing event obj367." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj367").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj367_onLoad_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj367 
move_374();
function move_374() {
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj367");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=80";
	var moveY = "+=200";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount < 0) {
	window.obj367_onLoad_runningActionsCount = 0;
} else if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup4();
}
		}, 1);
	});
}







//	action: scale
//	target: obj367 
scale_375();
function scale_375() {
	window.obj367_onLoad_runningActionsCount = obj367_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj367";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj367';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
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
		scale_375_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_375_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_375_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_375_completed() {
	setTimeout(function() {
		window.obj367_onLoad_runningActionsCount = window.obj367_onLoad_runningActionsCount - 1;
if (window.obj367_onLoad_runningActionsCount < 0) {
	window.obj367_onLoad_runningActionsCount = 0;
} else if (window.obj367_onLoad_runningActionsCount == 0) {
	obj367_onLoad_actionGroup4();
}
	}, 1);
}












};
obj367_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj367_onLoad_activeActionGroupIndex = -1;
		$("#obj367").trigger("obj367_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 367) {
				console.warn("de-queueing event obj367." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj367").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj367_onLoad_activeActionGroupIndex = 4;
	








//	action: loop
loop_obj367_onLoad();
function loop_obj367_onLoad() {
	var loopCount = 0;
	window.obj367_onLoad_loopCount = window.obj367_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj367_onLoad_loopCount > loopCount) {
		window.obj367_onLoad_loopCount = 0
		obj367_onLoad_actionGroup5();
	} else {
		obj367_onLoad_actionGroup0();
	}
}













};
obj367_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj367_onLoad_activeActionGroupIndex = -1;
		$("#obj367").trigger("obj367_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 367) {
				console.warn("de-queueing event obj367." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj367").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj367_onLoad_activeActionGroupIndex = 5;
	





















};
obj32_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj32_onLoad_activeActionGroupIndex = -1;
		$("#obj32").trigger("obj32_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 32) {
				console.warn("de-queueing event obj32." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj32").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj32_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj32 
scale_114();
function scale_114() {
	window.obj32_onLoad_runningActionsCount = obj32_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj32";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj32';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1.03';
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
		scale_114_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_114_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_114_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_114_completed() {
	setTimeout(function() {
		window.obj32_onLoad_runningActionsCount = window.obj32_onLoad_runningActionsCount - 1;
if (window.obj32_onLoad_runningActionsCount < 0) {
	window.obj32_onLoad_runningActionsCount = 0;
} else if (window.obj32_onLoad_runningActionsCount == 0) {
	obj32_onLoad_actionGroup1();
}
	}, 1);
}












};
obj32_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj32_onLoad_activeActionGroupIndex = -1;
		$("#obj32").trigger("obj32_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 32) {
				console.warn("de-queueing event obj32." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj32").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj32_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj32 
scale_115();
function scale_115() {
	window.obj32_onLoad_runningActionsCount = obj32_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj32";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj32';
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
		scale_115_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_115_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_115_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_115_completed() {
	setTimeout(function() {
		window.obj32_onLoad_runningActionsCount = window.obj32_onLoad_runningActionsCount - 1;
if (window.obj32_onLoad_runningActionsCount < 0) {
	window.obj32_onLoad_runningActionsCount = 0;
} else if (window.obj32_onLoad_runningActionsCount == 0) {
	obj32_onLoad_actionGroup2();
}
	}, 1);
}












};
obj32_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj32_onLoad_activeActionGroupIndex = -1;
		$("#obj32").trigger("obj32_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 32) {
				console.warn("de-queueing event obj32." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj32").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj32_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj32_onLoad();
function loop_obj32_onLoad() {
	var loopCount = 0;
	window.obj32_onLoad_loopCount = window.obj32_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj32_onLoad_loopCount > loopCount) {
		window.obj32_onLoad_loopCount = 0
		obj32_onLoad_actionGroup3();
	} else {
		obj32_onLoad_actionGroup0();
	}
}













};
obj32_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj32_onLoad_activeActionGroupIndex = -1;
		$("#obj32").trigger("obj32_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 32) {
				console.warn("de-queueing event obj32." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj32").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj32_onLoad_activeActionGroupIndex = 3;
	





















};
obj34_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj34_onLoad_activeActionGroupIndex = -1;
		$("#obj34").trigger("obj34_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 34) {
				console.warn("de-queueing event obj34." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj34").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj34_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj34 
rotate_99();
function rotate_99() {
	window.obj34_onLoad_runningActionsCount = obj34_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj34";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj34';
	var transformOriginX = '97.74775%';
	var transformOriginY = '91.9214%';
	var rotationToDegrees = '6';
	var rotationSpeed = 3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_99_completed(); }
	//TweenMax.to(targetObjectId, 3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_99_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_99_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_99_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_99_completed() {
	setTimeout(function() {
		window.obj34_onLoad_runningActionsCount = window.obj34_onLoad_runningActionsCount - 1;
if (window.obj34_onLoad_runningActionsCount < 0) {
	window.obj34_onLoad_runningActionsCount = 0;
} else if (window.obj34_onLoad_runningActionsCount == 0) {
	obj34_onLoad_actionGroup1();
}
	}, 1);
}














};
obj34_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj34_onLoad_activeActionGroupIndex = -1;
		$("#obj34").trigger("obj34_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 34) {
				console.warn("de-queueing event obj34." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj34").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj34_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj34 
rotate_100();
function rotate_100() {
	window.obj34_onLoad_runningActionsCount = obj34_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj34";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj34';
	var transformOriginX = '97.74775%';
	var transformOriginY = '91.9214%';
	var rotationToDegrees = '-6';
	var rotationSpeed = 3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_100_completed(); }
	//TweenMax.to(targetObjectId, 3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_100_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_100_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_100_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_100_completed() {
	setTimeout(function() {
		window.obj34_onLoad_runningActionsCount = window.obj34_onLoad_runningActionsCount - 1;
if (window.obj34_onLoad_runningActionsCount < 0) {
	window.obj34_onLoad_runningActionsCount = 0;
} else if (window.obj34_onLoad_runningActionsCount == 0) {
	obj34_onLoad_actionGroup2();
}
	}, 1);
}














};
obj34_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj34_onLoad_activeActionGroupIndex = -1;
		$("#obj34").trigger("obj34_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 34) {
				console.warn("de-queueing event obj34." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj34").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj34_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj34_onLoad();
function loop_obj34_onLoad() {
	var loopCount = 0;
	window.obj34_onLoad_loopCount = window.obj34_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj34_onLoad_loopCount > loopCount) {
		window.obj34_onLoad_loopCount = 0
		obj34_onLoad_actionGroup3();
	} else {
		obj34_onLoad_actionGroup0();
	}
}













};
obj34_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj34_onLoad_activeActionGroupIndex = -1;
		$("#obj34").trigger("obj34_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 34) {
				console.warn("de-queueing event obj34." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj34").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj34_onLoad_activeActionGroupIndex = 3;
	





















};
obj51_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51_onLoad_activeActionGroupIndex = -1;
		$("#obj51").trigger("obj51_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51) {
				console.warn("de-queueing event obj51." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_57();
function wait_57() {
	window.obj51_onLoad_runningActionsCount = obj51_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj51_onLoad_runningActionsCount = window.obj51_onLoad_runningActionsCount - 1;
if (window.obj51_onLoad_runningActionsCount < 0) {
	window.obj51_onLoad_runningActionsCount = 0;
} else if (window.obj51_onLoad_runningActionsCount == 0) {
	obj51_onLoad_actionGroup1();
}
	}, 300);
}













};
obj51_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51_onLoad_activeActionGroupIndex = -1;
		$("#obj51").trigger("obj51_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51) {
				console.warn("de-queueing event obj51." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj51 
scale_231();
function scale_231() {
	window.obj51_onLoad_runningActionsCount = obj51_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj51";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj51';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
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
		scale_231_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_231_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_231_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_231_completed() {
	setTimeout(function() {
		window.obj51_onLoad_runningActionsCount = window.obj51_onLoad_runningActionsCount - 1;
if (window.obj51_onLoad_runningActionsCount < 0) {
	window.obj51_onLoad_runningActionsCount = 0;
} else if (window.obj51_onLoad_runningActionsCount == 0) {
	obj51_onLoad_actionGroup2();
}
	}, 1);
}












};
obj51_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51_onLoad_activeActionGroupIndex = -1;
		$("#obj51").trigger("obj51_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51) {
				console.warn("de-queueing event obj51." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj51
(function(){
	window.obj51_onLoad_runningActionsCount = obj51_onLoad_runningActionsCount + 1;

	var selector = "#obj51";
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
					window.obj51_onLoad_runningActionsCount = window.obj51_onLoad_runningActionsCount - 1;
if (window.obj51_onLoad_runningActionsCount < 0) {
	window.obj51_onLoad_runningActionsCount = 0;
} else if (window.obj51_onLoad_runningActionsCount == 0) {
	obj51_onLoad_actionGroup3();
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
				window.obj51_onLoad_runningActionsCount = window.obj51_onLoad_runningActionsCount - 1;
if (window.obj51_onLoad_runningActionsCount < 0) {
	window.obj51_onLoad_runningActionsCount = 0;
} else if (window.obj51_onLoad_runningActionsCount == 0) {
	obj51_onLoad_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51_onLoad_activeActionGroupIndex = -1;
		$("#obj51").trigger("obj51_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51) {
				console.warn("de-queueing event obj51." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51_onLoad_activeActionGroupIndex = 3;
	









//	action: scale
//	target: obj51 
scale_232();
function scale_232() {
	window.obj51_onLoad_runningActionsCount = obj51_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj51";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj51';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
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
		scale_232_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_232_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_232_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_232_completed() {
	setTimeout(function() {
		window.obj51_onLoad_runningActionsCount = window.obj51_onLoad_runningActionsCount - 1;
if (window.obj51_onLoad_runningActionsCount < 0) {
	window.obj51_onLoad_runningActionsCount = 0;
} else if (window.obj51_onLoad_runningActionsCount == 0) {
	obj51_onLoad_actionGroup4();
}
	}, 1);
}












};
obj51_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51_onLoad_activeActionGroupIndex = -1;
		$("#obj51").trigger("obj51_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51) {
				console.warn("de-queueing event obj51." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	selector: #obj60
(function(){
	window.obj51_onLoad_runningActionsCount = obj51_onLoad_runningActionsCount + 1;

	var selector = "#obj60";
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
					window.obj51_onLoad_runningActionsCount = window.obj51_onLoad_runningActionsCount - 1;
if (window.obj51_onLoad_runningActionsCount < 0) {
	window.obj51_onLoad_runningActionsCount = 0;
} else if (window.obj51_onLoad_runningActionsCount == 0) {
	obj51_onLoad_actionGroup5();
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
				window.obj51_onLoad_runningActionsCount = window.obj51_onLoad_runningActionsCount - 1;
if (window.obj51_onLoad_runningActionsCount < 0) {
	window.obj51_onLoad_runningActionsCount = 0;
} else if (window.obj51_onLoad_runningActionsCount == 0) {
	obj51_onLoad_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51_onLoad_activeActionGroupIndex = -1;
		$("#obj51").trigger("obj51_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51) {
				console.warn("de-queueing event obj51." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51_onLoad_activeActionGroupIndex = 5;
	








//	action: wait
wait_258();
function wait_258() {
	window.obj51_onLoad_runningActionsCount = obj51_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj51_onLoad_runningActionsCount = window.obj51_onLoad_runningActionsCount - 1;
if (window.obj51_onLoad_runningActionsCount < 0) {
	window.obj51_onLoad_runningActionsCount = 0;
} else if (window.obj51_onLoad_runningActionsCount == 0) {
	obj51_onLoad_actionGroup6();
}
	}, 1000);
}













};
obj51_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51_onLoad_activeActionGroupIndex = -1;
		$("#obj51").trigger("obj51_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51) {
				console.warn("de-queueing event obj51." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51_onLoad_activeActionGroupIndex = 6;
	

//	action: show 
//	selector: #obj246
(function(){
	window.obj51_onLoad_runningActionsCount = obj51_onLoad_runningActionsCount + 1;

	var selector = "#obj246";
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
					window.obj51_onLoad_runningActionsCount = window.obj51_onLoad_runningActionsCount - 1;
if (window.obj51_onLoad_runningActionsCount < 0) {
	window.obj51_onLoad_runningActionsCount = 0;
} else if (window.obj51_onLoad_runningActionsCount == 0) {
	obj51_onLoad_actionGroup7();
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
				window.obj51_onLoad_runningActionsCount = window.obj51_onLoad_runningActionsCount - 1;
if (window.obj51_onLoad_runningActionsCount < 0) {
	window.obj51_onLoad_runningActionsCount = 0;
} else if (window.obj51_onLoad_runningActionsCount == 0) {
	obj51_onLoad_actionGroup7();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51_onLoad_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51_onLoad_activeActionGroupIndex = -1;
		$("#obj51").trigger("obj51_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51) {
				console.warn("de-queueing event obj51." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51_onLoad_activeActionGroupIndex = 7;
	





















};
obj246_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj246_onTap_activeActionGroupIndex = -1;
		$("#obj246").trigger("obj246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 246) {
				console.warn("de-queueing event obj246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj246_onTap_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj863 
runActionList_876();
function runActionList_876() {
	window.obj246_onTap_runningActionsCount = obj246_onTap_runningActionsCount + 1;
	$("#obj863").trigger('SCEventRun');
	setTimeout(function() {
		window.obj246_onTap_runningActionsCount = window.obj246_onTap_runningActionsCount - 1;
if (window.obj246_onTap_runningActionsCount < 0) {
	window.obj246_onTap_runningActionsCount = 0;
} else if (window.obj246_onTap_runningActionsCount == 0) {
	obj246_onTap_actionGroup1();
}		
	}, 1);
}



};
obj246_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj246_onTap_activeActionGroupIndex = -1;
		$("#obj246").trigger("obj246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 246) {
				console.warn("de-queueing event obj246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj246_onTap_activeActionGroupIndex = 1;
	













//	action: stopMovie 
//	target: obj1809 
stopAudio_1812();
function stopAudio_1812() {
	window.obj246_onTap_runningActionsCount = obj246_onTap_runningActionsCount + 1;
	var myAudio = $("#obj1809")[0];
	myAudio.pause();
	window.obj246_onTap_runningActionsCount = window.obj246_onTap_runningActionsCount - 1;
if (window.obj246_onTap_runningActionsCount < 0) {
	window.obj246_onTap_runningActionsCount = 0;
} else if (window.obj246_onTap_runningActionsCount == 0) {
	obj246_onTap_actionGroup2();
}
}








};
obj246_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj246_onTap_activeActionGroupIndex = -1;
		$("#obj246").trigger("obj246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 246) {
				console.warn("de-queueing event obj246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj246_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj1813 
playAudio_1815();
function playAudio_1815() {
	window.obj246_onTap_runningActionsCount = obj246_onTap_runningActionsCount + 1;
	var myAudio = $("#obj1813")[0];
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
		    window.obj246_onTap_runningActionsCount = window.obj246_onTap_runningActionsCount - 1;
if (window.obj246_onTap_runningActionsCount < 0) {
	window.obj246_onTap_runningActionsCount = 0;
} else if (window.obj246_onTap_runningActionsCount == 0) {
	obj246_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj246_onTap_runningActionsCount = window.obj246_onTap_runningActionsCount - 1;
if (window.obj246_onTap_runningActionsCount < 0) {
	window.obj246_onTap_runningActionsCount = 0;
} else if (window.obj246_onTap_runningActionsCount == 0) {
	obj246_onTap_actionGroup3();
}
	}
}









};
obj246_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj246_onTap_activeActionGroupIndex = -1;
		$("#obj246").trigger("obj246_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 246) {
				console.warn("de-queueing event obj246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj246_onTap_activeActionGroupIndex = 3;
	





















};
obj246_onShake_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj246_onShake_activeActionGroupIndex = -1;
		$("#obj246").trigger("obj246_onShake_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 246) {
				console.warn("de-queueing event obj246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj246_onShake_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj863 
runActionList_877();
function runActionList_877() {
	window.obj246_onShake_runningActionsCount = obj246_onShake_runningActionsCount + 1;
	$("#obj863").trigger('SCEventRun');
	setTimeout(function() {
		window.obj246_onShake_runningActionsCount = window.obj246_onShake_runningActionsCount - 1;
if (window.obj246_onShake_runningActionsCount < 0) {
	window.obj246_onShake_runningActionsCount = 0;
} else if (window.obj246_onShake_runningActionsCount == 0) {
	obj246_onShake_actionGroup1();
}		
	}, 1);
}



};
obj246_onShake_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj246_onShake_activeActionGroupIndex = -1;
		$("#obj246").trigger("obj246_onShake_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 246) {
				console.warn("de-queueing event obj246." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj246").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj246_onShake_activeActionGroupIndex = 1;
	





















};
obj67_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67_onTap_activeActionGroupIndex = -1;
		$("#obj67").trigger("obj67_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67) {
				console.warn("de-queueing event obj67." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67_onTap_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj3133 
playAudio_3131();
function playAudio_3131() {
	window.obj67_onTap_runningActionsCount = obj67_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3133")[0];
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
		    window.obj67_onTap_runningActionsCount = window.obj67_onTap_runningActionsCount - 1;
if (window.obj67_onTap_runningActionsCount < 0) {
	window.obj67_onTap_runningActionsCount = 0;
} else if (window.obj67_onTap_runningActionsCount == 0) {
	obj67_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj67_onTap_runningActionsCount = window.obj67_onTap_runningActionsCount - 1;
if (window.obj67_onTap_runningActionsCount < 0) {
	window.obj67_onTap_runningActionsCount = 0;
} else if (window.obj67_onTap_runningActionsCount == 0) {
	obj67_onTap_actionGroup1();
}
	}
}









};
obj67_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67_onTap_activeActionGroupIndex = -1;
		$("#obj67").trigger("obj67_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67) {
				console.warn("de-queueing event obj67." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_264();
function runjs_264() {
	window.obj67_onTap_runningActionsCount = obj67_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj262"));
	
	setTimeout(function() {
		window.obj67_onTap_runningActionsCount = window.obj67_onTap_runningActionsCount - 1;
if (window.obj67_onTap_runningActionsCount < 0) {
	window.obj67_onTap_runningActionsCount = 0;
} else if (window.obj67_onTap_runningActionsCount == 0) {
	obj67_onTap_actionGroup2();
}
	}, 1);
}







};
obj67_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67_onTap_activeActionGroupIndex = -1;
		$("#obj67").trigger("obj67_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67) {
				console.warn("de-queueing event obj67." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj262
(function(){
	window.obj67_onTap_runningActionsCount = obj67_onTap_runningActionsCount + 1;

	var selector = "#obj262";
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
					window.obj67_onTap_runningActionsCount = window.obj67_onTap_runningActionsCount - 1;
if (window.obj67_onTap_runningActionsCount < 0) {
	window.obj67_onTap_runningActionsCount = 0;
} else if (window.obj67_onTap_runningActionsCount == 0) {
	obj67_onTap_actionGroup3();
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
				window.obj67_onTap_runningActionsCount = window.obj67_onTap_runningActionsCount - 1;
if (window.obj67_onTap_runningActionsCount < 0) {
	window.obj67_onTap_runningActionsCount = 0;
} else if (window.obj67_onTap_runningActionsCount == 0) {
	obj67_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67_onTap_activeActionGroupIndex = -1;
		$("#obj67").trigger("obj67_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67) {
				console.warn("de-queueing event obj67." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67_onTap_activeActionGroupIndex = 3;
	
//	action: goToPage
goToPage_92();
function goToPage_92() {
	window.obj67_onTap_runningActionsCount = obj67_onTap_runningActionsCount + 1;
	$("#anchor18")[0].click();
	window.obj67_onTap_runningActionsCount = window.obj67_onTap_runningActionsCount - 1;
if (window.obj67_onTap_runningActionsCount < 0) {
	window.obj67_onTap_runningActionsCount = 0;
} else if (window.obj67_onTap_runningActionsCount == 0) {
	obj67_onTap_actionGroup4();
}
}





















};
obj67_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67_onTap_activeActionGroupIndex = -1;
		$("#obj67").trigger("obj67_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67) {
				console.warn("de-queueing event obj67." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67_onTap_activeActionGroupIndex = 4;
	





















};
obj67_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67_onLoad_activeActionGroupIndex = -1;
		$("#obj67").trigger("obj67_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67) {
				console.warn("de-queueing event obj67." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj67 
move_118();
function move_118() {
	window.obj67_onLoad_runningActionsCount = obj67_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj67");
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
			window.obj67_onLoad_runningActionsCount = window.obj67_onLoad_runningActionsCount - 1;
if (window.obj67_onLoad_runningActionsCount < 0) {
	window.obj67_onLoad_runningActionsCount = 0;
} else if (window.obj67_onLoad_runningActionsCount == 0) {
	obj67_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj67_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67_onLoad_activeActionGroupIndex = -1;
		$("#obj67").trigger("obj67_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67) {
				console.warn("de-queueing event obj67." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj67 
move_119();
function move_119() {
	window.obj67_onLoad_runningActionsCount = obj67_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj67");
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
			window.obj67_onLoad_runningActionsCount = window.obj67_onLoad_runningActionsCount - 1;
if (window.obj67_onLoad_runningActionsCount < 0) {
	window.obj67_onLoad_runningActionsCount = 0;
} else if (window.obj67_onLoad_runningActionsCount == 0) {
	obj67_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj67_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67_onLoad_activeActionGroupIndex = -1;
		$("#obj67").trigger("obj67_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67) {
				console.warn("de-queueing event obj67." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj67_onLoad();
function loop_obj67_onLoad() {
	var loopCount = 0;
	window.obj67_onLoad_loopCount = window.obj67_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj67_onLoad_loopCount > loopCount) {
		window.obj67_onLoad_loopCount = 0
		obj67_onLoad_actionGroup3();
	} else {
		obj67_onLoad_actionGroup0();
	}
}













};
obj67_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67_onLoad_activeActionGroupIndex = -1;
		$("#obj67").trigger("obj67_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67) {
				console.warn("de-queueing event obj67." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67_onLoad_activeActionGroupIndex = 3;
	





















};
obj262_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj262_onLoad_activeActionGroupIndex = -1;
		$("#obj262").trigger("obj262_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 262) {
				console.warn("de-queueing event obj262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj262_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj262 
hide_403();
function hide_403() {
	var selector = "#obj262";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj262_onLoad_runningActionsCount = obj262_onLoad_runningActionsCount + 1;
	
	var animationType = "slideOutLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj262_onLoad_runningActionsCount = window.obj262_onLoad_runningActionsCount - 1;
if (window.obj262_onLoad_runningActionsCount < 0) {
	window.obj262_onLoad_runningActionsCount = 0;
} else if (window.obj262_onLoad_runningActionsCount == 0) {
	obj262_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_403(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj262_onLoad_runningActionsCount = window.obj262_onLoad_runningActionsCount - 1;
if (window.obj262_onLoad_runningActionsCount < 0) {
	window.obj262_onLoad_runningActionsCount = 0;
} else if (window.obj262_onLoad_runningActionsCount == 0) {
	obj262_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj262_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj262_onLoad_activeActionGroupIndex = -1;
		$("#obj262").trigger("obj262_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 262) {
				console.warn("de-queueing event obj262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj262_onLoad_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_404();
function runjs_404() {
	window.obj262_onLoad_runningActionsCount = obj262_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj262"));
	
	setTimeout(function() {
		window.obj262_onLoad_runningActionsCount = window.obj262_onLoad_runningActionsCount - 1;
if (window.obj262_onLoad_runningActionsCount < 0) {
	window.obj262_onLoad_runningActionsCount = 0;
} else if (window.obj262_onLoad_runningActionsCount == 0) {
	obj262_onLoad_actionGroup2();
}
	}, 1);
}







};
obj262_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj262_onLoad_activeActionGroupIndex = -1;
		$("#obj262").trigger("obj262_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 262) {
				console.warn("de-queueing event obj262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj262_onLoad_activeActionGroupIndex = 2;
	





















};
obj863_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj863_SCEventRun_activeActionGroupIndex = -1;
		$("#obj863").trigger("obj863_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 863) {
				console.warn("de-queueing event obj863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj863_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj246 
hide_866();
function hide_866() {
	var selector = "#obj246";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj863_SCEventRun_runningActionsCount = obj863_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_866(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}








//	action: scale
//	target: obj38 
scale_865();
function scale_865() {
	window.obj863_SCEventRun_runningActionsCount = obj863_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj38";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj38';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '0.8';
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
		scale_865_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_865_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_865_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_865_completed() {
	setTimeout(function() {
		window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj863_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj863_SCEventRun_activeActionGroupIndex = -1;
		$("#obj863").trigger("obj863_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 863) {
				console.warn("de-queueing event obj863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj863_SCEventRun_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj367 
hide_867();
function hide_867() {
	var selector = "#obj367";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj863_SCEventRun_runningActionsCount = obj863_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_867(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj32 
hide_868();
function hide_868() {
	var selector = "#obj32";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj863_SCEventRun_runningActionsCount = obj863_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_868(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj34 
hide_869();
function hide_869() {
	var selector = "#obj34";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj863_SCEventRun_runningActionsCount = obj863_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_869(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj38
(function(){
	window.obj863_SCEventRun_runningActionsCount = obj863_SCEventRun_runningActionsCount + 1;

	var selector = "#obj38";
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
					window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup2();
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
				window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj863_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj863_SCEventRun_activeActionGroupIndex = -1;
		$("#obj863").trigger("obj863_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 863) {
				console.warn("de-queueing event obj863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj863_SCEventRun_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj51 
move_872();
function move_872() {
	window.obj863_SCEventRun_runningActionsCount = obj863_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj51");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-315";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup3();
}
		}, 1);
	});
}
//	action: move
//	target: obj60 
move_873();
function move_873() {
	window.obj863_SCEventRun_runningActionsCount = obj863_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj60");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-315";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup3();
}
		}, 1);
	});
}







//	action: scale
//	target: obj38 
scale_871();
function scale_871() {
	window.obj863_SCEventRun_runningActionsCount = obj863_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj38";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj38';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '0.1';
	var effectEasing = 'ease-out';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_871_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_871_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_871_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_871_completed() {
	setTimeout(function() {
		window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj863_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj863_SCEventRun_activeActionGroupIndex = -1;
		$("#obj863").trigger("obj863_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 863) {
				console.warn("de-queueing event obj863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj863_SCEventRun_activeActionGroupIndex = 3;
	








//	action: wait
wait_874();
function wait_874() {
	window.obj863_SCEventRun_runningActionsCount = obj863_SCEventRun_runningActionsCount + 1;
	setTimeout(function() {
		window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup4();
}
	}, 300);
}













};
obj863_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj863_SCEventRun_activeActionGroupIndex = -1;
		$("#obj863").trigger("obj863_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 863) {
				console.warn("de-queueing event obj863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj863_SCEventRun_activeActionGroupIndex = 4;
	

//	action: show 
//	selector: #obj67
(function(){
	window.obj863_SCEventRun_runningActionsCount = obj863_SCEventRun_runningActionsCount + 1;

	var selector = "#obj67";
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
					window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup5();
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
				window.obj863_SCEventRun_runningActionsCount = window.obj863_SCEventRun_runningActionsCount - 1;
if (window.obj863_SCEventRun_runningActionsCount < 0) {
	window.obj863_SCEventRun_runningActionsCount = 0;
} else if (window.obj863_SCEventRun_runningActionsCount == 0) {
	obj863_SCEventRun_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj863_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj863_SCEventRun_activeActionGroupIndex = -1;
		$("#obj863").trigger("obj863_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 863) {
				console.warn("de-queueing event obj863." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj863").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj863_SCEventRun_activeActionGroupIndex = 5;
	





















};
obj1803_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1803_onLoad_activeActionGroupIndex = -1;
		$("#obj1803").trigger("obj1803_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1803) {
				console.warn("de-queueing event obj1803." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1803").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1803_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj1803 
playAudio_1807();
function playAudio_1807() {
	window.obj1803_onLoad_runningActionsCount = obj1803_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj1803")[0];
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
		    window.obj1803_onLoad_runningActionsCount = window.obj1803_onLoad_runningActionsCount - 1;
if (window.obj1803_onLoad_runningActionsCount < 0) {
	window.obj1803_onLoad_runningActionsCount = 0;
} else if (window.obj1803_onLoad_runningActionsCount == 0) {
	obj1803_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1803_onLoad_runningActionsCount = window.obj1803_onLoad_runningActionsCount - 1;
if (window.obj1803_onLoad_runningActionsCount < 0) {
	window.obj1803_onLoad_runningActionsCount = 0;
} else if (window.obj1803_onLoad_runningActionsCount == 0) {
	obj1803_onLoad_actionGroup1();
}
	}
}









};
obj1803_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1803_onLoad_activeActionGroupIndex = -1;
		$("#obj1803").trigger("obj1803_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1803) {
				console.warn("de-queueing event obj1803." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1803").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1803_onLoad_activeActionGroupIndex = 1;
	





















};
obj1809_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1809_onLoad_activeActionGroupIndex = -1;
		$("#obj1809").trigger("obj1809_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1809) {
				console.warn("de-queueing event obj1809." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1809").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1809_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj1809 
playAudio_1811();
function playAudio_1811() {
	window.obj1809_onLoad_runningActionsCount = obj1809_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj1809")[0];
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
		    window.obj1809_onLoad_runningActionsCount = window.obj1809_onLoad_runningActionsCount - 1;
if (window.obj1809_onLoad_runningActionsCount < 0) {
	window.obj1809_onLoad_runningActionsCount = 0;
} else if (window.obj1809_onLoad_runningActionsCount == 0) {
	obj1809_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1809_onLoad_runningActionsCount = window.obj1809_onLoad_runningActionsCount - 1;
if (window.obj1809_onLoad_runningActionsCount < 0) {
	window.obj1809_onLoad_runningActionsCount = 0;
} else if (window.obj1809_onLoad_runningActionsCount == 0) {
	obj1809_onLoad_actionGroup1();
}
	}
}









};
obj1809_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1809_onLoad_activeActionGroupIndex = -1;
		$("#obj1809").trigger("obj1809_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1809) {
				console.warn("de-queueing event obj1809." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1809").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1809_onLoad_activeActionGroupIndex = 1;
	





















};
obj2041_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2041_onLoad_activeActionGroupIndex = -1;
		$("#obj2041").trigger("obj2041_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2041) {
				console.warn("de-queueing event obj2041." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2041").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2041_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj2041 
playAudio_2043();
function playAudio_2043() {
	window.obj2041_onLoad_runningActionsCount = obj2041_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj2041")[0];
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
		    window.obj2041_onLoad_runningActionsCount = window.obj2041_onLoad_runningActionsCount - 1;
if (window.obj2041_onLoad_runningActionsCount < 0) {
	window.obj2041_onLoad_runningActionsCount = 0;
} else if (window.obj2041_onLoad_runningActionsCount == 0) {
	obj2041_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2041_onLoad_runningActionsCount = window.obj2041_onLoad_runningActionsCount - 1;
if (window.obj2041_onLoad_runningActionsCount < 0) {
	window.obj2041_onLoad_runningActionsCount = 0;
} else if (window.obj2041_onLoad_runningActionsCount == 0) {
	obj2041_onLoad_actionGroup1();
}
	}
}









};
obj2041_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2041_onLoad_activeActionGroupIndex = -1;
		$("#obj2041").trigger("obj2041_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2041) {
				console.warn("de-queueing event obj2041." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2041").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2041_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

























/*
 *
 *   obj38: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj38_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38_onLoad is still running");
	return;
}
var obj38_onLoad_runningActionsCount = 0;
var obj38_onLoad_loopCount = 0;
obj38_onLoad_actionGroup0();
});




/*
 *
 *   obj38: Event Appear
 *
 */
$("#obj38").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(38, "onDisappear") || 
		pubcoder.isActionListRunning(38, "onAppear")) {
		console.warn("queueing event obj38." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 38, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj38_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj38_onAppear is still running");
	return;
}
var obj38_onAppear_runningActionsCount = 0;
var obj38_onAppear_loopCount = 0;
obj38_onAppear_actionGroup0();
});





/*
 *
 *   obj367: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj367_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj367_onLoad is still running");
	return;
}
var obj367_onLoad_runningActionsCount = 0;
var obj367_onLoad_loopCount = 0;
obj367_onLoad_actionGroup0();
});










/*
 *
 *   obj32: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj32_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj32_onLoad is still running");
	return;
}
var obj32_onLoad_runningActionsCount = 0;
var obj32_onLoad_loopCount = 0;
obj32_onLoad_actionGroup0();
});










/*
 *
 *   obj34: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj34_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj34_onLoad is still running");
	return;
}
var obj34_onLoad_runningActionsCount = 0;
var obj34_onLoad_loopCount = 0;
obj34_onLoad_actionGroup0();
});










/*
 *
 *   obj51: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj51_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51_onLoad is still running");
	return;
}
var obj51_onLoad_runningActionsCount = 0;
var obj51_onLoad_loopCount = 0;
obj51_onLoad_actionGroup0();
});















/*
 *
 *   obj246: Event Shake
 *
 */
pubcoder.initDeviceMotion();
$("#obj246").bind('SCEventShake', function(event) {
	if (window.obj246_onShake_activeActionGroupIndex != -1) {
	console.warn("action list window.obj246_onShake is still running");
	return;
}
var obj246_onShake_runningActionsCount = 0;
var obj246_onShake_loopCount = 0;
obj246_onShake_actionGroup0();
});


/*
 *
 *   obj246: Event Touch Down
 *
 */
$("#obj246").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj246_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj246_onTap is still running");
	return;
}
var obj246_onTap_runningActionsCount = 0;
var obj246_onTap_loopCount = 0;
obj246_onTap_actionGroup0();
});




















/*
 *
 *   obj67: Event Touch Down
 *
 */
$("#obj67").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67_onTap is still running");
	return;
}
var obj67_onTap_runningActionsCount = 0;
var obj67_onTap_loopCount = 0;
obj67_onTap_actionGroup0();
});


/*
 *
 *   obj67: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj67_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67_onLoad is still running");
	return;
}
var obj67_onLoad_runningActionsCount = 0;
var obj67_onLoad_loopCount = 0;
obj67_onLoad_actionGroup0();
});










/*
 *
 *   obj262: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj262_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj262_onLoad is still running");
	return;
}
var obj262_onLoad_runningActionsCount = 0;
var obj262_onLoad_loopCount = 0;
obj262_onLoad_actionGroup0();
});






















/*
 *
 *   obj863: Event SCEventRun
 *
 */
$("#obj863").bind("SCEventRun", function(event) {
	if (window.obj863_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj863_SCEventRun is still running");
	return;
}
var obj863_SCEventRun_runningActionsCount = 0;
var obj863_SCEventRun_loopCount = 0;
obj863_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1803: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1803_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1803_onLoad is still running");
	return;
}
var obj1803_onLoad_runningActionsCount = 0;
var obj1803_onLoad_loopCount = 0;
obj1803_onLoad_actionGroup0();
});










/*
 *
 *   obj1809: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1809_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1809_onLoad is still running");
	return;
}
var obj1809_onLoad_runningActionsCount = 0;
var obj1809_onLoad_loopCount = 0;
obj1809_onLoad_actionGroup0();
});




















/*
 *
 *   obj2041: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2041_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2041_onLoad is still running");
	return;
}
var obj2041_onLoad_runningActionsCount = 0;
var obj2041_onLoad_loopCount = 0;
obj2041_onLoad_actionGroup0();
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
	
$("#obj28").trigger('SCEventShow');
$("#obj30").trigger('SCEventShow');
$("#obj367").trigger('SCEventShow');
$("#obj32").trigger('SCEventShow');
$("#obj34").trigger('SCEventShow');
$("#obj834").trigger('SCEventShow');
$("#obj262").trigger('SCEventShow');
$("#obj882").trigger('SCEventShow');
$("#obj1803").trigger('SCEventShow');
$("#obj1809").trigger('SCEventShow');
$("#obj1813").trigger('SCEventShow');
$("#obj2041").trigger('SCEventShow');
$("#obj3133").trigger('SCEventShow');
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