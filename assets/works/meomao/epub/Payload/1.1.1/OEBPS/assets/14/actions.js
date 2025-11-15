pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 1631;
pubcoder.page.title = pubcoder.page.title || "14";
pubcoder.page.number = pubcoder.page.number || 14;
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
var obj1669_onLoad_activeActionGroupIndex = -1;
var obj1669_onLoad_runningActionsCount = 0;
var obj1669_onLoad_loopCount = 0;
var obj1670_onTap_activeActionGroupIndex = -1;
var obj1670_onTap_runningActionsCount = 0;
var obj1670_onTap_loopCount = 0;
var obj1670_onLoad_activeActionGroupIndex = -1;
var obj1670_onLoad_runningActionsCount = 0;
var obj1670_onLoad_loopCount = 0;
var obj1671_onTap_activeActionGroupIndex = -1;
var obj1671_onTap_runningActionsCount = 0;
var obj1671_onTap_loopCount = 0;
var obj1671_onLoad_activeActionGroupIndex = -1;
var obj1671_onLoad_runningActionsCount = 0;
var obj1671_onLoad_loopCount = 0;
var obj1672_onLoad_activeActionGroupIndex = -1;
var obj1672_onLoad_runningActionsCount = 0;
var obj1672_onLoad_loopCount = 0;
var obj1673_onTap_activeActionGroupIndex = -1;
var obj1673_onTap_runningActionsCount = 0;
var obj1673_onTap_loopCount = 0;
var obj1673_onLoad_activeActionGroupIndex = -1;
var obj1673_onLoad_runningActionsCount = 0;
var obj1673_onLoad_loopCount = 0;
var obj1674_onLoad_activeActionGroupIndex = -1;
var obj1674_onLoad_runningActionsCount = 0;
var obj1674_onLoad_loopCount = 0;
var obj1668_onTap_activeActionGroupIndex = -1;
var obj1668_onTap_runningActionsCount = 0;
var obj1668_onTap_loopCount = 0;
var obj2654_onLoad_activeActionGroupIndex = -1;
var obj2654_onLoad_runningActionsCount = 0;
var obj2654_onLoad_loopCount = 0;
var obj2704_onLoad_activeActionGroupIndex = -1;
var obj2704_onLoad_runningActionsCount = 0;
var obj2704_onLoad_loopCount = 0;
var obj1650_onLoad_activeActionGroupIndex = -1;
var obj1650_onLoad_runningActionsCount = 0;
var obj1650_onLoad_loopCount = 0;
var obj1661_SCEventRun_activeActionGroupIndex = -1;
var obj1661_SCEventRun_runningActionsCount = 0;
var obj1661_SCEventRun_loopCount = 0;
var obj1732_onTap_activeActionGroupIndex = -1;
var obj1732_onTap_runningActionsCount = 0;
var obj1732_onTap_loopCount = 0;
var obj2615_onTap_activeActionGroupIndex = -1;
var obj2615_onTap_runningActionsCount = 0;
var obj2615_onTap_loopCount = 0;
var obj2621_onTap_activeActionGroupIndex = -1;
var obj2621_onTap_runningActionsCount = 0;
var obj2621_onTap_loopCount = 0;
var obj2637_onTap_activeActionGroupIndex = -1;
var obj2637_onTap_runningActionsCount = 0;
var obj2637_onTap_loopCount = 0;
var obj2627_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj2627_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj2627_SCEventCounterReachedTargetValue_loopCount = 0;
var obj2640_SCEventRun_activeActionGroupIndex = -1;
var obj2640_SCEventRun_runningActionsCount = 0;
var obj2640_SCEventRun_loopCount = 0;
var obj2891_SCEventRun_activeActionGroupIndex = -1;
var obj2891_SCEventRun_runningActionsCount = 0;
var obj2891_SCEventRun_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj2627_counterValue = 0;
var obj2627_counterTargetValue = 2;
var obj2627_counterCanExceedTargetValue = false;
var obj2629_counterValue = 0;
var obj2629_counterTargetValue = 1;
var obj2629_counterCanExceedTargetValue = false;
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
		
