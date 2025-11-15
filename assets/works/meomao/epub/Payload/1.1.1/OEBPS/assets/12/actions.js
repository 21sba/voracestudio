pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 1552;
pubcoder.page.title = pubcoder.page.title || "12";
pubcoder.page.number = pubcoder.page.number || 12;
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
var obj1587_onTap_activeActionGroupIndex = -1;
var obj1587_onTap_runningActionsCount = 0;
var obj1587_onTap_loopCount = 0;
var obj1587_onLoad_activeActionGroupIndex = -1;
var obj1587_onLoad_runningActionsCount = 0;
var obj1587_onLoad_loopCount = 0;
var obj1588_onLoad_activeActionGroupIndex = -1;
var obj1588_onLoad_runningActionsCount = 0;
var obj1588_onLoad_loopCount = 0;
var obj1577_onLoad_activeActionGroupIndex = -1;
var obj1577_onLoad_runningActionsCount = 0;
var obj1577_onLoad_loopCount = 0;
var obj1611_SCEventRun_activeActionGroupIndex = -1;
var obj1611_SCEventRun_runningActionsCount = 0;
var obj1611_SCEventRun_loopCount = 0;
var obj1614_SCEventRun_activeActionGroupIndex = -1;
var obj1614_SCEventRun_runningActionsCount = 0;
var obj1614_SCEventRun_loopCount = 0;
var obj1964_onLoad_activeActionGroupIndex = -1;
var obj1964_onLoad_runningActionsCount = 0;
var obj1964_onLoad_loopCount = 0;
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
		
