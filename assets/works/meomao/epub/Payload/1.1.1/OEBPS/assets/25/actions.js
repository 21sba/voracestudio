pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 1774;
pubcoder.page.title = pubcoder.page.title || "25";
pubcoder.page.number = pubcoder.page.number || 25;
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
var obj2937_onLoad_activeActionGroupIndex = -1;
var obj2937_onLoad_runningActionsCount = 0;
var obj2937_onLoad_loopCount = 0;
var obj2933_onLoad_activeActionGroupIndex = -1;
var obj2933_onLoad_runningActionsCount = 0;
var obj2933_onLoad_loopCount = 0;
var obj2934_onLoad_activeActionGroupIndex = -1;
var obj2934_onLoad_runningActionsCount = 0;
var obj2934_onLoad_loopCount = 0;
var obj2935_onLoad_activeActionGroupIndex = -1;
var obj2935_onLoad_runningActionsCount = 0;
var obj2935_onLoad_loopCount = 0;
var obj2944_onLoad_activeActionGroupIndex = -1;
var obj2944_onLoad_runningActionsCount = 0;
var obj2944_onLoad_loopCount = 0;
var obj3028_onLoad_activeActionGroupIndex = -1;
var obj3028_onLoad_runningActionsCount = 0;
var obj3028_onLoad_loopCount = 0;
var obj3274_onLoad_activeActionGroupIndex = -1;
var obj3274_onLoad_runningActionsCount = 0;
var obj3274_onLoad_loopCount = 0;
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
		
