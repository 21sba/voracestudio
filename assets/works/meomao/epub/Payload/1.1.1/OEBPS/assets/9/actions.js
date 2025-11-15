pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 510;
pubcoder.page.title = pubcoder.page.title || "9";
pubcoder.page.number = pubcoder.page.number || 9;
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
var obj513_onLoad_activeActionGroupIndex = -1;
var obj513_onLoad_runningActionsCount = 0;
var obj513_onLoad_loopCount = 0;
var obj556_onLoad_activeActionGroupIndex = -1;
var obj556_onLoad_runningActionsCount = 0;
var obj556_onLoad_loopCount = 0;
var obj519_onLoad_activeActionGroupIndex = -1;
var obj519_onLoad_runningActionsCount = 0;
var obj519_onLoad_loopCount = 0;
var obj2285_onLoad_activeActionGroupIndex = -1;
var obj2285_onLoad_runningActionsCount = 0;
var obj2285_onLoad_loopCount = 0;
var obj1761_onTap_activeActionGroupIndex = -1;
var obj1761_onTap_runningActionsCount = 0;
var obj1761_onTap_loopCount = 0;
var obj1761_onLoad_activeActionGroupIndex = -1;
var obj1761_onLoad_runningActionsCount = 0;
var obj1761_onLoad_loopCount = 0;
var obj856_onLoad_activeActionGroupIndex = -1;
var obj856_onLoad_runningActionsCount = 0;
var obj856_onLoad_loopCount = 0;
var obj2275_SCEventRun_activeActionGroupIndex = -1;
var obj2275_SCEventRun_runningActionsCount = 0;
var obj2275_SCEventRun_loopCount = 0;
var obj1745_SCEventRun_activeActionGroupIndex = -1;
var obj1745_SCEventRun_runningActionsCount = 0;
var obj1745_SCEventRun_loopCount = 0;
var obj2034_onLoad_activeActionGroupIndex = -1;
var obj2034_onLoad_runningActionsCount = 0;
var obj2034_onLoad_loopCount = 0;
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
		