obj1669_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1669_onLoad_activeActionGroupIndex = -1;
		$("#obj1669").trigger("obj1669_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1669) {
				console.warn("de-queueing event obj1669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1669_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1669 
rotate_1684();
function rotate_1684() {
	window.obj1669_onLoad_runningActionsCount = obj1669_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1669";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1669';
	var transformOriginX = '45.1417%';
	var transformOriginY = '100%';
	var rotationToDegrees = '-2';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1684_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1684_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1684_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1684_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1684_completed() {
	setTimeout(function() {
		window.obj1669_onLoad_runningActionsCount = window.obj1669_onLoad_runningActionsCount - 1;
if (window.obj1669_onLoad_runningActionsCount < 0) {
	window.obj1669_onLoad_runningActionsCount = 0;
} else if (window.obj1669_onLoad_runningActionsCount == 0) {
	obj1669_onLoad_actionGroup1();
}
	}, 1);
}














};
obj1669_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1669_onLoad_activeActionGroupIndex = -1;
		$("#obj1669").trigger("obj1669_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1669) {
				console.warn("de-queueing event obj1669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1669_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj1669 
rotate_1685();
function rotate_1685() {
	window.obj1669_onLoad_runningActionsCount = obj1669_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1669";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1669';
	var transformOriginX = '45.1417%';
	var transformOriginY = '100%';
	var rotationToDegrees = '2';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1685_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1685_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1685_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1685_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1685_completed() {
	setTimeout(function() {
		window.obj1669_onLoad_runningActionsCount = window.obj1669_onLoad_runningActionsCount - 1;
if (window.obj1669_onLoad_runningActionsCount < 0) {
	window.obj1669_onLoad_runningActionsCount = 0;
} else if (window.obj1669_onLoad_runningActionsCount == 0) {
	obj1669_onLoad_actionGroup2();
}
	}, 1);
}














};
obj1669_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1669_onLoad_activeActionGroupIndex = -1;
		$("#obj1669").trigger("obj1669_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1669) {
				console.warn("de-queueing event obj1669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1669_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1669_onLoad();
function loop_obj1669_onLoad() {
	var loopCount = 0;
	window.obj1669_onLoad_loopCount = window.obj1669_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1669_onLoad_loopCount > loopCount) {
		window.obj1669_onLoad_loopCount = 0
		obj1669_onLoad_actionGroup3();
	} else {
		obj1669_onLoad_actionGroup0();
	}
}













};
obj1669_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1669_onLoad_activeActionGroupIndex = -1;
		$("#obj1669").trigger("obj1669_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1669) {
				console.warn("de-queueing event obj1669." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1669").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1669_onLoad_activeActionGroupIndex = 3;
	





















};
obj1670_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_onTap_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1670) {
				console.warn("de-queueing event obj1670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1670_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1670 
move_2899();
function move_2899() {
	window.obj1670_onTap_runningActionsCount = obj1670_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1670");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=5";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj1670_onTap_runningActionsCount = window.obj1670_onTap_runningActionsCount - 1;
if (window.obj1670_onTap_runningActionsCount < 0) {
	window.obj1670_onTap_runningActionsCount = 0;
} else if (window.obj1670_onTap_runningActionsCount == 0) {
	obj1670_onTap_actionGroup1();
}
		}, 1);
	});
}










//	action: playAudio
//	target: obj3172 
playAudio_3177();
function playAudio_3177() {
	window.obj1670_onTap_runningActionsCount = obj1670_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3172")[0];
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
		    window.obj1670_onTap_runningActionsCount = window.obj1670_onTap_runningActionsCount - 1;
if (window.obj1670_onTap_runningActionsCount < 0) {
	window.obj1670_onTap_runningActionsCount = 0;
} else if (window.obj1670_onTap_runningActionsCount == 0) {
	obj1670_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1670_onTap_runningActionsCount = window.obj1670_onTap_runningActionsCount - 1;
if (window.obj1670_onTap_runningActionsCount < 0) {
	window.obj1670_onTap_runningActionsCount = 0;
} else if (window.obj1670_onTap_runningActionsCount == 0) {
	obj1670_onTap_actionGroup1();
}
	}
}









};
obj1670_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_onTap_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1670) {
				console.warn("de-queueing event obj1670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1670_onTap_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1670 
move_2907();
function move_2907() {
	window.obj1670_onTap_runningActionsCount = obj1670_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1670");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-5";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj1670_onTap_runningActionsCount = window.obj1670_onTap_runningActionsCount - 1;
if (window.obj1670_onTap_runningActionsCount < 0) {
	window.obj1670_onTap_runningActionsCount = 0;
} else if (window.obj1670_onTap_runningActionsCount == 0) {
	obj1670_onTap_actionGroup2();
}
		}, 1);
	});
}



















};
obj1670_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_onTap_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1670) {
				console.warn("de-queueing event obj1670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1670_onTap_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1670_onTap();
function loop_obj1670_onTap() {
	var loopCount = 2;
	window.obj1670_onTap_loopCount = window.obj1670_onTap_loopCount + 1;
	if (loopCount != 0 && window.obj1670_onTap_loopCount > loopCount) {
		window.obj1670_onTap_loopCount = 0
		obj1670_onTap_actionGroup3();
	} else {
		obj1670_onTap_actionGroup0();
	}
}













};
obj1670_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1670_onTap_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1670) {
				console.warn("de-queueing event obj1670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1670_onTap_activeActionGroupIndex = 3;
	





















};
obj1670_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_onLoad_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1670) {
				console.warn("de-queueing event obj1670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1670_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1670 
scale_1694();
function scale_1694() {
	window.obj1670_onLoad_runningActionsCount = obj1670_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1670";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1670';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '0.98';
	var effectDuration = '4';
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
		scale_1694_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1694_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1694_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1694_completed() {
	setTimeout(function() {
		window.obj1670_onLoad_runningActionsCount = window.obj1670_onLoad_runningActionsCount - 1;
if (window.obj1670_onLoad_runningActionsCount < 0) {
	window.obj1670_onLoad_runningActionsCount = 0;
} else if (window.obj1670_onLoad_runningActionsCount == 0) {
	obj1670_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1670_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_onLoad_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1670) {
				console.warn("de-queueing event obj1670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1670_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1670 
scale_1695();
function scale_1695() {
	window.obj1670_onLoad_runningActionsCount = obj1670_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1670";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1670';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1';
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
		scale_1695_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1695_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1695_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1695_completed() {
	setTimeout(function() {
		window.obj1670_onLoad_runningActionsCount = window.obj1670_onLoad_runningActionsCount - 1;
if (window.obj1670_onLoad_runningActionsCount < 0) {
	window.obj1670_onLoad_runningActionsCount = 0;
} else if (window.obj1670_onLoad_runningActionsCount == 0) {
	obj1670_onLoad_actionGroup2();
}
	}, 1);
}












};
obj1670_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1670_onLoad_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1670) {
				console.warn("de-queueing event obj1670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1670_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1670_onLoad();
function loop_obj1670_onLoad() {
	var loopCount = 0;
	window.obj1670_onLoad_loopCount = window.obj1670_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1670_onLoad_loopCount > loopCount) {
		window.obj1670_onLoad_loopCount = 0
		obj1670_onLoad_actionGroup3();
	} else {
		obj1670_onLoad_actionGroup0();
	}
}













};
obj1670_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1670_onLoad_activeActionGroupIndex = -1;
		$("#obj1670").trigger("obj1670_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1670) {
				console.warn("de-queueing event obj1670." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1670").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1670_onLoad_activeActionGroupIndex = 3;
	





















};
obj1671_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1671_onTap_activeActionGroupIndex = -1;
		$("#obj1671").trigger("obj1671_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1671) {
				console.warn("de-queueing event obj1671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1671_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1671 
move_2909();
function move_2909() {
	window.obj1671_onTap_runningActionsCount = obj1671_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1671");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=5";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj1671_onTap_runningActionsCount = window.obj1671_onTap_runningActionsCount - 1;
if (window.obj1671_onTap_runningActionsCount < 0) {
	window.obj1671_onTap_runningActionsCount = 0;
} else if (window.obj1671_onTap_runningActionsCount == 0) {
	obj1671_onTap_actionGroup1();
}
		}, 1);
	});
}










//	action: playAudio
//	target: obj3172 
playAudio_3178();
function playAudio_3178() {
	window.obj1671_onTap_runningActionsCount = obj1671_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3172")[0];
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
		    window.obj1671_onTap_runningActionsCount = window.obj1671_onTap_runningActionsCount - 1;
if (window.obj1671_onTap_runningActionsCount < 0) {
	window.obj1671_onTap_runningActionsCount = 0;
} else if (window.obj1671_onTap_runningActionsCount == 0) {
	obj1671_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1671_onTap_runningActionsCount = window.obj1671_onTap_runningActionsCount - 1;
if (window.obj1671_onTap_runningActionsCount < 0) {
	window.obj1671_onTap_runningActionsCount = 0;
} else if (window.obj1671_onTap_runningActionsCount == 0) {
	obj1671_onTap_actionGroup1();
}
	}
}









};
obj1671_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1671_onTap_activeActionGroupIndex = -1;
		$("#obj1671").trigger("obj1671_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1671) {
				console.warn("de-queueing event obj1671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1671_onTap_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1671 
move_2910();
function move_2910() {
	window.obj1671_onTap_runningActionsCount = obj1671_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1671");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-5";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj1671_onTap_runningActionsCount = window.obj1671_onTap_runningActionsCount - 1;
if (window.obj1671_onTap_runningActionsCount < 0) {
	window.obj1671_onTap_runningActionsCount = 0;
} else if (window.obj1671_onTap_runningActionsCount == 0) {
	obj1671_onTap_actionGroup2();
}
		}, 1);
	});
}



















};
obj1671_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1671_onTap_activeActionGroupIndex = -1;
		$("#obj1671").trigger("obj1671_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1671) {
				console.warn("de-queueing event obj1671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1671_onTap_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1671_onTap();
function loop_obj1671_onTap() {
	var loopCount = 2;
	window.obj1671_onTap_loopCount = window.obj1671_onTap_loopCount + 1;
	if (loopCount != 0 && window.obj1671_onTap_loopCount > loopCount) {
		window.obj1671_onTap_loopCount = 0
		obj1671_onTap_actionGroup3();
	} else {
		obj1671_onTap_actionGroup0();
	}
}













};
obj1671_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1671_onTap_activeActionGroupIndex = -1;
		$("#obj1671").trigger("obj1671_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1671) {
				console.warn("de-queueing event obj1671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1671_onTap_activeActionGroupIndex = 3;
	





















};
obj1671_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1671_onLoad_activeActionGroupIndex = -1;
		$("#obj1671").trigger("obj1671_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1671) {
				console.warn("de-queueing event obj1671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1671_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1671 
rotate_1701();
function rotate_1701() {
	window.obj1671_onLoad_runningActionsCount = obj1671_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1671";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1671';
	var transformOriginX = '45.1417%';
	var transformOriginY = '100%';
	var rotationToDegrees = '2';
	var rotationSpeed = 3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1701_completed(); }
	//TweenMax.to(targetObjectId, 3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1701_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1701_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1701_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1701_completed() {
	setTimeout(function() {
		window.obj1671_onLoad_runningActionsCount = window.obj1671_onLoad_runningActionsCount - 1;
if (window.obj1671_onLoad_runningActionsCount < 0) {
	window.obj1671_onLoad_runningActionsCount = 0;
} else if (window.obj1671_onLoad_runningActionsCount == 0) {
	obj1671_onLoad_actionGroup1();
}
	}, 1);
}














};
obj1671_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1671_onLoad_activeActionGroupIndex = -1;
		$("#obj1671").trigger("obj1671_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1671) {
				console.warn("de-queueing event obj1671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1671_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj1671 
rotate_1702();
function rotate_1702() {
	window.obj1671_onLoad_runningActionsCount = obj1671_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1671";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1671';
	var transformOriginX = '45.1417%';
	var transformOriginY = '100%';
	var rotationToDegrees = '-2';
	var rotationSpeed = 4;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1702_completed(); }
	//TweenMax.to(targetObjectId, 4, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1702_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1702_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1702_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1702_completed() {
	setTimeout(function() {
		window.obj1671_onLoad_runningActionsCount = window.obj1671_onLoad_runningActionsCount - 1;
if (window.obj1671_onLoad_runningActionsCount < 0) {
	window.obj1671_onLoad_runningActionsCount = 0;
} else if (window.obj1671_onLoad_runningActionsCount == 0) {
	obj1671_onLoad_actionGroup2();
}
	}, 1);
}














};
obj1671_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1671_onLoad_activeActionGroupIndex = -1;
		$("#obj1671").trigger("obj1671_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1671) {
				console.warn("de-queueing event obj1671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1671_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1671_onLoad();
function loop_obj1671_onLoad() {
	var loopCount = 0;
	window.obj1671_onLoad_loopCount = window.obj1671_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1671_onLoad_loopCount > loopCount) {
		window.obj1671_onLoad_loopCount = 0
		obj1671_onLoad_actionGroup3();
	} else {
		obj1671_onLoad_actionGroup0();
	}
}













};
obj1671_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1671_onLoad_activeActionGroupIndex = -1;
		$("#obj1671").trigger("obj1671_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1671) {
				console.warn("de-queueing event obj1671." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1671").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1671_onLoad_activeActionGroupIndex = 3;
	





















};
obj1672_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1672_onLoad_activeActionGroupIndex = -1;
		$("#obj1672").trigger("obj1672_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1672) {
				console.warn("de-queueing event obj1672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1672_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1672 
rotate_1719();
function rotate_1719() {
	window.obj1672_onLoad_runningActionsCount = obj1672_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1672";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1672';
	var transformOriginX = '45.1417%';
	var transformOriginY = '100%';
	var rotationToDegrees = '2';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1719_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1719_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1719_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1719_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1719_completed() {
	setTimeout(function() {
		window.obj1672_onLoad_runningActionsCount = window.obj1672_onLoad_runningActionsCount - 1;
if (window.obj1672_onLoad_runningActionsCount < 0) {
	window.obj1672_onLoad_runningActionsCount = 0;
} else if (window.obj1672_onLoad_runningActionsCount == 0) {
	obj1672_onLoad_actionGroup1();
}
	}, 1);
}














};
obj1672_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1672_onLoad_activeActionGroupIndex = -1;
		$("#obj1672").trigger("obj1672_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1672) {
				console.warn("de-queueing event obj1672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1672_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj1672 
rotate_1720();
function rotate_1720() {
	window.obj1672_onLoad_runningActionsCount = obj1672_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1672";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1672';
	var transformOriginX = '45.1417%';
	var transformOriginY = '100%';
	var rotationToDegrees = '-2';
	var rotationSpeed = 4;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1720_completed(); }
	//TweenMax.to(targetObjectId, 4, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1720_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1720_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1720_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1720_completed() {
	setTimeout(function() {
		window.obj1672_onLoad_runningActionsCount = window.obj1672_onLoad_runningActionsCount - 1;
if (window.obj1672_onLoad_runningActionsCount < 0) {
	window.obj1672_onLoad_runningActionsCount = 0;
} else if (window.obj1672_onLoad_runningActionsCount == 0) {
	obj1672_onLoad_actionGroup2();
}
	}, 1);
}














};
obj1672_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1672_onLoad_activeActionGroupIndex = -1;
		$("#obj1672").trigger("obj1672_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1672) {
				console.warn("de-queueing event obj1672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1672_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1672_onLoad();
function loop_obj1672_onLoad() {
	var loopCount = 0;
	window.obj1672_onLoad_loopCount = window.obj1672_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1672_onLoad_loopCount > loopCount) {
		window.obj1672_onLoad_loopCount = 0
		obj1672_onLoad_actionGroup3();
	} else {
		obj1672_onLoad_actionGroup0();
	}
}













};
obj1672_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1672_onLoad_activeActionGroupIndex = -1;
		$("#obj1672").trigger("obj1672_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1672) {
				console.warn("de-queueing event obj1672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1672_onLoad_activeActionGroupIndex = 3;
	





















};
obj1673_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1673_onTap_activeActionGroupIndex = -1;
		$("#obj1673").trigger("obj1673_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1673) {
				console.warn("de-queueing event obj1673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1673_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1673 
move_2915();
function move_2915() {
	window.obj1673_onTap_runningActionsCount = obj1673_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1673");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=5";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj1673_onTap_runningActionsCount = window.obj1673_onTap_runningActionsCount - 1;
if (window.obj1673_onTap_runningActionsCount < 0) {
	window.obj1673_onTap_runningActionsCount = 0;
} else if (window.obj1673_onTap_runningActionsCount == 0) {
	obj1673_onTap_actionGroup1();
}
		}, 1);
	});
}










//	action: playAudio
//	target: obj3172 
playAudio_3180();
function playAudio_3180() {
	window.obj1673_onTap_runningActionsCount = obj1673_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3172")[0];
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
		    window.obj1673_onTap_runningActionsCount = window.obj1673_onTap_runningActionsCount - 1;
if (window.obj1673_onTap_runningActionsCount < 0) {
	window.obj1673_onTap_runningActionsCount = 0;
} else if (window.obj1673_onTap_runningActionsCount == 0) {
	obj1673_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1673_onTap_runningActionsCount = window.obj1673_onTap_runningActionsCount - 1;
if (window.obj1673_onTap_runningActionsCount < 0) {
	window.obj1673_onTap_runningActionsCount = 0;
} else if (window.obj1673_onTap_runningActionsCount == 0) {
	obj1673_onTap_actionGroup1();
}
	}
}









};
obj1673_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1673_onTap_activeActionGroupIndex = -1;
		$("#obj1673").trigger("obj1673_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1673) {
				console.warn("de-queueing event obj1673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1673_onTap_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1673 
move_2916();
function move_2916() {
	window.obj1673_onTap_runningActionsCount = obj1673_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1673");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-5";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj1673_onTap_runningActionsCount = window.obj1673_onTap_runningActionsCount - 1;
if (window.obj1673_onTap_runningActionsCount < 0) {
	window.obj1673_onTap_runningActionsCount = 0;
} else if (window.obj1673_onTap_runningActionsCount == 0) {
	obj1673_onTap_actionGroup2();
}
		}, 1);
	});
}



















};
obj1673_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1673_onTap_activeActionGroupIndex = -1;
		$("#obj1673").trigger("obj1673_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1673) {
				console.warn("de-queueing event obj1673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1673_onTap_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1673_onTap();
function loop_obj1673_onTap() {
	var loopCount = 2;
	window.obj1673_onTap_loopCount = window.obj1673_onTap_loopCount + 1;
	if (loopCount != 0 && window.obj1673_onTap_loopCount > loopCount) {
		window.obj1673_onTap_loopCount = 0
		obj1673_onTap_actionGroup3();
	} else {
		obj1673_onTap_actionGroup0();
	}
}













};
obj1673_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1673_onTap_activeActionGroupIndex = -1;
		$("#obj1673").trigger("obj1673_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1673) {
				console.warn("de-queueing event obj1673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1673_onTap_activeActionGroupIndex = 3;
	





















};
obj1673_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1673_onLoad_activeActionGroupIndex = -1;
		$("#obj1673").trigger("obj1673_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1673) {
				console.warn("de-queueing event obj1673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1673_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1673 
scale_1725();
function scale_1725() {
	window.obj1673_onLoad_runningActionsCount = obj1673_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1673";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1673';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '0.99';
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
		scale_1725_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1725_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1725_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1725_completed() {
	setTimeout(function() {
		window.obj1673_onLoad_runningActionsCount = window.obj1673_onLoad_runningActionsCount - 1;
if (window.obj1673_onLoad_runningActionsCount < 0) {
	window.obj1673_onLoad_runningActionsCount = 0;
} else if (window.obj1673_onLoad_runningActionsCount == 0) {
	obj1673_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1673_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1673_onLoad_activeActionGroupIndex = -1;
		$("#obj1673").trigger("obj1673_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1673) {
				console.warn("de-queueing event obj1673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1673_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1673 
scale_1726();
function scale_1726() {
	window.obj1673_onLoad_runningActionsCount = obj1673_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1673";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1673';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '2.5';
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
		scale_1726_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1726_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1726_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1726_completed() {
	setTimeout(function() {
		window.obj1673_onLoad_runningActionsCount = window.obj1673_onLoad_runningActionsCount - 1;
if (window.obj1673_onLoad_runningActionsCount < 0) {
	window.obj1673_onLoad_runningActionsCount = 0;
} else if (window.obj1673_onLoad_runningActionsCount == 0) {
	obj1673_onLoad_actionGroup2();
}
	}, 1);
}












};
obj1673_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1673_onLoad_activeActionGroupIndex = -1;
		$("#obj1673").trigger("obj1673_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1673) {
				console.warn("de-queueing event obj1673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1673_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1673_onLoad();
function loop_obj1673_onLoad() {
	var loopCount = 0;
	window.obj1673_onLoad_loopCount = window.obj1673_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1673_onLoad_loopCount > loopCount) {
		window.obj1673_onLoad_loopCount = 0
		obj1673_onLoad_actionGroup3();
	} else {
		obj1673_onLoad_actionGroup0();
	}
}













};
obj1673_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1673_onLoad_activeActionGroupIndex = -1;
		$("#obj1673").trigger("obj1673_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1673) {
				console.warn("de-queueing event obj1673." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1673").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1673_onLoad_activeActionGroupIndex = 3;
	





















};
obj1674_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1674_onLoad_activeActionGroupIndex = -1;
		$("#obj1674").trigger("obj1674_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1674) {
				console.warn("de-queueing event obj1674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1674_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1674 
rotate_1697();
function rotate_1697() {
	window.obj1674_onLoad_runningActionsCount = obj1674_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1674";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1674';
	var transformOriginX = '45.1417%';
	var transformOriginY = '100%';
	var rotationToDegrees = '-2';
	var rotationSpeed = 4;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1697_completed(); }
	//TweenMax.to(targetObjectId, 4, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1697_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1697_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1697_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1697_completed() {
	setTimeout(function() {
		window.obj1674_onLoad_runningActionsCount = window.obj1674_onLoad_runningActionsCount - 1;
if (window.obj1674_onLoad_runningActionsCount < 0) {
	window.obj1674_onLoad_runningActionsCount = 0;
} else if (window.obj1674_onLoad_runningActionsCount == 0) {
	obj1674_onLoad_actionGroup1();
}
	}, 1);
}














};
obj1674_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1674_onLoad_activeActionGroupIndex = -1;
		$("#obj1674").trigger("obj1674_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1674) {
				console.warn("de-queueing event obj1674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1674_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj1674 
rotate_1698();
function rotate_1698() {
	window.obj1674_onLoad_runningActionsCount = obj1674_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1674";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1674';
	var transformOriginX = '45.1417%';
	var transformOriginY = '100%';
	var rotationToDegrees = '2';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1698_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1698_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1698_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1698_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1698_completed() {
	setTimeout(function() {
		window.obj1674_onLoad_runningActionsCount = window.obj1674_onLoad_runningActionsCount - 1;
if (window.obj1674_onLoad_runningActionsCount < 0) {
	window.obj1674_onLoad_runningActionsCount = 0;
} else if (window.obj1674_onLoad_runningActionsCount == 0) {
	obj1674_onLoad_actionGroup2();
}
	}, 1);
}














};
obj1674_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1674_onLoad_activeActionGroupIndex = -1;
		$("#obj1674").trigger("obj1674_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1674) {
				console.warn("de-queueing event obj1674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1674_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1674_onLoad();
function loop_obj1674_onLoad() {
	var loopCount = 0;
	window.obj1674_onLoad_loopCount = window.obj1674_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1674_onLoad_loopCount > loopCount) {
		window.obj1674_onLoad_loopCount = 0
		obj1674_onLoad_actionGroup3();
	} else {
		obj1674_onLoad_actionGroup0();
	}
}













};
obj1674_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1674_onLoad_activeActionGroupIndex = -1;
		$("#obj1674").trigger("obj1674_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1674) {
				console.warn("de-queueing event obj1674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1674_onLoad_activeActionGroupIndex = 3;
	





















};
obj1668_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1668_onTap_activeActionGroupIndex = -1;
		$("#obj1668").trigger("obj1668_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1668) {
				console.warn("de-queueing event obj1668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1668_onTap_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1668 
move_2912();
function move_2912() {
	window.obj1668_onTap_runningActionsCount = obj1668_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1668");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=5";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj1668_onTap_runningActionsCount = window.obj1668_onTap_runningActionsCount - 1;
if (window.obj1668_onTap_runningActionsCount < 0) {
	window.obj1668_onTap_runningActionsCount = 0;
} else if (window.obj1668_onTap_runningActionsCount == 0) {
	obj1668_onTap_actionGroup1();
}
		}, 1);
	});
}










//	action: playAudio
//	target: obj3172 
playAudio_3179();
function playAudio_3179() {
	window.obj1668_onTap_runningActionsCount = obj1668_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3172")[0];
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
		    window.obj1668_onTap_runningActionsCount = window.obj1668_onTap_runningActionsCount - 1;
if (window.obj1668_onTap_runningActionsCount < 0) {
	window.obj1668_onTap_runningActionsCount = 0;
} else if (window.obj1668_onTap_runningActionsCount == 0) {
	obj1668_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1668_onTap_runningActionsCount = window.obj1668_onTap_runningActionsCount - 1;
if (window.obj1668_onTap_runningActionsCount < 0) {
	window.obj1668_onTap_runningActionsCount = 0;
} else if (window.obj1668_onTap_runningActionsCount == 0) {
	obj1668_onTap_actionGroup1();
}
	}
}









};
obj1668_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1668_onTap_activeActionGroupIndex = -1;
		$("#obj1668").trigger("obj1668_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1668) {
				console.warn("de-queueing event obj1668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1668_onTap_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1668 
move_2913();
function move_2913() {
	window.obj1668_onTap_runningActionsCount = obj1668_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1668");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-5";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 100, easing, function() {
		setTimeout(function() {
			window.obj1668_onTap_runningActionsCount = window.obj1668_onTap_runningActionsCount - 1;
if (window.obj1668_onTap_runningActionsCount < 0) {
	window.obj1668_onTap_runningActionsCount = 0;
} else if (window.obj1668_onTap_runningActionsCount == 0) {
	obj1668_onTap_actionGroup2();
}
		}, 1);
	});
}



















};
obj1668_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1668_onTap_activeActionGroupIndex = -1;
		$("#obj1668").trigger("obj1668_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1668) {
				console.warn("de-queueing event obj1668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1668_onTap_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1668_onTap();
function loop_obj1668_onTap() {
	var loopCount = 2;
	window.obj1668_onTap_loopCount = window.obj1668_onTap_loopCount + 1;
	if (loopCount != 0 && window.obj1668_onTap_loopCount > loopCount) {
		window.obj1668_onTap_loopCount = 0
		obj1668_onTap_actionGroup3();
	} else {
		obj1668_onTap_actionGroup0();
	}
}













};
obj1668_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1668_onTap_activeActionGroupIndex = -1;
		$("#obj1668").trigger("obj1668_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1668) {
				console.warn("de-queueing event obj1668." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1668").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1668_onTap_activeActionGroupIndex = 3;
	





















};
obj2654_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2654_onLoad_activeActionGroupIndex = -1;
		$("#obj2654").trigger("obj2654_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2654) {
				console.warn("de-queueing event obj2654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2654_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2654 
rotate_2661();
function rotate_2661() {
	window.obj2654_onLoad_runningActionsCount = obj2654_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2654";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2654';
	var transformOriginX = '59.67742%';
	var transformOriginY = '0%';
	var rotationToDegrees = '-16.36326';
	var rotationSpeed = 0.3;
	var rotationEasing = 'linear';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = true;
	if (isInfinite) { rotate_2661_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_2661_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2661_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2661_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2661_completed() {
	setTimeout(function() {
		window.obj2654_onLoad_runningActionsCount = window.obj2654_onLoad_runningActionsCount - 1;
if (window.obj2654_onLoad_runningActionsCount < 0) {
	window.obj2654_onLoad_runningActionsCount = 0;
} else if (window.obj2654_onLoad_runningActionsCount == 0) {
	obj2654_onLoad_actionGroup1();
}
	}, 1);
}














};
obj2654_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2654_onLoad_activeActionGroupIndex = -1;
		$("#obj2654").trigger("obj2654_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2654) {
				console.warn("de-queueing event obj2654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2654_onLoad_activeActionGroupIndex = 1;
	





















};
obj2704_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2704_onLoad_activeActionGroupIndex = -1;
		$("#obj2704").trigger("obj2704_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2704) {
				console.warn("de-queueing event obj2704." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2704").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2704_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2704 
rotate_2709();
function rotate_2709() {
	window.obj2704_onLoad_runningActionsCount = obj2704_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2704";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2704';
	var transformOriginX = '47.00855%';
	var transformOriginY = '50.77519%';
	var rotationToDegrees = '206.7072';
	var rotationSpeed = 0.6;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = true;
	if (isInfinite) { rotate_2709_completed(); }
	//TweenMax.to(targetObjectId, 0.6, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_2709_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2709_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2709_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2709_completed() {
	setTimeout(function() {
		window.obj2704_onLoad_runningActionsCount = window.obj2704_onLoad_runningActionsCount - 1;
if (window.obj2704_onLoad_runningActionsCount < 0) {
	window.obj2704_onLoad_runningActionsCount = 0;
} else if (window.obj2704_onLoad_runningActionsCount == 0) {
	obj2704_onLoad_actionGroup1();
}
	}, 1);
}














};
obj2704_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2704_onLoad_activeActionGroupIndex = -1;
		$("#obj2704").trigger("obj2704_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2704) {
				console.warn("de-queueing event obj2704." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2704").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2704_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj2704 
rotate_2710();
function rotate_2710() {
	window.obj2704_onLoad_runningActionsCount = obj2704_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2704";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2704';
	var transformOriginX = '47.00855%';
	var transformOriginY = '50.77519%';
	var rotationToDegrees = '-100';
	var rotationSpeed = 0.3;
	var rotationEasing = 'ease';
	var rotationRepeat = -1;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = true;
	if (isInfinite) { rotate_2710_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_2710_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2710_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2710_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2710_completed() {
	setTimeout(function() {
		window.obj2704_onLoad_runningActionsCount = window.obj2704_onLoad_runningActionsCount - 1;
if (window.obj2704_onLoad_runningActionsCount < 0) {
	window.obj2704_onLoad_runningActionsCount = 0;
} else if (window.obj2704_onLoad_runningActionsCount == 0) {
	obj2704_onLoad_actionGroup2();
}
	}, 1);
}














};
obj2704_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2704_onLoad_activeActionGroupIndex = -1;
		$("#obj2704").trigger("obj2704_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2704) {
				console.warn("de-queueing event obj2704." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2704").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2704_onLoad_activeActionGroupIndex = 2;
	





















};
obj1650_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1650_onLoad_activeActionGroupIndex = -1;
		$("#obj1650").trigger("obj1650_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1650) {
				console.warn("de-queueing event obj1650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1650_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1650 
hide_1653();
function hide_1653() {
	var selector = "#obj1650";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1650_onLoad_runningActionsCount = obj1650_onLoad_runningActionsCount + 1;
	
	var animationType = "slideOutLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1650_onLoad_runningActionsCount = window.obj1650_onLoad_runningActionsCount - 1;
if (window.obj1650_onLoad_runningActionsCount < 0) {
	window.obj1650_onLoad_runningActionsCount = 0;
} else if (window.obj1650_onLoad_runningActionsCount == 0) {
	obj1650_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1653(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1650_onLoad_runningActionsCount = window.obj1650_onLoad_runningActionsCount - 1;
if (window.obj1650_onLoad_runningActionsCount < 0) {
	window.obj1650_onLoad_runningActionsCount = 0;
} else if (window.obj1650_onLoad_runningActionsCount == 0) {
	obj1650_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj1650_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1650_onLoad_activeActionGroupIndex = -1;
		$("#obj1650").trigger("obj1650_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1650) {
				console.warn("de-queueing event obj1650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1650_onLoad_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1654();
function runjs_1654() {
	window.obj1650_onLoad_runningActionsCount = obj1650_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj1650"));
	
	setTimeout(function() {
		window.obj1650_onLoad_runningActionsCount = window.obj1650_onLoad_runningActionsCount - 1;
if (window.obj1650_onLoad_runningActionsCount < 0) {
	window.obj1650_onLoad_runningActionsCount = 0;
} else if (window.obj1650_onLoad_runningActionsCount == 0) {
	obj1650_onLoad_actionGroup2();
}
	}, 1);
}







};
obj1650_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1650_onLoad_activeActionGroupIndex = -1;
		$("#obj1650").trigger("obj1650_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1650) {
				console.warn("de-queueing event obj1650." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1650").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1650_onLoad_activeActionGroupIndex = 2;
	





















};
obj1661_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1661_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1661").trigger("obj1661_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1661) {
				console.warn("de-queueing event obj1661." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1661").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1661_SCEventRun_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1663();
function runjs_1663() {
	window.obj1661_SCEventRun_runningActionsCount = obj1661_SCEventRun_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1650"));
	
	setTimeout(function() {
		window.obj1661_SCEventRun_runningActionsCount = window.obj1661_SCEventRun_runningActionsCount - 1;
if (window.obj1661_SCEventRun_runningActionsCount < 0) {
	window.obj1661_SCEventRun_runningActionsCount = 0;
} else if (window.obj1661_SCEventRun_runningActionsCount == 0) {
	obj1661_SCEventRun_actionGroup1();
}
	}, 1);
}







};
obj1661_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1661_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1661").trigger("obj1661_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1661) {
				console.warn("de-queueing event obj1661." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1661").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1661_SCEventRun_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj1650
(function(){
	window.obj1661_SCEventRun_runningActionsCount = obj1661_SCEventRun_runningActionsCount + 1;

	var selector = "#obj1650";
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
					window.obj1661_SCEventRun_runningActionsCount = window.obj1661_SCEventRun_runningActionsCount - 1;
if (window.obj1661_SCEventRun_runningActionsCount < 0) {
	window.obj1661_SCEventRun_runningActionsCount = 0;
} else if (window.obj1661_SCEventRun_runningActionsCount == 0) {
	obj1661_SCEventRun_actionGroup2();
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
				window.obj1661_SCEventRun_runningActionsCount = window.obj1661_SCEventRun_runningActionsCount - 1;
if (window.obj1661_SCEventRun_runningActionsCount < 0) {
	window.obj1661_SCEventRun_runningActionsCount = 0;
} else if (window.obj1661_SCEventRun_runningActionsCount == 0) {
	obj1661_SCEventRun_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj1661_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1661_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1661").trigger("obj1661_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1661) {
				console.warn("de-queueing event obj1661." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1661").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1661_SCEventRun_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_1665();
function goToPage_1665() {
	window.obj1661_SCEventRun_runningActionsCount = obj1661_SCEventRun_runningActionsCount + 1;
	$("#anchor61")[0].click();
	window.obj1661_SCEventRun_runningActionsCount = window.obj1661_SCEventRun_runningActionsCount - 1;
if (window.obj1661_SCEventRun_runningActionsCount < 0) {
	window.obj1661_SCEventRun_runningActionsCount = 0;
} else if (window.obj1661_SCEventRun_runningActionsCount == 0) {
	obj1661_SCEventRun_actionGroup3();
}
}





















};
obj1661_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1661_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1661").trigger("obj1661_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1661) {
				console.warn("de-queueing event obj1661." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1661").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1661_SCEventRun_activeActionGroupIndex = 3;
	





















};
obj1732_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1732_onTap_activeActionGroupIndex = -1;
		$("#obj1732").trigger("obj1732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1732) {
				console.warn("de-queueing event obj1732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1732_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1646 
hide_2825();
function hide_2825() {
	var selector = "#obj1646";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2825(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2637
(function(){
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;

	var selector = "#obj2637";
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
					window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup1();
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
				window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj1732 
move_2821();
function move_2821() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1732");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-393";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1728 
move_2822();
function move_2822() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj1728");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=62";
	var moveY = "+=-68";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 600, easing, function() {
		setTimeout(function() {
			window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj1728 
rotate_2823();
function rotate_2823() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj1728";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1728';
	var transformOriginX = '53.71429%';
	var transformOriginY = '53.6036%';
	var rotationToDegrees = '6';
	var rotationSpeed = 0.6;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2823_completed(); }
	//TweenMax.to(targetObjectId, 0.6, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2823_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2823_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2823_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2823_completed() {
	setTimeout(function() {
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup1();
}
	}, 1);
}


//	action: scale
//	target: obj1728 
scale_2824();
function scale_2824() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj1728";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1728';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
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
		scale_2824_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2824_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2824_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2824_completed() {
	setTimeout(function() {
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj3172 
playAudio_3176();
function playAudio_3176() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3172")[0];
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
		    window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup1();
}
	}
}









};
obj1732_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1732_onTap_activeActionGroupIndex = -1;
		$("#obj1732").trigger("obj1732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1732) {
				console.warn("de-queueing event obj1732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1732_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2827();
function runjs_2827() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj1728"));
	
	setTimeout(function() {
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup2();
}
	}, 1);
}







};
obj1732_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1732_onTap_activeActionGroupIndex = -1;
		$("#obj1732").trigger("obj1732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1732) {
				console.warn("de-queueing event obj1732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1732_onTap_activeActionGroupIndex = 2;
	








//	action: wait
wait_2828();
function wait_2828() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup3();
}
	}, 500);
}













};
obj1732_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1732_onTap_activeActionGroupIndex = -1;
		$("#obj1732").trigger("obj1732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1732) {
				console.warn("de-queueing event obj1732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1732_onTap_activeActionGroupIndex = 3;
	


















//	action: run action list container
//	target: obj2640 
runActionList_2829();
function runActionList_2829() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	$("#obj2640").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup4();
}		
	}, 1);
}



};
obj1732_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1732_onTap_activeActionGroupIndex = -1;
		$("#obj1732").trigger("obj1732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1732) {
				console.warn("de-queueing event obj1732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1732_onTap_activeActionGroupIndex = 4;
	








//	action: wait
wait_2830();
function wait_2830() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup5();
}
	}, 300);
}













};
obj1732_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1732_onTap_activeActionGroupIndex = -1;
		$("#obj1732").trigger("obj1732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1732) {
				console.warn("de-queueing event obj1732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1732_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj1732 
hide_2832();
function hide_2832() {
	var selector = "#obj1732";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup6();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2832(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup6();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj1728 
hide_2833();
function hide_2833() {
	var selector = "#obj1728";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup6();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2833(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup6();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2819
(function(){
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;

	var selector = "#obj2819";
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
	
		var animationType = "slideInUp";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup6();
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
				window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2814
(function(){
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;

	var selector = "#obj2814";
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
					window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup6();
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
				window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2813
(function(){
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;

	var selector = "#obj2813";
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
					window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup6();
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
				window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj3204 
playAudio_3206();
function playAudio_3206() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3204")[0];
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
		    window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup6();
}
	}
}









};
obj1732_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1732_onTap_activeActionGroupIndex = -1;
		$("#obj1732").trigger("obj1732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1732) {
				console.warn("de-queueing event obj1732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1732_onTap_activeActionGroupIndex = 6;
	








//	action: wait
wait_2837();
function wait_2837() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup7();
}
	}, 1000);
}













};
obj1732_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1732_onTap_activeActionGroupIndex = -1;
		$("#obj1732").trigger("obj1732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1732) {
				console.warn("de-queueing event obj1732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1732_onTap_activeActionGroupIndex = 7;
	


















//	action: run action list container
//	target: obj2891 
runActionList_2897();
function runActionList_2897() {
	window.obj1732_onTap_runningActionsCount = obj1732_onTap_runningActionsCount + 1;
	$("#obj2891").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1732_onTap_runningActionsCount = window.obj1732_onTap_runningActionsCount - 1;
if (window.obj1732_onTap_runningActionsCount < 0) {
	window.obj1732_onTap_runningActionsCount = 0;
} else if (window.obj1732_onTap_runningActionsCount == 0) {
	obj1732_onTap_actionGroup8();
}		
	}, 1);
}



};
obj1732_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1732_onTap_activeActionGroupIndex = -1;
		$("#obj1732").trigger("obj1732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1732) {
				console.warn("de-queueing event obj1732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1732_onTap_activeActionGroupIndex = 8;
	





















};
obj2615_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2615_onTap_activeActionGroupIndex = -1;
		$("#obj2615").trigger("obj2615_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2615) {
				console.warn("de-queueing event obj2615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2615_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1646 
hide_2673();
function hide_2673() {
	var selector = "#obj1646";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2673(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2637
(function(){
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;

	var selector = "#obj2637";
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
					window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup1();
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
				window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2615 
move_2617();
function move_2617() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2615");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-393";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2613 
move_2618();
function move_2618() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2613");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=23";
	var moveY = "+=-95";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 600, easing, function() {
		setTimeout(function() {
			window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2613 
rotate_2619();
function rotate_2619() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2613";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2613';
	var transformOriginX = '53.71429%';
	var transformOriginY = '53.6036%';
	var rotationToDegrees = '6';
	var rotationSpeed = 0.6;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2619_completed(); }
	//TweenMax.to(targetObjectId, 0.6, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2619_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2619_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2619_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2619_completed() {
	setTimeout(function() {
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup1();
}
	}, 1);
}


//	action: scale
//	target: obj2613 
scale_2672();
function scale_2672() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2613";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2613';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
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
		scale_2672_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2672_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2672_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2672_completed() {
	setTimeout(function() {
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj3172 
playAudio_3175();
function playAudio_3175() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3172")[0];
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
		    window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup1();
}
	}
}









};
obj2615_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2615_onTap_activeActionGroupIndex = -1;
		$("#obj2615").trigger("obj2615_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2615) {
				console.warn("de-queueing event obj2615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2615_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2620();
function runjs_2620() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj2613"));
	
	setTimeout(function() {
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup2();
}
	}, 1);
}







};
obj2615_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2615_onTap_activeActionGroupIndex = -1;
		$("#obj2615").trigger("obj2615_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2615) {
				console.warn("de-queueing event obj2615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2615_onTap_activeActionGroupIndex = 2;
	








//	action: wait
wait_2662();
function wait_2662() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup3();
}
	}, 500);
}













};
obj2615_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2615_onTap_activeActionGroupIndex = -1;
		$("#obj2615").trigger("obj2615_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2615) {
				console.warn("de-queueing event obj2615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2615_onTap_activeActionGroupIndex = 3;
	


















//	action: run action list container
//	target: obj2640 
runActionList_2650();
function runActionList_2650() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	$("#obj2640").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup4();
}		
	}, 1);
}



};
obj2615_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2615_onTap_activeActionGroupIndex = -1;
		$("#obj2615").trigger("obj2615_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2615) {
				console.warn("de-queueing event obj2615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2615_onTap_activeActionGroupIndex = 4;
	








//	action: wait
wait_2663();
function wait_2663() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup5();
}
	}, 300);
}













};
obj2615_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2615_onTap_activeActionGroupIndex = -1;
		$("#obj2615").trigger("obj2615_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2615) {
				console.warn("de-queueing event obj2615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2615_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj2615 
hide_2664();
function hide_2664() {
	var selector = "#obj2615";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2664(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2613 
hide_2665();
function hide_2665() {
	var selector = "#obj2613";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2665(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2674
(function(){
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;

	var selector = "#obj2674";
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
	
		var animationType = "slideInUp";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
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
				window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2653
(function(){
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;

	var selector = "#obj2653";
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
					window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
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
				window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2652
(function(){
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;

	var selector = "#obj2652";
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
					window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
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
				window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2654
(function(){
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;

	var selector = "#obj2654";
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
					window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
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
				window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj2918 
playAudio_2922();
function playAudio_2922() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	var myAudio = $("#obj2918")[0];
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
		    window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup6();
}
	}
}









};
obj2615_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2615_onTap_activeActionGroupIndex = -1;
		$("#obj2615").trigger("obj2615_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2615) {
				console.warn("de-queueing event obj2615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2615_onTap_activeActionGroupIndex = 6;
	








//	action: wait
wait_2668();
function wait_2668() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup7();
}
	}, 2000);
}













};
obj2615_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2615_onTap_activeActionGroupIndex = -1;
		$("#obj2615").trigger("obj2615_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2615) {
				console.warn("de-queueing event obj2615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2615_onTap_activeActionGroupIndex = 7;
	
















//	action: increment counter
//	target: obj2629 
incrementCounter_2631();
function incrementCounter_2631() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;

	var oldValue = obj2629_counterValue;
	obj2629_counterValue = obj2629_counterValue + 1;
	if (! obj2629_counterCanExceedTargetValue && obj2629_counterValue > obj2629_counterTargetValue) {
		obj2629_counterValue = obj2629_counterTargetValue;
	}
	if (oldValue != obj2629_counterValue) {
		$("#obj2629").trigger('SCEventCounterValueChange');
		$("#obj2629").trigger('SCEventCounterIncrease');
		if (obj2629_counterValue == obj2629_counterTargetValue)
			$("#obj2629").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup8();
} }, 1);
}
//	action: increment counter
//	target: obj2627 
incrementCounter_2634();
function incrementCounter_2634() {
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;

	var oldValue = obj2627_counterValue;
	obj2627_counterValue = obj2627_counterValue + 1;
	if (! obj2627_counterCanExceedTargetValue && obj2627_counterValue > obj2627_counterTargetValue) {
		obj2627_counterValue = obj2627_counterTargetValue;
	}
	if (oldValue != obj2627_counterValue) {
		$("#obj2627").trigger('SCEventCounterValueChange');
		$("#obj2627").trigger('SCEventCounterIncrease');
		if (obj2627_counterValue == obj2627_counterTargetValue)
			$("#obj2627").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup8();
} }, 1);
}





};
obj2615_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2615_onTap_activeActionGroupIndex = -1;
		$("#obj2615").trigger("obj2615_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2615) {
				console.warn("de-queueing event obj2615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2615_onTap_activeActionGroupIndex = 8;
	

//	action: hide
//	selector: obj#obj2653 
hide_2669();
function hide_2669() {
	var selector = "#obj2653";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup9();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2669(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup9();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2652 
hide_2670();
function hide_2670() {
	var selector = "#obj2652";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup9();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2670(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup9();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2654 
hide_2671();
function hide_2671() {
	var selector = "#obj2654";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup9();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2671(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup9();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2674 
hide_2677();
function hide_2677() {
	var selector = "#obj2674";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup9();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2677(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup9();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2637 
hide_2805();
function hide_2805() {
	var selector = "#obj2637";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2615_onTap_runningActionsCount = obj2615_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup9();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2805(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2615_onTap_runningActionsCount = window.obj2615_onTap_runningActionsCount - 1;
if (window.obj2615_onTap_runningActionsCount < 0) {
	window.obj2615_onTap_runningActionsCount = 0;
} else if (window.obj2615_onTap_runningActionsCount == 0) {
	obj2615_onTap_actionGroup9();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2615_onTap_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2615_onTap_activeActionGroupIndex = -1;
		$("#obj2615").trigger("obj2615_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2615) {
				console.warn("de-queueing event obj2615." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2615").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2615_onTap_activeActionGroupIndex = 9;
	





















};
obj2621_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2621_onTap_activeActionGroupIndex = -1;
		$("#obj2621").trigger("obj2621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2621) {
				console.warn("de-queueing event obj2621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2621_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1646 
hide_2684();
function hide_2684() {
	var selector = "#obj1646";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2684(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2637
(function(){
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;

	var selector = "#obj2637";
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
					window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup1();
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
				window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: move
//	target: obj2621 
move_2680();
function move_2680() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2621");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-393";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj2611 
move_2681();
function move_2681() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj2611");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=21";
	var moveY = "+=-137";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 600, easing, function() {
		setTimeout(function() {
			window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2611 
rotate_2682();
function rotate_2682() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2611";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2611';
	var transformOriginX = '53.71429%';
	var transformOriginY = '53.6036%';
	var rotationToDegrees = '6';
	var rotationSpeed = 0.6;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2682_completed(); }
	//TweenMax.to(targetObjectId, 0.6, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2682_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2682_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2682_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2682_completed() {
	setTimeout(function() {
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup1();
}
	}, 1);
}


//	action: scale
//	target: obj2611 
scale_2683();
function scale_2683() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2611";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2611';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
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
		scale_2683_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2683_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2683_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2683_completed() {
	setTimeout(function() {
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj3172 
playAudio_3174();
function playAudio_3174() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3172")[0];
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
		    window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup1();
}
	}
}









};
obj2621_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2621_onTap_activeActionGroupIndex = -1;
		$("#obj2621").trigger("obj2621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2621) {
				console.warn("de-queueing event obj2621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2621_onTap_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2685();
function runjs_2685() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectForward($("#obj2611"));
	
	setTimeout(function() {
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup2();
}
	}, 1);
}







};
obj2621_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2621_onTap_activeActionGroupIndex = -1;
		$("#obj2621").trigger("obj2621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2621) {
				console.warn("de-queueing event obj2621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2621_onTap_activeActionGroupIndex = 2;
	








//	action: wait
wait_2688();
function wait_2688() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup3();
}
	}, 500);
}













};
obj2621_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2621_onTap_activeActionGroupIndex = -1;
		$("#obj2621").trigger("obj2621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2621) {
				console.warn("de-queueing event obj2621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2621_onTap_activeActionGroupIndex = 3;
	


















//	action: run action list container
//	target: obj2640 
runActionList_2689();
function runActionList_2689() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	$("#obj2640").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup4();
}		
	}, 1);
}



};
obj2621_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2621_onTap_activeActionGroupIndex = -1;
		$("#obj2621").trigger("obj2621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2621) {
				console.warn("de-queueing event obj2621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2621_onTap_activeActionGroupIndex = 4;
	








//	action: wait
wait_2690();
function wait_2690() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup5();
}
	}, 300);
}













};
obj2621_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2621_onTap_activeActionGroupIndex = -1;
		$("#obj2621").trigger("obj2621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2621) {
				console.warn("de-queueing event obj2621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2621_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj2621 
hide_2692();
function hide_2692() {
	var selector = "#obj2621";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2692(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2611 
hide_2693();
function hide_2693() {
	var selector = "#obj2611";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2693(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj2678
(function(){
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;

	var selector = "#obj2678";
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
	
		var animationType = "slideInUp";
		var animationDurationMs = 1000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
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
				window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2704
(function(){
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;

	var selector = "#obj2704";
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
					window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
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
				window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2703
(function(){
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;

	var selector = "#obj2703";
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
					window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
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
				window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2702
(function(){
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;

	var selector = "#obj2702";
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
					window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
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
				window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj2918 
playAudio_2920();
function playAudio_2920() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	var myAudio = $("#obj2918")[0];
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
		    window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup6();
}
	}
}









};
obj2621_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2621_onTap_activeActionGroupIndex = -1;
		$("#obj2621").trigger("obj2621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2621) {
				console.warn("de-queueing event obj2621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2621_onTap_activeActionGroupIndex = 6;
	








//	action: wait
wait_2697();
function wait_2697() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup7();
}
	}, 2000);
}













};
obj2621_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2621_onTap_activeActionGroupIndex = -1;
		$("#obj2621").trigger("obj2621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2621) {
				console.warn("de-queueing event obj2621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2621_onTap_activeActionGroupIndex = 7;
	
















//	action: increment counter
//	target: obj2629 
incrementCounter_2686();
function incrementCounter_2686() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;

	var oldValue = obj2629_counterValue;
	obj2629_counterValue = obj2629_counterValue + 1;
	if (! obj2629_counterCanExceedTargetValue && obj2629_counterValue > obj2629_counterTargetValue) {
		obj2629_counterValue = obj2629_counterTargetValue;
	}
	if (oldValue != obj2629_counterValue) {
		$("#obj2629").trigger('SCEventCounterValueChange');
		$("#obj2629").trigger('SCEventCounterIncrease');
		if (obj2629_counterValue == obj2629_counterTargetValue)
			$("#obj2629").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup8();
} }, 1);
}
//	action: increment counter
//	target: obj2627 
incrementCounter_2687();
function incrementCounter_2687() {
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;

	var oldValue = obj2627_counterValue;
	obj2627_counterValue = obj2627_counterValue + 1;
	if (! obj2627_counterCanExceedTargetValue && obj2627_counterValue > obj2627_counterTargetValue) {
		obj2627_counterValue = obj2627_counterTargetValue;
	}
	if (oldValue != obj2627_counterValue) {
		$("#obj2627").trigger('SCEventCounterValueChange');
		$("#obj2627").trigger('SCEventCounterIncrease');
		if (obj2627_counterValue == obj2627_counterTargetValue)
			$("#obj2627").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup8();
} }, 1);
}





};
obj2621_onTap_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2621_onTap_activeActionGroupIndex = -1;
		$("#obj2621").trigger("obj2621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2621) {
				console.warn("de-queueing event obj2621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2621_onTap_activeActionGroupIndex = 8;
	

//	action: hide
//	selector: obj#obj2704 
hide_2698();
function hide_2698() {
	var selector = "#obj2704";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup9();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2698(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup9();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2703 
hide_2699();
function hide_2699() {
	var selector = "#obj2703";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup9();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2699(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup9();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2702 
hide_2700();
function hide_2700() {
	var selector = "#obj2702";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup9();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2700(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup9();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2678 
hide_2701();
function hide_2701() {
	var selector = "#obj2678";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup9();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2701(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup9();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2637 
hide_2807();
function hide_2807() {
	var selector = "#obj2637";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2621_onTap_runningActionsCount = obj2621_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup9();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2807(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2621_onTap_runningActionsCount = window.obj2621_onTap_runningActionsCount - 1;
if (window.obj2621_onTap_runningActionsCount < 0) {
	window.obj2621_onTap_runningActionsCount = 0;
} else if (window.obj2621_onTap_runningActionsCount == 0) {
	obj2621_onTap_actionGroup9();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2621_onTap_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2621_onTap_activeActionGroupIndex = -1;
		$("#obj2621").trigger("obj2621_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2621) {
				console.warn("de-queueing event obj2621." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2621").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2621_onTap_activeActionGroupIndex = 9;
	





















};
obj2637_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2637_onTap_activeActionGroupIndex = -1;
		$("#obj2637").trigger("obj2637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2637) {
				console.warn("de-queueing event obj2637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2637_onTap_activeActionGroupIndex = 0;
	








//	action: wait
wait_2639();
function wait_2639() {
	window.obj2637_onTap_runningActionsCount = obj2637_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2637_onTap_runningActionsCount = window.obj2637_onTap_runningActionsCount - 1;
if (window.obj2637_onTap_runningActionsCount < 0) {
	window.obj2637_onTap_runningActionsCount = 0;
} else if (window.obj2637_onTap_runningActionsCount == 0) {
	obj2637_onTap_actionGroup1();
}
	}, 100);
}













};
obj2637_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2637_onTap_activeActionGroupIndex = -1;
		$("#obj2637").trigger("obj2637_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2637) {
				console.warn("de-queueing event obj2637." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2637").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2637_onTap_activeActionGroupIndex = 1;
	





















};
obj2627_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2627_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2627").trigger("obj2627_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2627) {
				console.warn("de-queueing event obj2627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2627_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	


















//	action: run action list container
//	target: obj1661 
runActionList_2713();
function runActionList_2713() {
	window.obj2627_SCEventCounterReachedTargetValue_runningActionsCount = obj2627_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	$("#obj1661").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2627_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2627_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2627_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2627_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2627_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2627_SCEventCounterReachedTargetValue_actionGroup1();
}		
	}, 1);
}



};
obj2627_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2627_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2627").trigger("obj2627_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2627) {
				console.warn("de-queueing event obj2627." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2627").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2627_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	





















};
obj2640_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2640_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2640").trigger("obj2640_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2640) {
				console.warn("de-queueing event obj2640." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2640").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2640_SCEventRun_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj2635 
scale_2642();
function scale_2642() {
	window.obj2640_SCEventRun_runningActionsCount = obj2640_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj2635";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2635';
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
		scale_2642_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2642_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2642_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2642_completed() {
	setTimeout(function() {
		window.obj2640_SCEventRun_runningActionsCount = window.obj2640_SCEventRun_runningActionsCount - 1;
if (window.obj2640_SCEventRun_runningActionsCount < 0) {
	window.obj2640_SCEventRun_runningActionsCount = 0;
} else if (window.obj2640_SCEventRun_runningActionsCount == 0) {
	obj2640_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj2640_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2640_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2640").trigger("obj2640_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2640) {
				console.warn("de-queueing event obj2640." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2640").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2640_SCEventRun_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj2635
(function(){
	window.obj2640_SCEventRun_runningActionsCount = obj2640_SCEventRun_runningActionsCount + 1;

	var selector = "#obj2635";
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
					window.obj2640_SCEventRun_runningActionsCount = window.obj2640_SCEventRun_runningActionsCount - 1;
if (window.obj2640_SCEventRun_runningActionsCount < 0) {
	window.obj2640_SCEventRun_runningActionsCount = 0;
} else if (window.obj2640_SCEventRun_runningActionsCount == 0) {
	obj2640_SCEventRun_actionGroup2();
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
				window.obj2640_SCEventRun_runningActionsCount = window.obj2640_SCEventRun_runningActionsCount - 1;
if (window.obj2640_SCEventRun_runningActionsCount < 0) {
	window.obj2640_SCEventRun_runningActionsCount = 0;
} else if (window.obj2640_SCEventRun_runningActionsCount == 0) {
	obj2640_SCEventRun_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2640_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2640_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2640").trigger("obj2640_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2640) {
				console.warn("de-queueing event obj2640." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2640").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2640_SCEventRun_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj2635 
scale_2644();
function scale_2644() {
	window.obj2640_SCEventRun_runningActionsCount = obj2640_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj2635";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2635';
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
		scale_2644_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2644_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2644_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2644_completed() {
	setTimeout(function() {
		window.obj2640_SCEventRun_runningActionsCount = window.obj2640_SCEventRun_runningActionsCount - 1;
if (window.obj2640_SCEventRun_runningActionsCount < 0) {
	window.obj2640_SCEventRun_runningActionsCount = 0;
} else if (window.obj2640_SCEventRun_runningActionsCount == 0) {
	obj2640_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj2640_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2640_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2640").trigger("obj2640_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2640) {
				console.warn("de-queueing event obj2640." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2640").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2640_SCEventRun_activeActionGroupIndex = 3;
	








//	action: wait
wait_2667();
function wait_2667() {
	window.obj2640_SCEventRun_runningActionsCount = obj2640_SCEventRun_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2640_SCEventRun_runningActionsCount = window.obj2640_SCEventRun_runningActionsCount - 1;
if (window.obj2640_SCEventRun_runningActionsCount < 0) {
	window.obj2640_SCEventRun_runningActionsCount = 0;
} else if (window.obj2640_SCEventRun_runningActionsCount == 0) {
	obj2640_SCEventRun_actionGroup4();
}
	}, 3000);
}













};
obj2640_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2640_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2640").trigger("obj2640_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2640) {
				console.warn("de-queueing event obj2640." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2640").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2640_SCEventRun_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj2635 
hide_2666();
function hide_2666() {
	var selector = "#obj2635";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2640_SCEventRun_runningActionsCount = obj2640_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2640_SCEventRun_runningActionsCount = window.obj2640_SCEventRun_runningActionsCount - 1;
if (window.obj2640_SCEventRun_runningActionsCount < 0) {
	window.obj2640_SCEventRun_runningActionsCount = 0;
} else if (window.obj2640_SCEventRun_runningActionsCount == 0) {
	obj2640_SCEventRun_actionGroup5();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2666(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2640_SCEventRun_runningActionsCount = window.obj2640_SCEventRun_runningActionsCount - 1;
if (window.obj2640_SCEventRun_runningActionsCount < 0) {
	window.obj2640_SCEventRun_runningActionsCount = 0;
} else if (window.obj2640_SCEventRun_runningActionsCount == 0) {
	obj2640_SCEventRun_actionGroup5();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2640_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2640_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2640").trigger("obj2640_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2640) {
				console.warn("de-queueing event obj2640." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2640").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2640_SCEventRun_activeActionGroupIndex = 5;
	





















};
obj2891_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2891_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2891").trigger("obj2891_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2891) {
				console.warn("de-queueing event obj2891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2891_SCEventRun_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2893();
function runjs_2893() {
	window.obj2891_SCEventRun_runningActionsCount = obj2891_SCEventRun_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1650"));
	
	setTimeout(function() {
		window.obj2891_SCEventRun_runningActionsCount = window.obj2891_SCEventRun_runningActionsCount - 1;
if (window.obj2891_SCEventRun_runningActionsCount < 0) {
	window.obj2891_SCEventRun_runningActionsCount = 0;
} else if (window.obj2891_SCEventRun_runningActionsCount == 0) {
	obj2891_SCEventRun_actionGroup1();
}
	}, 1);
}







};
obj2891_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2891_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2891").trigger("obj2891_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2891) {
				console.warn("de-queueing event obj2891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2891_SCEventRun_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj1650
(function(){
	window.obj2891_SCEventRun_runningActionsCount = obj2891_SCEventRun_runningActionsCount + 1;

	var selector = "#obj1650";
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
					window.obj2891_SCEventRun_runningActionsCount = window.obj2891_SCEventRun_runningActionsCount - 1;
if (window.obj2891_SCEventRun_runningActionsCount < 0) {
	window.obj2891_SCEventRun_runningActionsCount = 0;
} else if (window.obj2891_SCEventRun_runningActionsCount == 0) {
	obj2891_SCEventRun_actionGroup2();
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
				window.obj2891_SCEventRun_runningActionsCount = window.obj2891_SCEventRun_runningActionsCount - 1;
if (window.obj2891_SCEventRun_runningActionsCount < 0) {
	window.obj2891_SCEventRun_runningActionsCount = 0;
} else if (window.obj2891_SCEventRun_runningActionsCount == 0) {
	obj2891_SCEventRun_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2891_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2891_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2891").trigger("obj2891_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2891) {
				console.warn("de-queueing event obj2891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2891_SCEventRun_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_2896();
function goToPage_2896() {
	window.obj2891_SCEventRun_runningActionsCount = obj2891_SCEventRun_runningActionsCount + 1;
	$("#anchor62")[0].click();
	window.obj2891_SCEventRun_runningActionsCount = window.obj2891_SCEventRun_runningActionsCount - 1;
if (window.obj2891_SCEventRun_runningActionsCount < 0) {
	window.obj2891_SCEventRun_runningActionsCount = 0;
} else if (window.obj2891_SCEventRun_runningActionsCount == 0) {
	obj2891_SCEventRun_actionGroup3();
}
}





















};
obj2891_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2891_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2891").trigger("obj2891_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2891) {
				console.warn("de-queueing event obj2891." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2891").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2891_SCEventRun_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		























































/*
 *
 *   obj1669: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1669_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1669_onLoad is still running");
	return;
}
var obj1669_onLoad_runningActionsCount = 0;
var obj1669_onLoad_loopCount = 0;
obj1669_onLoad_actionGroup0();
});








/*
 *
 *   obj1670: Event Touch Down
 *
 */
$("#obj1670").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1670_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1670_onTap is still running");
	return;
}
var obj1670_onTap_runningActionsCount = 0;
var obj1670_onTap_loopCount = 0;
obj1670_onTap_actionGroup0();
});


/*
 *
 *   obj1670: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1670_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1670_onLoad is still running");
	return;
}
var obj1670_onLoad_runningActionsCount = 0;
var obj1670_onLoad_loopCount = 0;
obj1670_onLoad_actionGroup0();
});








/*
 *
 *   obj1671: Event Touch Down
 *
 */
$("#obj1671").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1671_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1671_onTap is still running");
	return;
}
var obj1671_onTap_runningActionsCount = 0;
var obj1671_onTap_loopCount = 0;
obj1671_onTap_actionGroup0();
});


/*
 *
 *   obj1671: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1671_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1671_onLoad is still running");
	return;
}
var obj1671_onLoad_runningActionsCount = 0;
var obj1671_onLoad_loopCount = 0;
obj1671_onLoad_actionGroup0();
});










/*
 *
 *   obj1672: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1672_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1672_onLoad is still running");
	return;
}
var obj1672_onLoad_runningActionsCount = 0;
var obj1672_onLoad_loopCount = 0;
obj1672_onLoad_actionGroup0();
});








/*
 *
 *   obj1673: Event Touch Down
 *
 */
$("#obj1673").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1673_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1673_onTap is still running");
	return;
}
var obj1673_onTap_runningActionsCount = 0;
var obj1673_onTap_loopCount = 0;
obj1673_onTap_actionGroup0();
});


/*
 *
 *   obj1673: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1673_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1673_onLoad is still running");
	return;
}
var obj1673_onLoad_runningActionsCount = 0;
var obj1673_onLoad_loopCount = 0;
obj1673_onLoad_actionGroup0();
});










/*
 *
 *   obj1674: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1674_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1674_onLoad is still running");
	return;
}
var obj1674_onLoad_runningActionsCount = 0;
var obj1674_onLoad_loopCount = 0;
obj1674_onLoad_actionGroup0();
});








/*
 *
 *   obj1668: Event Touch Down
 *
 */
$("#obj1668").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1668_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1668_onTap is still running");
	return;
}
var obj1668_onTap_runningActionsCount = 0;
var obj1668_onTap_loopCount = 0;
obj1668_onTap_actionGroup0();
});


















































































/*
 *
 *   obj2654: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2654_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2654_onLoad is still running");
	return;
}
var obj2654_onLoad_runningActionsCount = 0;
var obj2654_onLoad_loopCount = 0;
obj2654_onLoad_actionGroup0();
});






























/*
 *
 *   obj2704: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2704_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2704_onLoad is still running");
	return;
}
var obj2704_onLoad_runningActionsCount = 0;
var obj2704_onLoad_loopCount = 0;
obj2704_onLoad_actionGroup0();
});








































/*
 *
 *   obj1650: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1650_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1650_onLoad is still running");
	return;
}
var obj1650_onLoad_runningActionsCount = 0;
var obj1650_onLoad_loopCount = 0;
obj1650_onLoad_actionGroup0();
});












/*
 *
 *   obj1661: Event SCEventRun
 *
 */
$("#obj1661").bind("SCEventRun", function(event) {
	if (window.obj1661_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1661_SCEventRun is still running");
	return;
}
var obj1661_SCEventRun_runningActionsCount = 0;
var obj1661_SCEventRun_loopCount = 0;
obj1661_SCEventRun_actionGroup0();
});





/*
 *
 *   obj1732: Event Touch Down
 *
 */
$("#obj1732").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1732_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1732_onTap is still running");
	return;
}
var obj1732_onTap_runningActionsCount = 0;
var obj1732_onTap_loopCount = 0;
obj1732_onTap_actionGroup0();
});










/*
 *
 *   obj2615: Event Touch Down
 *
 */
$("#obj2615").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2615_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2615_onTap is still running");
	return;
}
var obj2615_onTap_runningActionsCount = 0;
var obj2615_onTap_loopCount = 0;
obj2615_onTap_actionGroup0();
});










/*
 *
 *   obj2621: Event Touch Down
 *
 */
$("#obj2621").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2621_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2621_onTap is still running");
	return;
}
var obj2621_onTap_runningActionsCount = 0;
var obj2621_onTap_loopCount = 0;
obj2621_onTap_actionGroup0();
});










/*
 *
 *   obj2637: Event Touch Down
 *
 */
$("#obj2637").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2637_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2637_onTap is still running");
	return;
}
var obj2637_onTap_runningActionsCount = 0;
var obj2637_onTap_loopCount = 0;
obj2637_onTap_actionGroup0();
});














/*
 *
 *   obj2627: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj2627").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj2627_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2627_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj2627_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj2627_SCEventCounterReachedTargetValue_loopCount = 0;
obj2627_SCEventCounterReachedTargetValue_actionGroup0();
});




















/*
 *
 *   obj2640: Event SCEventRun
 *
 */
$("#obj2640").bind("SCEventRun", function(event) {
	if (window.obj2640_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2640_SCEventRun is still running");
	return;
}
var obj2640_SCEventRun_runningActionsCount = 0;
var obj2640_SCEventRun_loopCount = 0;
obj2640_SCEventRun_actionGroup0();
});










/*
 *
 *   obj2891: Event SCEventRun
 *
 */
$("#obj2891").bind("SCEventRun", function(event) {
	if (window.obj2891_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2891_SCEventRun is still running");
	return;
}
var obj2891_SCEventRun_runningActionsCount = 0;
var obj2891_SCEventRun_loopCount = 0;
obj2891_SCEventRun_actionGroup0();
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
	
$("#obj1666").trigger('SCEventShow');
$("#obj1667").trigger('SCEventShow');
$("#obj1728").trigger('SCEventShow');
$("#obj2611").trigger('SCEventShow');
$("#obj2613").trigger('SCEventShow');
$("#obj1669").trigger('SCEventShow');
$("#obj1670").trigger('SCEventShow');
$("#obj1671").trigger('SCEventShow');
$("#obj1672").trigger('SCEventShow');
$("#obj1673").trigger('SCEventShow');
$("#obj1674").trigger('SCEventShow');
$("#obj1668").trigger('SCEventShow');
$("#obj1646").trigger('SCEventShow');
$("#obj1648").trigger('SCEventShow');
$("#obj1650").trigger('SCEventShow');
$("#obj1732").trigger('SCEventShow');
$("#obj2615").trigger('SCEventShow');
$("#obj2621").trigger('SCEventShow');
$("#obj2918").trigger('SCEventShow');
$("#obj3172").trigger('SCEventShow');
$("#obj3204").trigger('SCEventShow');
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