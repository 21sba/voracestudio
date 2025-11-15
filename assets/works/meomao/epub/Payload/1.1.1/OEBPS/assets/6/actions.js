pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 172;
pubcoder.page.title = pubcoder.page.title || "6";
pubcoder.page.number = pubcoder.page.number || 6;
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
var obj174_onLoad_activeActionGroupIndex = -1;
var obj174_onLoad_runningActionsCount = 0;
var obj174_onLoad_loopCount = 0;
var obj447_onLoad_activeActionGroupIndex = -1;
var obj447_onLoad_runningActionsCount = 0;
var obj447_onLoad_loopCount = 0;
var obj175_onLoad_activeActionGroupIndex = -1;
var obj175_onLoad_runningActionsCount = 0;
var obj175_onLoad_loopCount = 0;
var obj175_onAppear_activeActionGroupIndex = -1;
var obj175_onAppear_runningActionsCount = 0;
var obj175_onAppear_loopCount = 0;
var obj478_onLoad_activeActionGroupIndex = -1;
var obj478_onLoad_runningActionsCount = 0;
var obj478_onLoad_loopCount = 0;
var obj576_onLoad_activeActionGroupIndex = -1;
var obj576_onLoad_runningActionsCount = 0;
var obj576_onLoad_loopCount = 0;
var obj572_onLoad_activeActionGroupIndex = -1;
var obj572_onLoad_runningActionsCount = 0;
var obj572_onLoad_loopCount = 0;
var obj645_onTap_activeActionGroupIndex = -1;
var obj645_onTap_runningActionsCount = 0;
var obj645_onTap_loopCount = 0;
var obj593_onLoad_activeActionGroupIndex = -1;
var obj593_onLoad_runningActionsCount = 0;
var obj593_onLoad_loopCount = 0;
var obj599_onLoad_activeActionGroupIndex = -1;
var obj599_onLoad_runningActionsCount = 0;
var obj599_onLoad_loopCount = 0;
var obj643_onTap_activeActionGroupIndex = -1;
var obj643_onTap_runningActionsCount = 0;
var obj643_onTap_loopCount = 0;
var obj613_onLoad_activeActionGroupIndex = -1;
var obj613_onLoad_runningActionsCount = 0;
var obj613_onLoad_loopCount = 0;
var obj619_onLoad_activeActionGroupIndex = -1;
var obj619_onLoad_runningActionsCount = 0;
var obj619_onLoad_loopCount = 0;
var obj641_onTap_activeActionGroupIndex = -1;
var obj641_onTap_runningActionsCount = 0;
var obj641_onTap_loopCount = 0;
var obj720_onTap_activeActionGroupIndex = -1;
var obj720_onTap_runningActionsCount = 0;
var obj720_onTap_loopCount = 0;
var obj647_onAppear_activeActionGroupIndex = -1;
var obj647_onAppear_runningActionsCount = 0;
var obj647_onAppear_loopCount = 0;
var obj2103_onTap_activeActionGroupIndex = -1;
var obj2103_onTap_runningActionsCount = 0;
var obj2103_onTap_loopCount = 0;
var obj2103_onLoad_activeActionGroupIndex = -1;
var obj2103_onLoad_runningActionsCount = 0;
var obj2103_onLoad_loopCount = 0;
var obj675_SCEventRun_activeActionGroupIndex = -1;
var obj675_SCEventRun_runningActionsCount = 0;
var obj675_SCEventRun_loopCount = 0;
var obj744_SCEventRun_activeActionGroupIndex = -1;
var obj744_SCEventRun_runningActionsCount = 0;
var obj744_SCEventRun_loopCount = 0;
var obj2245_onLoad_activeActionGroupIndex = -1;
var obj2245_onLoad_runningActionsCount = 0;
var obj2245_onLoad_loopCount = 0;
var obj851_onLoad_activeActionGroupIndex = -1;
var obj851_onLoad_runningActionsCount = 0;
var obj851_onLoad_loopCount = 0;
var obj2059_onLoad_activeActionGroupIndex = -1;
var obj2059_onLoad_runningActionsCount = 0;
var obj2059_onLoad_loopCount = 0;
var obj2110_SCEventRun_activeActionGroupIndex = -1;
var obj2110_SCEventRun_runningActionsCount = 0;
var obj2110_SCEventRun_loopCount = 0;
var obj2119_SCEventRun_activeActionGroupIndex = -1;
var obj2119_SCEventRun_runningActionsCount = 0;
var obj2119_SCEventRun_loopCount = 0;
var obj2128_SCEventRun_activeActionGroupIndex = -1;
var obj2128_SCEventRun_runningActionsCount = 0;
var obj2128_SCEventRun_loopCount = 0;
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
		