obj513_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj513_onLoad_activeActionGroupIndex = -1;
		$("#obj513").trigger("obj513_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 513) {
				console.warn("de-queueing event obj513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj513_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj513 
scale_516();
function scale_516() {
	window.obj513_onLoad_runningActionsCount = obj513_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj513";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj513';
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
		scale_516_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_516_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_516_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_516_completed() {
	setTimeout(function() {
		window.obj513_onLoad_runningActionsCount = window.obj513_onLoad_runningActionsCount - 1;
if (window.obj513_onLoad_runningActionsCount < 0) {
	window.obj513_onLoad_runningActionsCount = 0;
} else if (window.obj513_onLoad_runningActionsCount == 0) {
	obj513_onLoad_actionGroup1();
}
	}, 1);
}












};
obj513_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj513_onLoad_activeActionGroupIndex = -1;
		$("#obj513").trigger("obj513_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 513) {
				console.warn("de-queueing event obj513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj513_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj513 
scale_517();
function scale_517() {
	window.obj513_onLoad_runningActionsCount = obj513_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj513";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj513';
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
		scale_517_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_517_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_517_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_517_completed() {
	setTimeout(function() {
		window.obj513_onLoad_runningActionsCount = window.obj513_onLoad_runningActionsCount - 1;
if (window.obj513_onLoad_runningActionsCount < 0) {
	window.obj513_onLoad_runningActionsCount = 0;
} else if (window.obj513_onLoad_runningActionsCount == 0) {
	obj513_onLoad_actionGroup2();
}
	}, 1);
}












};
obj513_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj513_onLoad_activeActionGroupIndex = -1;
		$("#obj513").trigger("obj513_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 513) {
				console.warn("de-queueing event obj513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj513_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj513_onLoad();
function loop_obj513_onLoad() {
	var loopCount = 0;
	window.obj513_onLoad_loopCount = window.obj513_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj513_onLoad_loopCount > loopCount) {
		window.obj513_onLoad_loopCount = 0
		obj513_onLoad_actionGroup3();
	} else {
		obj513_onLoad_actionGroup0();
	}
}













};
obj513_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj513_onLoad_activeActionGroupIndex = -1;
		$("#obj513").trigger("obj513_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 513) {
				console.warn("de-queueing event obj513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj513_onLoad_activeActionGroupIndex = 3;
	





















};
obj556_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj556_onLoad_activeActionGroupIndex = -1;
		$("#obj556").trigger("obj556_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 556) {
				console.warn("de-queueing event obj556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj556_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj556 
scale_1758();
function scale_1758() {
	window.obj556_onLoad_runningActionsCount = obj556_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj556";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj556';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '0.98';
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
		scale_1758_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1758_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1758_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1758_completed() {
	setTimeout(function() {
		window.obj556_onLoad_runningActionsCount = window.obj556_onLoad_runningActionsCount - 1;
if (window.obj556_onLoad_runningActionsCount < 0) {
	window.obj556_onLoad_runningActionsCount = 0;
} else if (window.obj556_onLoad_runningActionsCount == 0) {
	obj556_onLoad_actionGroup1();
}
	}, 1);
}












};
obj556_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj556_onLoad_activeActionGroupIndex = -1;
		$("#obj556").trigger("obj556_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 556) {
				console.warn("de-queueing event obj556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj556_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj556 
scale_1759();
function scale_1759() {
	window.obj556_onLoad_runningActionsCount = obj556_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj556";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj556';
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
		scale_1759_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1759_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1759_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1759_completed() {
	setTimeout(function() {
		window.obj556_onLoad_runningActionsCount = window.obj556_onLoad_runningActionsCount - 1;
if (window.obj556_onLoad_runningActionsCount < 0) {
	window.obj556_onLoad_runningActionsCount = 0;
} else if (window.obj556_onLoad_runningActionsCount == 0) {
	obj556_onLoad_actionGroup2();
}
	}, 1);
}












};
obj556_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj556_onLoad_activeActionGroupIndex = -1;
		$("#obj556").trigger("obj556_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 556) {
				console.warn("de-queueing event obj556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj556_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj556_onLoad();
function loop_obj556_onLoad() {
	var loopCount = 0;
	window.obj556_onLoad_loopCount = window.obj556_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj556_onLoad_loopCount > loopCount) {
		window.obj556_onLoad_loopCount = 0
		obj556_onLoad_actionGroup3();
	} else {
		obj556_onLoad_actionGroup0();
	}
}













};
obj556_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj556_onLoad_activeActionGroupIndex = -1;
		$("#obj556").trigger("obj556_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 556) {
				console.warn("de-queueing event obj556." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj556").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj556_onLoad_activeActionGroupIndex = 3;
	





















};
obj519_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj519_onLoad_activeActionGroupIndex = -1;
		$("#obj519").trigger("obj519_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 519) {
				console.warn("de-queueing event obj519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj519_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_522();
function wait_522() {
	window.obj519_onLoad_runningActionsCount = obj519_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj519_onLoad_runningActionsCount = window.obj519_onLoad_runningActionsCount - 1;
if (window.obj519_onLoad_runningActionsCount < 0) {
	window.obj519_onLoad_runningActionsCount = 0;
} else if (window.obj519_onLoad_runningActionsCount == 0) {
	obj519_onLoad_actionGroup1();
}
	}, 300);
}













};
obj519_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj519_onLoad_activeActionGroupIndex = -1;
		$("#obj519").trigger("obj519_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 519) {
				console.warn("de-queueing event obj519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj519_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj519 
scale_523();
function scale_523() {
	window.obj519_onLoad_runningActionsCount = obj519_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj519";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj519';
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
		scale_523_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_523_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_523_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_523_completed() {
	setTimeout(function() {
		window.obj519_onLoad_runningActionsCount = window.obj519_onLoad_runningActionsCount - 1;
if (window.obj519_onLoad_runningActionsCount < 0) {
	window.obj519_onLoad_runningActionsCount = 0;
} else if (window.obj519_onLoad_runningActionsCount == 0) {
	obj519_onLoad_actionGroup2();
}
	}, 1);
}












};
obj519_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj519_onLoad_activeActionGroupIndex = -1;
		$("#obj519").trigger("obj519_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 519) {
				console.warn("de-queueing event obj519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj519_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj519
(function(){
	window.obj519_onLoad_runningActionsCount = obj519_onLoad_runningActionsCount + 1;

	var selector = "#obj519";
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
					window.obj519_onLoad_runningActionsCount = window.obj519_onLoad_runningActionsCount - 1;
if (window.obj519_onLoad_runningActionsCount < 0) {
	window.obj519_onLoad_runningActionsCount = 0;
} else if (window.obj519_onLoad_runningActionsCount == 0) {
	obj519_onLoad_actionGroup3();
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
				window.obj519_onLoad_runningActionsCount = window.obj519_onLoad_runningActionsCount - 1;
if (window.obj519_onLoad_runningActionsCount < 0) {
	window.obj519_onLoad_runningActionsCount = 0;
} else if (window.obj519_onLoad_runningActionsCount == 0) {
	obj519_onLoad_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj519_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj519_onLoad_activeActionGroupIndex = -1;
		$("#obj519").trigger("obj519_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 519) {
				console.warn("de-queueing event obj519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj519_onLoad_activeActionGroupIndex = 3;
	









//	action: scale
//	target: obj519 
scale_525();
function scale_525() {
	window.obj519_onLoad_runningActionsCount = obj519_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj519";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj519';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.05';
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
		scale_525_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_525_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_525_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_525_completed() {
	setTimeout(function() {
		window.obj519_onLoad_runningActionsCount = window.obj519_onLoad_runningActionsCount - 1;
if (window.obj519_onLoad_runningActionsCount < 0) {
	window.obj519_onLoad_runningActionsCount = 0;
} else if (window.obj519_onLoad_runningActionsCount == 0) {
	obj519_onLoad_actionGroup4();
}
	}, 1);
}












};
obj519_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj519_onLoad_activeActionGroupIndex = -1;
		$("#obj519").trigger("obj519_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 519) {
				console.warn("de-queueing event obj519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj519_onLoad_activeActionGroupIndex = 4;
	

//	action: show 
//	selector: #obj549
(function(){
	window.obj519_onLoad_runningActionsCount = obj519_onLoad_runningActionsCount + 1;

	var selector = "#obj549";
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
					window.obj519_onLoad_runningActionsCount = window.obj519_onLoad_runningActionsCount - 1;
if (window.obj519_onLoad_runningActionsCount < 0) {
	window.obj519_onLoad_runningActionsCount = 0;
} else if (window.obj519_onLoad_runningActionsCount == 0) {
	obj519_onLoad_actionGroup5();
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
				window.obj519_onLoad_runningActionsCount = window.obj519_onLoad_runningActionsCount - 1;
if (window.obj519_onLoad_runningActionsCount < 0) {
	window.obj519_onLoad_runningActionsCount = 0;
} else if (window.obj519_onLoad_runningActionsCount == 0) {
	obj519_onLoad_actionGroup5();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj519_onLoad_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj519_onLoad_activeActionGroupIndex = -1;
		$("#obj519").trigger("obj519_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 519) {
				console.warn("de-queueing event obj519." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj519").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj519_onLoad_activeActionGroupIndex = 5;
	





















};
obj2285_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2285_onLoad_activeActionGroupIndex = -1;
		$("#obj2285").trigger("obj2285_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2285) {
				console.warn("de-queueing event obj2285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2285_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2285 
rotate_2288();
function rotate_2288() {
	window.obj2285_onLoad_runningActionsCount = obj2285_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2285";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2285';
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
	if (isInfinite) { rotate_2288_completed(); }
	//TweenMax.to(targetObjectId, 0.6, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_2288_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2288_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2288_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2288_completed() {
	setTimeout(function() {
		window.obj2285_onLoad_runningActionsCount = window.obj2285_onLoad_runningActionsCount - 1;
if (window.obj2285_onLoad_runningActionsCount < 0) {
	window.obj2285_onLoad_runningActionsCount = 0;
} else if (window.obj2285_onLoad_runningActionsCount == 0) {
	obj2285_onLoad_actionGroup1();
}
	}, 1);
}














};
obj2285_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2285_onLoad_activeActionGroupIndex = -1;
		$("#obj2285").trigger("obj2285_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2285) {
				console.warn("de-queueing event obj2285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2285_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj2285 
rotate_2289();
function rotate_2289() {
	window.obj2285_onLoad_runningActionsCount = obj2285_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2285";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2285';
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
	if (isInfinite) { rotate_2289_completed(); }
	//TweenMax.to(targetObjectId, 0.3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:-1, onComplete:rotate_2289_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2289_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2289_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2289_completed() {
	setTimeout(function() {
		window.obj2285_onLoad_runningActionsCount = window.obj2285_onLoad_runningActionsCount - 1;
if (window.obj2285_onLoad_runningActionsCount < 0) {
	window.obj2285_onLoad_runningActionsCount = 0;
} else if (window.obj2285_onLoad_runningActionsCount == 0) {
	obj2285_onLoad_actionGroup2();
}
	}, 1);
}














};
obj2285_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2285_onLoad_activeActionGroupIndex = -1;
		$("#obj2285").trigger("obj2285_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2285) {
				console.warn("de-queueing event obj2285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2285_onLoad_activeActionGroupIndex = 2;
	





















};
obj1761_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1761_onTap_activeActionGroupIndex = -1;
		$("#obj1761").trigger("obj1761_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1761) {
				console.warn("de-queueing event obj1761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1761_onTap_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj3163 
playAudio_3165();
function playAudio_3165() {
	window.obj1761_onTap_runningActionsCount = obj1761_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3163")[0];
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
		    window.obj1761_onTap_runningActionsCount = window.obj1761_onTap_runningActionsCount - 1;
if (window.obj1761_onTap_runningActionsCount < 0) {
	window.obj1761_onTap_runningActionsCount = 0;
} else if (window.obj1761_onTap_runningActionsCount == 0) {
	obj1761_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1761_onTap_runningActionsCount = window.obj1761_onTap_runningActionsCount - 1;
if (window.obj1761_onTap_runningActionsCount < 0) {
	window.obj1761_onTap_runningActionsCount = 0;
} else if (window.obj1761_onTap_runningActionsCount == 0) {
	obj1761_onTap_actionGroup1();
}
	}
}





//	action: run action list container
//	target: obj1745 
runActionList_1775();
function runActionList_1775() {
	window.obj1761_onTap_runningActionsCount = obj1761_onTap_runningActionsCount + 1;
	$("#obj1745").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1761_onTap_runningActionsCount = window.obj1761_onTap_runningActionsCount - 1;
if (window.obj1761_onTap_runningActionsCount < 0) {
	window.obj1761_onTap_runningActionsCount = 0;
} else if (window.obj1761_onTap_runningActionsCount == 0) {
	obj1761_onTap_actionGroup1();
}		
	}, 1);
}



};
obj1761_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1761_onTap_activeActionGroupIndex = -1;
		$("#obj1761").trigger("obj1761_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1761) {
				console.warn("de-queueing event obj1761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1761_onTap_activeActionGroupIndex = 1;
	





















};
obj1761_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1761_onLoad_activeActionGroupIndex = -1;
		$("#obj1761").trigger("obj1761_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1761) {
				console.warn("de-queueing event obj1761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1761_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1761 
move_1770();
function move_1770() {
	window.obj1761_onLoad_runningActionsCount = obj1761_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1761");
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
			window.obj1761_onLoad_runningActionsCount = window.obj1761_onLoad_runningActionsCount - 1;
if (window.obj1761_onLoad_runningActionsCount < 0) {
	window.obj1761_onLoad_runningActionsCount = 0;
} else if (window.obj1761_onLoad_runningActionsCount == 0) {
	obj1761_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj1761_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1761_onLoad_activeActionGroupIndex = -1;
		$("#obj1761").trigger("obj1761_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1761) {
				console.warn("de-queueing event obj1761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1761_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1761 
move_1771();
function move_1771() {
	window.obj1761_onLoad_runningActionsCount = obj1761_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1761");
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
			window.obj1761_onLoad_runningActionsCount = window.obj1761_onLoad_runningActionsCount - 1;
if (window.obj1761_onLoad_runningActionsCount < 0) {
	window.obj1761_onLoad_runningActionsCount = 0;
} else if (window.obj1761_onLoad_runningActionsCount == 0) {
	obj1761_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj1761_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1761_onLoad_activeActionGroupIndex = -1;
		$("#obj1761").trigger("obj1761_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1761) {
				console.warn("de-queueing event obj1761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1761_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1761_onLoad();
function loop_obj1761_onLoad() {
	var loopCount = 0;
	window.obj1761_onLoad_loopCount = window.obj1761_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1761_onLoad_loopCount > loopCount) {
		window.obj1761_onLoad_loopCount = 0
		obj1761_onLoad_actionGroup3();
	} else {
		obj1761_onLoad_actionGroup0();
	}
}













};
obj1761_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1761_onLoad_activeActionGroupIndex = -1;
		$("#obj1761").trigger("obj1761_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1761) {
				console.warn("de-queueing event obj1761." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1761").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1761_onLoad_activeActionGroupIndex = 3;
	





















};
obj856_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj856_onLoad_activeActionGroupIndex = -1;
		$("#obj856").trigger("obj856_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 856) {
				console.warn("de-queueing event obj856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj856_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj856 
hide_859();
function hide_859() {
	var selector = "#obj856";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj856_onLoad_runningActionsCount = obj856_onLoad_runningActionsCount + 1;
	
	var animationType = "slideOutLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj856_onLoad_runningActionsCount = window.obj856_onLoad_runningActionsCount - 1;
if (window.obj856_onLoad_runningActionsCount < 0) {
	window.obj856_onLoad_runningActionsCount = 0;
} else if (window.obj856_onLoad_runningActionsCount == 0) {
	obj856_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_859(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj856_onLoad_runningActionsCount = window.obj856_onLoad_runningActionsCount - 1;
if (window.obj856_onLoad_runningActionsCount < 0) {
	window.obj856_onLoad_runningActionsCount = 0;
} else if (window.obj856_onLoad_runningActionsCount == 0) {
	obj856_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj856_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj856_onLoad_activeActionGroupIndex = -1;
		$("#obj856").trigger("obj856_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 856) {
				console.warn("de-queueing event obj856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj856_onLoad_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_860();
function runjs_860() {
	window.obj856_onLoad_runningActionsCount = obj856_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj856"));
	
	setTimeout(function() {
		window.obj856_onLoad_runningActionsCount = window.obj856_onLoad_runningActionsCount - 1;
if (window.obj856_onLoad_runningActionsCount < 0) {
	window.obj856_onLoad_runningActionsCount = 0;
} else if (window.obj856_onLoad_runningActionsCount == 0) {
	obj856_onLoad_actionGroup2();
}
	}, 1);
}







};
obj856_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj856_onLoad_activeActionGroupIndex = -1;
		$("#obj856").trigger("obj856_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 856) {
				console.warn("de-queueing event obj856." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj856").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj856_onLoad_activeActionGroupIndex = 2;
	





















};
obj2275_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_SCEventRun_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj2294 
scale_2277();
function scale_2277() {
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj2294";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2294';
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
		scale_2277_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2277_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2277_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2277_completed() {
	setTimeout(function() {
		window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj2275_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_SCEventRun_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj2294
(function(){
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;

	var selector = "#obj2294";
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
					window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup2();
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
				window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2275_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_SCEventRun_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj2294 
scale_2279();
function scale_2279() {
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj2294";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2294';
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
		scale_2279_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2279_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2279_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2279_completed() {
	setTimeout(function() {
		window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup3();
}
	}, 1);
}












};
obj2275_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2275_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_SCEventRun_activeActionGroupIndex = 3;
	

//	action: show 
//	selector: #obj2292
(function(){
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;

	var selector = "#obj2292";
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
					window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
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
				window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2290
(function(){
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;

	var selector = "#obj2290";
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
					window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
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
				window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2285
(function(){
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;

	var selector = "#obj2285";
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
					window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
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
				window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2296
(function(){
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;

	var selector = "#obj2296";
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
					window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
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
				window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj1761
(function(){
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;

	var selector = "#obj1761";
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
					window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
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
				window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj3011 
playAudio_3013();
function playAudio_3013() {
	window.obj2275_SCEventRun_runningActionsCount = obj2275_SCEventRun_runningActionsCount + 1;
	var myAudio = $("#obj3011")[0];
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
		    window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2275_SCEventRun_runningActionsCount = window.obj2275_SCEventRun_runningActionsCount - 1;
if (window.obj2275_SCEventRun_runningActionsCount < 0) {
	window.obj2275_SCEventRun_runningActionsCount = 0;
} else if (window.obj2275_SCEventRun_runningActionsCount == 0) {
	obj2275_SCEventRun_actionGroup4();
}
	}
}









};
obj2275_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2275_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2275").trigger("obj2275_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2275) {
				console.warn("de-queueing event obj2275." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2275").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2275_SCEventRun_activeActionGroupIndex = 4;
	





















};
obj1745_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1745_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1745").trigger("obj1745_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1745) {
				console.warn("de-queueing event obj1745." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1745").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1745_SCEventRun_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1747();
function runjs_1747() {
	window.obj1745_SCEventRun_runningActionsCount = obj1745_SCEventRun_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj856"));
	
	setTimeout(function() {
		window.obj1745_SCEventRun_runningActionsCount = window.obj1745_SCEventRun_runningActionsCount - 1;
if (window.obj1745_SCEventRun_runningActionsCount < 0) {
	window.obj1745_SCEventRun_runningActionsCount = 0;
} else if (window.obj1745_SCEventRun_runningActionsCount == 0) {
	obj1745_SCEventRun_actionGroup1();
}
	}, 1);
}







};
obj1745_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1745_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1745").trigger("obj1745_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1745) {
				console.warn("de-queueing event obj1745." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1745").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1745_SCEventRun_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj856
(function(){
	window.obj1745_SCEventRun_runningActionsCount = obj1745_SCEventRun_runningActionsCount + 1;

	var selector = "#obj856";
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
					window.obj1745_SCEventRun_runningActionsCount = window.obj1745_SCEventRun_runningActionsCount - 1;
if (window.obj1745_SCEventRun_runningActionsCount < 0) {
	window.obj1745_SCEventRun_runningActionsCount = 0;
} else if (window.obj1745_SCEventRun_runningActionsCount == 0) {
	obj1745_SCEventRun_actionGroup2();
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
				window.obj1745_SCEventRun_runningActionsCount = window.obj1745_SCEventRun_runningActionsCount - 1;
if (window.obj1745_SCEventRun_runningActionsCount < 0) {
	window.obj1745_SCEventRun_runningActionsCount = 0;
} else if (window.obj1745_SCEventRun_runningActionsCount == 0) {
	obj1745_SCEventRun_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj1745_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1745_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1745").trigger("obj1745_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1745) {
				console.warn("de-queueing event obj1745." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1745").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1745_SCEventRun_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_1749();
function goToPage_1749() {
	window.obj1745_SCEventRun_runningActionsCount = obj1745_SCEventRun_runningActionsCount + 1;
	$("#anchor47")[0].click();
	window.obj1745_SCEventRun_runningActionsCount = window.obj1745_SCEventRun_runningActionsCount - 1;
if (window.obj1745_SCEventRun_runningActionsCount < 0) {
	window.obj1745_SCEventRun_runningActionsCount = 0;
} else if (window.obj1745_SCEventRun_runningActionsCount == 0) {
	obj1745_SCEventRun_actionGroup3();
}
}





















};
obj1745_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1745_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1745").trigger("obj1745_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1745) {
				console.warn("de-queueing event obj1745." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1745").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1745_SCEventRun_activeActionGroupIndex = 3;
	





















};
obj2034_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2034_onLoad_activeActionGroupIndex = -1;
		$("#obj2034").trigger("obj2034_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2034) {
				console.warn("de-queueing event obj2034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2034_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj2034 
playAudio_2036();
function playAudio_2036() {
	window.obj2034_onLoad_runningActionsCount = obj2034_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj2034")[0];
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
		    window.obj2034_onLoad_runningActionsCount = window.obj2034_onLoad_runningActionsCount - 1;
if (window.obj2034_onLoad_runningActionsCount < 0) {
	window.obj2034_onLoad_runningActionsCount = 0;
} else if (window.obj2034_onLoad_runningActionsCount == 0) {
	obj2034_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2034_onLoad_runningActionsCount = window.obj2034_onLoad_runningActionsCount - 1;
if (window.obj2034_onLoad_runningActionsCount < 0) {
	window.obj2034_onLoad_runningActionsCount = 0;
} else if (window.obj2034_onLoad_runningActionsCount == 0) {
	obj2034_onLoad_actionGroup1();
}
	}
}









};
obj2034_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2034_onLoad_activeActionGroupIndex = -1;
		$("#obj2034").trigger("obj2034_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2034) {
				console.warn("de-queueing event obj2034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2034_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj519 
hide_2347();
function hide_2347() {
	var selector = "#obj519";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2034_onLoad_runningActionsCount = obj2034_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2034_onLoad_runningActionsCount = window.obj2034_onLoad_runningActionsCount - 1;
if (window.obj2034_onLoad_runningActionsCount < 0) {
	window.obj2034_onLoad_runningActionsCount = 0;
} else if (window.obj2034_onLoad_runningActionsCount == 0) {
	obj2034_onLoad_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2347(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2034_onLoad_runningActionsCount = window.obj2034_onLoad_runningActionsCount - 1;
if (window.obj2034_onLoad_runningActionsCount < 0) {
	window.obj2034_onLoad_runningActionsCount = 0;
} else if (window.obj2034_onLoad_runningActionsCount == 0) {
	obj2034_onLoad_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj549 
hide_2348();
function hide_2348() {
	var selector = "#obj549";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2034_onLoad_runningActionsCount = obj2034_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2034_onLoad_runningActionsCount = window.obj2034_onLoad_runningActionsCount - 1;
if (window.obj2034_onLoad_runningActionsCount < 0) {
	window.obj2034_onLoad_runningActionsCount = 0;
} else if (window.obj2034_onLoad_runningActionsCount == 0) {
	obj2034_onLoad_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2348(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2034_onLoad_runningActionsCount = window.obj2034_onLoad_runningActionsCount - 1;
if (window.obj2034_onLoad_runningActionsCount < 0) {
	window.obj2034_onLoad_runningActionsCount = 0;
} else if (window.obj2034_onLoad_runningActionsCount == 0) {
	obj2034_onLoad_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2034_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2034_onLoad_activeActionGroupIndex = -1;
		$("#obj2034").trigger("obj2034_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2034) {
				console.warn("de-queueing event obj2034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2034_onLoad_activeActionGroupIndex = 2;
	


















//	action: run action list container
//	target: obj2275 
runActionList_2349();
function runActionList_2349() {
	window.obj2034_onLoad_runningActionsCount = obj2034_onLoad_runningActionsCount + 1;
	$("#obj2275").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2034_onLoad_runningActionsCount = window.obj2034_onLoad_runningActionsCount - 1;
if (window.obj2034_onLoad_runningActionsCount < 0) {
	window.obj2034_onLoad_runningActionsCount = 0;
} else if (window.obj2034_onLoad_runningActionsCount == 0) {
	obj2034_onLoad_actionGroup3();
}		
	}, 1);
}



};
obj2034_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2034_onLoad_activeActionGroupIndex = -1;
		$("#obj2034").trigger("obj2034_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2034) {
				console.warn("de-queueing event obj2034." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2034").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2034_onLoad_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj513: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj513_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj513_onLoad is still running");
	return;
}
var obj513_onLoad_runningActionsCount = 0;
var obj513_onLoad_loopCount = 0;
obj513_onLoad_actionGroup0();
});










/*
 *
 *   obj556: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj556_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj556_onLoad is still running");
	return;
}
var obj556_onLoad_runningActionsCount = 0;
var obj556_onLoad_loopCount = 0;
obj556_onLoad_actionGroup0();
});










/*
 *
 *   obj519: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj519_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj519_onLoad is still running");
	return;
}
var obj519_onLoad_runningActionsCount = 0;
var obj519_onLoad_loopCount = 0;
obj519_onLoad_actionGroup0();
});




























































/*
 *
 *   obj2285: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2285_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2285_onLoad is still running");
	return;
}
var obj2285_onLoad_runningActionsCount = 0;
var obj2285_onLoad_loopCount = 0;
obj2285_onLoad_actionGroup0();
});








/*
 *
 *   obj1761: Event Touch Down
 *
 */
$("#obj1761").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1761_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1761_onTap is still running");
	return;
}
var obj1761_onTap_runningActionsCount = 0;
var obj1761_onTap_loopCount = 0;
obj1761_onTap_actionGroup0();
});


/*
 *
 *   obj1761: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1761_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1761_onLoad is still running");
	return;
}
var obj1761_onLoad_runningActionsCount = 0;
var obj1761_onLoad_loopCount = 0;
obj1761_onLoad_actionGroup0();
});










/*
 *
 *   obj856: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj856_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj856_onLoad is still running");
	return;
}
var obj856_onLoad_runningActionsCount = 0;
var obj856_onLoad_loopCount = 0;
obj856_onLoad_actionGroup0();
});






















/*
 *
 *   obj2275: Event SCEventRun
 *
 */
$("#obj2275").bind("SCEventRun", function(event) {
	if (window.obj2275_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2275_SCEventRun is still running");
	return;
}
var obj2275_SCEventRun_runningActionsCount = 0;
var obj2275_SCEventRun_loopCount = 0;
obj2275_SCEventRun_actionGroup0();
});










/*
 *
 *   obj1745: Event SCEventRun
 *
 */
$("#obj1745").bind("SCEventRun", function(event) {
	if (window.obj1745_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1745_SCEventRun is still running");
	return;
}
var obj1745_SCEventRun_runningActionsCount = 0;
var obj1745_SCEventRun_loopCount = 0;
obj1745_SCEventRun_actionGroup0();
});







/*
 *
 *   obj2034: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2034_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2034_onLoad is still running");
	return;
}
var obj2034_onLoad_runningActionsCount = 0;
var obj2034_onLoad_loopCount = 0;
obj2034_onLoad_actionGroup0();
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
	
$("#obj511").trigger('SCEventShow');
$("#obj513").trigger('SCEventShow');
$("#obj556").trigger('SCEventShow');
$("#obj856").trigger('SCEventShow');
$("#obj894").trigger('SCEventShow');
$("#obj2034").trigger('SCEventShow');
$("#obj3011").trigger('SCEventShow');
$("#obj3163").trigger('SCEventShow');
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