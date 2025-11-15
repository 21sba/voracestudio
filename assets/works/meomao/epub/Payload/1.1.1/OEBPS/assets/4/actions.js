pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 128;
pubcoder.page.title = pubcoder.page.title || "4";
pubcoder.page.number = pubcoder.page.number || 4;
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
var obj130_onLoad_activeActionGroupIndex = -1;
var obj130_onLoad_runningActionsCount = 0;
var obj130_onLoad_loopCount = 0;
var obj131_onLoad_activeActionGroupIndex = -1;
var obj131_onLoad_runningActionsCount = 0;
var obj131_onLoad_loopCount = 0;
var obj788_onTap_activeActionGroupIndex = -1;
var obj788_onTap_runningActionsCount = 0;
var obj788_onTap_loopCount = 0;
var obj142_onLoad_activeActionGroupIndex = -1;
var obj142_onLoad_runningActionsCount = 0;
var obj142_onLoad_loopCount = 0;
var obj287_onTap_activeActionGroupIndex = -1;
var obj287_onTap_runningActionsCount = 0;
var obj287_onTap_loopCount = 0;
var obj846_onLoad_activeActionGroupIndex = -1;
var obj846_onLoad_runningActionsCount = 0;
var obj846_onLoad_loopCount = 0;
var obj1823_onLoad_activeActionGroupIndex = -1;
var obj1823_onLoad_runningActionsCount = 0;
var obj1823_onLoad_loopCount = 0;
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
		
