pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 1920;
pubcoder.page.title = pubcoder.page.title || "20";
pubcoder.page.number = pubcoder.page.number || 20;
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
var obj1931_onLoad_activeActionGroupIndex = -1;
var obj1931_onLoad_runningActionsCount = 0;
var obj1931_onLoad_loopCount = 0;
var obj1923_onLoad_activeActionGroupIndex = -1;
var obj1923_onLoad_runningActionsCount = 0;
var obj1923_onLoad_loopCount = 0;
var obj1937_onLoad_activeActionGroupIndex = -1;
var obj1937_onLoad_runningActionsCount = 0;
var obj1937_onLoad_loopCount = 0;
var obj1945_onLoad_activeActionGroupIndex = -1;
var obj1945_onLoad_runningActionsCount = 0;
var obj1945_onLoad_loopCount = 0;
var obj1967_onLoad_activeActionGroupIndex = -1;
var obj1967_onLoad_runningActionsCount = 0;
var obj1967_onLoad_loopCount = 0;
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
		
obj1931_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1931_onLoad_activeActionGroupIndex = -1;
		$("#obj1931").trigger("obj1931_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1931) {
				console.warn("de-queueing event obj1931." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1931").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1931_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1931 
scale_1934();
function scale_1934() {
	window.obj1931_onLoad_runningActionsCount = obj1931_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1931";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1931';
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
		scale_1934_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1934_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1934_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1934_completed() {
	setTimeout(function() {
		window.obj1931_onLoad_runningActionsCount = window.obj1931_onLoad_runningActionsCount - 1;
if (window.obj1931_onLoad_runningActionsCount < 0) {
	window.obj1931_onLoad_runningActionsCount = 0;
} else if (window.obj1931_onLoad_runningActionsCount == 0) {
	obj1931_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1931_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1931_onLoad_activeActionGroupIndex = -1;
		$("#obj1931").trigger("obj1931_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1931) {
				console.warn("de-queueing event obj1931." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1931").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1931_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1931 
move_1935();
function move_1935() {
	window.obj1931_onLoad_runningActionsCount = obj1931_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1931");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=70";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 6000, easing, function() {
		setTimeout(function() {
			window.obj1931_onLoad_runningActionsCount = window.obj1931_onLoad_runningActionsCount - 1;
if (window.obj1931_onLoad_runningActionsCount < 0) {
	window.obj1931_onLoad_runningActionsCount = 0;
} else if (window.obj1931_onLoad_runningActionsCount == 0) {
	obj1931_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj1931_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1931_onLoad_activeActionGroupIndex = -1;
		$("#obj1931").trigger("obj1931_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1931) {
				console.warn("de-queueing event obj1931." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1931").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1931_onLoad_activeActionGroupIndex = 2;
	





















};
obj1923_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1923_onLoad_activeActionGroupIndex = -1;
		$("#obj1923").trigger("obj1923_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1923) {
				console.warn("de-queueing event obj1923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1923_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1923 
move_1926();
function move_1926() {
	window.obj1923_onLoad_runningActionsCount = obj1923_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1923");
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
			window.obj1923_onLoad_runningActionsCount = window.obj1923_onLoad_runningActionsCount - 1;
if (window.obj1923_onLoad_runningActionsCount < 0) {
	window.obj1923_onLoad_runningActionsCount = 0;
} else if (window.obj1923_onLoad_runningActionsCount == 0) {
	obj1923_onLoad_actionGroup1();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj1923 
rotate_1927();
function rotate_1927() {
	window.obj1923_onLoad_runningActionsCount = obj1923_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1923";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1923';
	var transformOriginX = '49.63459%';
	var transformOriginY = '86.58537%';
	var rotationToDegrees = '-4';
	var rotationSpeed = 3;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1927_completed(); }
	//TweenMax.to(targetObjectId, 3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1927_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1927_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1927_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1927_completed() {
	setTimeout(function() {
		window.obj1923_onLoad_runningActionsCount = window.obj1923_onLoad_runningActionsCount - 1;
if (window.obj1923_onLoad_runningActionsCount < 0) {
	window.obj1923_onLoad_runningActionsCount = 0;
} else if (window.obj1923_onLoad_runningActionsCount == 0) {
	obj1923_onLoad_actionGroup1();
}
	}, 1);
}














};
obj1923_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1923_onLoad_activeActionGroupIndex = -1;
		$("#obj1923").trigger("obj1923_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1923) {
				console.warn("de-queueing event obj1923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1923_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1923 
move_1928();
function move_1928() {
	window.obj1923_onLoad_runningActionsCount = obj1923_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1923");
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
			window.obj1923_onLoad_runningActionsCount = window.obj1923_onLoad_runningActionsCount - 1;
if (window.obj1923_onLoad_runningActionsCount < 0) {
	window.obj1923_onLoad_runningActionsCount = 0;
} else if (window.obj1923_onLoad_runningActionsCount == 0) {
	obj1923_onLoad_actionGroup2();
}
		}, 1);
	});
}





//	action: rotate 
//	target: obj1923 
rotate_1929();
function rotate_1929() {
	window.obj1923_onLoad_runningActionsCount = obj1923_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1923";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1923';
	var transformOriginX = '49.63459%';
	var transformOriginY = '86.58537%';
	var rotationToDegrees = '4';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1929_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1929_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1929_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1929_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1929_completed() {
	setTimeout(function() {
		window.obj1923_onLoad_runningActionsCount = window.obj1923_onLoad_runningActionsCount - 1;
if (window.obj1923_onLoad_runningActionsCount < 0) {
	window.obj1923_onLoad_runningActionsCount = 0;
} else if (window.obj1923_onLoad_runningActionsCount == 0) {
	obj1923_onLoad_actionGroup2();
}
	}, 1);
}














};
obj1923_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1923_onLoad_activeActionGroupIndex = -1;
		$("#obj1923").trigger("obj1923_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1923) {
				console.warn("de-queueing event obj1923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1923_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1923_onLoad();
function loop_obj1923_onLoad() {
	var loopCount = 0;
	window.obj1923_onLoad_loopCount = window.obj1923_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1923_onLoad_loopCount > loopCount) {
		window.obj1923_onLoad_loopCount = 0
		obj1923_onLoad_actionGroup3();
	} else {
		obj1923_onLoad_actionGroup0();
	}
}













};
obj1923_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1923_onLoad_activeActionGroupIndex = -1;
		$("#obj1923").trigger("obj1923_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1923) {
				console.warn("de-queueing event obj1923." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1923").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1923_onLoad_activeActionGroupIndex = 3;
	





















};
obj1937_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1937_onLoad_activeActionGroupIndex = -1;
		$("#obj1937").trigger("obj1937_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1937) {
				console.warn("de-queueing event obj1937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1937_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1937 
scale_1941();
function scale_1941() {
	window.obj1937_onLoad_runningActionsCount = obj1937_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1937";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1937';
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
		scale_1941_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1941_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1941_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1941_completed() {
	setTimeout(function() {
		window.obj1937_onLoad_runningActionsCount = window.obj1937_onLoad_runningActionsCount - 1;
if (window.obj1937_onLoad_runningActionsCount < 0) {
	window.obj1937_onLoad_runningActionsCount = 0;
} else if (window.obj1937_onLoad_runningActionsCount == 0) {
	obj1937_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1937_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1937_onLoad_activeActionGroupIndex = -1;
		$("#obj1937").trigger("obj1937_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1937) {
				console.warn("de-queueing event obj1937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1937_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1937 
move_1942();
function move_1942() {
	window.obj1937_onLoad_runningActionsCount = obj1937_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1937");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=195";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 6000, easing, function() {
		setTimeout(function() {
			window.obj1937_onLoad_runningActionsCount = window.obj1937_onLoad_runningActionsCount - 1;
if (window.obj1937_onLoad_runningActionsCount < 0) {
	window.obj1937_onLoad_runningActionsCount = 0;
} else if (window.obj1937_onLoad_runningActionsCount == 0) {
	obj1937_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj1937_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1937_onLoad_activeActionGroupIndex = -1;
		$("#obj1937").trigger("obj1937_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1937) {
				console.warn("de-queueing event obj1937." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1937").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1937_onLoad_activeActionGroupIndex = 2;
	





















};
obj1945_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1945_onLoad_activeActionGroupIndex = -1;
		$("#obj1945").trigger("obj1945_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1945) {
				console.warn("de-queueing event obj1945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1945_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1945 
hide_1948();
function hide_1948() {
	var selector = "#obj1945";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1945_onLoad_runningActionsCount = obj1945_onLoad_runningActionsCount + 1;
	
	var animationType = "slideOutLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1945_onLoad_runningActionsCount = window.obj1945_onLoad_runningActionsCount - 1;
if (window.obj1945_onLoad_runningActionsCount < 0) {
	window.obj1945_onLoad_runningActionsCount = 0;
} else if (window.obj1945_onLoad_runningActionsCount == 0) {
	obj1945_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1948(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1945_onLoad_runningActionsCount = window.obj1945_onLoad_runningActionsCount - 1;
if (window.obj1945_onLoad_runningActionsCount < 0) {
	window.obj1945_onLoad_runningActionsCount = 0;
} else if (window.obj1945_onLoad_runningActionsCount == 0) {
	obj1945_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj1945_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1945_onLoad_activeActionGroupIndex = -1;
		$("#obj1945").trigger("obj1945_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1945) {
				console.warn("de-queueing event obj1945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1945_onLoad_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1949();
function runjs_1949() {
	window.obj1945_onLoad_runningActionsCount = obj1945_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj1945"));
	
	setTimeout(function() {
		window.obj1945_onLoad_runningActionsCount = window.obj1945_onLoad_runningActionsCount - 1;
if (window.obj1945_onLoad_runningActionsCount < 0) {
	window.obj1945_onLoad_runningActionsCount = 0;
} else if (window.obj1945_onLoad_runningActionsCount == 0) {
	obj1945_onLoad_actionGroup2();
}
	}, 1);
}







};
obj1945_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1945_onLoad_activeActionGroupIndex = -1;
		$("#obj1945").trigger("obj1945_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1945) {
				console.warn("de-queueing event obj1945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1945_onLoad_activeActionGroupIndex = 2;
	








//	action: wait
wait_1950();
function wait_1950() {
	window.obj1945_onLoad_runningActionsCount = obj1945_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1945_onLoad_runningActionsCount = window.obj1945_onLoad_runningActionsCount - 1;
if (window.obj1945_onLoad_runningActionsCount < 0) {
	window.obj1945_onLoad_runningActionsCount = 0;
} else if (window.obj1945_onLoad_runningActionsCount == 0) {
	obj1945_onLoad_actionGroup3();
}
	}, 4000);
}













};
obj1945_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1945_onLoad_activeActionGroupIndex = -1;
		$("#obj1945").trigger("obj1945_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1945) {
				console.warn("de-queueing event obj1945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1945_onLoad_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_1951();
function runjs_1951() {
	window.obj1945_onLoad_runningActionsCount = obj1945_onLoad_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1945"));
	
	setTimeout(function() {
		window.obj1945_onLoad_runningActionsCount = window.obj1945_onLoad_runningActionsCount - 1;
if (window.obj1945_onLoad_runningActionsCount < 0) {
	window.obj1945_onLoad_runningActionsCount = 0;
} else if (window.obj1945_onLoad_runningActionsCount == 0) {
	obj1945_onLoad_actionGroup4();
}
	}, 1);
}







};
obj1945_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1945_onLoad_activeActionGroupIndex = -1;
		$("#obj1945").trigger("obj1945_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1945) {
				console.warn("de-queueing event obj1945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1945_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	selector: #obj1945
(function(){
	window.obj1945_onLoad_runningActionsCount = obj1945_onLoad_runningActionsCount + 1;

	var selector = "#obj1945";
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
					window.obj1945_onLoad_runningActionsCount = window.obj1945_onLoad_runningActionsCount - 1;
if (window.obj1945_onLoad_runningActionsCount < 0) {
	window.obj1945_onLoad_runningActionsCount = 0;
} else if (window.obj1945_onLoad_runningActionsCount == 0) {
	obj1945_onLoad_actionGroup5();
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
				window.obj1945_onLoad_runningActionsCount = window.obj1945_onLoad_runningActionsCount - 1;
if (window.obj1945_onLoad_runningActionsCount < 0) {
	window.obj1945_onLoad_runningActionsCount = 0;
} else if (window.obj1945_onLoad_runningActionsCount == 0) {
	obj1945_onLoad_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj1945_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1945_onLoad_activeActionGroupIndex = -1;
		$("#obj1945").trigger("obj1945_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1945) {
				console.warn("de-queueing event obj1945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1945_onLoad_activeActionGroupIndex = 5;
	
//	action: goToPage
goToPage_1953();
function goToPage_1953() {
	window.obj1945_onLoad_runningActionsCount = obj1945_onLoad_runningActionsCount + 1;
	$("#anchor79")[0].click();
	window.obj1945_onLoad_runningActionsCount = window.obj1945_onLoad_runningActionsCount - 1;
if (window.obj1945_onLoad_runningActionsCount < 0) {
	window.obj1945_onLoad_runningActionsCount = 0;
} else if (window.obj1945_onLoad_runningActionsCount == 0) {
	obj1945_onLoad_actionGroup6();
}
}





















};
obj1945_onLoad_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1945_onLoad_activeActionGroupIndex = -1;
		$("#obj1945").trigger("obj1945_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1945) {
				console.warn("de-queueing event obj1945." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1945").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1945_onLoad_activeActionGroupIndex = 6;
	





















};
obj1967_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1967_onLoad_activeActionGroupIndex = -1;
		$("#obj1967").trigger("obj1967_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1967) {
				console.warn("de-queueing event obj1967." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1967").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1967_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj1967 
playAudio_1970();
function playAudio_1970() {
	window.obj1967_onLoad_runningActionsCount = obj1967_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj1967")[0];
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
		    window.obj1967_onLoad_runningActionsCount = window.obj1967_onLoad_runningActionsCount - 1;
if (window.obj1967_onLoad_runningActionsCount < 0) {
	window.obj1967_onLoad_runningActionsCount = 0;
} else if (window.obj1967_onLoad_runningActionsCount == 0) {
	obj1967_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1967_onLoad_runningActionsCount = window.obj1967_onLoad_runningActionsCount - 1;
if (window.obj1967_onLoad_runningActionsCount < 0) {
	window.obj1967_onLoad_runningActionsCount = 0;
} else if (window.obj1967_onLoad_runningActionsCount == 0) {
	obj1967_onLoad_actionGroup1();
}
	}
}









};
obj1967_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1967_onLoad_activeActionGroupIndex = -1;
		$("#obj1967").trigger("obj1967_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1967) {
				console.warn("de-queueing event obj1967." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1967").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1967_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj1931: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1931_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1931_onLoad is still running");
	return;
}
var obj1931_onLoad_runningActionsCount = 0;
var obj1931_onLoad_loopCount = 0;
obj1931_onLoad_actionGroup0();
});










/*
 *
 *   obj1923: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1923_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1923_onLoad is still running");
	return;
}
var obj1923_onLoad_runningActionsCount = 0;
var obj1923_onLoad_loopCount = 0;
obj1923_onLoad_actionGroup0();
});










/*
 *
 *   obj1937: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1937_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1937_onLoad is still running");
	return;
}
var obj1937_onLoad_runningActionsCount = 0;
var obj1937_onLoad_loopCount = 0;
obj1937_onLoad_actionGroup0();
});




















/*
 *
 *   obj1945: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1945_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1945_onLoad is still running");
	return;
}
var obj1945_onLoad_runningActionsCount = 0;
var obj1945_onLoad_loopCount = 0;
obj1945_onLoad_actionGroup0();
});










/*
 *
 *   obj1967: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1967_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1967_onLoad is still running");
	return;
}
var obj1967_onLoad_runningActionsCount = 0;
var obj1967_onLoad_loopCount = 0;
obj1967_onLoad_actionGroup0();
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
	
$("#obj1921").trigger('SCEventShow');
$("#obj1931").trigger('SCEventShow');
$("#obj1923").trigger('SCEventShow');
$("#obj1937").trigger('SCEventShow');
$("#obj1943").trigger('SCEventShow');
$("#obj1945").trigger('SCEventShow');
$("#obj1967").trigger('SCEventShow');
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