obj174_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj174_onLoad_activeActionGroupIndex = -1;
		$("#obj174").trigger("obj174_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 174) {
				console.warn("de-queueing event obj174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj174_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj174 
scale_432();
function scale_432() {
	window.obj174_onLoad_runningActionsCount = obj174_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj174";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj174';
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
		scale_432_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_432_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_432_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_432_completed() {
	setTimeout(function() {
		window.obj174_onLoad_runningActionsCount = window.obj174_onLoad_runningActionsCount - 1;
if (window.obj174_onLoad_runningActionsCount < 0) {
	window.obj174_onLoad_runningActionsCount = 0;
} else if (window.obj174_onLoad_runningActionsCount == 0) {
	obj174_onLoad_actionGroup1();
}
	}, 1);
}












};
obj174_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj174_onLoad_activeActionGroupIndex = -1;
		$("#obj174").trigger("obj174_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 174) {
				console.warn("de-queueing event obj174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj174_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj174 
scale_433();
function scale_433() {
	window.obj174_onLoad_runningActionsCount = obj174_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj174";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj174';
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
		scale_433_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_433_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_433_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_433_completed() {
	setTimeout(function() {
		window.obj174_onLoad_runningActionsCount = window.obj174_onLoad_runningActionsCount - 1;
if (window.obj174_onLoad_runningActionsCount < 0) {
	window.obj174_onLoad_runningActionsCount = 0;
} else if (window.obj174_onLoad_runningActionsCount == 0) {
	obj174_onLoad_actionGroup2();
}
	}, 1);
}












};
obj174_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj174_onLoad_activeActionGroupIndex = -1;
		$("#obj174").trigger("obj174_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 174) {
				console.warn("de-queueing event obj174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj174_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj174_onLoad();
function loop_obj174_onLoad() {
	var loopCount = 0;
	window.obj174_onLoad_loopCount = window.obj174_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj174_onLoad_loopCount > loopCount) {
		window.obj174_onLoad_loopCount = 0
		obj174_onLoad_actionGroup3();
	} else {
		obj174_onLoad_actionGroup0();
	}
}













};
obj174_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj174_onLoad_activeActionGroupIndex = -1;
		$("#obj174").trigger("obj174_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 174) {
				console.warn("de-queueing event obj174." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj174").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj174_onLoad_activeActionGroupIndex = 3;
	





















};
obj447_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj447_onLoad_activeActionGroupIndex = -1;
		$("#obj447").trigger("obj447_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 447) {
				console.warn("de-queueing event obj447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj447_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_450();
function wait_450() {
	window.obj447_onLoad_runningActionsCount = obj447_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj447_onLoad_runningActionsCount = window.obj447_onLoad_runningActionsCount - 1;
if (window.obj447_onLoad_runningActionsCount < 0) {
	window.obj447_onLoad_runningActionsCount = 0;
} else if (window.obj447_onLoad_runningActionsCount == 0) {
	obj447_onLoad_actionGroup1();
}
	}, 300);
}













};
obj447_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj447_onLoad_activeActionGroupIndex = -1;
		$("#obj447").trigger("obj447_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 447) {
				console.warn("de-queueing event obj447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj447_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj447 
scale_451();
function scale_451() {
	window.obj447_onLoad_runningActionsCount = obj447_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj447";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj447';
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
		scale_451_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_451_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_451_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_451_completed() {
	setTimeout(function() {
		window.obj447_onLoad_runningActionsCount = window.obj447_onLoad_runningActionsCount - 1;
if (window.obj447_onLoad_runningActionsCount < 0) {
	window.obj447_onLoad_runningActionsCount = 0;
} else if (window.obj447_onLoad_runningActionsCount == 0) {
	obj447_onLoad_actionGroup2();
}
	}, 1);
}












};
obj447_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj447_onLoad_activeActionGroupIndex = -1;
		$("#obj447").trigger("obj447_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 447) {
				console.warn("de-queueing event obj447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj447_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj447
(function(){
	window.obj447_onLoad_runningActionsCount = obj447_onLoad_runningActionsCount + 1;

	var selector = "#obj447";
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
					window.obj447_onLoad_runningActionsCount = window.obj447_onLoad_runningActionsCount - 1;
if (window.obj447_onLoad_runningActionsCount < 0) {
	window.obj447_onLoad_runningActionsCount = 0;
} else if (window.obj447_onLoad_runningActionsCount == 0) {
	obj447_onLoad_actionGroup3();
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
				window.obj447_onLoad_runningActionsCount = window.obj447_onLoad_runningActionsCount - 1;
if (window.obj447_onLoad_runningActionsCount < 0) {
	window.obj447_onLoad_runningActionsCount = 0;
} else if (window.obj447_onLoad_runningActionsCount == 0) {
	obj447_onLoad_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj447_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj447_onLoad_activeActionGroupIndex = -1;
		$("#obj447").trigger("obj447_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 447) {
				console.warn("de-queueing event obj447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj447_onLoad_activeActionGroupIndex = 3;
	









//	action: scale
//	target: obj447 
scale_453();
function scale_453() {
	window.obj447_onLoad_runningActionsCount = obj447_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj447";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj447';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
	var scaleYValue = '1.2';
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
		scale_453_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_453_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_453_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_453_completed() {
	setTimeout(function() {
		window.obj447_onLoad_runningActionsCount = window.obj447_onLoad_runningActionsCount - 1;
if (window.obj447_onLoad_runningActionsCount < 0) {
	window.obj447_onLoad_runningActionsCount = 0;
} else if (window.obj447_onLoad_runningActionsCount == 0) {
	obj447_onLoad_actionGroup4();
}
	}, 1);
}












};
obj447_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj447_onLoad_activeActionGroupIndex = -1;
		$("#obj447").trigger("obj447_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 447) {
				console.warn("de-queueing event obj447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj447_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	selector: #obj445
(function(){
	window.obj447_onLoad_runningActionsCount = obj447_onLoad_runningActionsCount + 1;

	var selector = "#obj445";
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
					window.obj447_onLoad_runningActionsCount = window.obj447_onLoad_runningActionsCount - 1;
if (window.obj447_onLoad_runningActionsCount < 0) {
	window.obj447_onLoad_runningActionsCount = 0;
} else if (window.obj447_onLoad_runningActionsCount == 0) {
	obj447_onLoad_actionGroup5();
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
				window.obj447_onLoad_runningActionsCount = window.obj447_onLoad_runningActionsCount - 1;
if (window.obj447_onLoad_runningActionsCount < 0) {
	window.obj447_onLoad_runningActionsCount = 0;
} else if (window.obj447_onLoad_runningActionsCount == 0) {
	obj447_onLoad_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj447_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj447_onLoad_activeActionGroupIndex = -1;
		$("#obj447").trigger("obj447_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 447) {
				console.warn("de-queueing event obj447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj447_onLoad_activeActionGroupIndex = 5;
	








//	action: wait
wait_455();
function wait_455() {
	window.obj447_onLoad_runningActionsCount = obj447_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj447_onLoad_runningActionsCount = window.obj447_onLoad_runningActionsCount - 1;
if (window.obj447_onLoad_runningActionsCount < 0) {
	window.obj447_onLoad_runningActionsCount = 0;
} else if (window.obj447_onLoad_runningActionsCount == 0) {
	obj447_onLoad_actionGroup6();
}
	}, 2000);
}













};
obj447_onLoad_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj447_onLoad_activeActionGroupIndex = -1;
		$("#obj447").trigger("obj447_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 447) {
				console.warn("de-queueing event obj447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj447_onLoad_activeActionGroupIndex = 6;
	





















};
obj175_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_onLoad_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_464();
function wait_464() {
	window.obj175_onLoad_runningActionsCount = obj175_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj175_onLoad_runningActionsCount = window.obj175_onLoad_runningActionsCount - 1;
if (window.obj175_onLoad_runningActionsCount < 0) {
	window.obj175_onLoad_runningActionsCount = 0;
} else if (window.obj175_onLoad_runningActionsCount == 0) {
	obj175_onLoad_actionGroup1();
}
	}, 300);
}













};
obj175_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_onLoad_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj175 
rotate_437();
function rotate_437() {
	window.obj175_onLoad_runningActionsCount = obj175_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj175";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj175';
	var transformOriginX = '60.09616%';
	var transformOriginY = '90.65934%';
	var rotationToDegrees = '3';
	var rotationSpeed = 0.1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_437_completed(); }
	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_437_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_437_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_437_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_437_completed() {
	setTimeout(function() {
		window.obj175_onLoad_runningActionsCount = window.obj175_onLoad_runningActionsCount - 1;
if (window.obj175_onLoad_runningActionsCount < 0) {
	window.obj175_onLoad_runningActionsCount = 0;
} else if (window.obj175_onLoad_runningActionsCount == 0) {
	obj175_onLoad_actionGroup2();
}
	}, 1);
}














};
obj175_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_onLoad_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onLoad_activeActionGroupIndex = 2;
	







//	action: rotate 
//	target: obj175 
rotate_439();
function rotate_439() {
	window.obj175_onLoad_runningActionsCount = obj175_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj175";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj175';
	var transformOriginX = '60.09616%';
	var transformOriginY = '90.65934%';
	var rotationToDegrees = '-3';
	var rotationSpeed = 0.2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_439_completed(); }
	//TweenMax.to(targetObjectId, 0.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_439_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_439_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_439_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_439_completed() {
	setTimeout(function() {
		window.obj175_onLoad_runningActionsCount = window.obj175_onLoad_runningActionsCount - 1;
if (window.obj175_onLoad_runningActionsCount < 0) {
	window.obj175_onLoad_runningActionsCount = 0;
} else if (window.obj175_onLoad_runningActionsCount == 0) {
	obj175_onLoad_actionGroup3();
}
	}, 1);
}














};
obj175_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_onLoad_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onLoad_activeActionGroupIndex = 3;
	







//	action: rotate 
//	target: obj175 
rotate_471();
function rotate_471() {
	window.obj175_onLoad_runningActionsCount = obj175_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj175";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj175';
	var transformOriginX = '60.09616%';
	var transformOriginY = '90.65934%';
	var rotationToDegrees = '3';
	var rotationSpeed = 0.1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_471_completed(); }
	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_471_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_471_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_471_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_471_completed() {
	setTimeout(function() {
		window.obj175_onLoad_runningActionsCount = window.obj175_onLoad_runningActionsCount - 1;
if (window.obj175_onLoad_runningActionsCount < 0) {
	window.obj175_onLoad_runningActionsCount = 0;
} else if (window.obj175_onLoad_runningActionsCount == 0) {
	obj175_onLoad_actionGroup4();
}
	}, 1);
}














};
obj175_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_onLoad_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onLoad_activeActionGroupIndex = 4;
	







//	action: rotate 
//	target: obj175 
rotate_472();
function rotate_472() {
	window.obj175_onLoad_runningActionsCount = obj175_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj175";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj175';
	var transformOriginX = '60.09616%';
	var transformOriginY = '90.65934%';
	var rotationToDegrees = '-3';
	var rotationSpeed = 0.2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_472_completed(); }
	//TweenMax.to(targetObjectId, 0.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_472_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_472_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_472_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_472_completed() {
	setTimeout(function() {
		window.obj175_onLoad_runningActionsCount = window.obj175_onLoad_runningActionsCount - 1;
if (window.obj175_onLoad_runningActionsCount < 0) {
	window.obj175_onLoad_runningActionsCount = 0;
} else if (window.obj175_onLoad_runningActionsCount == 0) {
	obj175_onLoad_actionGroup5();
}
	}, 1);
}














};
obj175_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_onLoad_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onLoad_activeActionGroupIndex = 5;
	







//	action: rotate 
//	target: obj175 
rotate_473();
function rotate_473() {
	window.obj175_onLoad_runningActionsCount = obj175_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj175";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj175';
	var transformOriginX = '60.09616%';
	var transformOriginY = '90.65934%';
	var rotationToDegrees = '3';
	var rotationSpeed = 0.1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_473_completed(); }
	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_473_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_473_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_473_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_473_completed() {
	setTimeout(function() {
		window.obj175_onLoad_runningActionsCount = window.obj175_onLoad_runningActionsCount - 1;
if (window.obj175_onLoad_runningActionsCount < 0) {
	window.obj175_onLoad_runningActionsCount = 0;
} else if (window.obj175_onLoad_runningActionsCount == 0) {
	obj175_onLoad_actionGroup6();
}
	}, 1);
}














};
obj175_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_onLoad_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onLoad_activeActionGroupIndex = 6;
	







//	action: rotate 
//	target: obj175 
rotate_474();
function rotate_474() {
	window.obj175_onLoad_runningActionsCount = obj175_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj175";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj175';
	var transformOriginX = '60.09616%';
	var transformOriginY = '90.65934%';
	var rotationToDegrees = '-3';
	var rotationSpeed = 0.2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_474_completed(); }
	//TweenMax.to(targetObjectId, 0.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_474_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_474_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_474_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_474_completed() {
	setTimeout(function() {
		window.obj175_onLoad_runningActionsCount = window.obj175_onLoad_runningActionsCount - 1;
if (window.obj175_onLoad_runningActionsCount < 0) {
	window.obj175_onLoad_runningActionsCount = 0;
} else if (window.obj175_onLoad_runningActionsCount == 0) {
	obj175_onLoad_actionGroup7();
}
	}, 1);
}














};
obj175_onLoad_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj175_onLoad_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onLoad_activeActionGroupIndex = 7;
	





















};
obj175_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_onAppear_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onAppear_activeActionGroupIndex = 0;
	








//	action: wait
wait_475();
function wait_475() {
	window.obj175_onAppear_runningActionsCount = obj175_onAppear_runningActionsCount + 1;
	setTimeout(function() {
		window.obj175_onAppear_runningActionsCount = window.obj175_onAppear_runningActionsCount - 1;
if (window.obj175_onAppear_runningActionsCount < 0) {
	window.obj175_onAppear_runningActionsCount = 0;
} else if (window.obj175_onAppear_runningActionsCount == 0) {
	obj175_onAppear_actionGroup1();
}
	}, 300);
}













};
obj175_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj175_onAppear_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onAppear_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj175 
move_461();
function move_461() {
	window.obj175_onAppear_runningActionsCount = obj175_onAppear_runningActionsCount + 1;

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
	var targetObject = $("#obj175");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-126";
	var moveY = "+=-166";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj175_onAppear_runningActionsCount = window.obj175_onAppear_runningActionsCount - 1;
if (window.obj175_onAppear_runningActionsCount < 0) {
	window.obj175_onAppear_runningActionsCount = 0;
} else if (window.obj175_onAppear_runningActionsCount == 0) {
	obj175_onAppear_actionGroup2();
}
		}, 1);
	});
}



















};
obj175_onAppear_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj175_onAppear_activeActionGroupIndex = -1;
		$("#obj175").trigger("obj175_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 175) {
				console.warn("de-queueing event obj175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj175_onAppear_activeActionGroupIndex = 2;
	





















};
obj478_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj478_onLoad_activeActionGroupIndex = -1;
		$("#obj478").trigger("obj478_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 478) {
				console.warn("de-queueing event obj478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj478_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj175 
scale_481();
function scale_481() {
	window.obj478_onLoad_runningActionsCount = obj478_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj175";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj175';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1.02';
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
		scale_481_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_481_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_481_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_481_completed() {
	setTimeout(function() {
		window.obj478_onLoad_runningActionsCount = window.obj478_onLoad_runningActionsCount - 1;
if (window.obj478_onLoad_runningActionsCount < 0) {
	window.obj478_onLoad_runningActionsCount = 0;
} else if (window.obj478_onLoad_runningActionsCount == 0) {
	obj478_onLoad_actionGroup1();
}
	}, 1);
}












};
obj478_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj478_onLoad_activeActionGroupIndex = -1;
		$("#obj478").trigger("obj478_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 478) {
				console.warn("de-queueing event obj478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj478_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj175 
scale_482();
function scale_482() {
	window.obj478_onLoad_runningActionsCount = obj478_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj175";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj175';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1';
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
		scale_482_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_482_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_482_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_482_completed() {
	setTimeout(function() {
		window.obj478_onLoad_runningActionsCount = window.obj478_onLoad_runningActionsCount - 1;
if (window.obj478_onLoad_runningActionsCount < 0) {
	window.obj478_onLoad_runningActionsCount = 0;
} else if (window.obj478_onLoad_runningActionsCount == 0) {
	obj478_onLoad_actionGroup2();
}
	}, 1);
}












};
obj478_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj478_onLoad_activeActionGroupIndex = -1;
		$("#obj478").trigger("obj478_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 478) {
				console.warn("de-queueing event obj478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj478_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj478_onLoad();
function loop_obj478_onLoad() {
	var loopCount = 0;
	window.obj478_onLoad_loopCount = window.obj478_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj478_onLoad_loopCount > loopCount) {
		window.obj478_onLoad_loopCount = 0
		obj478_onLoad_actionGroup3();
	} else {
		obj478_onLoad_actionGroup0();
	}
}













};
obj478_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj478_onLoad_activeActionGroupIndex = -1;
		$("#obj478").trigger("obj478_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 478) {
				console.warn("de-queueing event obj478." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj478").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj478_onLoad_activeActionGroupIndex = 3;
	





















};
obj576_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj576_onLoad_activeActionGroupIndex = -1;
		$("#obj576").trigger("obj576_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 576) {
				console.warn("de-queueing event obj576." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj576").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj576_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_579();
function wait_579() {
	window.obj576_onLoad_runningActionsCount = obj576_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj576_onLoad_runningActionsCount = window.obj576_onLoad_runningActionsCount - 1;
if (window.obj576_onLoad_runningActionsCount < 0) {
	window.obj576_onLoad_runningActionsCount = 0;
} else if (window.obj576_onLoad_runningActionsCount == 0) {
	obj576_onLoad_actionGroup1();
}
	}, 9000);
}













};
obj576_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj576_onLoad_activeActionGroupIndex = -1;
		$("#obj576").trigger("obj576_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 576) {
				console.warn("de-queueing event obj576." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj576").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj576_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj576
(function(){
	window.obj576_onLoad_runningActionsCount = obj576_onLoad_runningActionsCount + 1;

	var selector = "#obj576";
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
					window.obj576_onLoad_runningActionsCount = window.obj576_onLoad_runningActionsCount - 1;
if (window.obj576_onLoad_runningActionsCount < 0) {
	window.obj576_onLoad_runningActionsCount = 0;
} else if (window.obj576_onLoad_runningActionsCount == 0) {
	obj576_onLoad_actionGroup2();
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
				window.obj576_onLoad_runningActionsCount = window.obj576_onLoad_runningActionsCount - 1;
if (window.obj576_onLoad_runningActionsCount < 0) {
	window.obj576_onLoad_runningActionsCount = 0;
} else if (window.obj576_onLoad_runningActionsCount == 0) {
	obj576_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj572
(function(){
	window.obj576_onLoad_runningActionsCount = obj576_onLoad_runningActionsCount + 1;

	var selector = "#obj572";
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
					window.obj576_onLoad_runningActionsCount = window.obj576_onLoad_runningActionsCount - 1;
if (window.obj576_onLoad_runningActionsCount < 0) {
	window.obj576_onLoad_runningActionsCount = 0;
} else if (window.obj576_onLoad_runningActionsCount == 0) {
	obj576_onLoad_actionGroup2();
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
				window.obj576_onLoad_runningActionsCount = window.obj576_onLoad_runningActionsCount - 1;
if (window.obj576_onLoad_runningActionsCount < 0) {
	window.obj576_onLoad_runningActionsCount = 0;
} else if (window.obj576_onLoad_runningActionsCount == 0) {
	obj576_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj576_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj576_onLoad_activeActionGroupIndex = -1;
		$("#obj576").trigger("obj576_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 576) {
				console.warn("de-queueing event obj576." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj576").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj576_onLoad_activeActionGroupIndex = 2;
	





















};
obj572_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj572_onLoad_activeActionGroupIndex = -1;
		$("#obj572").trigger("obj572_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 572) {
				console.warn("de-queueing event obj572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj572_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_685();
function wait_685() {
	window.obj572_onLoad_runningActionsCount = obj572_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj572_onLoad_runningActionsCount = window.obj572_onLoad_runningActionsCount - 1;
if (window.obj572_onLoad_runningActionsCount < 0) {
	window.obj572_onLoad_runningActionsCount = 0;
} else if (window.obj572_onLoad_runningActionsCount == 0) {
	obj572_onLoad_actionGroup1();
}
	}, 9200);
}













};
obj572_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj572_onLoad_activeActionGroupIndex = -1;
		$("#obj572").trigger("obj572_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 572) {
				console.warn("de-queueing event obj572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj572_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj572 
scale_583();
function scale_583() {
	window.obj572_onLoad_runningActionsCount = obj572_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj572";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj572';
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
		scale_583_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_583_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_583_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_583_completed() {
	setTimeout(function() {
		window.obj572_onLoad_runningActionsCount = window.obj572_onLoad_runningActionsCount - 1;
if (window.obj572_onLoad_runningActionsCount < 0) {
	window.obj572_onLoad_runningActionsCount = 0;
} else if (window.obj572_onLoad_runningActionsCount == 0) {
	obj572_onLoad_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj576 
scale_584();
function scale_584() {
	window.obj572_onLoad_runningActionsCount = obj572_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj576";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj576';
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
		scale_584_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_584_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_584_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_584_completed() {
	setTimeout(function() {
		window.obj572_onLoad_runningActionsCount = window.obj572_onLoad_runningActionsCount - 1;
if (window.obj572_onLoad_runningActionsCount < 0) {
	window.obj572_onLoad_runningActionsCount = 0;
} else if (window.obj572_onLoad_runningActionsCount == 0) {
	obj572_onLoad_actionGroup2();
}
	}, 1);
}












};
obj572_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj572_onLoad_activeActionGroupIndex = -1;
		$("#obj572").trigger("obj572_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 572) {
				console.warn("de-queueing event obj572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj572_onLoad_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj572 
scale_585();
function scale_585() {
	window.obj572_onLoad_runningActionsCount = obj572_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj572";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj572';
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
		scale_585_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_585_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_585_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_585_completed() {
	setTimeout(function() {
		window.obj572_onLoad_runningActionsCount = window.obj572_onLoad_runningActionsCount - 1;
if (window.obj572_onLoad_runningActionsCount < 0) {
	window.obj572_onLoad_runningActionsCount = 0;
} else if (window.obj572_onLoad_runningActionsCount == 0) {
	obj572_onLoad_actionGroup3();
}
	}, 1);
}
//	action: scale
//	target: obj576 
scale_586();
function scale_586() {
	window.obj572_onLoad_runningActionsCount = obj572_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj576";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj576';
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
		scale_586_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_586_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_586_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_586_completed() {
	setTimeout(function() {
		window.obj572_onLoad_runningActionsCount = window.obj572_onLoad_runningActionsCount - 1;
if (window.obj572_onLoad_runningActionsCount < 0) {
	window.obj572_onLoad_runningActionsCount = 0;
} else if (window.obj572_onLoad_runningActionsCount == 0) {
	obj572_onLoad_actionGroup3();
}
	}, 1);
}












};
obj572_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj572_onLoad_activeActionGroupIndex = -1;
		$("#obj572").trigger("obj572_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 572) {
				console.warn("de-queueing event obj572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj572_onLoad_activeActionGroupIndex = 3;
	









//	action: scale
//	target: obj572 
scale_587();
function scale_587() {
	window.obj572_onLoad_runningActionsCount = obj572_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj572";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj572';
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
		scale_587_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_587_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_587_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_587_completed() {
	setTimeout(function() {
		window.obj572_onLoad_runningActionsCount = window.obj572_onLoad_runningActionsCount - 1;
if (window.obj572_onLoad_runningActionsCount < 0) {
	window.obj572_onLoad_runningActionsCount = 0;
} else if (window.obj572_onLoad_runningActionsCount == 0) {
	obj572_onLoad_actionGroup4();
}
	}, 1);
}
//	action: scale
//	target: obj576 
scale_588();
function scale_588() {
	window.obj572_onLoad_runningActionsCount = obj572_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj576";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj576';
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
		scale_588_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_588_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_588_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_588_completed() {
	setTimeout(function() {
		window.obj572_onLoad_runningActionsCount = window.obj572_onLoad_runningActionsCount - 1;
if (window.obj572_onLoad_runningActionsCount < 0) {
	window.obj572_onLoad_runningActionsCount = 0;
} else if (window.obj572_onLoad_runningActionsCount == 0) {
	obj572_onLoad_actionGroup4();
}
	}, 1);
}












};
obj572_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj572_onLoad_activeActionGroupIndex = -1;
		$("#obj572").trigger("obj572_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 572) {
				console.warn("de-queueing event obj572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj572_onLoad_activeActionGroupIndex = 4;
	









//	action: scale
//	target: obj572 
scale_589();
function scale_589() {
	window.obj572_onLoad_runningActionsCount = obj572_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj572";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj572';
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
		scale_589_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_589_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_589_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_589_completed() {
	setTimeout(function() {
		window.obj572_onLoad_runningActionsCount = window.obj572_onLoad_runningActionsCount - 1;
if (window.obj572_onLoad_runningActionsCount < 0) {
	window.obj572_onLoad_runningActionsCount = 0;
} else if (window.obj572_onLoad_runningActionsCount == 0) {
	obj572_onLoad_actionGroup5();
}
	}, 1);
}
//	action: scale
//	target: obj576 
scale_590();
function scale_590() {
	window.obj572_onLoad_runningActionsCount = obj572_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj576";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj576';
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
		scale_590_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_590_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_590_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_590_completed() {
	setTimeout(function() {
		window.obj572_onLoad_runningActionsCount = window.obj572_onLoad_runningActionsCount - 1;
if (window.obj572_onLoad_runningActionsCount < 0) {
	window.obj572_onLoad_runningActionsCount = 0;
} else if (window.obj572_onLoad_runningActionsCount == 0) {
	obj572_onLoad_actionGroup5();
}
	}, 1);
}












};
obj572_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj572_onLoad_activeActionGroupIndex = -1;
		$("#obj572").trigger("obj572_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 572) {
				console.warn("de-queueing event obj572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj572_onLoad_activeActionGroupIndex = 5;
	





















};
obj645_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj645_onTap_activeActionGroupIndex = -1;
		$("#obj645").trigger("obj645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 645) {
				console.warn("de-queueing event obj645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj645_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj645 
hide_749();
function hide_749() {
	var selector = "#obj645";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_749(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj720
(function(){
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;

	var selector = "#obj720";
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
					window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup1();
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
				window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj645_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj645_onTap_activeActionGroupIndex = -1;
		$("#obj645").trigger("obj645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 645) {
				console.warn("de-queueing event obj645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj645_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj572 
scale_709();
function scale_709() {
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj572";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj572';
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
		scale_709_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_709_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_709_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_709_completed() {
	setTimeout(function() {
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj576 
scale_710();
function scale_710() {
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj576";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj576';
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
		scale_710_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_710_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_710_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_710_completed() {
	setTimeout(function() {
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup2();
}
	}, 1);
}



//	action: playAudio
//	target: obj3154 
playAudio_3156();
function playAudio_3156() {
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3154")[0];
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
		    window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup2();
}
	}
}









};
obj645_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj645_onTap_activeActionGroupIndex = -1;
		$("#obj645").trigger("obj645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 645) {
				console.warn("de-queueing event obj645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj645_onTap_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj572 
scale_711();
function scale_711() {
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj572";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj572';
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
		scale_711_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_711_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_711_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_711_completed() {
	setTimeout(function() {
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup3();
}
	}, 1);
}
//	action: scale
//	target: obj576 
scale_712();
function scale_712() {
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj576";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj576';
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
		scale_712_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_712_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_712_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_712_completed() {
	setTimeout(function() {
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup3();
}
	}, 1);
}



//	action: playAudio
//	target: obj2062 
playAudio_2066();
function playAudio_2066() {
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	var myAudio = $("#obj2062")[0];
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
		    window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup3();
}
	}
}









};
obj645_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj645_onTap_activeActionGroupIndex = -1;
		$("#obj645").trigger("obj645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 645) {
				console.warn("de-queueing event obj645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj645_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj645 
hide_713();
function hide_713() {
	var selector = "#obj645";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_713(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj572 
hide_715();
function hide_715() {
	var selector = "#obj572";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_715(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj576 
hide_714();
function hide_714() {
	var selector = "#obj576";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_714(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj647
(function(){
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;

	var selector = "#obj647";
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
					window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
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
				window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj813
(function(){
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;

	var selector = "#obj813";
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
					window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
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
				window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
















//	action: run action list container
//	target: obj675 
runActionList_717();
function runActionList_717() {
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	$("#obj675").trigger('SCEventRun');
	setTimeout(function() {
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
}		
	}, 1);
}



//	action: runJqueryAnimation
//	target: obj593 
(function () {
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;

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
	
	$("#obj593").animate({ opacity: '0.5'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj613 
(function () {
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;

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
	
	$("#obj613").animate({ opacity: '0.5'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup4();
}
		}, 1);
	});
})();
};
obj645_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj645_onTap_activeActionGroupIndex = -1;
		$("#obj645").trigger("obj645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 645) {
				console.warn("de-queueing event obj645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj645_onTap_activeActionGroupIndex = 4;
	








//	action: wait
wait_718();
function wait_718() {
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup5();
}
	}, 1500);
}













};
obj645_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj645_onTap_activeActionGroupIndex = -1;
		$("#obj645").trigger("obj645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 645) {
				console.warn("de-queueing event obj645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj645_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj720 
hide_719();
function hide_719() {
	var selector = "#obj720";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup6();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_719(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup6();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















//	action: runJqueryAnimation
//	target: obj593 
(function () {
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;

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
	
	$("#obj593").animate({ opacity: '1'}, 300, easing, function() {
		setTimeout(function() {
			window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup6();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj613 
(function () {
	window.obj645_onTap_runningActionsCount = obj645_onTap_runningActionsCount + 1;

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
	
	$("#obj613").animate({ opacity: '1'}, 300, easing, function() {
		setTimeout(function() {
			window.obj645_onTap_runningActionsCount = window.obj645_onTap_runningActionsCount - 1;
if (window.obj645_onTap_runningActionsCount < 0) {
	window.obj645_onTap_runningActionsCount = 0;
} else if (window.obj645_onTap_runningActionsCount == 0) {
	obj645_onTap_actionGroup6();
}
		}, 1);
	});
})();
};
obj645_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj645_onTap_activeActionGroupIndex = -1;
		$("#obj645").trigger("obj645_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 645) {
				console.warn("de-queueing event obj645." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj645").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj645_onTap_activeActionGroupIndex = 6;
	





















};
obj593_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj593_onLoad_activeActionGroupIndex = -1;
		$("#obj593").trigger("obj593_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 593) {
				console.warn("de-queueing event obj593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj593_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_596();
function wait_596() {
	window.obj593_onLoad_runningActionsCount = obj593_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj593_onLoad_runningActionsCount = window.obj593_onLoad_runningActionsCount - 1;
if (window.obj593_onLoad_runningActionsCount < 0) {
	window.obj593_onLoad_runningActionsCount = 0;
} else if (window.obj593_onLoad_runningActionsCount == 0) {
	obj593_onLoad_actionGroup1();
}
	}, 9300);
}













};
obj593_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj593_onLoad_activeActionGroupIndex = -1;
		$("#obj593").trigger("obj593_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 593) {
				console.warn("de-queueing event obj593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj593_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj593
(function(){
	window.obj593_onLoad_runningActionsCount = obj593_onLoad_runningActionsCount + 1;

	var selector = "#obj593";
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
					window.obj593_onLoad_runningActionsCount = window.obj593_onLoad_runningActionsCount - 1;
if (window.obj593_onLoad_runningActionsCount < 0) {
	window.obj593_onLoad_runningActionsCount = 0;
} else if (window.obj593_onLoad_runningActionsCount == 0) {
	obj593_onLoad_actionGroup2();
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
				window.obj593_onLoad_runningActionsCount = window.obj593_onLoad_runningActionsCount - 1;
if (window.obj593_onLoad_runningActionsCount < 0) {
	window.obj593_onLoad_runningActionsCount = 0;
} else if (window.obj593_onLoad_runningActionsCount == 0) {
	obj593_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj599
(function(){
	window.obj593_onLoad_runningActionsCount = obj593_onLoad_runningActionsCount + 1;

	var selector = "#obj599";
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
					window.obj593_onLoad_runningActionsCount = window.obj593_onLoad_runningActionsCount - 1;
if (window.obj593_onLoad_runningActionsCount < 0) {
	window.obj593_onLoad_runningActionsCount = 0;
} else if (window.obj593_onLoad_runningActionsCount == 0) {
	obj593_onLoad_actionGroup2();
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
				window.obj593_onLoad_runningActionsCount = window.obj593_onLoad_runningActionsCount - 1;
if (window.obj593_onLoad_runningActionsCount < 0) {
	window.obj593_onLoad_runningActionsCount = 0;
} else if (window.obj593_onLoad_runningActionsCount == 0) {
	obj593_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj593_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj593_onLoad_activeActionGroupIndex = -1;
		$("#obj593").trigger("obj593_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 593) {
				console.warn("de-queueing event obj593." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj593").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj593_onLoad_activeActionGroupIndex = 2;
	





















};
obj599_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj599_onLoad_activeActionGroupIndex = -1;
		$("#obj599").trigger("obj599_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 599) {
				console.warn("de-queueing event obj599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj599_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_611();
function wait_611() {
	window.obj599_onLoad_runningActionsCount = obj599_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj599_onLoad_runningActionsCount = window.obj599_onLoad_runningActionsCount - 1;
if (window.obj599_onLoad_runningActionsCount < 0) {
	window.obj599_onLoad_runningActionsCount = 0;
} else if (window.obj599_onLoad_runningActionsCount == 0) {
	obj599_onLoad_actionGroup1();
}
	}, 9400);
}













};
obj599_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj599_onLoad_activeActionGroupIndex = -1;
		$("#obj599").trigger("obj599_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 599) {
				console.warn("de-queueing event obj599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj599_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj599 
scale_603();
function scale_603() {
	window.obj599_onLoad_runningActionsCount = obj599_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj599";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj599';
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
		scale_603_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_603_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_603_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_603_completed() {
	setTimeout(function() {
		window.obj599_onLoad_runningActionsCount = window.obj599_onLoad_runningActionsCount - 1;
if (window.obj599_onLoad_runningActionsCount < 0) {
	window.obj599_onLoad_runningActionsCount = 0;
} else if (window.obj599_onLoad_runningActionsCount == 0) {
	obj599_onLoad_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj593 
scale_604();
function scale_604() {
	window.obj599_onLoad_runningActionsCount = obj599_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj593";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj593';
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
		scale_604_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_604_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_604_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_604_completed() {
	setTimeout(function() {
		window.obj599_onLoad_runningActionsCount = window.obj599_onLoad_runningActionsCount - 1;
if (window.obj599_onLoad_runningActionsCount < 0) {
	window.obj599_onLoad_runningActionsCount = 0;
} else if (window.obj599_onLoad_runningActionsCount == 0) {
	obj599_onLoad_actionGroup2();
}
	}, 1);
}












};
obj599_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj599_onLoad_activeActionGroupIndex = -1;
		$("#obj599").trigger("obj599_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 599) {
				console.warn("de-queueing event obj599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj599_onLoad_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj599 
scale_605();
function scale_605() {
	window.obj599_onLoad_runningActionsCount = obj599_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj599";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj599';
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
		scale_605_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_605_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_605_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_605_completed() {
	setTimeout(function() {
		window.obj599_onLoad_runningActionsCount = window.obj599_onLoad_runningActionsCount - 1;
if (window.obj599_onLoad_runningActionsCount < 0) {
	window.obj599_onLoad_runningActionsCount = 0;
} else if (window.obj599_onLoad_runningActionsCount == 0) {
	obj599_onLoad_actionGroup3();
}
	}, 1);
}
//	action: scale
//	target: obj593 
scale_606();
function scale_606() {
	window.obj599_onLoad_runningActionsCount = obj599_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj593";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj593';
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
		scale_606_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_606_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_606_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_606_completed() {
	setTimeout(function() {
		window.obj599_onLoad_runningActionsCount = window.obj599_onLoad_runningActionsCount - 1;
if (window.obj599_onLoad_runningActionsCount < 0) {
	window.obj599_onLoad_runningActionsCount = 0;
} else if (window.obj599_onLoad_runningActionsCount == 0) {
	obj599_onLoad_actionGroup3();
}
	}, 1);
}












};
obj599_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj599_onLoad_activeActionGroupIndex = -1;
		$("#obj599").trigger("obj599_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 599) {
				console.warn("de-queueing event obj599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj599_onLoad_activeActionGroupIndex = 3;
	









//	action: scale
//	target: obj599 
scale_607();
function scale_607() {
	window.obj599_onLoad_runningActionsCount = obj599_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj599";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj599';
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
		scale_607_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_607_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_607_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_607_completed() {
	setTimeout(function() {
		window.obj599_onLoad_runningActionsCount = window.obj599_onLoad_runningActionsCount - 1;
if (window.obj599_onLoad_runningActionsCount < 0) {
	window.obj599_onLoad_runningActionsCount = 0;
} else if (window.obj599_onLoad_runningActionsCount == 0) {
	obj599_onLoad_actionGroup4();
}
	}, 1);
}
//	action: scale
//	target: obj593 
scale_608();
function scale_608() {
	window.obj599_onLoad_runningActionsCount = obj599_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj593";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj593';
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
		scale_608_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_608_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_608_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_608_completed() {
	setTimeout(function() {
		window.obj599_onLoad_runningActionsCount = window.obj599_onLoad_runningActionsCount - 1;
if (window.obj599_onLoad_runningActionsCount < 0) {
	window.obj599_onLoad_runningActionsCount = 0;
} else if (window.obj599_onLoad_runningActionsCount == 0) {
	obj599_onLoad_actionGroup4();
}
	}, 1);
}












};
obj599_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj599_onLoad_activeActionGroupIndex = -1;
		$("#obj599").trigger("obj599_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 599) {
				console.warn("de-queueing event obj599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj599_onLoad_activeActionGroupIndex = 4;
	









//	action: scale
//	target: obj599 
scale_609();
function scale_609() {
	window.obj599_onLoad_runningActionsCount = obj599_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj599";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj599';
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
		scale_609_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_609_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_609_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_609_completed() {
	setTimeout(function() {
		window.obj599_onLoad_runningActionsCount = window.obj599_onLoad_runningActionsCount - 1;
if (window.obj599_onLoad_runningActionsCount < 0) {
	window.obj599_onLoad_runningActionsCount = 0;
} else if (window.obj599_onLoad_runningActionsCount == 0) {
	obj599_onLoad_actionGroup5();
}
	}, 1);
}
//	action: scale
//	target: obj593 
scale_610();
function scale_610() {
	window.obj599_onLoad_runningActionsCount = obj599_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj593";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj593';
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
		scale_610_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_610_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_610_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_610_completed() {
	setTimeout(function() {
		window.obj599_onLoad_runningActionsCount = window.obj599_onLoad_runningActionsCount - 1;
if (window.obj599_onLoad_runningActionsCount < 0) {
	window.obj599_onLoad_runningActionsCount = 0;
} else if (window.obj599_onLoad_runningActionsCount == 0) {
	obj599_onLoad_actionGroup5();
}
	}, 1);
}












};
obj599_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj599_onLoad_activeActionGroupIndex = -1;
		$("#obj599").trigger("obj599_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 599) {
				console.warn("de-queueing event obj599." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj599").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj599_onLoad_activeActionGroupIndex = 5;
	





















};
obj643_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj643_onTap_activeActionGroupIndex = -1;
		$("#obj643").trigger("obj643_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 643) {
				console.warn("de-queueing event obj643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj643_onTap_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj720
(function(){
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;

	var selector = "#obj720";
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
					window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup1();
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
				window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj643_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj643_onTap_activeActionGroupIndex = -1;
		$("#obj643").trigger("obj643_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 643) {
				console.warn("de-queueing event obj643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj643_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj641 
hide_738();
function hide_738() {
	var selector = "#obj641";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_738(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj619 
hide_739();
function hide_739() {
	var selector = "#obj619";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_739(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj613 
hide_740();
function hide_740() {
	var selector = "#obj613";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_740(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj645 
hide_741();
function hide_741() {
	var selector = "#obj645";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_741(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj572 
hide_742();
function hide_742() {
	var selector = "#obj572";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_742(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj576 
hide_743();
function hide_743() {
	var selector = "#obj576";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_743(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}








//	action: scale
//	target: obj599 
scale_727();
function scale_727() {
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj599";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj599';
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
		scale_727_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_727_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_727_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_727_completed() {
	setTimeout(function() {
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj593 
scale_728();
function scale_728() {
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj593";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj593';
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
		scale_728_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_728_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_728_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_728_completed() {
	setTimeout(function() {
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup2();
}
	}, 1);
}












};
obj643_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj643_onTap_activeActionGroupIndex = -1;
		$("#obj643").trigger("obj643_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 643) {
				console.warn("de-queueing event obj643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj643_onTap_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj599 
scale_729();
function scale_729() {
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj599";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj599';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_729_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_729_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_729_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_729_completed() {
	setTimeout(function() {
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup3();
}
	}, 1);
}
//	action: scale
//	target: obj593 
scale_730();
function scale_730() {
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj593";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj593';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_730_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_730_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_730_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_730_completed() {
	setTimeout(function() {
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup3();
}
	}, 1);
}



//	action: playAudio
//	target: obj3154 
playAudio_3158();
function playAudio_3158() {
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3154")[0];
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
		    window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup3();
}
	}
}









};
obj643_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj643_onTap_activeActionGroupIndex = -1;
		$("#obj643").trigger("obj643_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 643) {
				console.warn("de-queueing event obj643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj643_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj822 
hide_2262();
function hide_2262() {
	var selector = "#obj822";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2262(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj643 
hide_733();
function hide_733() {
	var selector = "#obj643";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_733(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj599 
hide_734();
function hide_734() {
	var selector = "#obj599";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_734(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj593 
hide_735();
function hide_735() {
	var selector = "#obj593";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_735(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}

















//	action: run action list container
//	target: obj744 
runActionList_748();
function runActionList_748() {
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	$("#obj744").trigger('SCEventRun');
	setTimeout(function() {
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup4();
}		
	}, 1);
}



};
obj643_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj643_onTap_activeActionGroupIndex = -1;
		$("#obj643").trigger("obj643_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 643) {
				console.warn("de-queueing event obj643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj643_onTap_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj#obj445 
hide_751();
function hide_751() {
	var selector = "#obj445";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup5();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_751(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup5();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}











//	action: playAudio
//	target: obj2125 
playAudio_2127();
function playAudio_2127() {
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	var myAudio = $("#obj2125")[0];
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
		    window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup5();
}
	}
}









};
obj643_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj643_onTap_activeActionGroupIndex = -1;
		$("#obj643").trigger("obj643_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 643) {
				console.warn("de-queueing event obj643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj643_onTap_activeActionGroupIndex = 5;
	


















//	action: run action list container
//	target: obj2110 
runActionList_2124();
function runActionList_2124() {
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	$("#obj2110").trigger('SCEventRun');
	setTimeout(function() {
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup6();
}		
	}, 1);
}



};
obj643_onTap_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj643_onTap_activeActionGroupIndex = -1;
		$("#obj643").trigger("obj643_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 643) {
				console.warn("de-queueing event obj643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj643_onTap_activeActionGroupIndex = 6;
	








//	action: wait
wait_736();
function wait_736() {
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup7();
}
	}, 1000);
}













};
obj643_onTap_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj643_onTap_activeActionGroupIndex = -1;
		$("#obj643").trigger("obj643_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 643) {
				console.warn("de-queueing event obj643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj643_onTap_activeActionGroupIndex = 7;
	

//	action: hide
//	selector: obj#obj643 
hide_737();
function hide_737() {
	var selector = "#obj643";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj643_onTap_runningActionsCount = obj643_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup8();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_737(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj643_onTap_runningActionsCount = window.obj643_onTap_runningActionsCount - 1;
if (window.obj643_onTap_runningActionsCount < 0) {
	window.obj643_onTap_runningActionsCount = 0;
} else if (window.obj643_onTap_runningActionsCount == 0) {
	obj643_onTap_actionGroup8();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj643_onTap_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj643_onTap_activeActionGroupIndex = -1;
		$("#obj643").trigger("obj643_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 643) {
				console.warn("de-queueing event obj643." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj643").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj643_onTap_activeActionGroupIndex = 8;
	





















};
obj613_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj613_onLoad_activeActionGroupIndex = -1;
		$("#obj613").trigger("obj613_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 613) {
				console.warn("de-queueing event obj613." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj613").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj613_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_616();
function wait_616() {
	window.obj613_onLoad_runningActionsCount = obj613_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj613_onLoad_runningActionsCount = window.obj613_onLoad_runningActionsCount - 1;
if (window.obj613_onLoad_runningActionsCount < 0) {
	window.obj613_onLoad_runningActionsCount = 0;
} else if (window.obj613_onLoad_runningActionsCount == 0) {
	obj613_onLoad_actionGroup1();
}
	}, 9600);
}













};
obj613_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj613_onLoad_activeActionGroupIndex = -1;
		$("#obj613").trigger("obj613_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 613) {
				console.warn("de-queueing event obj613." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj613").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj613_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj613
(function(){
	window.obj613_onLoad_runningActionsCount = obj613_onLoad_runningActionsCount + 1;

	var selector = "#obj613";
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
					window.obj613_onLoad_runningActionsCount = window.obj613_onLoad_runningActionsCount - 1;
if (window.obj613_onLoad_runningActionsCount < 0) {
	window.obj613_onLoad_runningActionsCount = 0;
} else if (window.obj613_onLoad_runningActionsCount == 0) {
	obj613_onLoad_actionGroup2();
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
				window.obj613_onLoad_runningActionsCount = window.obj613_onLoad_runningActionsCount - 1;
if (window.obj613_onLoad_runningActionsCount < 0) {
	window.obj613_onLoad_runningActionsCount = 0;
} else if (window.obj613_onLoad_runningActionsCount == 0) {
	obj613_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj619
(function(){
	window.obj613_onLoad_runningActionsCount = obj613_onLoad_runningActionsCount + 1;

	var selector = "#obj619";
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
					window.obj613_onLoad_runningActionsCount = window.obj613_onLoad_runningActionsCount - 1;
if (window.obj613_onLoad_runningActionsCount < 0) {
	window.obj613_onLoad_runningActionsCount = 0;
} else if (window.obj613_onLoad_runningActionsCount == 0) {
	obj613_onLoad_actionGroup2();
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
				window.obj613_onLoad_runningActionsCount = window.obj613_onLoad_runningActionsCount - 1;
if (window.obj613_onLoad_runningActionsCount < 0) {
	window.obj613_onLoad_runningActionsCount = 0;
} else if (window.obj613_onLoad_runningActionsCount == 0) {
	obj613_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj613_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj613_onLoad_activeActionGroupIndex = -1;
		$("#obj613").trigger("obj613_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 613) {
				console.warn("de-queueing event obj613." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj613").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj613_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj720 
hide_809();
function hide_809() {
	var selector = "#obj720";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj613_onLoad_runningActionsCount = obj613_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj613_onLoad_runningActionsCount = window.obj613_onLoad_runningActionsCount - 1;
if (window.obj613_onLoad_runningActionsCount < 0) {
	window.obj613_onLoad_runningActionsCount = 0;
} else if (window.obj613_onLoad_runningActionsCount == 0) {
	obj613_onLoad_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_809(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj613_onLoad_runningActionsCount = window.obj613_onLoad_runningActionsCount - 1;
if (window.obj613_onLoad_runningActionsCount < 0) {
	window.obj613_onLoad_runningActionsCount = 0;
} else if (window.obj613_onLoad_runningActionsCount == 0) {
	obj613_onLoad_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj613_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj613_onLoad_activeActionGroupIndex = -1;
		$("#obj613").trigger("obj613_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 613) {
				console.warn("de-queueing event obj613." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj613").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj613_onLoad_activeActionGroupIndex = 3;
	





















};
obj619_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj619_onLoad_activeActionGroupIndex = -1;
		$("#obj619").trigger("obj619_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 619) {
				console.warn("de-queueing event obj619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj619_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_631();
function wait_631() {
	window.obj619_onLoad_runningActionsCount = obj619_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj619_onLoad_runningActionsCount = window.obj619_onLoad_runningActionsCount - 1;
if (window.obj619_onLoad_runningActionsCount < 0) {
	window.obj619_onLoad_runningActionsCount = 0;
} else if (window.obj619_onLoad_runningActionsCount == 0) {
	obj619_onLoad_actionGroup1();
}
	}, 9600);
}













};
obj619_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj619_onLoad_activeActionGroupIndex = -1;
		$("#obj619").trigger("obj619_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 619) {
				console.warn("de-queueing event obj619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj619_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj619 
scale_623();
function scale_623() {
	window.obj619_onLoad_runningActionsCount = obj619_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj619";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj619';
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
		scale_623_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_623_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_623_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_623_completed() {
	setTimeout(function() {
		window.obj619_onLoad_runningActionsCount = window.obj619_onLoad_runningActionsCount - 1;
if (window.obj619_onLoad_runningActionsCount < 0) {
	window.obj619_onLoad_runningActionsCount = 0;
} else if (window.obj619_onLoad_runningActionsCount == 0) {
	obj619_onLoad_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj613 
scale_624();
function scale_624() {
	window.obj619_onLoad_runningActionsCount = obj619_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj613";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj613';
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
		scale_624_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_624_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_624_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_624_completed() {
	setTimeout(function() {
		window.obj619_onLoad_runningActionsCount = window.obj619_onLoad_runningActionsCount - 1;
if (window.obj619_onLoad_runningActionsCount < 0) {
	window.obj619_onLoad_runningActionsCount = 0;
} else if (window.obj619_onLoad_runningActionsCount == 0) {
	obj619_onLoad_actionGroup2();
}
	}, 1);
}












};
obj619_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj619_onLoad_activeActionGroupIndex = -1;
		$("#obj619").trigger("obj619_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 619) {
				console.warn("de-queueing event obj619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj619_onLoad_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj619 
scale_625();
function scale_625() {
	window.obj619_onLoad_runningActionsCount = obj619_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj619";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj619';
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
		scale_625_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_625_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_625_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_625_completed() {
	setTimeout(function() {
		window.obj619_onLoad_runningActionsCount = window.obj619_onLoad_runningActionsCount - 1;
if (window.obj619_onLoad_runningActionsCount < 0) {
	window.obj619_onLoad_runningActionsCount = 0;
} else if (window.obj619_onLoad_runningActionsCount == 0) {
	obj619_onLoad_actionGroup3();
}
	}, 1);
}
//	action: scale
//	target: obj613 
scale_626();
function scale_626() {
	window.obj619_onLoad_runningActionsCount = obj619_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj613";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj613';
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
		scale_626_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_626_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_626_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_626_completed() {
	setTimeout(function() {
		window.obj619_onLoad_runningActionsCount = window.obj619_onLoad_runningActionsCount - 1;
if (window.obj619_onLoad_runningActionsCount < 0) {
	window.obj619_onLoad_runningActionsCount = 0;
} else if (window.obj619_onLoad_runningActionsCount == 0) {
	obj619_onLoad_actionGroup3();
}
	}, 1);
}












};
obj619_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj619_onLoad_activeActionGroupIndex = -1;
		$("#obj619").trigger("obj619_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 619) {
				console.warn("de-queueing event obj619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj619_onLoad_activeActionGroupIndex = 3;
	









//	action: scale
//	target: obj619 
scale_627();
function scale_627() {
	window.obj619_onLoad_runningActionsCount = obj619_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj619";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj619';
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
		scale_627_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_627_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_627_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_627_completed() {
	setTimeout(function() {
		window.obj619_onLoad_runningActionsCount = window.obj619_onLoad_runningActionsCount - 1;
if (window.obj619_onLoad_runningActionsCount < 0) {
	window.obj619_onLoad_runningActionsCount = 0;
} else if (window.obj619_onLoad_runningActionsCount == 0) {
	obj619_onLoad_actionGroup4();
}
	}, 1);
}
//	action: scale
//	target: obj613 
scale_628();
function scale_628() {
	window.obj619_onLoad_runningActionsCount = obj619_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj613";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj613';
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
		scale_628_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_628_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_628_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_628_completed() {
	setTimeout(function() {
		window.obj619_onLoad_runningActionsCount = window.obj619_onLoad_runningActionsCount - 1;
if (window.obj619_onLoad_runningActionsCount < 0) {
	window.obj619_onLoad_runningActionsCount = 0;
} else if (window.obj619_onLoad_runningActionsCount == 0) {
	obj619_onLoad_actionGroup4();
}
	}, 1);
}












};
obj619_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj619_onLoad_activeActionGroupIndex = -1;
		$("#obj619").trigger("obj619_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 619) {
				console.warn("de-queueing event obj619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj619_onLoad_activeActionGroupIndex = 4;
	









//	action: scale
//	target: obj619 
scale_629();
function scale_629() {
	window.obj619_onLoad_runningActionsCount = obj619_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj619";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj619';
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
		scale_629_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_629_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_629_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_629_completed() {
	setTimeout(function() {
		window.obj619_onLoad_runningActionsCount = window.obj619_onLoad_runningActionsCount - 1;
if (window.obj619_onLoad_runningActionsCount < 0) {
	window.obj619_onLoad_runningActionsCount = 0;
} else if (window.obj619_onLoad_runningActionsCount == 0) {
	obj619_onLoad_actionGroup5();
}
	}, 1);
}
//	action: scale
//	target: obj613 
scale_630();
function scale_630() {
	window.obj619_onLoad_runningActionsCount = obj619_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj613";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj613';
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
		scale_630_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_630_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_630_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_630_completed() {
	setTimeout(function() {
		window.obj619_onLoad_runningActionsCount = window.obj619_onLoad_runningActionsCount - 1;
if (window.obj619_onLoad_runningActionsCount < 0) {
	window.obj619_onLoad_runningActionsCount = 0;
} else if (window.obj619_onLoad_runningActionsCount == 0) {
	obj619_onLoad_actionGroup5();
}
	}, 1);
}












};
obj619_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj619_onLoad_activeActionGroupIndex = -1;
		$("#obj619").trigger("obj619_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 619) {
				console.warn("de-queueing event obj619." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj619").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj619_onLoad_activeActionGroupIndex = 5;
	





















};
obj641_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj641_onTap_activeActionGroupIndex = -1;
		$("#obj641").trigger("obj641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 641) {
				console.warn("de-queueing event obj641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj641_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj641 
hide_666();
function hide_666() {
	var selector = "#obj641";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_666(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj720
(function(){
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;

	var selector = "#obj720";
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
					window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup1();
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
				window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj641_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj641_onTap_activeActionGroupIndex = -1;
		$("#obj641").trigger("obj641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 641) {
				console.warn("de-queueing event obj641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj641_onTap_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj619 
scale_650();
function scale_650() {
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj619";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj619';
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
		scale_650_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_650_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_650_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_650_completed() {
	setTimeout(function() {
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup2();
}
	}, 1);
}
//	action: scale
//	target: obj613 
scale_651();
function scale_651() {
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj613";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj613';
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
		scale_651_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_651_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_651_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_651_completed() {
	setTimeout(function() {
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup2();
}
	}, 1);
}



//	action: playAudio
//	target: obj3154 
playAudio_3157();
function playAudio_3157() {
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3154")[0];
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
		    window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup2();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup2();
}
	}
}









};
obj641_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj641_onTap_activeActionGroupIndex = -1;
		$("#obj641").trigger("obj641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 641) {
				console.warn("de-queueing event obj641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj641_onTap_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj619 
scale_652();
function scale_652() {
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj619";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj619';
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
		scale_652_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_652_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_652_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_652_completed() {
	setTimeout(function() {
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup3();
}
	}, 1);
}
//	action: scale
//	target: obj613 
scale_653();
function scale_653() {
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	
	var targetObjectId = "#obj613";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj613';
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
		scale_653_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_653_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_653_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_653_completed() {
	setTimeout(function() {
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup3();
}
	}, 1);
}



//	action: playAudio
//	target: obj2062 
playAudio_2065();
function playAudio_2065() {
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	var myAudio = $("#obj2062")[0];
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
		    window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup3();
}
	}
}









};
obj641_onTap_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj641_onTap_activeActionGroupIndex = -1;
		$("#obj641").trigger("obj641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 641) {
				console.warn("de-queueing event obj641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj641_onTap_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj641 
hide_660();
function hide_660() {
	var selector = "#obj641";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_660(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj613 
hide_661();
function hide_661() {
	var selector = "#obj613";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_661(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj619 
hide_662();
function hide_662() {
	var selector = "#obj619";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_662(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj647
(function(){
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;

	var selector = "#obj647";
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
					window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
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
				window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj813
(function(){
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;

	var selector = "#obj813";
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
					window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
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
				window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
















//	action: run action list container
//	target: obj675 
runActionList_684();
function runActionList_684() {
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	$("#obj675").trigger('SCEventRun');
	setTimeout(function() {
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
}		
	}, 1);
}



//	action: runJqueryAnimation
//	target: obj593 
(function () {
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;

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
	
	$("#obj593").animate({ opacity: '0.5'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj576 
(function () {
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;

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
	
	$("#obj576").animate({ opacity: '0.5'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup4();
}
		}, 1);
	});
})();
};
obj641_onTap_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj641_onTap_activeActionGroupIndex = -1;
		$("#obj641").trigger("obj641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 641) {
				console.warn("de-queueing event obj641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj641_onTap_activeActionGroupIndex = 4;
	








//	action: wait
wait_3010();
function wait_3010() {
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup5();
}
	}, 1500);
}













};
obj641_onTap_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj641_onTap_activeActionGroupIndex = -1;
		$("#obj641").trigger("obj641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 641) {
				console.warn("de-queueing event obj641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj641_onTap_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj720 
hide_725();
function hide_725() {
	var selector = "#obj720";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup6();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_725(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup6();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















//	action: runJqueryAnimation
//	target: obj593 
(function () {
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;

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
	
	$("#obj593").animate({ opacity: '1'}, 300, easing, function() {
		setTimeout(function() {
			window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup6();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj576 
(function () {
	window.obj641_onTap_runningActionsCount = obj641_onTap_runningActionsCount + 1;

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
	
	$("#obj576").animate({ opacity: '1'}, 300, easing, function() {
		setTimeout(function() {
			window.obj641_onTap_runningActionsCount = window.obj641_onTap_runningActionsCount - 1;
if (window.obj641_onTap_runningActionsCount < 0) {
	window.obj641_onTap_runningActionsCount = 0;
} else if (window.obj641_onTap_runningActionsCount == 0) {
	obj641_onTap_actionGroup6();
}
		}, 1);
	});
})();
};
obj641_onTap_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj641_onTap_activeActionGroupIndex = -1;
		$("#obj641").trigger("obj641_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 641) {
				console.warn("de-queueing event obj641." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj641").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj641_onTap_activeActionGroupIndex = 6;
	





















};
obj720_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj720_onTap_activeActionGroupIndex = -1;
		$("#obj720").trigger("obj720_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 720) {
				console.warn("de-queueing event obj720." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj720").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj720_onTap_activeActionGroupIndex = 0;
	








//	action: wait
wait_878();
function wait_878() {
	window.obj720_onTap_runningActionsCount = obj720_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj720_onTap_runningActionsCount = window.obj720_onTap_runningActionsCount - 1;
if (window.obj720_onTap_runningActionsCount < 0) {
	window.obj720_onTap_runningActionsCount = 0;
} else if (window.obj720_onTap_runningActionsCount == 0) {
	obj720_onTap_actionGroup1();
}
	}, 100);
}













};
obj720_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj720_onTap_activeActionGroupIndex = -1;
		$("#obj720").trigger("obj720_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 720) {
				console.warn("de-queueing event obj720." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj720").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj720_onTap_activeActionGroupIndex = 1;
	





















};
obj647_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj647_onAppear_activeActionGroupIndex = -1;
		$("#obj647").trigger("obj647_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 647) {
				console.warn("de-queueing event obj647." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj647").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj647_onAppear_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj647 
rotate_656();
function rotate_656() {
	window.obj647_onAppear_runningActionsCount = obj647_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj647";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj647';
	var transformOriginX = '0%';
	var transformOriginY = '48.03031%';
	var rotationToDegrees = '10';
	var rotationSpeed = 0.1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_656_completed(); }
	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_656_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_656_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_656_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_656_completed() {
	setTimeout(function() {
		window.obj647_onAppear_runningActionsCount = window.obj647_onAppear_runningActionsCount - 1;
if (window.obj647_onAppear_runningActionsCount < 0) {
	window.obj647_onAppear_runningActionsCount = 0;
} else if (window.obj647_onAppear_runningActionsCount == 0) {
	obj647_onAppear_actionGroup1();
}
	}, 1);
}
//	action: rotate 
//	target: obj813 
rotate_1454();
function rotate_1454() {
	window.obj647_onAppear_runningActionsCount = obj647_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj813";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj813';
	var transformOriginX = '12.26766%';
	var transformOriginY = '52.08723%';
	var rotationToDegrees = '10';
	var rotationSpeed = 0.1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1454_completed(); }
	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1454_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1454_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1454_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1454_completed() {
	setTimeout(function() {
		window.obj647_onAppear_runningActionsCount = window.obj647_onAppear_runningActionsCount - 1;
if (window.obj647_onAppear_runningActionsCount < 0) {
	window.obj647_onAppear_runningActionsCount = 0;
} else if (window.obj647_onAppear_runningActionsCount == 0) {
	obj647_onAppear_actionGroup1();
}
	}, 1);
}














};
obj647_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj647_onAppear_activeActionGroupIndex = -1;
		$("#obj647").trigger("obj647_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 647) {
				console.warn("de-queueing event obj647." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj647").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj647_onAppear_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj647 
rotate_1460();
function rotate_1460() {
	window.obj647_onAppear_runningActionsCount = obj647_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj647";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj647';
	var transformOriginX = '0%';
	var transformOriginY = '48.03031%';
	var rotationToDegrees = '-10';
	var rotationSpeed = 0.1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1460_completed(); }
	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1460_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1460_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1460_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1460_completed() {
	setTimeout(function() {
		window.obj647_onAppear_runningActionsCount = window.obj647_onAppear_runningActionsCount - 1;
if (window.obj647_onAppear_runningActionsCount < 0) {
	window.obj647_onAppear_runningActionsCount = 0;
} else if (window.obj647_onAppear_runningActionsCount == 0) {
	obj647_onAppear_actionGroup2();
}
	}, 1);
}
//	action: rotate 
//	target: obj813 
rotate_1461();
function rotate_1461() {
	window.obj647_onAppear_runningActionsCount = obj647_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj813";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj813';
	var transformOriginX = '12.26766%';
	var transformOriginY = '52.08723%';
	var rotationToDegrees = '-10';
	var rotationSpeed = 0.1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_1461_completed(); }
	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_1461_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1461_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_1461_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_1461_completed() {
	setTimeout(function() {
		window.obj647_onAppear_runningActionsCount = window.obj647_onAppear_runningActionsCount - 1;
if (window.obj647_onAppear_runningActionsCount < 0) {
	window.obj647_onAppear_runningActionsCount = 0;
} else if (window.obj647_onAppear_runningActionsCount == 0) {
	obj647_onAppear_actionGroup2();
}
	}, 1);
}














};
obj647_onAppear_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj647_onAppear_activeActionGroupIndex = -1;
		$("#obj647").trigger("obj647_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 647) {
				console.warn("de-queueing event obj647." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj647").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj647_onAppear_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj647_onAppear();
function loop_obj647_onAppear() {
	var loopCount = 4;
	window.obj647_onAppear_loopCount = window.obj647_onAppear_loopCount + 1;
	if (loopCount != 0 && window.obj647_onAppear_loopCount > loopCount) {
		window.obj647_onAppear_loopCount = 0
		obj647_onAppear_actionGroup3();
	} else {
		obj647_onAppear_actionGroup0();
	}
}













};
obj647_onAppear_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj647_onAppear_activeActionGroupIndex = -1;
		$("#obj647").trigger("obj647_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 647) {
				console.warn("de-queueing event obj647." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj647").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj647_onAppear_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj647 
hide_659();
function hide_659() {
	var selector = "#obj647";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj647_onAppear_runningActionsCount = obj647_onAppear_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj647_onAppear_runningActionsCount = window.obj647_onAppear_runningActionsCount - 1;
if (window.obj647_onAppear_runningActionsCount < 0) {
	window.obj647_onAppear_runningActionsCount = 0;
} else if (window.obj647_onAppear_runningActionsCount == 0) {
	obj647_onAppear_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_659(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj647_onAppear_runningActionsCount = window.obj647_onAppear_runningActionsCount - 1;
if (window.obj647_onAppear_runningActionsCount < 0) {
	window.obj647_onAppear_runningActionsCount = 0;
} else if (window.obj647_onAppear_runningActionsCount == 0) {
	obj647_onAppear_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj813 
hide_818();
function hide_818() {
	var selector = "#obj813";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj647_onAppear_runningActionsCount = obj647_onAppear_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj647_onAppear_runningActionsCount = window.obj647_onAppear_runningActionsCount - 1;
if (window.obj647_onAppear_runningActionsCount < 0) {
	window.obj647_onAppear_runningActionsCount = 0;
} else if (window.obj647_onAppear_runningActionsCount == 0) {
	obj647_onAppear_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_818(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj647_onAppear_runningActionsCount = window.obj647_onAppear_runningActionsCount - 1;
if (window.obj647_onAppear_runningActionsCount < 0) {
	window.obj647_onAppear_runningActionsCount = 0;
} else if (window.obj647_onAppear_runningActionsCount == 0) {
	obj647_onAppear_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj647_onAppear_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj647_onAppear_activeActionGroupIndex = -1;
		$("#obj647").trigger("obj647_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 647) {
				console.warn("de-queueing event obj647." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj647").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj647_onAppear_activeActionGroupIndex = 4;
	





















};
obj2103_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2103_onTap_activeActionGroupIndex = -1;
		$("#obj2103").trigger("obj2103_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2103) {
				console.warn("de-queueing event obj2103." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2103").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2103_onTap_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj3154 
playAudio_3159();
function playAudio_3159() {
	window.obj2103_onTap_runningActionsCount = obj2103_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3154")[0];
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
		    window.obj2103_onTap_runningActionsCount = window.obj2103_onTap_runningActionsCount - 1;
if (window.obj2103_onTap_runningActionsCount < 0) {
	window.obj2103_onTap_runningActionsCount = 0;
} else if (window.obj2103_onTap_runningActionsCount == 0) {
	obj2103_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2103_onTap_runningActionsCount = window.obj2103_onTap_runningActionsCount - 1;
if (window.obj2103_onTap_runningActionsCount < 0) {
	window.obj2103_onTap_runningActionsCount = 0;
} else if (window.obj2103_onTap_runningActionsCount == 0) {
	obj2103_onTap_actionGroup1();
}
	}
}









};
obj2103_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2103_onTap_activeActionGroupIndex = -1;
		$("#obj2103").trigger("obj2103_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2103) {
				console.warn("de-queueing event obj2103." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2103").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2103_onTap_activeActionGroupIndex = 1;
	


















//	action: run action list container
//	target: obj2119 
runActionList_2105();
function runActionList_2105() {
	window.obj2103_onTap_runningActionsCount = obj2103_onTap_runningActionsCount + 1;
	$("#obj2119").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2103_onTap_runningActionsCount = window.obj2103_onTap_runningActionsCount - 1;
if (window.obj2103_onTap_runningActionsCount < 0) {
	window.obj2103_onTap_runningActionsCount = 0;
} else if (window.obj2103_onTap_runningActionsCount == 0) {
	obj2103_onTap_actionGroup2();
}		
	}, 1);
}



};
obj2103_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2103_onTap_activeActionGroupIndex = -1;
		$("#obj2103").trigger("obj2103_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2103) {
				console.warn("de-queueing event obj2103." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2103").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2103_onTap_activeActionGroupIndex = 2;
	





















};
obj2103_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2103_onLoad_activeActionGroupIndex = -1;
		$("#obj2103").trigger("obj2103_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2103) {
				console.warn("de-queueing event obj2103." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2103").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2103_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2103 
move_2107();
function move_2107() {
	window.obj2103_onLoad_runningActionsCount = obj2103_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj2103");
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
			window.obj2103_onLoad_runningActionsCount = window.obj2103_onLoad_runningActionsCount - 1;
if (window.obj2103_onLoad_runningActionsCount < 0) {
	window.obj2103_onLoad_runningActionsCount = 0;
} else if (window.obj2103_onLoad_runningActionsCount == 0) {
	obj2103_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj2103_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2103_onLoad_activeActionGroupIndex = -1;
		$("#obj2103").trigger("obj2103_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2103) {
				console.warn("de-queueing event obj2103." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2103").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2103_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj2103 
move_2108();
function move_2108() {
	window.obj2103_onLoad_runningActionsCount = obj2103_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj2103");
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
			window.obj2103_onLoad_runningActionsCount = window.obj2103_onLoad_runningActionsCount - 1;
if (window.obj2103_onLoad_runningActionsCount < 0) {
	window.obj2103_onLoad_runningActionsCount = 0;
} else if (window.obj2103_onLoad_runningActionsCount == 0) {
	obj2103_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj2103_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2103_onLoad_activeActionGroupIndex = -1;
		$("#obj2103").trigger("obj2103_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2103) {
				console.warn("de-queueing event obj2103." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2103").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2103_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2103_onLoad();
function loop_obj2103_onLoad() {
	var loopCount = 0;
	window.obj2103_onLoad_loopCount = window.obj2103_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2103_onLoad_loopCount > loopCount) {
		window.obj2103_onLoad_loopCount = 0
		obj2103_onLoad_actionGroup3();
	} else {
		obj2103_onLoad_actionGroup0();
	}
}













};
obj2103_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2103_onLoad_activeActionGroupIndex = -1;
		$("#obj2103").trigger("obj2103_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2103) {
				console.warn("de-queueing event obj2103." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2103").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2103_onLoad_activeActionGroupIndex = 3;
	





















};
obj675_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj675_SCEventRun_activeActionGroupIndex = -1;
		$("#obj675").trigger("obj675_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 675) {
				console.warn("de-queueing event obj675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj675_SCEventRun_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj175 
rotate_681();
function rotate_681() {
	window.obj675_SCEventRun_runningActionsCount = obj675_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj175";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj175';
	var transformOriginX = '60.09616%';
	var transformOriginY = '90.65934%';
	var rotationToDegrees = '3';
	var rotationSpeed = 0.1;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_681_completed(); }
	//TweenMax.to(targetObjectId, 0.1, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_681_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_681_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_681_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_681_completed() {
	setTimeout(function() {
		window.obj675_SCEventRun_runningActionsCount = window.obj675_SCEventRun_runningActionsCount - 1;
if (window.obj675_SCEventRun_runningActionsCount < 0) {
	window.obj675_SCEventRun_runningActionsCount = 0;
} else if (window.obj675_SCEventRun_runningActionsCount == 0) {
	obj675_SCEventRun_actionGroup1();
}
	}, 1);
}














};
obj675_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj675_SCEventRun_activeActionGroupIndex = -1;
		$("#obj675").trigger("obj675_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 675) {
				console.warn("de-queueing event obj675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj675_SCEventRun_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj175 
rotate_682();
function rotate_682() {
	window.obj675_SCEventRun_runningActionsCount = obj675_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj175";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj175';
	var transformOriginX = '60.09616%';
	var transformOriginY = '90.65934%';
	var rotationToDegrees = '-3';
	var rotationSpeed = 0.2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_682_completed(); }
	//TweenMax.to(targetObjectId, 0.2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_682_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_682_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_682_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_682_completed() {
	setTimeout(function() {
		window.obj675_SCEventRun_runningActionsCount = window.obj675_SCEventRun_runningActionsCount - 1;
if (window.obj675_SCEventRun_runningActionsCount < 0) {
	window.obj675_SCEventRun_runningActionsCount = 0;
} else if (window.obj675_SCEventRun_runningActionsCount == 0) {
	obj675_SCEventRun_actionGroup2();
}
	}, 1);
}














};
obj675_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj675_SCEventRun_activeActionGroupIndex = -1;
		$("#obj675").trigger("obj675_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 675) {
				console.warn("de-queueing event obj675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj675_SCEventRun_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj675_SCEventRun();
function loop_obj675_SCEventRun() {
	var loopCount = 3;
	window.obj675_SCEventRun_loopCount = window.obj675_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj675_SCEventRun_loopCount > loopCount) {
		window.obj675_SCEventRun_loopCount = 0
		obj675_SCEventRun_actionGroup3();
	} else {
		obj675_SCEventRun_actionGroup0();
	}
}













};
obj675_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj675_SCEventRun_activeActionGroupIndex = -1;
		$("#obj675").trigger("obj675_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 675) {
				console.warn("de-queueing event obj675." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj675").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj675_SCEventRun_activeActionGroupIndex = 3;
	





















};
obj744_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj744_SCEventRun_activeActionGroupIndex = -1;
		$("#obj744").trigger("obj744_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 744) {
				console.warn("de-queueing event obj744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj744_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj447 
hide_746();
function hide_746() {
	var selector = "#obj447";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj744_SCEventRun_runningActionsCount = obj744_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj744_SCEventRun_runningActionsCount = window.obj744_SCEventRun_runningActionsCount - 1;
if (window.obj744_SCEventRun_runningActionsCount < 0) {
	window.obj744_SCEventRun_runningActionsCount = 0;
} else if (window.obj744_SCEventRun_runningActionsCount == 0) {
	obj744_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_746(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj744_SCEventRun_runningActionsCount = window.obj744_SCEventRun_runningActionsCount - 1;
if (window.obj744_SCEventRun_runningActionsCount < 0) {
	window.obj744_SCEventRun_runningActionsCount = 0;
} else if (window.obj744_SCEventRun_runningActionsCount == 0) {
	obj744_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj445 
hide_747();
function hide_747() {
	var selector = "#obj445";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj744_SCEventRun_runningActionsCount = obj744_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj744_SCEventRun_runningActionsCount = window.obj744_SCEventRun_runningActionsCount - 1;
if (window.obj744_SCEventRun_runningActionsCount < 0) {
	window.obj744_SCEventRun_runningActionsCount = 0;
} else if (window.obj744_SCEventRun_runningActionsCount == 0) {
	obj744_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_747(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj744_SCEventRun_runningActionsCount = window.obj744_SCEventRun_runningActionsCount - 1;
if (window.obj744_SCEventRun_runningActionsCount < 0) {
	window.obj744_SCEventRun_runningActionsCount = 0;
} else if (window.obj744_SCEventRun_runningActionsCount == 0) {
	obj744_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}

//	action: move
//	target: obj175 
move_750();
function move_750() {
	window.obj744_SCEventRun_runningActionsCount = obj744_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj175");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=126";
	var moveY = "+=166";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj744_SCEventRun_runningActionsCount = window.obj744_SCEventRun_runningActionsCount - 1;
if (window.obj744_SCEventRun_runningActionsCount < 0) {
	window.obj744_SCEventRun_runningActionsCount = 0;
} else if (window.obj744_SCEventRun_runningActionsCount == 0) {
	obj744_SCEventRun_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj675 
runActionList_757();
function runActionList_757() {
	window.obj744_SCEventRun_runningActionsCount = obj744_SCEventRun_runningActionsCount + 1;
	$("#obj675").trigger('SCEventRun');
	setTimeout(function() {
		window.obj744_SCEventRun_runningActionsCount = window.obj744_SCEventRun_runningActionsCount - 1;
if (window.obj744_SCEventRun_runningActionsCount < 0) {
	window.obj744_SCEventRun_runningActionsCount = 0;
} else if (window.obj744_SCEventRun_runningActionsCount == 0) {
	obj744_SCEventRun_actionGroup1();
}		
	}, 1);
}



};
obj744_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj744_SCEventRun_activeActionGroupIndex = -1;
		$("#obj744").trigger("obj744_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 744) {
				console.warn("de-queueing event obj744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj744_SCEventRun_activeActionGroupIndex = 1;
	


















//	action: run action list container
//	target: obj2128 
runActionList_2133();
function runActionList_2133() {
	window.obj744_SCEventRun_runningActionsCount = obj744_SCEventRun_runningActionsCount + 1;
	$("#obj2128").trigger('SCEventRun');
	setTimeout(function() {
		window.obj744_SCEventRun_runningActionsCount = window.obj744_SCEventRun_runningActionsCount - 1;
if (window.obj744_SCEventRun_runningActionsCount < 0) {
	window.obj744_SCEventRun_runningActionsCount = 0;
} else if (window.obj744_SCEventRun_runningActionsCount == 0) {
	obj744_SCEventRun_actionGroup2();
}		
	}, 1);
}



};
obj744_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj744_SCEventRun_activeActionGroupIndex = -1;
		$("#obj744").trigger("obj744_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 744) {
				console.warn("de-queueing event obj744." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj744").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj744_SCEventRun_activeActionGroupIndex = 2;
	





















};
obj2245_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2245_onLoad_activeActionGroupIndex = -1;
		$("#obj2245").trigger("obj2245_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2245) {
				console.warn("de-queueing event obj2245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2245_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2245 
rotate_2248();
function rotate_2248() {
	window.obj2245_onLoad_runningActionsCount = obj2245_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2245";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2245';
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
	if (isInfinite) { rotate_2248_completed(); }
	//TweenMax.to(targetObjectId, 0.6, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_2248_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2248_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2248_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2248_completed() {
	setTimeout(function() {
		window.obj2245_onLoad_runningActionsCount = window.obj2245_onLoad_runningActionsCount - 1;
if (window.obj2245_onLoad_runningActionsCount < 0) {
	window.obj2245_onLoad_runningActionsCount = 0;
} else if (window.obj2245_onLoad_runningActionsCount == 0) {
	obj2245_onLoad_actionGroup1();
}
	}, 1);
}














};
obj2245_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2245_onLoad_activeActionGroupIndex = -1;
		$("#obj2245").trigger("obj2245_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2245) {
				console.warn("de-queueing event obj2245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2245_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj2245 
rotate_2263();
function rotate_2263() {
	window.obj2245_onLoad_runningActionsCount = obj2245_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2245";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2245';
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
	if (isInfinite) { rotate_2263_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_2263_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2263_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2263_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2263_completed() {
	setTimeout(function() {
		window.obj2245_onLoad_runningActionsCount = window.obj2245_onLoad_runningActionsCount - 1;
if (window.obj2245_onLoad_runningActionsCount < 0) {
	window.obj2245_onLoad_runningActionsCount = 0;
} else if (window.obj2245_onLoad_runningActionsCount == 0) {
	obj2245_onLoad_actionGroup2();
}
	}, 1);
}














};
obj2245_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2245_onLoad_activeActionGroupIndex = -1;
		$("#obj2245").trigger("obj2245_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2245) {
				console.warn("de-queueing event obj2245." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2245").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2245_onLoad_activeActionGroupIndex = 2;
	





















};
obj851_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj851_onLoad_activeActionGroupIndex = -1;
		$("#obj851").trigger("obj851_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 851) {
				console.warn("de-queueing event obj851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj851_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj851 
hide_854();
function hide_854() {
	var selector = "#obj851";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj851_onLoad_runningActionsCount = obj851_onLoad_runningActionsCount + 1;
	
	var animationType = "slideOutLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj851_onLoad_runningActionsCount = window.obj851_onLoad_runningActionsCount - 1;
if (window.obj851_onLoad_runningActionsCount < 0) {
	window.obj851_onLoad_runningActionsCount = 0;
} else if (window.obj851_onLoad_runningActionsCount == 0) {
	obj851_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_854(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj851_onLoad_runningActionsCount = window.obj851_onLoad_runningActionsCount - 1;
if (window.obj851_onLoad_runningActionsCount < 0) {
	window.obj851_onLoad_runningActionsCount = 0;
} else if (window.obj851_onLoad_runningActionsCount == 0) {
	obj851_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj851_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj851_onLoad_activeActionGroupIndex = -1;
		$("#obj851").trigger("obj851_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 851) {
				console.warn("de-queueing event obj851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj851_onLoad_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_855();
function runjs_855() {
	window.obj851_onLoad_runningActionsCount = obj851_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj851"));
	
	setTimeout(function() {
		window.obj851_onLoad_runningActionsCount = window.obj851_onLoad_runningActionsCount - 1;
if (window.obj851_onLoad_runningActionsCount < 0) {
	window.obj851_onLoad_runningActionsCount = 0;
} else if (window.obj851_onLoad_runningActionsCount == 0) {
	obj851_onLoad_actionGroup2();
}
	}, 1);
}







};
obj851_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj851_onLoad_activeActionGroupIndex = -1;
		$("#obj851").trigger("obj851_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 851) {
				console.warn("de-queueing event obj851." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj851").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj851_onLoad_activeActionGroupIndex = 2;
	





















};
obj2059_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2059_onLoad_activeActionGroupIndex = -1;
		$("#obj2059").trigger("obj2059_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2059) {
				console.warn("de-queueing event obj2059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2059_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj2059 
playAudio_2061();
function playAudio_2061() {
	window.obj2059_onLoad_runningActionsCount = obj2059_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj2059")[0];
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
		    window.obj2059_onLoad_runningActionsCount = window.obj2059_onLoad_runningActionsCount - 1;
if (window.obj2059_onLoad_runningActionsCount < 0) {
	window.obj2059_onLoad_runningActionsCount = 0;
} else if (window.obj2059_onLoad_runningActionsCount == 0) {
	obj2059_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2059_onLoad_runningActionsCount = window.obj2059_onLoad_runningActionsCount - 1;
if (window.obj2059_onLoad_runningActionsCount < 0) {
	window.obj2059_onLoad_runningActionsCount = 0;
} else if (window.obj2059_onLoad_runningActionsCount == 0) {
	obj2059_onLoad_actionGroup1();
}
	}
}









};
obj2059_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2059_onLoad_activeActionGroupIndex = -1;
		$("#obj2059").trigger("obj2059_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2059) {
				console.warn("de-queueing event obj2059." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2059").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2059_onLoad_activeActionGroupIndex = 1;
	





















};
obj2110_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2110_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2110").trigger("obj2110_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2110) {
				console.warn("de-queueing event obj2110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2110_SCEventRun_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj2101 
scale_2116();
function scale_2116() {
	window.obj2110_SCEventRun_runningActionsCount = obj2110_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj2101";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2101';
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
		scale_2116_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2116_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2116_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2116_completed() {
	setTimeout(function() {
		window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj2110_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2110_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2110").trigger("obj2110_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2110) {
				console.warn("de-queueing event obj2110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2110_SCEventRun_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj2101
(function(){
	window.obj2110_SCEventRun_runningActionsCount = obj2110_SCEventRun_runningActionsCount + 1;

	var selector = "#obj2101";
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
					window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup2();
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
				window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2110_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2110_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2110").trigger("obj2110_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2110) {
				console.warn("de-queueing event obj2110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2110_SCEventRun_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj2101 
scale_2118();
function scale_2118() {
	window.obj2110_SCEventRun_runningActionsCount = obj2110_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj2101";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2101';
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
		scale_2118_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2118_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2118_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2118_completed() {
	setTimeout(function() {
		window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj2110_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2110_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2110").trigger("obj2110_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2110) {
				console.warn("de-queueing event obj2110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2110_SCEventRun_activeActionGroupIndex = 3;
	

//	action: show 
//	selector: #obj2243
(function(){
	window.obj2110_SCEventRun_runningActionsCount = obj2110_SCEventRun_runningActionsCount + 1;

	var selector = "#obj2243";
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
					window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup4();
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
				window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2244
(function(){
	window.obj2110_SCEventRun_runningActionsCount = obj2110_SCEventRun_runningActionsCount + 1;

	var selector = "#obj2244";
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
					window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup4();
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
				window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2245
(function(){
	window.obj2110_SCEventRun_runningActionsCount = obj2110_SCEventRun_runningActionsCount + 1;

	var selector = "#obj2245";
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
					window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup4();
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
				window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2258
(function(){
	window.obj2110_SCEventRun_runningActionsCount = obj2110_SCEventRun_runningActionsCount + 1;

	var selector = "#obj2258";
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
					window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup4();
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
				window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj3007 
playAudio_3009();
function playAudio_3009() {
	window.obj2110_SCEventRun_runningActionsCount = obj2110_SCEventRun_runningActionsCount + 1;
	var myAudio = $("#obj3007")[0];
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
		    window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup4();
}
	}
}









};
obj2110_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2110_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2110").trigger("obj2110_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2110) {
				console.warn("de-queueing event obj2110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2110_SCEventRun_activeActionGroupIndex = 4;
	

//	action: show 
//	selector: #obj2103
(function(){
	window.obj2110_SCEventRun_runningActionsCount = obj2110_SCEventRun_runningActionsCount + 1;

	var selector = "#obj2103";
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
					window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup5();
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
				window.obj2110_SCEventRun_runningActionsCount = window.obj2110_SCEventRun_runningActionsCount - 1;
if (window.obj2110_SCEventRun_runningActionsCount < 0) {
	window.obj2110_SCEventRun_runningActionsCount = 0;
} else if (window.obj2110_SCEventRun_runningActionsCount == 0) {
	obj2110_SCEventRun_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2110_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2110_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2110").trigger("obj2110_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2110) {
				console.warn("de-queueing event obj2110." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2110").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2110_SCEventRun_activeActionGroupIndex = 5;
	





















};
obj2119_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2119_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2119").trigger("obj2119_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2119) {
				console.warn("de-queueing event obj2119." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2119").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2119_SCEventRun_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2121();
function runjs_2121() {
	window.obj2119_SCEventRun_runningActionsCount = obj2119_SCEventRun_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj851"));
	
	setTimeout(function() {
		window.obj2119_SCEventRun_runningActionsCount = window.obj2119_SCEventRun_runningActionsCount - 1;
if (window.obj2119_SCEventRun_runningActionsCount < 0) {
	window.obj2119_SCEventRun_runningActionsCount = 0;
} else if (window.obj2119_SCEventRun_runningActionsCount == 0) {
	obj2119_SCEventRun_actionGroup1();
}
	}, 1);
}







};
obj2119_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2119_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2119").trigger("obj2119_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2119) {
				console.warn("de-queueing event obj2119." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2119").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2119_SCEventRun_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj851
(function(){
	window.obj2119_SCEventRun_runningActionsCount = obj2119_SCEventRun_runningActionsCount + 1;

	var selector = "#obj851";
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
					window.obj2119_SCEventRun_runningActionsCount = window.obj2119_SCEventRun_runningActionsCount - 1;
if (window.obj2119_SCEventRun_runningActionsCount < 0) {
	window.obj2119_SCEventRun_runningActionsCount = 0;
} else if (window.obj2119_SCEventRun_runningActionsCount == 0) {
	obj2119_SCEventRun_actionGroup2();
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
				window.obj2119_SCEventRun_runningActionsCount = window.obj2119_SCEventRun_runningActionsCount - 1;
if (window.obj2119_SCEventRun_runningActionsCount < 0) {
	window.obj2119_SCEventRun_runningActionsCount = 0;
} else if (window.obj2119_SCEventRun_runningActionsCount == 0) {
	obj2119_SCEventRun_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2119_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2119_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2119").trigger("obj2119_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2119) {
				console.warn("de-queueing event obj2119." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2119").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2119_SCEventRun_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_2123();
function goToPage_2123() {
	window.obj2119_SCEventRun_runningActionsCount = obj2119_SCEventRun_runningActionsCount + 1;
	$("#anchor39")[0].click();
	window.obj2119_SCEventRun_runningActionsCount = window.obj2119_SCEventRun_runningActionsCount - 1;
if (window.obj2119_SCEventRun_runningActionsCount < 0) {
	window.obj2119_SCEventRun_runningActionsCount = 0;
} else if (window.obj2119_SCEventRun_runningActionsCount == 0) {
	obj2119_SCEventRun_actionGroup3();
}
}





















};
obj2119_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2119_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2119").trigger("obj2119_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2119) {
				console.warn("de-queueing event obj2119." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2119").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2119_SCEventRun_activeActionGroupIndex = 3;
	





















};
obj2128_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2128_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2128").trigger("obj2128_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2128) {
				console.warn("de-queueing event obj2128." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2128").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2128_SCEventRun_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj175 
move_2130();
function move_2130() {
	window.obj2128_SCEventRun_runningActionsCount = obj2128_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj175");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=-20";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2128_SCEventRun_runningActionsCount = window.obj2128_SCEventRun_runningActionsCount - 1;
if (window.obj2128_SCEventRun_runningActionsCount < 0) {
	window.obj2128_SCEventRun_runningActionsCount = 0;
} else if (window.obj2128_SCEventRun_runningActionsCount == 0) {
	obj2128_SCEventRun_actionGroup1();
}
		}, 1);
	});
}



















};
obj2128_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2128_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2128").trigger("obj2128_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2128) {
				console.warn("de-queueing event obj2128." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2128").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2128_SCEventRun_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj175 
move_2131();
function move_2131() {
	window.obj2128_SCEventRun_runningActionsCount = obj2128_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj175");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=20";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2128_SCEventRun_runningActionsCount = window.obj2128_SCEventRun_runningActionsCount - 1;
if (window.obj2128_SCEventRun_runningActionsCount < 0) {
	window.obj2128_SCEventRun_runningActionsCount = 0;
} else if (window.obj2128_SCEventRun_runningActionsCount == 0) {
	obj2128_SCEventRun_actionGroup2();
}
		}, 1);
	});
}



















};
obj2128_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2128_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2128").trigger("obj2128_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2128) {
				console.warn("de-queueing event obj2128." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2128").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2128_SCEventRun_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2128_SCEventRun();
function loop_obj2128_SCEventRun() {
	var loopCount = 6;
	window.obj2128_SCEventRun_loopCount = window.obj2128_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj2128_SCEventRun_loopCount > loopCount) {
		window.obj2128_SCEventRun_loopCount = 0
		obj2128_SCEventRun_actionGroup3();
	} else {
		obj2128_SCEventRun_actionGroup0();
	}
}













};
obj2128_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2128_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2128").trigger("obj2128_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2128) {
				console.warn("de-queueing event obj2128." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2128").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2128_SCEventRun_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj174: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj174_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj174_onLoad is still running");
	return;
}
var obj174_onLoad_runningActionsCount = 0;
var obj174_onLoad_loopCount = 0;
obj174_onLoad_actionGroup0();
});










/*
 *
 *   obj447: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj447_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj447_onLoad is still running");
	return;
}
var obj447_onLoad_runningActionsCount = 0;
var obj447_onLoad_loopCount = 0;
obj447_onLoad_actionGroup0();
});










/*
 *
 *   obj175: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj175_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj175_onLoad is still running");
	return;
}
var obj175_onLoad_runningActionsCount = 0;
var obj175_onLoad_loopCount = 0;
obj175_onLoad_actionGroup0();
});




/*
 *
 *   obj175: Event Appear
 *
 */
$("#obj175").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(175, "onDisappear") || 
		pubcoder.isActionListRunning(175, "onAppear")) {
		console.warn("queueing event obj175." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 175, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj175_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj175_onAppear is still running");
	return;
}
var obj175_onAppear_runningActionsCount = 0;
var obj175_onAppear_loopCount = 0;
obj175_onAppear_actionGroup0();
});





/*
 *
 *   obj478: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj478_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj478_onLoad is still running");
	return;
}
var obj478_onLoad_runningActionsCount = 0;
var obj478_onLoad_loopCount = 0;
obj478_onLoad_actionGroup0();
});




















/*
 *
 *   obj576: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj576_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj576_onLoad is still running");
	return;
}
var obj576_onLoad_runningActionsCount = 0;
var obj576_onLoad_loopCount = 0;
obj576_onLoad_actionGroup0();
});










/*
 *
 *   obj572: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj572_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj572_onLoad is still running");
	return;
}
var obj572_onLoad_runningActionsCount = 0;
var obj572_onLoad_loopCount = 0;
obj572_onLoad_actionGroup0();
});








/*
 *
 *   obj645: Event Touch Down
 *
 */
$("#obj645").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj645_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj645_onTap is still running");
	return;
}
var obj645_onTap_runningActionsCount = 0;
var obj645_onTap_loopCount = 0;
obj645_onTap_actionGroup0();
});












/*
 *
 *   obj593: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj593_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj593_onLoad is still running");
	return;
}
var obj593_onLoad_runningActionsCount = 0;
var obj593_onLoad_loopCount = 0;
obj593_onLoad_actionGroup0();
});










/*
 *
 *   obj599: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj599_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj599_onLoad is still running");
	return;
}
var obj599_onLoad_runningActionsCount = 0;
var obj599_onLoad_loopCount = 0;
obj599_onLoad_actionGroup0();
});








/*
 *
 *   obj643: Event Touch Down
 *
 */
$("#obj643").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj643_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj643_onTap is still running");
	return;
}
var obj643_onTap_runningActionsCount = 0;
var obj643_onTap_loopCount = 0;
obj643_onTap_actionGroup0();
});












/*
 *
 *   obj613: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj613_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj613_onLoad is still running");
	return;
}
var obj613_onLoad_runningActionsCount = 0;
var obj613_onLoad_loopCount = 0;
obj613_onLoad_actionGroup0();
});










/*
 *
 *   obj619: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj619_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj619_onLoad is still running");
	return;
}
var obj619_onLoad_runningActionsCount = 0;
var obj619_onLoad_loopCount = 0;
obj619_onLoad_actionGroup0();
});








/*
 *
 *   obj641: Event Touch Down
 *
 */
$("#obj641").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj641_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj641_onTap is still running");
	return;
}
var obj641_onTap_runningActionsCount = 0;
var obj641_onTap_loopCount = 0;
obj641_onTap_actionGroup0();
});










/*
 *
 *   obj720: Event Touch Down
 *
 */
$("#obj720").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj720_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj720_onTap is still running");
	return;
}
var obj720_onTap_runningActionsCount = 0;
var obj720_onTap_loopCount = 0;
obj720_onTap_actionGroup0();
});


























/*
 *
 *   obj647: Event Appear
 *
 */
$("#obj647").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(647, "onDisappear") || 
		pubcoder.isActionListRunning(647, "onAppear")) {
		console.warn("queueing event obj647." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 647, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj647_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj647_onAppear is still running");
	return;
}
var obj647_onAppear_runningActionsCount = 0;
var obj647_onAppear_loopCount = 0;
obj647_onAppear_actionGroup0();
});













/*
 *
 *   obj2103: Event Touch Down
 *
 */
$("#obj2103").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2103_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2103_onTap is still running");
	return;
}
var obj2103_onTap_runningActionsCount = 0;
var obj2103_onTap_loopCount = 0;
obj2103_onTap_actionGroup0();
});


/*
 *
 *   obj2103: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2103_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2103_onLoad is still running");
	return;
}
var obj2103_onLoad_runningActionsCount = 0;
var obj2103_onLoad_loopCount = 0;
obj2103_onLoad_actionGroup0();
});












/*
 *
 *   obj675: Event SCEventRun
 *
 */
$("#obj675").bind("SCEventRun", function(event) {
	if (window.obj675_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj675_SCEventRun is still running");
	return;
}
var obj675_SCEventRun_runningActionsCount = 0;
var obj675_SCEventRun_loopCount = 0;
obj675_SCEventRun_actionGroup0();
});










/*
 *
 *   obj744: Event SCEventRun
 *
 */
$("#obj744").bind("SCEventRun", function(event) {
	if (window.obj744_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj744_SCEventRun is still running");
	return;
}
var obj744_SCEventRun_runningActionsCount = 0;
var obj744_SCEventRun_loopCount = 0;
obj744_SCEventRun_actionGroup0();
});















































/*
 *
 *   obj2245: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2245_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2245_onLoad is still running");
	return;
}
var obj2245_onLoad_runningActionsCount = 0;
var obj2245_onLoad_loopCount = 0;
obj2245_onLoad_actionGroup0();
});










/*
 *
 *   obj851: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj851_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj851_onLoad is still running");
	return;
}
var obj851_onLoad_runningActionsCount = 0;
var obj851_onLoad_loopCount = 0;
obj851_onLoad_actionGroup0();
});




















/*
 *
 *   obj2059: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2059_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2059_onLoad is still running");
	return;
}
var obj2059_onLoad_runningActionsCount = 0;
var obj2059_onLoad_loopCount = 0;
obj2059_onLoad_actionGroup0();
});
































/*
 *
 *   obj2110: Event SCEventRun
 *
 */
$("#obj2110").bind("SCEventRun", function(event) {
	if (window.obj2110_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2110_SCEventRun is still running");
	return;
}
var obj2110_SCEventRun_runningActionsCount = 0;
var obj2110_SCEventRun_loopCount = 0;
obj2110_SCEventRun_actionGroup0();
});










/*
 *
 *   obj2119: Event SCEventRun
 *
 */
$("#obj2119").bind("SCEventRun", function(event) {
	if (window.obj2119_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2119_SCEventRun is still running");
	return;
}
var obj2119_SCEventRun_runningActionsCount = 0;
var obj2119_SCEventRun_loopCount = 0;
obj2119_SCEventRun_actionGroup0();
});










/*
 *
 *   obj2128: Event SCEventRun
 *
 */
$("#obj2128").bind("SCEventRun", function(event) {
	if (window.obj2128_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2128_SCEventRun is still running");
	return;
}
var obj2128_SCEventRun_runningActionsCount = 0;
var obj2128_SCEventRun_loopCount = 0;
obj2128_SCEventRun_actionGroup0();
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
	
$("#obj173").trigger('SCEventShow');
$("#obj174").trigger('SCEventShow');
$("#obj175").trigger('SCEventShow');
$("#obj478").trigger('SCEventShow');
$("#obj645").trigger('SCEventShow');
$("#obj643").trigger('SCEventShow');
$("#obj641").trigger('SCEventShow');
$("#obj720").trigger('SCEventShow');
$("#obj822").trigger('SCEventShow');
$("#obj851").trigger('SCEventShow');
$("#obj890").trigger('SCEventShow');
$("#obj2059").trigger('SCEventShow');
$("#obj2062").trigger('SCEventShow');
$("#obj2125").trigger('SCEventShow');
$("#obj3007").trigger('SCEventShow');
$("#obj3154").trigger('SCEventShow');
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