obj130_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj130_onLoad_activeActionGroupIndex = -1;
		$("#obj130").trigger("obj130_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 130) {
				console.warn("de-queueing event obj130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj130_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj130 
move_163();
function move_163() {
	window.obj130_onLoad_runningActionsCount = obj130_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj130");
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
			window.obj130_onLoad_runningActionsCount = window.obj130_onLoad_runningActionsCount - 1;
if (window.obj130_onLoad_runningActionsCount < 0) {
	window.obj130_onLoad_runningActionsCount = 0;
} else if (window.obj130_onLoad_runningActionsCount == 0) {
	obj130_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj130_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj130_onLoad_activeActionGroupIndex = -1;
		$("#obj130").trigger("obj130_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 130) {
				console.warn("de-queueing event obj130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj130_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj130 
move_164();
function move_164() {
	window.obj130_onLoad_runningActionsCount = obj130_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj130");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=10";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj130_onLoad_runningActionsCount = window.obj130_onLoad_runningActionsCount - 1;
if (window.obj130_onLoad_runningActionsCount < 0) {
	window.obj130_onLoad_runningActionsCount = 0;
} else if (window.obj130_onLoad_runningActionsCount == 0) {
	obj130_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj130_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj130_onLoad_activeActionGroupIndex = -1;
		$("#obj130").trigger("obj130_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 130) {
				console.warn("de-queueing event obj130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj130_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj130_onLoad();
function loop_obj130_onLoad() {
	var loopCount = 0;
	window.obj130_onLoad_loopCount = window.obj130_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj130_onLoad_loopCount > loopCount) {
		window.obj130_onLoad_loopCount = 0
		obj130_onLoad_actionGroup3();
	} else {
		obj130_onLoad_actionGroup0();
	}
}













};
obj130_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj130_onLoad_activeActionGroupIndex = -1;
		$("#obj130").trigger("obj130_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 130) {
				console.warn("de-queueing event obj130." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj130").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj130_onLoad_activeActionGroupIndex = 3;
	





















};
obj131_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj131_onLoad_activeActionGroupIndex = -1;
		$("#obj131").trigger("obj131_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 131) {
				console.warn("de-queueing event obj131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj131_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj131 
move_171();
function move_171() {
	window.obj131_onLoad_runningActionsCount = obj131_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj131");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=20";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj131_onLoad_runningActionsCount = window.obj131_onLoad_runningActionsCount - 1;
if (window.obj131_onLoad_runningActionsCount < 0) {
	window.obj131_onLoad_runningActionsCount = 0;
} else if (window.obj131_onLoad_runningActionsCount == 0) {
	obj131_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj131_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj131_onLoad_activeActionGroupIndex = -1;
		$("#obj131").trigger("obj131_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 131) {
				console.warn("de-queueing event obj131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj131_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj131 
move_806();
function move_806() {
	window.obj131_onLoad_runningActionsCount = obj131_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj131");
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
			window.obj131_onLoad_runningActionsCount = window.obj131_onLoad_runningActionsCount - 1;
if (window.obj131_onLoad_runningActionsCount < 0) {
	window.obj131_onLoad_runningActionsCount = 0;
} else if (window.obj131_onLoad_runningActionsCount == 0) {
	obj131_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj131_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj131_onLoad_activeActionGroupIndex = -1;
		$("#obj131").trigger("obj131_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 131) {
				console.warn("de-queueing event obj131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj131_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj131_onLoad();
function loop_obj131_onLoad() {
	var loopCount = 0;
	window.obj131_onLoad_loopCount = window.obj131_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj131_onLoad_loopCount > loopCount) {
		window.obj131_onLoad_loopCount = 0
		obj131_onLoad_actionGroup3();
	} else {
		obj131_onLoad_actionGroup0();
	}
}













};
obj131_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj131_onLoad_activeActionGroupIndex = -1;
		$("#obj131").trigger("obj131_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 131) {
				console.warn("de-queueing event obj131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj131_onLoad_activeActionGroupIndex = 3;
	





















};
obj788_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj788_onTap_activeActionGroupIndex = -1;
		$("#obj788").trigger("obj788_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 788) {
				console.warn("de-queueing event obj788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj788_onTap_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj140 
scale_790();
function scale_790() {
	window.obj788_onTap_runningActionsCount = obj788_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj140";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj140';
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
		scale_790_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_790_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_790_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_790_completed() {
	setTimeout(function() {
		window.obj788_onTap_runningActionsCount = window.obj788_onTap_runningActionsCount - 1;
if (window.obj788_onTap_runningActionsCount < 0) {
	window.obj788_onTap_runningActionsCount = 0;
} else if (window.obj788_onTap_runningActionsCount == 0) {
	obj788_onTap_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj144 
scale_791();
function scale_791() {
	window.obj788_onTap_runningActionsCount = obj788_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj144";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj144';
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
		scale_791_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_791_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_791_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_791_completed() {
	setTimeout(function() {
		window.obj788_onTap_runningActionsCount = window.obj788_onTap_runningActionsCount - 1;
if (window.obj788_onTap_runningActionsCount < 0) {
	window.obj788_onTap_runningActionsCount = 0;
} else if (window.obj788_onTap_runningActionsCount == 0) {
	obj788_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj3136 
playAudio_3139();
function playAudio_3139() {
	window.obj788_onTap_runningActionsCount = obj788_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3136")[0];
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
		    window.obj788_onTap_runningActionsCount = window.obj788_onTap_runningActionsCount - 1;
if (window.obj788_onTap_runningActionsCount < 0) {
	window.obj788_onTap_runningActionsCount = 0;
} else if (window.obj788_onTap_runningActionsCount == 0) {
	obj788_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj788_onTap_runningActionsCount = window.obj788_onTap_runningActionsCount - 1;
if (window.obj788_onTap_runningActionsCount < 0) {
	window.obj788_onTap_runningActionsCount = 0;
} else if (window.obj788_onTap_runningActionsCount == 0) {
	obj788_onTap_actionGroup1();
}
	}
}









};
obj788_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj788_onTap_activeActionGroupIndex = -1;
		$("#obj788").trigger("obj788_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 788) {
				console.warn("de-queueing event obj788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj788_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj140 
scale_792();
function scale_792() {
	window.obj788_onTap_runningActionsCount = obj788_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj140";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj140';
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
		scale_792_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_792_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_792_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_792_completed() {
	setTimeout(function() {
		window.obj788_onTap_runningActionsCount = window.obj788_onTap_runningActionsCount - 1;
if (window.obj788_onTap_runningActionsCount < 0) {
	window.obj788_onTap_runningActionsCount = 0;
} else if (window.obj788_onTap_runningActionsCount == 0) {
	obj788_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj144 
scale_793();
function scale_793() {
	window.obj788_onTap_runningActionsCount = obj788_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj144";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj144';
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
		scale_793_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_793_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_793_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_793_completed() {
	setTimeout(function() {
		window.obj788_onTap_runningActionsCount = window.obj788_onTap_runningActionsCount - 1;
if (window.obj788_onTap_runningActionsCount < 0) {
	window.obj788_onTap_runningActionsCount = 0;
} else if (window.obj788_onTap_runningActionsCount == 0) {
	obj788_onTap_actionGroup2();
}
	}, 1);
}












};
obj788_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj788_onTap_activeActionGroupIndex = -1;
		$("#obj788").trigger("obj788_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 788) {
				console.warn("de-queueing event obj788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj788_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_794();
function runjs_794() {
	window.obj788_onTap_runningActionsCount = obj788_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj846"));
	
	setTimeout(function() {
		window.obj788_onTap_runningActionsCount = window.obj788_onTap_runningActionsCount - 1;
if (window.obj788_onTap_runningActionsCount < 0) {
	window.obj788_onTap_runningActionsCount = 0;
} else if (window.obj788_onTap_runningActionsCount == 0) {
	obj788_onTap_actionGroup3();
}
	}, 1);
}







};
obj788_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj788_onTap_activeActionGroupIndex = -1;
		$("#obj788").trigger("obj788_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 788) {
				console.warn("de-queueing event obj788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj788_onTap_activeActionGroupIndex = 3;
	

//	action: show 
//	selector: #obj846
(function(){
	window.obj788_onTap_runningActionsCount = obj788_onTap_runningActionsCount + 1;

	var selector = "#obj846";
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
					window.obj788_onTap_runningActionsCount = window.obj788_onTap_runningActionsCount - 1;
if (window.obj788_onTap_runningActionsCount < 0) {
	window.obj788_onTap_runningActionsCount = 0;
} else if (window.obj788_onTap_runningActionsCount == 0) {
	obj788_onTap_actionGroup4();
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
				window.obj788_onTap_runningActionsCount = window.obj788_onTap_runningActionsCount - 1;
if (window.obj788_onTap_runningActionsCount < 0) {
	window.obj788_onTap_runningActionsCount = 0;
} else if (window.obj788_onTap_runningActionsCount == 0) {
	obj788_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj788_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj788_onTap_activeActionGroupIndex = -1;
		$("#obj788").trigger("obj788_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 788) {
				console.warn("de-queueing event obj788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj788_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_799();
function goToPage_799() {
	window.obj788_onTap_runningActionsCount = obj788_onTap_runningActionsCount + 1;
	$("#anchor29")[0].click();
	window.obj788_onTap_runningActionsCount = window.obj788_onTap_runningActionsCount - 1;
if (window.obj788_onTap_runningActionsCount < 0) {
	window.obj788_onTap_runningActionsCount = 0;
} else if (window.obj788_onTap_runningActionsCount == 0) {
	obj788_onTap_actionGroup5();
}
}





















};
obj788_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj788_onTap_activeActionGroupIndex = -1;
		$("#obj788").trigger("obj788_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 788) {
				console.warn("de-queueing event obj788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj788_onTap_activeActionGroupIndex = 5;
	





















};
obj142_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj142_onLoad_activeActionGroupIndex = -1;
		$("#obj142").trigger("obj142_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 142) {
				console.warn("de-queueing event obj142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj142_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_348();
function wait_348() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup1();
}
	}, 2000);
}













};
obj142_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj142_onLoad_activeActionGroupIndex = -1;
		$("#obj142").trigger("obj142_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 142) {
				console.warn("de-queueing event obj142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj142_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj142 
scale_303();
function scale_303() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj142";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj142';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
	var scaleYValue = '1.05';
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
		scale_303_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_303_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_303_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_303_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj136 
scale_308();
function scale_308() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj136";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj136';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
	var scaleYValue = '1.05';
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
		scale_308_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_308_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_308_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_308_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup2();
}
	}, 1);
}












};
obj142_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj142_onLoad_activeActionGroupIndex = -1;
		$("#obj142").trigger("obj142_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 142) {
				console.warn("de-queueing event obj142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj142_onLoad_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj142 
scale_304();
function scale_304() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj142";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj142';
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
		scale_304_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_304_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_304_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_304_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup3();
}
	}, 1);
}
//	action: scale
//	target: obj136 
scale_309();
function scale_309() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj136";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj136';
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
		scale_309_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_309_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_309_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_309_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup3();
}
	}, 1);
}












};
obj142_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj142_onLoad_activeActionGroupIndex = -1;
		$("#obj142").trigger("obj142_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 142) {
				console.warn("de-queueing event obj142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj142_onLoad_activeActionGroupIndex = 3;
	









//	action: scale
//	target: obj142 
scale_336();
function scale_336() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj142";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj142';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
	var scaleYValue = '1.05';
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
		scale_336_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_336_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_336_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_336_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup4();
}
	}, 1);
}
//	action: scale
//	target: obj136 
scale_337();
function scale_337() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj136";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj136';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
	var scaleYValue = '1.05';
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
		scale_337_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_337_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_337_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_337_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup4();
}
	}, 1);
}












};
obj142_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj142_onLoad_activeActionGroupIndex = -1;
		$("#obj142").trigger("obj142_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 142) {
				console.warn("de-queueing event obj142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj142_onLoad_activeActionGroupIndex = 4;
	









//	action: scale
//	target: obj142 
scale_338();
function scale_338() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj142";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj142';
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
		scale_338_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_338_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_338_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_338_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup5();
}
	}, 1);
}
//	action: scale
//	target: obj136 
scale_339();
function scale_339() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj136";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj136';
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
		scale_339_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_339_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_339_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_339_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup5();
}
	}, 1);
}












};
obj142_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj142_onLoad_activeActionGroupIndex = -1;
		$("#obj142").trigger("obj142_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 142) {
				console.warn("de-queueing event obj142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj142_onLoad_activeActionGroupIndex = 5;
	









//	action: scale
//	target: obj144 
scale_340();
function scale_340() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj144";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj144';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
	var scaleYValue = '1.05';
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
		scale_340_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_340_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_340_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_340_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup6();
}
	}, 1);
}
//	action: scale
//	target: obj140 
scale_349();
function scale_349() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj140";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj140';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
	var scaleYValue = '1.05';
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
		scale_349_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_349_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_349_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_349_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup6();
}
	}, 1);
}












};
obj142_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj142_onLoad_activeActionGroupIndex = -1;
		$("#obj142").trigger("obj142_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 142) {
				console.warn("de-queueing event obj142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj142_onLoad_activeActionGroupIndex = 6;
	









//	action: scale
//	target: obj144 
scale_342();
function scale_342() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj144";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj144';
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
		scale_342_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_342_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_342_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_342_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup7();
}
	}, 1);
}
//	action: scale
//	target: obj140 
scale_350();
function scale_350() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj140";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj140';
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
		scale_350_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_350_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_350_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_350_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup7();
}
	}, 1);
}












};
obj142_onLoad_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj142_onLoad_activeActionGroupIndex = -1;
		$("#obj142").trigger("obj142_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 142) {
				console.warn("de-queueing event obj142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj142_onLoad_activeActionGroupIndex = 7;
	









//	action: scale
//	target: obj144 
scale_351();
function scale_351() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj144";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj144';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
	var scaleYValue = '1.05';
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
		scale_351_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_351_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_351_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_351_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup8();
}
	}, 1);
}
//	action: scale
//	target: obj140 
scale_352();
function scale_352() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj140";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj140';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
	var scaleYValue = '1.05';
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
		scale_352_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_352_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_352_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_352_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup8();
}
	}, 1);
}












};
obj142_onLoad_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj142_onLoad_activeActionGroupIndex = -1;
		$("#obj142").trigger("obj142_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 142) {
				console.warn("de-queueing event obj142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj142_onLoad_activeActionGroupIndex = 8;
	









//	action: scale
//	target: obj144 
scale_353();
function scale_353() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj144";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj144';
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
		scale_353_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_353_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_353_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_353_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup9();
}
	}, 1);
}
//	action: scale
//	target: obj140 
scale_354();
function scale_354() {
	window.obj142_onLoad_runningActionsCount = obj142_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj140";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj140';
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
		scale_354_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_354_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_354_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_354_completed() {
	setTimeout(function() {
		window.obj142_onLoad_runningActionsCount = window.obj142_onLoad_runningActionsCount - 1;
if (window.obj142_onLoad_runningActionsCount < 0) {
	window.obj142_onLoad_runningActionsCount = 0;
} else if (window.obj142_onLoad_runningActionsCount == 0) {
	obj142_onLoad_actionGroup9();
}
	}, 1);
}












};
obj142_onLoad_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj142_onLoad_activeActionGroupIndex = -1;
		$("#obj142").trigger("obj142_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 142) {
				console.warn("de-queueing event obj142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj142_onLoad_activeActionGroupIndex = 9;
	





















};
obj287_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj287_onTap_activeActionGroupIndex = -1;
		$("#obj287").trigger("obj287_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 287) {
				console.warn("de-queueing event obj287." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj287").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj287_onTap_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj136 
scale_637();
function scale_637() {
	window.obj287_onTap_runningActionsCount = obj287_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj136";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj136';
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
		scale_637_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_637_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_637_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_637_completed() {
	setTimeout(function() {
		window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount < 0) {
	window.obj287_onTap_runningActionsCount = 0;
} else if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj142 
scale_638();
function scale_638() {
	window.obj287_onTap_runningActionsCount = obj287_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj142";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj142';
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
		scale_638_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_638_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_638_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_638_completed() {
	setTimeout(function() {
		window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount < 0) {
	window.obj287_onTap_runningActionsCount = 0;
} else if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj3136 
playAudio_3138();
function playAudio_3138() {
	window.obj287_onTap_runningActionsCount = obj287_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3136")[0];
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
		    window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount < 0) {
	window.obj287_onTap_runningActionsCount = 0;
} else if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount < 0) {
	window.obj287_onTap_runningActionsCount = 0;
} else if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup1();
}
	}
}









};
obj287_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj287_onTap_activeActionGroupIndex = -1;
		$("#obj287").trigger("obj287_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 287) {
				console.warn("de-queueing event obj287." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj287").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj287_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj136 
scale_639();
function scale_639() {
	window.obj287_onTap_runningActionsCount = obj287_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj136";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj136';
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
		scale_639_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_639_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_639_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_639_completed() {
	setTimeout(function() {
		window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount < 0) {
	window.obj287_onTap_runningActionsCount = 0;
} else if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj142 
scale_640();
function scale_640() {
	window.obj287_onTap_runningActionsCount = obj287_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj142";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj142';
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
		scale_640_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_640_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_640_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_640_completed() {
	setTimeout(function() {
		window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount < 0) {
	window.obj287_onTap_runningActionsCount = 0;
} else if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup2();
}
	}, 1);
}












};
obj287_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj287_onTap_activeActionGroupIndex = -1;
		$("#obj287").trigger("obj287_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 287) {
				console.warn("de-queueing event obj287." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj287").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj287_onTap_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_298();
function runjs_298() {
	window.obj287_onTap_runningActionsCount = obj287_onTap_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj846"));
	
	setTimeout(function() {
		window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount < 0) {
	window.obj287_onTap_runningActionsCount = 0;
} else if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup3();
}
	}, 1);
}







};
obj287_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj287_onTap_activeActionGroupIndex = -1;
		$("#obj287").trigger("obj287_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 287) {
				console.warn("de-queueing event obj287." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj287").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj287_onTap_activeActionGroupIndex = 3;
	

//	action: show 
//	selector: #obj846
(function(){
	window.obj287_onTap_runningActionsCount = obj287_onTap_runningActionsCount + 1;

	var selector = "#obj846";
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
					window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount < 0) {
	window.obj287_onTap_runningActionsCount = 0;
} else if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup4();
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
				window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount < 0) {
	window.obj287_onTap_runningActionsCount = 0;
} else if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj287_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj287_onTap_activeActionGroupIndex = -1;
		$("#obj287").trigger("obj287_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 287) {
				console.warn("de-queueing event obj287." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj287").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj287_onTap_activeActionGroupIndex = 4;
	
//	action: goToPage
goToPage_300();
function goToPage_300() {
	window.obj287_onTap_runningActionsCount = obj287_onTap_runningActionsCount + 1;
	$("#anchor30")[0].click();
	window.obj287_onTap_runningActionsCount = window.obj287_onTap_runningActionsCount - 1;
if (window.obj287_onTap_runningActionsCount < 0) {
	window.obj287_onTap_runningActionsCount = 0;
} else if (window.obj287_onTap_runningActionsCount == 0) {
	obj287_onTap_actionGroup5();
}
}





















};
obj287_onTap_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj287_onTap_activeActionGroupIndex = -1;
		$("#obj287").trigger("obj287_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 287) {
				console.warn("de-queueing event obj287." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj287").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj287_onTap_activeActionGroupIndex = 5;
	





















};
obj846_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj846_onLoad_activeActionGroupIndex = -1;
		$("#obj846").trigger("obj846_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 846) {
				console.warn("de-queueing event obj846." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj846").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj846_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj846 
hide_849();
function hide_849() {
	var selector = "#obj846";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj846_onLoad_runningActionsCount = obj846_onLoad_runningActionsCount + 1;
	
	var animationType = "slideOutLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj846_onLoad_runningActionsCount = window.obj846_onLoad_runningActionsCount - 1;
if (window.obj846_onLoad_runningActionsCount < 0) {
	window.obj846_onLoad_runningActionsCount = 0;
} else if (window.obj846_onLoad_runningActionsCount == 0) {
	obj846_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_849(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj846_onLoad_runningActionsCount = window.obj846_onLoad_runningActionsCount - 1;
if (window.obj846_onLoad_runningActionsCount < 0) {
	window.obj846_onLoad_runningActionsCount = 0;
} else if (window.obj846_onLoad_runningActionsCount == 0) {
	obj846_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj846_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj846_onLoad_activeActionGroupIndex = -1;
		$("#obj846").trigger("obj846_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 846) {
				console.warn("de-queueing event obj846." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj846").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj846_onLoad_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_850();
function runjs_850() {
	window.obj846_onLoad_runningActionsCount = obj846_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj846"));
	
	setTimeout(function() {
		window.obj846_onLoad_runningActionsCount = window.obj846_onLoad_runningActionsCount - 1;
if (window.obj846_onLoad_runningActionsCount < 0) {
	window.obj846_onLoad_runningActionsCount = 0;
} else if (window.obj846_onLoad_runningActionsCount == 0) {
	obj846_onLoad_actionGroup2();
}
	}, 1);
}







};
obj846_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj846_onLoad_activeActionGroupIndex = -1;
		$("#obj846").trigger("obj846_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 846) {
				console.warn("de-queueing event obj846." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj846").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj846_onLoad_activeActionGroupIndex = 2;
	





















};
obj1823_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1823_onLoad_activeActionGroupIndex = -1;
		$("#obj1823").trigger("obj1823_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1823) {
				console.warn("de-queueing event obj1823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1823_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj1823 
playAudio_1825();
function playAudio_1825() {
	window.obj1823_onLoad_runningActionsCount = obj1823_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj1823")[0];
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
		    window.obj1823_onLoad_runningActionsCount = window.obj1823_onLoad_runningActionsCount - 1;
if (window.obj1823_onLoad_runningActionsCount < 0) {
	window.obj1823_onLoad_runningActionsCount = 0;
} else if (window.obj1823_onLoad_runningActionsCount == 0) {
	obj1823_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1823_onLoad_runningActionsCount = window.obj1823_onLoad_runningActionsCount - 1;
if (window.obj1823_onLoad_runningActionsCount < 0) {
	window.obj1823_onLoad_runningActionsCount = 0;
} else if (window.obj1823_onLoad_runningActionsCount == 0) {
	obj1823_onLoad_actionGroup1();
}
	}
}









};
obj1823_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1823_onLoad_activeActionGroupIndex = -1;
		$("#obj1823").trigger("obj1823_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1823) {
				console.warn("de-queueing event obj1823." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1823").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1823_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj130: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj130_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj130_onLoad is still running");
	return;
}
var obj130_onLoad_runningActionsCount = 0;
var obj130_onLoad_loopCount = 0;
obj130_onLoad_actionGroup0();
});










/*
 *
 *   obj131: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj131_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj131_onLoad is still running");
	return;
}
var obj131_onLoad_runningActionsCount = 0;
var obj131_onLoad_loopCount = 0;
obj131_onLoad_actionGroup0();
});






































/*
 *
 *   obj788: Event Touch Down
 *
 */
$("#obj788").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj788_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj788_onTap is still running");
	return;
}
var obj788_onTap_runningActionsCount = 0;
var obj788_onTap_loopCount = 0;
obj788_onTap_actionGroup0();
});






















/*
 *
 *   obj142: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj142_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj142_onLoad is still running");
	return;
}
var obj142_onLoad_runningActionsCount = 0;
var obj142_onLoad_loopCount = 0;
obj142_onLoad_actionGroup0();
});








/*
 *
 *   obj287: Event Touch Down
 *
 */
$("#obj287").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj287_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj287_onTap is still running");
	return;
}
var obj287_onTap_runningActionsCount = 0;
var obj287_onTap_loopCount = 0;
obj287_onTap_actionGroup0();
});












/*
 *
 *   obj846: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj846_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj846_onLoad is still running");
	return;
}
var obj846_onLoad_runningActionsCount = 0;
var obj846_onLoad_loopCount = 0;
obj846_onLoad_actionGroup0();
});




















/*
 *
 *   obj1823: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1823_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1823_onLoad is still running");
	return;
}
var obj1823_onLoad_runningActionsCount = 0;
var obj1823_onLoad_loopCount = 0;
obj1823_onLoad_actionGroup0();
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
	
$("#obj129").trigger('SCEventShow');
$("#obj130").trigger('SCEventShow');
$("#obj131").trigger('SCEventShow');
$("#obj134").trigger('SCEventShow');
$("#obj140").trigger('SCEventShow');
$("#obj144").trigger('SCEventShow');
$("#obj788").trigger('SCEventShow');
$("#obj136").trigger('SCEventShow');
$("#obj142").trigger('SCEventShow');
$("#obj287").trigger('SCEventShow');
$("#obj846").trigger('SCEventShow');
$("#obj886").trigger('SCEventShow');
$("#obj1823").trigger('SCEventShow');
$("#obj3136").trigger('SCEventShow');
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