obj2937_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2937_onLoad_activeActionGroupIndex = -1;
		$("#obj2937").trigger("obj2937_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2937) {
				console.warn("de-queueing event obj2937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2937_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj2937 
scale_3032();
function scale_3032() {
	window.obj2937_onLoad_runningActionsCount = obj2937_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2937";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2937';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
	var scaleYValue = '1.05';
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
		scale_3032_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3032_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3032_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3032_completed() {
	setTimeout(function() {
		window.obj2937_onLoad_runningActionsCount = window.obj2937_onLoad_runningActionsCount - 1;
if (window.obj2937_onLoad_runningActionsCount < 0) {
	window.obj2937_onLoad_runningActionsCount = 0;
} else if (window.obj2937_onLoad_runningActionsCount == 0) {
	obj2937_onLoad_actionGroup1();
}
	}, 1);
}












};
obj2937_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2937_onLoad_activeActionGroupIndex = -1;
		$("#obj2937").trigger("obj2937_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2937) {
				console.warn("de-queueing event obj2937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2937_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj2937 
scale_3033();
function scale_3033() {
	window.obj2937_onLoad_runningActionsCount = obj2937_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2937";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2937';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_3033_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3033_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3033_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3033_completed() {
	setTimeout(function() {
		window.obj2937_onLoad_runningActionsCount = window.obj2937_onLoad_runningActionsCount - 1;
if (window.obj2937_onLoad_runningActionsCount < 0) {
	window.obj2937_onLoad_runningActionsCount = 0;
} else if (window.obj2937_onLoad_runningActionsCount == 0) {
	obj2937_onLoad_actionGroup2();
}
	}, 1);
}












};
obj2937_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2937_onLoad_activeActionGroupIndex = -1;
		$("#obj2937").trigger("obj2937_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2937) {
				console.warn("de-queueing event obj2937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2937_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2937_onLoad();
function loop_obj2937_onLoad() {
	var loopCount = 0;
	window.obj2937_onLoad_loopCount = window.obj2937_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2937_onLoad_loopCount > loopCount) {
		window.obj2937_onLoad_loopCount = 0
		obj2937_onLoad_actionGroup3();
	} else {
		obj2937_onLoad_actionGroup0();
	}
}













};
obj2937_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2937_onLoad_activeActionGroupIndex = -1;
		$("#obj2937").trigger("obj2937_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2937) {
				console.warn("de-queueing event obj2937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2937_onLoad_activeActionGroupIndex = 3;
	





















};
obj2933_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2933_onLoad_activeActionGroupIndex = -1;
		$("#obj2933").trigger("obj2933_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2933) {
				console.warn("de-queueing event obj2933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2933_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2933 
move_3015();
function move_3015() {
	window.obj2933_onLoad_runningActionsCount = obj2933_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj2933");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-25";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2933_onLoad_runningActionsCount = window.obj2933_onLoad_runningActionsCount - 1;
if (window.obj2933_onLoad_runningActionsCount < 0) {
	window.obj2933_onLoad_runningActionsCount = 0;
} else if (window.obj2933_onLoad_runningActionsCount == 0) {
	obj2933_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj2933_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2933_onLoad_activeActionGroupIndex = -1;
		$("#obj2933").trigger("obj2933_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2933) {
				console.warn("de-queueing event obj2933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2933_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj2933 
move_3016();
function move_3016() {
	window.obj2933_onLoad_runningActionsCount = obj2933_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj2933");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=25";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2933_onLoad_runningActionsCount = window.obj2933_onLoad_runningActionsCount - 1;
if (window.obj2933_onLoad_runningActionsCount < 0) {
	window.obj2933_onLoad_runningActionsCount = 0;
} else if (window.obj2933_onLoad_runningActionsCount == 0) {
	obj2933_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj2933_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2933_onLoad_activeActionGroupIndex = -1;
		$("#obj2933").trigger("obj2933_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2933) {
				console.warn("de-queueing event obj2933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2933_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2933_onLoad();
function loop_obj2933_onLoad() {
	var loopCount = 0;
	window.obj2933_onLoad_loopCount = window.obj2933_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2933_onLoad_loopCount > loopCount) {
		window.obj2933_onLoad_loopCount = 0
		obj2933_onLoad_actionGroup3();
	} else {
		obj2933_onLoad_actionGroup0();
	}
}













};
obj2933_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2933_onLoad_activeActionGroupIndex = -1;
		$("#obj2933").trigger("obj2933_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2933) {
				console.warn("de-queueing event obj2933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2933_onLoad_activeActionGroupIndex = 3;
	





















};
obj2934_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2934_onLoad_activeActionGroupIndex = -1;
		$("#obj2934").trigger("obj2934_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2934) {
				console.warn("de-queueing event obj2934." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2934").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2934_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2934 
move_3024();
function move_3024() {
	window.obj2934_onLoad_runningActionsCount = obj2934_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj2934");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=30";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2934_onLoad_runningActionsCount = window.obj2934_onLoad_runningActionsCount - 1;
if (window.obj2934_onLoad_runningActionsCount < 0) {
	window.obj2934_onLoad_runningActionsCount = 0;
} else if (window.obj2934_onLoad_runningActionsCount == 0) {
	obj2934_onLoad_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2934 
rotate_3022();
function rotate_3022() {
	window.obj2934_onLoad_runningActionsCount = obj2934_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2934";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2934';
	var transformOriginX = '50.98522%';
	var transformOriginY = '62.39669%';
	var rotationToDegrees = '-15';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_3022_completed(); }
	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_3022_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3022_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3022_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_3022_completed() {
	setTimeout(function() {
		window.obj2934_onLoad_runningActionsCount = window.obj2934_onLoad_runningActionsCount - 1;
if (window.obj2934_onLoad_runningActionsCount < 0) {
	window.obj2934_onLoad_runningActionsCount = 0;
} else if (window.obj2934_onLoad_runningActionsCount == 0) {
	obj2934_onLoad_actionGroup1();
}
	}, 1);
}














};
obj2934_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2934_onLoad_activeActionGroupIndex = -1;
		$("#obj2934").trigger("obj2934_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2934) {
				console.warn("de-queueing event obj2934." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2934").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2934_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj2934 
move_3025();
function move_3025() {
	window.obj2934_onLoad_runningActionsCount = obj2934_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj2934");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-30";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj2934_onLoad_runningActionsCount = window.obj2934_onLoad_runningActionsCount - 1;
if (window.obj2934_onLoad_runningActionsCount < 0) {
	window.obj2934_onLoad_runningActionsCount = 0;
} else if (window.obj2934_onLoad_runningActionsCount == 0) {
	obj2934_onLoad_actionGroup2();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj2934 
rotate_3023();
function rotate_3023() {
	window.obj2934_onLoad_runningActionsCount = obj2934_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2934";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2934';
	var transformOriginX = '50.98522%';
	var transformOriginY = '62.39669%';
	var rotationToDegrees = '15';
	var rotationSpeed = 1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_3023_completed(); }
	//TweenMax.to(targetObjectId, 1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_3023_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3023_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_3023_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_3023_completed() {
	setTimeout(function() {
		window.obj2934_onLoad_runningActionsCount = window.obj2934_onLoad_runningActionsCount - 1;
if (window.obj2934_onLoad_runningActionsCount < 0) {
	window.obj2934_onLoad_runningActionsCount = 0;
} else if (window.obj2934_onLoad_runningActionsCount == 0) {
	obj2934_onLoad_actionGroup2();
}
	}, 1);
}














};
obj2934_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2934_onLoad_activeActionGroupIndex = -1;
		$("#obj2934").trigger("obj2934_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2934) {
				console.warn("de-queueing event obj2934." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2934").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2934_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2934_onLoad();
function loop_obj2934_onLoad() {
	var loopCount = 0;
	window.obj2934_onLoad_loopCount = window.obj2934_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2934_onLoad_loopCount > loopCount) {
		window.obj2934_onLoad_loopCount = 0
		obj2934_onLoad_actionGroup3();
	} else {
		obj2934_onLoad_actionGroup0();
	}
}













};
obj2934_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2934_onLoad_activeActionGroupIndex = -1;
		$("#obj2934").trigger("obj2934_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2934) {
				console.warn("de-queueing event obj2934." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2934").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2934_onLoad_activeActionGroupIndex = 3;
	





















};
obj2935_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2935_onLoad_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2935 
move_2965();
function move_2965() {
	window.obj2935_onLoad_runningActionsCount = obj2935_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj2935");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=30";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 600, easing, function() {
		setTimeout(function() {
			window.obj2935_onLoad_runningActionsCount = window.obj2935_onLoad_runningActionsCount - 1;
if (window.obj2935_onLoad_runningActionsCount < 0) {
	window.obj2935_onLoad_runningActionsCount = 0;
} else if (window.obj2935_onLoad_runningActionsCount == 0) {
	obj2935_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj2935_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2935_onLoad_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj2935 
move_2966();
function move_2966() {
	window.obj2935_onLoad_runningActionsCount = obj2935_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj2935");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-30";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 600, easing, function() {
		setTimeout(function() {
			window.obj2935_onLoad_runningActionsCount = window.obj2935_onLoad_runningActionsCount - 1;
if (window.obj2935_onLoad_runningActionsCount < 0) {
	window.obj2935_onLoad_runningActionsCount = 0;
} else if (window.obj2935_onLoad_runningActionsCount == 0) {
	obj2935_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj2935_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2935_onLoad_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2935_onLoad();
function loop_obj2935_onLoad() {
	var loopCount = 0;
	window.obj2935_onLoad_loopCount = window.obj2935_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2935_onLoad_loopCount > loopCount) {
		window.obj2935_onLoad_loopCount = 0
		obj2935_onLoad_actionGroup3();
	} else {
		obj2935_onLoad_actionGroup0();
	}
}













};
obj2935_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2935_onLoad_activeActionGroupIndex = -1;
		$("#obj2935").trigger("obj2935_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2935) {
				console.warn("de-queueing event obj2935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2935_onLoad_activeActionGroupIndex = 3;
	





















};
obj2944_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2944_onLoad_activeActionGroupIndex = -1;
		$("#obj2944").trigger("obj2944_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2944) {
				console.warn("de-queueing event obj2944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2944_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2944 
hide_2947();
function hide_2947() {
	var selector = "#obj2944";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2944_onLoad_runningActionsCount = obj2944_onLoad_runningActionsCount + 1;
	
	var animationType = "slideOutLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2944_onLoad_runningActionsCount = window.obj2944_onLoad_runningActionsCount - 1;
if (window.obj2944_onLoad_runningActionsCount < 0) {
	window.obj2944_onLoad_runningActionsCount = 0;
} else if (window.obj2944_onLoad_runningActionsCount == 0) {
	obj2944_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2947(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2944_onLoad_runningActionsCount = window.obj2944_onLoad_runningActionsCount - 1;
if (window.obj2944_onLoad_runningActionsCount < 0) {
	window.obj2944_onLoad_runningActionsCount = 0;
} else if (window.obj2944_onLoad_runningActionsCount == 0) {
	obj2944_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2944_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2944_onLoad_activeActionGroupIndex = -1;
		$("#obj2944").trigger("obj2944_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2944) {
				console.warn("de-queueing event obj2944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2944_onLoad_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2948();
function runjs_2948() {
	window.obj2944_onLoad_runningActionsCount = obj2944_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj2944"));
	
	setTimeout(function() {
		window.obj2944_onLoad_runningActionsCount = window.obj2944_onLoad_runningActionsCount - 1;
if (window.obj2944_onLoad_runningActionsCount < 0) {
	window.obj2944_onLoad_runningActionsCount = 0;
} else if (window.obj2944_onLoad_runningActionsCount == 0) {
	obj2944_onLoad_actionGroup2();
}
	}, 1);
}







};
obj2944_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2944_onLoad_activeActionGroupIndex = -1;
		$("#obj2944").trigger("obj2944_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2944) {
				console.warn("de-queueing event obj2944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2944_onLoad_activeActionGroupIndex = 2;
	








//	action: wait
wait_2949();
function wait_2949() {
	window.obj2944_onLoad_runningActionsCount = obj2944_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2944_onLoad_runningActionsCount = window.obj2944_onLoad_runningActionsCount - 1;
if (window.obj2944_onLoad_runningActionsCount < 0) {
	window.obj2944_onLoad_runningActionsCount = 0;
} else if (window.obj2944_onLoad_runningActionsCount == 0) {
	obj2944_onLoad_actionGroup3();
}
	}, 4000);
}













};
obj2944_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2944_onLoad_activeActionGroupIndex = -1;
		$("#obj2944").trigger("obj2944_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2944) {
				console.warn("de-queueing event obj2944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2944_onLoad_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_2950();
function runjs_2950() {
	window.obj2944_onLoad_runningActionsCount = obj2944_onLoad_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj2944"));
	
	setTimeout(function() {
		window.obj2944_onLoad_runningActionsCount = window.obj2944_onLoad_runningActionsCount - 1;
if (window.obj2944_onLoad_runningActionsCount < 0) {
	window.obj2944_onLoad_runningActionsCount = 0;
} else if (window.obj2944_onLoad_runningActionsCount == 0) {
	obj2944_onLoad_actionGroup4();
}
	}, 1);
}







};
obj2944_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2944_onLoad_activeActionGroupIndex = -1;
		$("#obj2944").trigger("obj2944_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2944) {
				console.warn("de-queueing event obj2944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2944_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	selector: #obj2944
(function(){
	window.obj2944_onLoad_runningActionsCount = obj2944_onLoad_runningActionsCount + 1;

	var selector = "#obj2944";
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
					window.obj2944_onLoad_runningActionsCount = window.obj2944_onLoad_runningActionsCount - 1;
if (window.obj2944_onLoad_runningActionsCount < 0) {
	window.obj2944_onLoad_runningActionsCount = 0;
} else if (window.obj2944_onLoad_runningActionsCount == 0) {
	obj2944_onLoad_actionGroup5();
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
				window.obj2944_onLoad_runningActionsCount = window.obj2944_onLoad_runningActionsCount - 1;
if (window.obj2944_onLoad_runningActionsCount < 0) {
	window.obj2944_onLoad_runningActionsCount = 0;
} else if (window.obj2944_onLoad_runningActionsCount == 0) {
	obj2944_onLoad_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2944_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2944_onLoad_activeActionGroupIndex = -1;
		$("#obj2944").trigger("obj2944_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2944) {
				console.warn("de-queueing event obj2944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2944_onLoad_activeActionGroupIndex = 5;
	
//	action: goToPage
goToPage_2952();
function goToPage_2952() {
	window.obj2944_onLoad_runningActionsCount = obj2944_onLoad_runningActionsCount + 1;
	$("#anchor94")[0].click();
	window.obj2944_onLoad_runningActionsCount = window.obj2944_onLoad_runningActionsCount - 1;
if (window.obj2944_onLoad_runningActionsCount < 0) {
	window.obj2944_onLoad_runningActionsCount = 0;
} else if (window.obj2944_onLoad_runningActionsCount == 0) {
	obj2944_onLoad_actionGroup6();
}
}





















};
obj2944_onLoad_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2944_onLoad_activeActionGroupIndex = -1;
		$("#obj2944").trigger("obj2944_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2944) {
				console.warn("de-queueing event obj2944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2944_onLoad_activeActionGroupIndex = 6;
	





















};
obj3028_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3028_onLoad_activeActionGroupIndex = -1;
		$("#obj3028").trigger("obj3028_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3028) {
				console.warn("de-queueing event obj3028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3028_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj3028 
playAudio_3030();
function playAudio_3030() {
	window.obj3028_onLoad_runningActionsCount = obj3028_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj3028")[0];
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
		    window.obj3028_onLoad_runningActionsCount = window.obj3028_onLoad_runningActionsCount - 1;
if (window.obj3028_onLoad_runningActionsCount < 0) {
	window.obj3028_onLoad_runningActionsCount = 0;
} else if (window.obj3028_onLoad_runningActionsCount == 0) {
	obj3028_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3028_onLoad_runningActionsCount = window.obj3028_onLoad_runningActionsCount - 1;
if (window.obj3028_onLoad_runningActionsCount < 0) {
	window.obj3028_onLoad_runningActionsCount = 0;
} else if (window.obj3028_onLoad_runningActionsCount == 0) {
	obj3028_onLoad_actionGroup1();
}
	}
}









};
obj3028_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3028_onLoad_activeActionGroupIndex = -1;
		$("#obj3028").trigger("obj3028_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3028) {
				console.warn("de-queueing event obj3028." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3028").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3028_onLoad_activeActionGroupIndex = 1;
	





















};
obj3274_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3274_onLoad_activeActionGroupIndex = -1;
		$("#obj3274").trigger("obj3274_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3274) {
				console.warn("de-queueing event obj3274." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3274").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3274_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj3274 
playAudio_3276();
function playAudio_3276() {
	window.obj3274_onLoad_runningActionsCount = obj3274_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj3274")[0];
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
		    window.obj3274_onLoad_runningActionsCount = window.obj3274_onLoad_runningActionsCount - 1;
if (window.obj3274_onLoad_runningActionsCount < 0) {
	window.obj3274_onLoad_runningActionsCount = 0;
} else if (window.obj3274_onLoad_runningActionsCount == 0) {
	obj3274_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3274_onLoad_runningActionsCount = window.obj3274_onLoad_runningActionsCount - 1;
if (window.obj3274_onLoad_runningActionsCount < 0) {
	window.obj3274_onLoad_runningActionsCount = 0;
} else if (window.obj3274_onLoad_runningActionsCount == 0) {
	obj3274_onLoad_actionGroup1();
}
	}
}









};
obj3274_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3274_onLoad_activeActionGroupIndex = -1;
		$("#obj3274").trigger("obj3274_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3274) {
				console.warn("de-queueing event obj3274." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3274").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3274_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

























/*
 *
 *   obj2937: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2937_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2937_onLoad is still running");
	return;
}
var obj2937_onLoad_runningActionsCount = 0;
var obj2937_onLoad_loopCount = 0;
obj2937_onLoad_actionGroup0();
});










/*
 *
 *   obj2933: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2933_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2933_onLoad is still running");
	return;
}
var obj2933_onLoad_runningActionsCount = 0;
var obj2933_onLoad_loopCount = 0;
obj2933_onLoad_actionGroup0();
});










/*
 *
 *   obj2934: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2934_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2934_onLoad is still running");
	return;
}
var obj2934_onLoad_runningActionsCount = 0;
var obj2934_onLoad_loopCount = 0;
obj2934_onLoad_actionGroup0();
});










/*
 *
 *   obj2935: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2935_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2935_onLoad is still running");
	return;
}
var obj2935_onLoad_runningActionsCount = 0;
var obj2935_onLoad_loopCount = 0;
obj2935_onLoad_actionGroup0();
});




















/*
 *
 *   obj2944: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2944_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2944_onLoad is still running");
	return;
}
var obj2944_onLoad_runningActionsCount = 0;
var obj2944_onLoad_loopCount = 0;
obj2944_onLoad_actionGroup0();
});










/*
 *
 *   obj3028: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3028_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3028_onLoad is still running");
	return;
}
var obj3028_onLoad_runningActionsCount = 0;
var obj3028_onLoad_loopCount = 0;
obj3028_onLoad_actionGroup0();
});




















/*
 *
 *   obj3274: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj3274_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3274_onLoad is still running");
	return;
}
var obj3274_onLoad_runningActionsCount = 0;
var obj3274_onLoad_loopCount = 0;
obj3274_onLoad_actionGroup0();
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
	
$("#obj2932").trigger('SCEventShow');
$("#obj2936").trigger('SCEventShow');
$("#obj2937").trigger('SCEventShow');
$("#obj2933").trigger('SCEventShow');
$("#obj2934").trigger('SCEventShow');
$("#obj2935").trigger('SCEventShow');
$("#obj2962").trigger('SCEventShow');
$("#obj2944").trigger('SCEventShow');
$("#obj3028").trigger('SCEventShow');
$("#obj3224").trigger('SCEventShow');
$("#obj3274").trigger('SCEventShow');
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