obj1587_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1587_onTap_activeActionGroupIndex = -1;
		$("#obj1587").trigger("obj1587_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1587) {
				console.warn("de-queueing event obj1587." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1587").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1587_onTap_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj3169 
playAudio_3171();
function playAudio_3171() {
	window.obj1587_onTap_runningActionsCount = obj1587_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3169")[0];
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
		    window.obj1587_onTap_runningActionsCount = window.obj1587_onTap_runningActionsCount - 1;
if (window.obj1587_onTap_runningActionsCount < 0) {
	window.obj1587_onTap_runningActionsCount = 0;
} else if (window.obj1587_onTap_runningActionsCount == 0) {
	obj1587_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1587_onTap_runningActionsCount = window.obj1587_onTap_runningActionsCount - 1;
if (window.obj1587_onTap_runningActionsCount < 0) {
	window.obj1587_onTap_runningActionsCount = 0;
} else if (window.obj1587_onTap_runningActionsCount == 0) {
	obj1587_onTap_actionGroup1();
}
	}
}





//	action: run action list container
//	target: obj1611 
runActionList_1613();
function runActionList_1613() {
	window.obj1587_onTap_runningActionsCount = obj1587_onTap_runningActionsCount + 1;
	$("#obj1611").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1587_onTap_runningActionsCount = window.obj1587_onTap_runningActionsCount - 1;
if (window.obj1587_onTap_runningActionsCount < 0) {
	window.obj1587_onTap_runningActionsCount = 0;
} else if (window.obj1587_onTap_runningActionsCount == 0) {
	obj1587_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1587_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1587_onTap_activeActionGroupIndex = -1;
		$("#obj1587").trigger("obj1587_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1587) {
				console.warn("de-queueing event obj1587." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1587").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1587_onTap_activeActionGroupIndex = 1;
	





















};
obj1587_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1587_onLoad_activeActionGroupIndex = -1;
		$("#obj1587").trigger("obj1587_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1587) {
				console.warn("de-queueing event obj1587." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1587").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1587_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1587 
rotate_1624();
function rotate_1624() {
	window.obj1587_onLoad_runningActionsCount = obj1587_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1587";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1587';
	var transformOriginX = '100%';
	var transformOriginY = '0%';
	var rotationToDegrees = '5';
	var rotationSpeed = 0;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1624_completed(); }
	//TweenMax.to(targetObjectId, 0, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1624_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1624_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1624_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1624_completed() {
	setTimeout(function() {
		window.obj1587_onLoad_runningActionsCount = window.obj1587_onLoad_runningActionsCount - 1;
if (window.obj1587_onLoad_runningActionsCount < 0) {
	window.obj1587_onLoad_runningActionsCount = 0;
} else if (window.obj1587_onLoad_runningActionsCount == 0) {
	obj1587_onLoad_actionGroup1();
}
	}, 1);
}














};
obj1587_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1587_onLoad_activeActionGroupIndex = -1;
		$("#obj1587").trigger("obj1587_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1587) {
				console.warn("de-queueing event obj1587." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1587").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1587_onLoad_activeActionGroupIndex = 1;
	





















};
obj1588_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1588_onLoad_activeActionGroupIndex = -1;
		$("#obj1588").trigger("obj1588_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1588) {
				console.warn("de-queueing event obj1588." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1588").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1588_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1588 
scale_1628();
function scale_1628() {
	window.obj1588_onLoad_runningActionsCount = obj1588_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1588";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1588';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1.05';
	var effectDuration = '3';
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
		scale_1628_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1628_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1628_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1628_completed() {
	setTimeout(function() {
		window.obj1588_onLoad_runningActionsCount = window.obj1588_onLoad_runningActionsCount - 1;
if (window.obj1588_onLoad_runningActionsCount < 0) {
	window.obj1588_onLoad_runningActionsCount = 0;
} else if (window.obj1588_onLoad_runningActionsCount == 0) {
	obj1588_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1588_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1588_onLoad_activeActionGroupIndex = -1;
		$("#obj1588").trigger("obj1588_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1588) {
				console.warn("de-queueing event obj1588." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1588").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1588_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1588 
scale_1629();
function scale_1629() {
	window.obj1588_onLoad_runningActionsCount = obj1588_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1588";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1588';
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
		scale_1629_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1629_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1629_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1629_completed() {
	setTimeout(function() {
		window.obj1588_onLoad_runningActionsCount = window.obj1588_onLoad_runningActionsCount - 1;
if (window.obj1588_onLoad_runningActionsCount < 0) {
	window.obj1588_onLoad_runningActionsCount = 0;
} else if (window.obj1588_onLoad_runningActionsCount == 0) {
	obj1588_onLoad_actionGroup2();
}
	}, 1);
}












};
obj1588_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1588_onLoad_activeActionGroupIndex = -1;
		$("#obj1588").trigger("obj1588_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1588) {
				console.warn("de-queueing event obj1588." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1588").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1588_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1588_onLoad();
function loop_obj1588_onLoad() {
	var loopCount = 0;
	window.obj1588_onLoad_loopCount = window.obj1588_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1588_onLoad_loopCount > loopCount) {
		window.obj1588_onLoad_loopCount = 0
		obj1588_onLoad_actionGroup3();
	} else {
		obj1588_onLoad_actionGroup0();
	}
}













};
obj1588_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1588_onLoad_activeActionGroupIndex = -1;
		$("#obj1588").trigger("obj1588_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1588) {
				console.warn("de-queueing event obj1588." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1588").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1588_onLoad_activeActionGroupIndex = 3;
	





















};
obj1577_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1577_onLoad_activeActionGroupIndex = -1;
		$("#obj1577").trigger("obj1577_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1577) {
				console.warn("de-queueing event obj1577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1577_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1577 
hide_1580();
function hide_1580() {
	var selector = "#obj1577";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1577_onLoad_runningActionsCount = obj1577_onLoad_runningActionsCount + 1;
	
	var animationType = "slideOutLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1577_onLoad_runningActionsCount = window.obj1577_onLoad_runningActionsCount - 1;
if (window.obj1577_onLoad_runningActionsCount < 0) {
	window.obj1577_onLoad_runningActionsCount = 0;
} else if (window.obj1577_onLoad_runningActionsCount == 0) {
	obj1577_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1580(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1577_onLoad_runningActionsCount = window.obj1577_onLoad_runningActionsCount - 1;
if (window.obj1577_onLoad_runningActionsCount < 0) {
	window.obj1577_onLoad_runningActionsCount = 0;
} else if (window.obj1577_onLoad_runningActionsCount == 0) {
	obj1577_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj1577_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1577_onLoad_activeActionGroupIndex = -1;
		$("#obj1577").trigger("obj1577_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1577) {
				console.warn("de-queueing event obj1577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1577_onLoad_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1581();
function runjs_1581() {
	window.obj1577_onLoad_runningActionsCount = obj1577_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj1577"));
	
	setTimeout(function() {
		window.obj1577_onLoad_runningActionsCount = window.obj1577_onLoad_runningActionsCount - 1;
if (window.obj1577_onLoad_runningActionsCount < 0) {
	window.obj1577_onLoad_runningActionsCount = 0;
} else if (window.obj1577_onLoad_runningActionsCount == 0) {
	obj1577_onLoad_actionGroup2();
}
	}, 1);
}







};
obj1577_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1577_onLoad_activeActionGroupIndex = -1;
		$("#obj1577").trigger("obj1577_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1577) {
				console.warn("de-queueing event obj1577." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1577").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1577_onLoad_activeActionGroupIndex = 2;
	





















};
obj1611_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1611_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1611").trigger("obj1611_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1611) {
				console.warn("de-queueing event obj1611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1611_SCEventRun_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1588 
move_1630();
function move_1630() {
	window.obj1611_SCEventRun_runningActionsCount = obj1611_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1588");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-632";
	var moveY = "+=244";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1611_SCEventRun_runningActionsCount = window.obj1611_SCEventRun_runningActionsCount - 1;
if (window.obj1611_SCEventRun_runningActionsCount < 0) {
	window.obj1611_SCEventRun_runningActionsCount = 0;
} else if (window.obj1611_SCEventRun_runningActionsCount == 0) {
	obj1611_SCEventRun_actionGroup1();
}
		}, 1);
	});
}







//	action: scale
//	target: obj1587 
scale_1620();
function scale_1620() {
	window.obj1611_SCEventRun_runningActionsCount = obj1611_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj1587";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1587';
	var transformOriginX = '100%';
	var transformOriginY = '0%';
	var scaleXValue = '1.3';
	var scaleYValue = '1.3';
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
		scale_1620_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1620_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1620_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1620_completed() {
	setTimeout(function() {
		window.obj1611_SCEventRun_runningActionsCount = window.obj1611_SCEventRun_runningActionsCount - 1;
if (window.obj1611_SCEventRun_runningActionsCount < 0) {
	window.obj1611_SCEventRun_runningActionsCount = 0;
} else if (window.obj1611_SCEventRun_runningActionsCount == 0) {
	obj1611_SCEventRun_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj1586 
scale_1621();
function scale_1621() {
	window.obj1611_SCEventRun_runningActionsCount = obj1611_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj1586";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1586';
	var transformOriginX = '100%';
	var transformOriginY = '0%';
	var scaleXValue = '1.2';
	var scaleYValue = '1.2';
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
		scale_1621_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1621_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1621_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1621_completed() {
	setTimeout(function() {
		window.obj1611_SCEventRun_runningActionsCount = window.obj1611_SCEventRun_runningActionsCount - 1;
if (window.obj1611_SCEventRun_runningActionsCount < 0) {
	window.obj1611_SCEventRun_runningActionsCount = 0;
} else if (window.obj1611_SCEventRun_runningActionsCount == 0) {
	obj1611_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj1611_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1611_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1611").trigger("obj1611_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1611) {
				console.warn("de-queueing event obj1611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1611_SCEventRun_activeActionGroupIndex = 1;
	


















//	action: run action list container
//	target: obj1614 
runActionList_1619();
function runActionList_1619() {
	window.obj1611_SCEventRun_runningActionsCount = obj1611_SCEventRun_runningActionsCount + 1;
	$("#obj1614").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1611_SCEventRun_runningActionsCount = window.obj1611_SCEventRun_runningActionsCount - 1;
if (window.obj1611_SCEventRun_runningActionsCount < 0) {
	window.obj1611_SCEventRun_runningActionsCount = 0;
} else if (window.obj1611_SCEventRun_runningActionsCount == 0) {
	obj1611_SCEventRun_actionGroup2();
}		
	}, 1);
}



};
obj1611_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1611_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1611").trigger("obj1611_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1611) {
				console.warn("de-queueing event obj1611." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1611").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1611_SCEventRun_activeActionGroupIndex = 2;
	





















};
obj1614_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1614_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1614").trigger("obj1614_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1614) {
				console.warn("de-queueing event obj1614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1614_SCEventRun_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1616();
function runjs_1616() {
	window.obj1614_SCEventRun_runningActionsCount = obj1614_SCEventRun_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1577"));
	
	setTimeout(function() {
		window.obj1614_SCEventRun_runningActionsCount = window.obj1614_SCEventRun_runningActionsCount - 1;
if (window.obj1614_SCEventRun_runningActionsCount < 0) {
	window.obj1614_SCEventRun_runningActionsCount = 0;
} else if (window.obj1614_SCEventRun_runningActionsCount == 0) {
	obj1614_SCEventRun_actionGroup1();
}
	}, 1);
}







};
obj1614_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1614_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1614").trigger("obj1614_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1614) {
				console.warn("de-queueing event obj1614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1614_SCEventRun_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj1577
(function(){
	window.obj1614_SCEventRun_runningActionsCount = obj1614_SCEventRun_runningActionsCount + 1;

	var selector = "#obj1577";
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
					window.obj1614_SCEventRun_runningActionsCount = window.obj1614_SCEventRun_runningActionsCount - 1;
if (window.obj1614_SCEventRun_runningActionsCount < 0) {
	window.obj1614_SCEventRun_runningActionsCount = 0;
} else if (window.obj1614_SCEventRun_runningActionsCount == 0) {
	obj1614_SCEventRun_actionGroup2();
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
				window.obj1614_SCEventRun_runningActionsCount = window.obj1614_SCEventRun_runningActionsCount - 1;
if (window.obj1614_SCEventRun_runningActionsCount < 0) {
	window.obj1614_SCEventRun_runningActionsCount = 0;
} else if (window.obj1614_SCEventRun_runningActionsCount == 0) {
	obj1614_SCEventRun_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj1614_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1614_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1614").trigger("obj1614_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1614) {
				console.warn("de-queueing event obj1614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1614_SCEventRun_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_1618();
function goToPage_1618() {
	window.obj1614_SCEventRun_runningActionsCount = obj1614_SCEventRun_runningActionsCount + 1;
	$("#anchor56")[0].click();
	window.obj1614_SCEventRun_runningActionsCount = window.obj1614_SCEventRun_runningActionsCount - 1;
if (window.obj1614_SCEventRun_runningActionsCount < 0) {
	window.obj1614_SCEventRun_runningActionsCount = 0;
} else if (window.obj1614_SCEventRun_runningActionsCount == 0) {
	obj1614_SCEventRun_actionGroup3();
}
}





















};
obj1614_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1614_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1614").trigger("obj1614_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1614) {
				console.warn("de-queueing event obj1614." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1614").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1614_SCEventRun_activeActionGroupIndex = 3;
	





















};
obj1964_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1964_onLoad_activeActionGroupIndex = -1;
		$("#obj1964").trigger("obj1964_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1964) {
				console.warn("de-queueing event obj1964." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1964").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1964_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj1964 
playAudio_1966();
function playAudio_1966() {
	window.obj1964_onLoad_runningActionsCount = obj1964_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj1964")[0];
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
		    window.obj1964_onLoad_runningActionsCount = window.obj1964_onLoad_runningActionsCount - 1;
if (window.obj1964_onLoad_runningActionsCount < 0) {
	window.obj1964_onLoad_runningActionsCount = 0;
} else if (window.obj1964_onLoad_runningActionsCount == 0) {
	obj1964_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1964_onLoad_runningActionsCount = window.obj1964_onLoad_runningActionsCount - 1;
if (window.obj1964_onLoad_runningActionsCount < 0) {
	window.obj1964_onLoad_runningActionsCount = 0;
} else if (window.obj1964_onLoad_runningActionsCount == 0) {
	obj1964_onLoad_actionGroup1();
}
	}
}









};
obj1964_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1964_onLoad_activeActionGroupIndex = -1;
		$("#obj1964").trigger("obj1964_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1964) {
				console.warn("de-queueing event obj1964." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1964").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1964_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj1587: Event Touch Down
 *
 */
$("#obj1587").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1587_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1587_onTap is still running");
	return;
}
var obj1587_onTap_runningActionsCount = 0;
var obj1587_onTap_loopCount = 0;
obj1587_onTap_actionGroup0();
});


/*
 *
 *   obj1587: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1587_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1587_onLoad is still running");
	return;
}
var obj1587_onLoad_runningActionsCount = 0;
var obj1587_onLoad_loopCount = 0;
obj1587_onLoad_actionGroup0();
});










/*
 *
 *   obj1588: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1588_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1588_onLoad is still running");
	return;
}
var obj1588_onLoad_runningActionsCount = 0;
var obj1588_onLoad_loopCount = 0;
obj1588_onLoad_actionGroup0();
});






























/*
 *
 *   obj1577: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1577_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1577_onLoad is still running");
	return;
}
var obj1577_onLoad_runningActionsCount = 0;
var obj1577_onLoad_loopCount = 0;
obj1577_onLoad_actionGroup0();
});












/*
 *
 *   obj1611: Event SCEventRun
 *
 */
$("#obj1611").bind("SCEventRun", function(event) {
	if (window.obj1611_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1611_SCEventRun is still running");
	return;
}
var obj1611_SCEventRun_runningActionsCount = 0;
var obj1611_SCEventRun_loopCount = 0;
obj1611_SCEventRun_actionGroup0();
});










/*
 *
 *   obj1614: Event SCEventRun
 *
 */
$("#obj1614").bind("SCEventRun", function(event) {
	if (window.obj1614_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1614_SCEventRun is still running");
	return;
}
var obj1614_SCEventRun_runningActionsCount = 0;
var obj1614_SCEventRun_loopCount = 0;
obj1614_SCEventRun_actionGroup0();
});







/*
 *
 *   obj1964: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1964_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1964_onLoad is still running");
	return;
}
var obj1964_onLoad_runningActionsCount = 0;
var obj1964_onLoad_loopCount = 0;
obj1964_onLoad_actionGroup0();
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
	
$("#obj1586").trigger('SCEventShow');
$("#obj1587").trigger('SCEventShow');
$("#obj1588").trigger('SCEventShow');
$("#obj1592").trigger('SCEventShow');
$("#obj1575").trigger('SCEventShow');
$("#obj1577").trigger('SCEventShow');
$("#obj1964").trigger('SCEventShow');
$("#obj3169").trigger('SCEventShow');
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