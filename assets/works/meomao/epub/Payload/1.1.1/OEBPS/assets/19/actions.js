pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 2414;
pubcoder.page.title = pubcoder.page.title || "19";
pubcoder.page.number = pubcoder.page.number || 19;
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
var obj2418_onLoad_activeActionGroupIndex = -1;
var obj2418_onLoad_runningActionsCount = 0;
var obj2418_onLoad_loopCount = 0;
var obj2444_onLoad_activeActionGroupIndex = -1;
var obj2444_onLoad_runningActionsCount = 0;
var obj2444_onLoad_loopCount = 0;
var obj2440_onTap_activeActionGroupIndex = -1;
var obj2440_onTap_runningActionsCount = 0;
var obj2440_onTap_loopCount = 0;
var obj2434_onLoad_activeActionGroupIndex = -1;
var obj2434_onLoad_runningActionsCount = 0;
var obj2434_onLoad_loopCount = 0;
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
		
obj2418_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2418_onLoad_activeActionGroupIndex = -1;
		$("#obj2418").trigger("obj2418_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2418) {
				console.warn("de-queueing event obj2418." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2418").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2418_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj2418
(function(){
	window.obj2418_onLoad_runningActionsCount = obj2418_onLoad_runningActionsCount + 1;

	var selector = "#obj2418";
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
		var animationDurationMs = 3000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2418_onLoad_runningActionsCount = window.obj2418_onLoad_runningActionsCount - 1;
if (window.obj2418_onLoad_runningActionsCount < 0) {
	window.obj2418_onLoad_runningActionsCount = 0;
} else if (window.obj2418_onLoad_runningActionsCount == 0) {
	obj2418_onLoad_actionGroup1();
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
				window.obj2418_onLoad_runningActionsCount = window.obj2418_onLoad_runningActionsCount - 1;
if (window.obj2418_onLoad_runningActionsCount < 0) {
	window.obj2418_onLoad_runningActionsCount = 0;
} else if (window.obj2418_onLoad_runningActionsCount == 0) {
	obj2418_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2418_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2418_onLoad_activeActionGroupIndex = -1;
		$("#obj2418").trigger("obj2418_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2418) {
				console.warn("de-queueing event obj2418." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2418").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2418_onLoad_activeActionGroupIndex = 1;
	





















};
obj2444_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onLoad_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2444) {
				console.warn("de-queueing event obj2444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2444_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_2454();
function wait_2454() {
	window.obj2444_onLoad_runningActionsCount = obj2444_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;
if (window.obj2444_onLoad_runningActionsCount < 0) {
	window.obj2444_onLoad_runningActionsCount = 0;
} else if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup1();
}
	}, 2000);
}













};
obj2444_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2444_onLoad_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2444) {
				console.warn("de-queueing event obj2444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2444_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj2444
(function(){
	window.obj2444_onLoad_runningActionsCount = obj2444_onLoad_runningActionsCount + 1;

	var selector = "#obj2444";
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
					window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;
if (window.obj2444_onLoad_runningActionsCount < 0) {
	window.obj2444_onLoad_runningActionsCount = 0;
} else if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup2();
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
				window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;
if (window.obj2444_onLoad_runningActionsCount < 0) {
	window.obj2444_onLoad_runningActionsCount = 0;
} else if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2440
(function(){
	window.obj2444_onLoad_runningActionsCount = obj2444_onLoad_runningActionsCount + 1;

	var selector = "#obj2440";
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
					window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;
if (window.obj2444_onLoad_runningActionsCount < 0) {
	window.obj2444_onLoad_runningActionsCount = 0;
} else if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup2();
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
				window.obj2444_onLoad_runningActionsCount = window.obj2444_onLoad_runningActionsCount - 1;
if (window.obj2444_onLoad_runningActionsCount < 0) {
	window.obj2444_onLoad_runningActionsCount = 0;
} else if (window.obj2444_onLoad_runningActionsCount == 0) {
	obj2444_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2444_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2444_onLoad_activeActionGroupIndex = -1;
		$("#obj2444").trigger("obj2444_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2444) {
				console.warn("de-queueing event obj2444." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2444").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2444_onLoad_activeActionGroupIndex = 2;
	





















};
obj2440_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2440_onTap_activeActionGroupIndex = -1;
		$("#obj2440").trigger("obj2440_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2440) {
				console.warn("de-queueing event obj2440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2440_onTap_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj2440 
scale_3214();
function scale_3214() {
	window.obj2440_onTap_runningActionsCount = obj2440_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2440";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2440';
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
		scale_3214_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3214_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3214_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3214_completed() {
	setTimeout(function() {
		window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup1();
}
	}, 1);
}
//	action: scale
//	target: obj2444 
scale_3215();
function scale_3215() {
	window.obj2440_onTap_runningActionsCount = obj2440_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2444";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2444';
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
		scale_3215_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3215_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3215_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3215_completed() {
	setTimeout(function() {
		window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup1();
}
	}, 1);
}



//	action: playAudio
//	target: obj3186 
playAudio_3188();
function playAudio_3188() {
	window.obj2440_onTap_runningActionsCount = obj2440_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3186")[0];
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
		    window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup1();
}
	}
}









};
obj2440_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2440_onTap_activeActionGroupIndex = -1;
		$("#obj2440").trigger("obj2440_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2440) {
				console.warn("de-queueing event obj2440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2440_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj2440 
scale_3217();
function scale_3217() {
	window.obj2440_onTap_runningActionsCount = obj2440_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2440";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2440';
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
		scale_3217_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3217_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3217_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3217_completed() {
	setTimeout(function() {
		window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj2444 
scale_3218();
function scale_3218() {
	window.obj2440_onTap_runningActionsCount = obj2440_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj2444";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2444';
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
		scale_3218_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3218_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_3218_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_3218_completed() {
	setTimeout(function() {
		window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup2();
}
	}, 1);
}












};
obj2440_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2440_onTap_activeActionGroupIndex = -1;
		$("#obj2440").trigger("obj2440_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2440) {
				console.warn("de-queueing event obj2440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2440_onTap_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2418 
hide_2449();
function hide_2449() {
	var selector = "#obj2418";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2440_onTap_runningActionsCount = obj2440_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2449(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2444 
hide_3202();
function hide_3202() {
	var selector = "#obj2444";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2440_onTap_runningActionsCount = obj2440_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3202(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2440 
hide_3203();
function hide_3203() {
	var selector = "#obj2440";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2440_onTap_runningActionsCount = obj2440_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3203(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2440_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2440_onTap_activeActionGroupIndex = -1;
		$("#obj2440").trigger("obj2440_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2440) {
				console.warn("de-queueing event obj2440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2440_onTap_activeActionGroupIndex = 3;
	
//	action: goToPage
goToPage_2451();
function goToPage_2451() {
	window.obj2440_onTap_runningActionsCount = obj2440_onTap_runningActionsCount + 1;
	$("#anchor76")[0].click();
	window.obj2440_onTap_runningActionsCount = window.obj2440_onTap_runningActionsCount - 1;
if (window.obj2440_onTap_runningActionsCount < 0) {
	window.obj2440_onTap_runningActionsCount = 0;
} else if (window.obj2440_onTap_runningActionsCount == 0) {
	obj2440_onTap_actionGroup4();
}
}





















};
obj2440_onTap_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2440_onTap_activeActionGroupIndex = -1;
		$("#obj2440").trigger("obj2440_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2440) {
				console.warn("de-queueing event obj2440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2440_onTap_activeActionGroupIndex = 4;
	





















};
obj2434_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2434_onLoad_activeActionGroupIndex = -1;
		$("#obj2434").trigger("obj2434_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2434) {
				console.warn("de-queueing event obj2434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2434_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj2434 
playAudio_2436();
function playAudio_2436() {
	window.obj2434_onLoad_runningActionsCount = obj2434_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj2434")[0];
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
		    window.obj2434_onLoad_runningActionsCount = window.obj2434_onLoad_runningActionsCount - 1;
if (window.obj2434_onLoad_runningActionsCount < 0) {
	window.obj2434_onLoad_runningActionsCount = 0;
} else if (window.obj2434_onLoad_runningActionsCount == 0) {
	obj2434_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2434_onLoad_runningActionsCount = window.obj2434_onLoad_runningActionsCount - 1;
if (window.obj2434_onLoad_runningActionsCount < 0) {
	window.obj2434_onLoad_runningActionsCount = 0;
} else if (window.obj2434_onLoad_runningActionsCount == 0) {
	obj2434_onLoad_actionGroup1();
}
	}
}









};
obj2434_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2434_onLoad_activeActionGroupIndex = -1;
		$("#obj2434").trigger("obj2434_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2434) {
				console.warn("de-queueing event obj2434." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2434").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2434_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj2418: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2418_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2418_onLoad is still running");
	return;
}
var obj2418_onLoad_runningActionsCount = 0;
var obj2418_onLoad_loopCount = 0;
obj2418_onLoad_actionGroup0();
});










/*
 *
 *   obj2444: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2444_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2444_onLoad is still running");
	return;
}
var obj2444_onLoad_runningActionsCount = 0;
var obj2444_onLoad_loopCount = 0;
obj2444_onLoad_actionGroup0();
});








/*
 *
 *   obj2440: Event Touch Down
 *
 */
$("#obj2440").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2440_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2440_onTap is still running");
	return;
}
var obj2440_onTap_runningActionsCount = 0;
var obj2440_onTap_loopCount = 0;
obj2440_onTap_actionGroup0();
});






















/*
 *
 *   obj2434: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2434_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2434_onLoad is still running");
	return;
}
var obj2434_onLoad_runningActionsCount = 0;
var obj2434_onLoad_loopCount = 0;
obj2434_onLoad_actionGroup0();
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
	
$("#obj2415").trigger('SCEventShow');
$("#obj2425").trigger('SCEventShow');
$("#obj2434").trigger('SCEventShow');
$("#obj3186").trigger('SCEventShow');
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