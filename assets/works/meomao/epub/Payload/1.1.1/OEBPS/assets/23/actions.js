pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 2737;
pubcoder.page.title = pubcoder.page.title || "23";
pubcoder.page.number = pubcoder.page.number || 23;
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
var obj2740_onLoad_activeActionGroupIndex = -1;
var obj2740_onLoad_runningActionsCount = 0;
var obj2740_onLoad_loopCount = 0;
var obj2746_onLoad_activeActionGroupIndex = -1;
var obj2746_onLoad_runningActionsCount = 0;
var obj2746_onLoad_loopCount = 0;
var obj2754_onLoad_activeActionGroupIndex = -1;
var obj2754_onLoad_runningActionsCount = 0;
var obj2754_onLoad_loopCount = 0;
var obj2762_onLoad_activeActionGroupIndex = -1;
var obj2762_onLoad_runningActionsCount = 0;
var obj2762_onLoad_loopCount = 0;
var obj2771_onLoad_activeActionGroupIndex = -1;
var obj2771_onLoad_runningActionsCount = 0;
var obj2771_onLoad_loopCount = 0;
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
		
obj2740_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2740_onLoad_activeActionGroupIndex = -1;
		$("#obj2740").trigger("obj2740_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2740) {
				console.warn("de-queueing event obj2740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2740_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj2740 
scale_2743();
function scale_2743() {
	window.obj2740_onLoad_runningActionsCount = obj2740_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2740";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2740';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.2';
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
		scale_2743_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2743_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2743_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2743_completed() {
	setTimeout(function() {
		window.obj2740_onLoad_runningActionsCount = window.obj2740_onLoad_runningActionsCount - 1;
if (window.obj2740_onLoad_runningActionsCount < 0) {
	window.obj2740_onLoad_runningActionsCount = 0;
} else if (window.obj2740_onLoad_runningActionsCount == 0) {
	obj2740_onLoad_actionGroup1();
}
	}, 1);
}












};
obj2740_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2740_onLoad_activeActionGroupIndex = -1;
		$("#obj2740").trigger("obj2740_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2740) {
				console.warn("de-queueing event obj2740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2740_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj2740 
move_2744();
function move_2744() {
	window.obj2740_onLoad_runningActionsCount = obj2740_onLoad_runningActionsCount + 1;

	var easing = "linear";
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
	var targetObject = $("#obj2740");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-70";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 6000, easing, function() {
		setTimeout(function() {
			window.obj2740_onLoad_runningActionsCount = window.obj2740_onLoad_runningActionsCount - 1;
if (window.obj2740_onLoad_runningActionsCount < 0) {
	window.obj2740_onLoad_runningActionsCount = 0;
} else if (window.obj2740_onLoad_runningActionsCount == 0) {
	obj2740_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj2740_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2740_onLoad_activeActionGroupIndex = -1;
		$("#obj2740").trigger("obj2740_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2740) {
				console.warn("de-queueing event obj2740." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2740").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2740_onLoad_activeActionGroupIndex = 2;
	





















};
obj2746_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2746_onLoad_activeActionGroupIndex = -1;
		$("#obj2746").trigger("obj2746_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2746) {
				console.warn("de-queueing event obj2746." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2746").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2746_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2746 
move_2749();
function move_2749() {
	window.obj2746_onLoad_runningActionsCount = obj2746_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj2746");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=25";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj2746_onLoad_runningActionsCount = window.obj2746_onLoad_runningActionsCount - 1;
if (window.obj2746_onLoad_runningActionsCount < 0) {
	window.obj2746_onLoad_runningActionsCount = 0;
} else if (window.obj2746_onLoad_runningActionsCount == 0) {
	obj2746_onLoad_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2746 
rotate_2750();
function rotate_2750() {
	window.obj2746_onLoad_runningActionsCount = obj2746_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2746";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2746';
	var transformOriginX = '49.63459%';
	var transformOriginY = '86.58537%';
	var rotationToDegrees = '4';
	var rotationSpeed = 3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2750_completed(); }
	//TweenMax.to(targetObjectId, 3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2750_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2750_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2750_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2750_completed() {
	setTimeout(function() {
		window.obj2746_onLoad_runningActionsCount = window.obj2746_onLoad_runningActionsCount - 1;
if (window.obj2746_onLoad_runningActionsCount < 0) {
	window.obj2746_onLoad_runningActionsCount = 0;
} else if (window.obj2746_onLoad_runningActionsCount == 0) {
	obj2746_onLoad_actionGroup1();
}
	}, 1);
}














};
obj2746_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2746_onLoad_activeActionGroupIndex = -1;
		$("#obj2746").trigger("obj2746_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2746) {
				console.warn("de-queueing event obj2746." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2746").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2746_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj2746 
move_2751();
function move_2751() {
	window.obj2746_onLoad_runningActionsCount = obj2746_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj2746");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-25";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 2000, easing, function() {
		setTimeout(function() {
			window.obj2746_onLoad_runningActionsCount = window.obj2746_onLoad_runningActionsCount - 1;
if (window.obj2746_onLoad_runningActionsCount < 0) {
	window.obj2746_onLoad_runningActionsCount = 0;
} else if (window.obj2746_onLoad_runningActionsCount == 0) {
	obj2746_onLoad_actionGroup2();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2746 
rotate_2752();
function rotate_2752() {
	window.obj2746_onLoad_runningActionsCount = obj2746_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2746";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2746';
	var transformOriginX = '49.63459%';
	var transformOriginY = '86.58537%';
	var rotationToDegrees = '-4';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2752_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2752_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2752_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2752_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2752_completed() {
	setTimeout(function() {
		window.obj2746_onLoad_runningActionsCount = window.obj2746_onLoad_runningActionsCount - 1;
if (window.obj2746_onLoad_runningActionsCount < 0) {
	window.obj2746_onLoad_runningActionsCount = 0;
} else if (window.obj2746_onLoad_runningActionsCount == 0) {
	obj2746_onLoad_actionGroup2();
}
	}, 1);
}














};
obj2746_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2746_onLoad_activeActionGroupIndex = -1;
		$("#obj2746").trigger("obj2746_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2746) {
				console.warn("de-queueing event obj2746." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2746").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2746_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2746_onLoad();
function loop_obj2746_onLoad() {
	var loopCount = 0;
	window.obj2746_onLoad_loopCount = window.obj2746_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2746_onLoad_loopCount > loopCount) {
		window.obj2746_onLoad_loopCount = 0
		obj2746_onLoad_actionGroup3();
	} else {
		obj2746_onLoad_actionGroup0();
	}
}













};
obj2746_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2746_onLoad_activeActionGroupIndex = -1;
		$("#obj2746").trigger("obj2746_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2746) {
				console.warn("de-queueing event obj2746." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2746").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2746_onLoad_activeActionGroupIndex = 3;
	





















};
obj2754_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2754_onLoad_activeActionGroupIndex = -1;
		$("#obj2754").trigger("obj2754_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2754) {
				console.warn("de-queueing event obj2754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2754_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj2754 
scale_2758();
function scale_2758() {
	window.obj2754_onLoad_runningActionsCount = obj2754_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2754";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2754';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.2';
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
		scale_2758_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2758_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2758_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2758_completed() {
	setTimeout(function() {
		window.obj2754_onLoad_runningActionsCount = window.obj2754_onLoad_runningActionsCount - 1;
if (window.obj2754_onLoad_runningActionsCount < 0) {
	window.obj2754_onLoad_runningActionsCount = 0;
} else if (window.obj2754_onLoad_runningActionsCount == 0) {
	obj2754_onLoad_actionGroup1();
}
	}, 1);
}












};
obj2754_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2754_onLoad_activeActionGroupIndex = -1;
		$("#obj2754").trigger("obj2754_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2754) {
				console.warn("de-queueing event obj2754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2754_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj2754 
move_2759();
function move_2759() {
	window.obj2754_onLoad_runningActionsCount = obj2754_onLoad_runningActionsCount + 1;

	var easing = "linear";
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
	var targetObject = $("#obj2754");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-195";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 6000, easing, function() {
		setTimeout(function() {
			window.obj2754_onLoad_runningActionsCount = window.obj2754_onLoad_runningActionsCount - 1;
if (window.obj2754_onLoad_runningActionsCount < 0) {
	window.obj2754_onLoad_runningActionsCount = 0;
} else if (window.obj2754_onLoad_runningActionsCount == 0) {
	obj2754_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj2754_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2754_onLoad_activeActionGroupIndex = -1;
		$("#obj2754").trigger("obj2754_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2754) {
				console.warn("de-queueing event obj2754." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2754").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2754_onLoad_activeActionGroupIndex = 2;
	





















};
obj2762_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2762_onLoad_activeActionGroupIndex = -1;
		$("#obj2762").trigger("obj2762_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2762) {
				console.warn("de-queueing event obj2762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2762_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2762 
hide_2765();
function hide_2765() {
	var selector = "#obj2762";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2762_onLoad_runningActionsCount = obj2762_onLoad_runningActionsCount + 1;
	
	var animationType = "slideOutLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2762_onLoad_runningActionsCount = window.obj2762_onLoad_runningActionsCount - 1;
if (window.obj2762_onLoad_runningActionsCount < 0) {
	window.obj2762_onLoad_runningActionsCount = 0;
} else if (window.obj2762_onLoad_runningActionsCount == 0) {
	obj2762_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2765(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2762_onLoad_runningActionsCount = window.obj2762_onLoad_runningActionsCount - 1;
if (window.obj2762_onLoad_runningActionsCount < 0) {
	window.obj2762_onLoad_runningActionsCount = 0;
} else if (window.obj2762_onLoad_runningActionsCount == 0) {
	obj2762_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2762_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2762_onLoad_activeActionGroupIndex = -1;
		$("#obj2762").trigger("obj2762_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2762) {
				console.warn("de-queueing event obj2762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2762_onLoad_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2766();
function runjs_2766() {
	window.obj2762_onLoad_runningActionsCount = obj2762_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj2762"));
	
	setTimeout(function() {
		window.obj2762_onLoad_runningActionsCount = window.obj2762_onLoad_runningActionsCount - 1;
if (window.obj2762_onLoad_runningActionsCount < 0) {
	window.obj2762_onLoad_runningActionsCount = 0;
} else if (window.obj2762_onLoad_runningActionsCount == 0) {
	obj2762_onLoad_actionGroup2();
}
	}, 1);
}







};
obj2762_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2762_onLoad_activeActionGroupIndex = -1;
		$("#obj2762").trigger("obj2762_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2762) {
				console.warn("de-queueing event obj2762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2762_onLoad_activeActionGroupIndex = 2;
	








//	action: wait
wait_2767();
function wait_2767() {
	window.obj2762_onLoad_runningActionsCount = obj2762_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2762_onLoad_runningActionsCount = window.obj2762_onLoad_runningActionsCount - 1;
if (window.obj2762_onLoad_runningActionsCount < 0) {
	window.obj2762_onLoad_runningActionsCount = 0;
} else if (window.obj2762_onLoad_runningActionsCount == 0) {
	obj2762_onLoad_actionGroup3();
}
	}, 4000);
}













};
obj2762_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2762_onLoad_activeActionGroupIndex = -1;
		$("#obj2762").trigger("obj2762_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2762) {
				console.warn("de-queueing event obj2762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2762_onLoad_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_2768();
function runjs_2768() {
	window.obj2762_onLoad_runningActionsCount = obj2762_onLoad_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj2762"));
	
	setTimeout(function() {
		window.obj2762_onLoad_runningActionsCount = window.obj2762_onLoad_runningActionsCount - 1;
if (window.obj2762_onLoad_runningActionsCount < 0) {
	window.obj2762_onLoad_runningActionsCount = 0;
} else if (window.obj2762_onLoad_runningActionsCount == 0) {
	obj2762_onLoad_actionGroup4();
}
	}, 1);
}







};
obj2762_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2762_onLoad_activeActionGroupIndex = -1;
		$("#obj2762").trigger("obj2762_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2762) {
				console.warn("de-queueing event obj2762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2762_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	selector: #obj2762
(function(){
	window.obj2762_onLoad_runningActionsCount = obj2762_onLoad_runningActionsCount + 1;

	var selector = "#obj2762";
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
					window.obj2762_onLoad_runningActionsCount = window.obj2762_onLoad_runningActionsCount - 1;
if (window.obj2762_onLoad_runningActionsCount < 0) {
	window.obj2762_onLoad_runningActionsCount = 0;
} else if (window.obj2762_onLoad_runningActionsCount == 0) {
	obj2762_onLoad_actionGroup5();
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
				window.obj2762_onLoad_runningActionsCount = window.obj2762_onLoad_runningActionsCount - 1;
if (window.obj2762_onLoad_runningActionsCount < 0) {
	window.obj2762_onLoad_runningActionsCount = 0;
} else if (window.obj2762_onLoad_runningActionsCount == 0) {
	obj2762_onLoad_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2762_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2762_onLoad_activeActionGroupIndex = -1;
		$("#obj2762").trigger("obj2762_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2762) {
				console.warn("de-queueing event obj2762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2762_onLoad_activeActionGroupIndex = 5;
	
//	action: goToPage
goToPage_2770();
function goToPage_2770() {
	window.obj2762_onLoad_runningActionsCount = obj2762_onLoad_runningActionsCount + 1;
	$("#anchor90")[0].click();
	window.obj2762_onLoad_runningActionsCount = window.obj2762_onLoad_runningActionsCount - 1;
if (window.obj2762_onLoad_runningActionsCount < 0) {
	window.obj2762_onLoad_runningActionsCount = 0;
} else if (window.obj2762_onLoad_runningActionsCount == 0) {
	obj2762_onLoad_actionGroup6();
}
}





















};
obj2762_onLoad_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2762_onLoad_activeActionGroupIndex = -1;
		$("#obj2762").trigger("obj2762_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2762) {
				console.warn("de-queueing event obj2762." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2762").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2762_onLoad_activeActionGroupIndex = 6;
	





















};
obj2771_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2771_onLoad_activeActionGroupIndex = -1;
		$("#obj2771").trigger("obj2771_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2771) {
				console.warn("de-queueing event obj2771." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2771").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2771_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj2771 
playAudio_2773();
function playAudio_2773() {
	window.obj2771_onLoad_runningActionsCount = obj2771_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj2771")[0];
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
		    window.obj2771_onLoad_runningActionsCount = window.obj2771_onLoad_runningActionsCount - 1;
if (window.obj2771_onLoad_runningActionsCount < 0) {
	window.obj2771_onLoad_runningActionsCount = 0;
} else if (window.obj2771_onLoad_runningActionsCount == 0) {
	obj2771_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2771_onLoad_runningActionsCount = window.obj2771_onLoad_runningActionsCount - 1;
if (window.obj2771_onLoad_runningActionsCount < 0) {
	window.obj2771_onLoad_runningActionsCount = 0;
} else if (window.obj2771_onLoad_runningActionsCount == 0) {
	obj2771_onLoad_actionGroup1();
}
	}
}









};
obj2771_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2771_onLoad_activeActionGroupIndex = -1;
		$("#obj2771").trigger("obj2771_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2771) {
				console.warn("de-queueing event obj2771." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2771").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2771_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj2740: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2740_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2740_onLoad is still running");
	return;
}
var obj2740_onLoad_runningActionsCount = 0;
var obj2740_onLoad_loopCount = 0;
obj2740_onLoad_actionGroup0();
});










/*
 *
 *   obj2746: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2746_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2746_onLoad is still running");
	return;
}
var obj2746_onLoad_runningActionsCount = 0;
var obj2746_onLoad_loopCount = 0;
obj2746_onLoad_actionGroup0();
});










/*
 *
 *   obj2754: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2754_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2754_onLoad is still running");
	return;
}
var obj2754_onLoad_runningActionsCount = 0;
var obj2754_onLoad_loopCount = 0;
obj2754_onLoad_actionGroup0();
});




















/*
 *
 *   obj2762: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2762_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2762_onLoad is still running");
	return;
}
var obj2762_onLoad_runningActionsCount = 0;
var obj2762_onLoad_loopCount = 0;
obj2762_onLoad_actionGroup0();
});










/*
 *
 *   obj2771: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2771_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2771_onLoad is still running");
	return;
}
var obj2771_onLoad_runningActionsCount = 0;
var obj2771_onLoad_loopCount = 0;
obj2771_onLoad_actionGroup0();
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
	
$("#obj2738").trigger('SCEventShow');
$("#obj2740").trigger('SCEventShow');
$("#obj2746").trigger('SCEventShow');
$("#obj2754").trigger('SCEventShow');
$("#obj2760").trigger('SCEventShow');
$("#obj2762").trigger('SCEventShow');
$("#obj2771").trigger('SCEventShow');
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