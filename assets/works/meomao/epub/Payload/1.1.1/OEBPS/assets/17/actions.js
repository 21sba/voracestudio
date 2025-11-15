pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 1826;
pubcoder.page.title = pubcoder.page.title || "17";
pubcoder.page.number = pubcoder.page.number || 17;
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
var obj1888_onLoad_activeActionGroupIndex = -1;
var obj1888_onLoad_runningActionsCount = 0;
var obj1888_onLoad_loopCount = 0;
var obj1889_onLoad_activeActionGroupIndex = -1;
var obj1889_onLoad_runningActionsCount = 0;
var obj1889_onLoad_loopCount = 0;
var obj1890_onLoad_activeActionGroupIndex = -1;
var obj1890_onLoad_runningActionsCount = 0;
var obj1890_onLoad_loopCount = 0;
var obj1899_onLoad_activeActionGroupIndex = -1;
var obj1899_onLoad_runningActionsCount = 0;
var obj1899_onLoad_loopCount = 0;
var obj1899_onAppear_activeActionGroupIndex = -1;
var obj1899_onAppear_runningActionsCount = 0;
var obj1899_onAppear_loopCount = 0;
var obj1903_onLoad_activeActionGroupIndex = -1;
var obj1903_onLoad_runningActionsCount = 0;
var obj1903_onLoad_loopCount = 0;
var obj1903_onAppear_activeActionGroupIndex = -1;
var obj1903_onAppear_runningActionsCount = 0;
var obj1903_onAppear_loopCount = 0;
var obj1905_onLoad_activeActionGroupIndex = -1;
var obj1905_onLoad_runningActionsCount = 0;
var obj1905_onLoad_loopCount = 0;
var obj1905_onAppear_activeActionGroupIndex = -1;
var obj1905_onAppear_runningActionsCount = 0;
var obj1905_onAppear_loopCount = 0;
var obj1993_onLoad_activeActionGroupIndex = -1;
var obj1993_onLoad_runningActionsCount = 0;
var obj1993_onLoad_loopCount = 0;
var obj1993_onDrag_activeActionGroupIndex = -1;
var obj1993_onDrag_runningActionsCount = 0;
var obj1993_onDrag_loopCount = 0;
var obj1993_onTouchDown_activeActionGroupIndex = -1;
var obj1993_onTouchDown_runningActionsCount = 0;
var obj1993_onTouchDown_loopCount = 0;
var obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_loopCount = 0;
var obj1993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj1993_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1993_droppedInsideTargetActions_3_loopCount = 0;
var obj1993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj1993_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1993_droppedInsideTargetActions_2_loopCount = 0;
var obj1993_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1993_droppedInsideTargetActions_runningActionsCount = 0;
var obj1993_droppedInsideTargetActions_loopCount = 0;
var obj1866_onLoad_activeActionGroupIndex = -1;
var obj1866_onLoad_runningActionsCount = 0;
var obj1866_onLoad_loopCount = 0;
var obj1882_SCEventRun_activeActionGroupIndex = -1;
var obj1882_SCEventRun_runningActionsCount = 0;
var obj1882_SCEventRun_loopCount = 0;
var obj2509_SCEventRun_activeActionGroupIndex = -1;
var obj2509_SCEventRun_runningActionsCount = 0;
var obj2509_SCEventRun_loopCount = 0;
var obj2511_SCEventRun_activeActionGroupIndex = -1;
var obj2511_SCEventRun_runningActionsCount = 0;
var obj2511_SCEventRun_loopCount = 0;
var obj2513_SCEventRun_activeActionGroupIndex = -1;
var obj2513_SCEventRun_runningActionsCount = 0;
var obj2513_SCEventRun_loopCount = 0;
var obj2570_onTap_activeActionGroupIndex = -1;
var obj2570_onTap_runningActionsCount = 0;
var obj2570_onTap_loopCount = 0;
var obj2572_onTap_activeActionGroupIndex = -1;
var obj2572_onTap_runningActionsCount = 0;
var obj2572_onTap_loopCount = 0;
var obj2574_onTap_activeActionGroupIndex = -1;
var obj2574_onTap_runningActionsCount = 0;
var obj2574_onTap_loopCount = 0;
var obj2865_onLoad_activeActionGroupIndex = -1;
var obj2865_onLoad_runningActionsCount = 0;
var obj2865_onLoad_loopCount = 0;
var obj2871_SCEventRun_activeActionGroupIndex = -1;
var obj2871_SCEventRun_runningActionsCount = 0;
var obj2871_SCEventRun_loopCount = 0;
var obj3195_SCEventRun_activeActionGroupIndex = -1;
var obj3195_SCEventRun_runningActionsCount = 0;
var obj3195_SCEventRun_loopCount = 0;
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
		
obj1888_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1888_onLoad_activeActionGroupIndex = -1;
		$("#obj1888").trigger("obj1888_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1888) {
				console.warn("de-queueing event obj1888." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1888").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1888_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1888 
rotate_2561();
function rotate_2561() {
	window.obj1888_onLoad_runningActionsCount = obj1888_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1888";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1888';
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
	if (isInfinite) { rotate_2561_completed(); }
	//TweenMax.to(targetObjectId, 4, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2561_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2561_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2561_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2561_completed() {
	setTimeout(function() {
		window.obj1888_onLoad_runningActionsCount = window.obj1888_onLoad_runningActionsCount - 1;
if (window.obj1888_onLoad_runningActionsCount < 0) {
	window.obj1888_onLoad_runningActionsCount = 0;
} else if (window.obj1888_onLoad_runningActionsCount == 0) {
	obj1888_onLoad_actionGroup1();
}
	}, 1);
}














};
obj1888_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1888_onLoad_activeActionGroupIndex = -1;
		$("#obj1888").trigger("obj1888_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1888) {
				console.warn("de-queueing event obj1888." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1888").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1888_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj1888 
rotate_2562();
function rotate_2562() {
	window.obj1888_onLoad_runningActionsCount = obj1888_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1888";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1888';
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
	if (isInfinite) { rotate_2562_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2562_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2562_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2562_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2562_completed() {
	setTimeout(function() {
		window.obj1888_onLoad_runningActionsCount = window.obj1888_onLoad_runningActionsCount - 1;
if (window.obj1888_onLoad_runningActionsCount < 0) {
	window.obj1888_onLoad_runningActionsCount = 0;
} else if (window.obj1888_onLoad_runningActionsCount == 0) {
	obj1888_onLoad_actionGroup2();
}
	}, 1);
}














};
obj1888_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1888_onLoad_activeActionGroupIndex = -1;
		$("#obj1888").trigger("obj1888_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1888) {
				console.warn("de-queueing event obj1888." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1888").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1888_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1888_onLoad();
function loop_obj1888_onLoad() {
	var loopCount = 0;
	window.obj1888_onLoad_loopCount = window.obj1888_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1888_onLoad_loopCount > loopCount) {
		window.obj1888_onLoad_loopCount = 0
		obj1888_onLoad_actionGroup3();
	} else {
		obj1888_onLoad_actionGroup0();
	}
}













};
obj1888_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1888_onLoad_activeActionGroupIndex = -1;
		$("#obj1888").trigger("obj1888_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1888) {
				console.warn("de-queueing event obj1888." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1888").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1888_onLoad_activeActionGroupIndex = 3;
	





















};
obj1889_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1889_onLoad_activeActionGroupIndex = -1;
		$("#obj1889").trigger("obj1889_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1889) {
				console.warn("de-queueing event obj1889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1889_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1889 
scale_2557();
function scale_2557() {
	window.obj1889_onLoad_runningActionsCount = obj1889_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1889";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1889';
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
		scale_2557_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2557_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2557_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2557_completed() {
	setTimeout(function() {
		window.obj1889_onLoad_runningActionsCount = window.obj1889_onLoad_runningActionsCount - 1;
if (window.obj1889_onLoad_runningActionsCount < 0) {
	window.obj1889_onLoad_runningActionsCount = 0;
} else if (window.obj1889_onLoad_runningActionsCount == 0) {
	obj1889_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1889_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1889_onLoad_activeActionGroupIndex = -1;
		$("#obj1889").trigger("obj1889_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1889) {
				console.warn("de-queueing event obj1889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1889_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1889 
scale_2558();
function scale_2558() {
	window.obj1889_onLoad_runningActionsCount = obj1889_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1889";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1889';
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
		scale_2558_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2558_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2558_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2558_completed() {
	setTimeout(function() {
		window.obj1889_onLoad_runningActionsCount = window.obj1889_onLoad_runningActionsCount - 1;
if (window.obj1889_onLoad_runningActionsCount < 0) {
	window.obj1889_onLoad_runningActionsCount = 0;
} else if (window.obj1889_onLoad_runningActionsCount == 0) {
	obj1889_onLoad_actionGroup2();
}
	}, 1);
}












};
obj1889_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1889_onLoad_activeActionGroupIndex = -1;
		$("#obj1889").trigger("obj1889_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1889) {
				console.warn("de-queueing event obj1889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1889_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1889_onLoad();
function loop_obj1889_onLoad() {
	var loopCount = 0;
	window.obj1889_onLoad_loopCount = window.obj1889_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1889_onLoad_loopCount > loopCount) {
		window.obj1889_onLoad_loopCount = 0
		obj1889_onLoad_actionGroup3();
	} else {
		obj1889_onLoad_actionGroup0();
	}
}













};
obj1889_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1889_onLoad_activeActionGroupIndex = -1;
		$("#obj1889").trigger("obj1889_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1889) {
				console.warn("de-queueing event obj1889." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1889").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1889_onLoad_activeActionGroupIndex = 3;
	





















};
obj1890_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1890_onLoad_activeActionGroupIndex = -1;
		$("#obj1890").trigger("obj1890_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1890) {
				console.warn("de-queueing event obj1890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1890_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1890 
rotate_2565();
function rotate_2565() {
	window.obj1890_onLoad_runningActionsCount = obj1890_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1890";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1890';
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
	if (isInfinite) { rotate_2565_completed(); }
	//TweenMax.to(targetObjectId, 3, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2565_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2565_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2565_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2565_completed() {
	setTimeout(function() {
		window.obj1890_onLoad_runningActionsCount = window.obj1890_onLoad_runningActionsCount - 1;
if (window.obj1890_onLoad_runningActionsCount < 0) {
	window.obj1890_onLoad_runningActionsCount = 0;
} else if (window.obj1890_onLoad_runningActionsCount == 0) {
	obj1890_onLoad_actionGroup1();
}
	}, 1);
}














};
obj1890_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1890_onLoad_activeActionGroupIndex = -1;
		$("#obj1890").trigger("obj1890_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1890) {
				console.warn("de-queueing event obj1890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1890_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj1890 
rotate_2566();
function rotate_2566() {
	window.obj1890_onLoad_runningActionsCount = obj1890_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1890";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1890';
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
	if (isInfinite) { rotate_2566_completed(); }
	//TweenMax.to(targetObjectId, 4, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2566_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2566_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2566_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2566_completed() {
	setTimeout(function() {
		window.obj1890_onLoad_runningActionsCount = window.obj1890_onLoad_runningActionsCount - 1;
if (window.obj1890_onLoad_runningActionsCount < 0) {
	window.obj1890_onLoad_runningActionsCount = 0;
} else if (window.obj1890_onLoad_runningActionsCount == 0) {
	obj1890_onLoad_actionGroup2();
}
	}, 1);
}














};
obj1890_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1890_onLoad_activeActionGroupIndex = -1;
		$("#obj1890").trigger("obj1890_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1890) {
				console.warn("de-queueing event obj1890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1890_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1890_onLoad();
function loop_obj1890_onLoad() {
	var loopCount = 0;
	window.obj1890_onLoad_loopCount = window.obj1890_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1890_onLoad_loopCount > loopCount) {
		window.obj1890_onLoad_loopCount = 0
		obj1890_onLoad_actionGroup3();
	} else {
		obj1890_onLoad_actionGroup0();
	}
}













};
obj1890_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1890_onLoad_activeActionGroupIndex = -1;
		$("#obj1890").trigger("obj1890_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1890) {
				console.warn("de-queueing event obj1890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1890_onLoad_activeActionGroupIndex = 3;
	





















};
obj1899_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1899_onLoad_activeActionGroupIndex = -1;
		$("#obj1899").trigger("obj1899_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1899) {
				console.warn("de-queueing event obj1899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1899_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1899 
scale_2008();
function scale_2008() {
	window.obj1899_onLoad_runningActionsCount = obj1899_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1899";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1899';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
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
		scale_2008_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2008_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2008_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2008_completed() {
	setTimeout(function() {
		window.obj1899_onLoad_runningActionsCount = window.obj1899_onLoad_runningActionsCount - 1;
if (window.obj1899_onLoad_runningActionsCount < 0) {
	window.obj1899_onLoad_runningActionsCount = 0;
} else if (window.obj1899_onLoad_runningActionsCount == 0) {
	obj1899_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1899_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1899_onLoad_activeActionGroupIndex = -1;
		$("#obj1899").trigger("obj1899_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1899) {
				console.warn("de-queueing event obj1899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1899_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1899 
scale_2009();
function scale_2009() {
	window.obj1899_onLoad_runningActionsCount = obj1899_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1899";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1899';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
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
		scale_2009_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2009_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2009_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2009_completed() {
	setTimeout(function() {
		window.obj1899_onLoad_runningActionsCount = window.obj1899_onLoad_runningActionsCount - 1;
if (window.obj1899_onLoad_runningActionsCount < 0) {
	window.obj1899_onLoad_runningActionsCount = 0;
} else if (window.obj1899_onLoad_runningActionsCount == 0) {
	obj1899_onLoad_actionGroup2();
}
	}, 1);
}












};
obj1899_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1899_onLoad_activeActionGroupIndex = -1;
		$("#obj1899").trigger("obj1899_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1899) {
				console.warn("de-queueing event obj1899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1899_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1899_onLoad();
function loop_obj1899_onLoad() {
	var loopCount = 0;
	window.obj1899_onLoad_loopCount = window.obj1899_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1899_onLoad_loopCount > loopCount) {
		window.obj1899_onLoad_loopCount = 0
		obj1899_onLoad_actionGroup3();
	} else {
		obj1899_onLoad_actionGroup0();
	}
}













};
obj1899_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1899_onLoad_activeActionGroupIndex = -1;
		$("#obj1899").trigger("obj1899_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1899) {
				console.warn("de-queueing event obj1899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1899_onLoad_activeActionGroupIndex = 3;
	





















};
obj1899_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1899_onAppear_activeActionGroupIndex = -1;
		$("#obj1899").trigger("obj1899_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1899) {
				console.warn("de-queueing event obj1899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1899_onAppear_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1899 
rotate_2019();
function rotate_2019() {
	window.obj1899_onAppear_runningActionsCount = obj1899_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj1899";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1899';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-147.9959';
	var rotationSpeed = 0;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2019_completed(); }
	//TweenMax.to(targetObjectId, 0, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2019_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2019_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2019_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2019_completed() {
	setTimeout(function() {
		window.obj1899_onAppear_runningActionsCount = window.obj1899_onAppear_runningActionsCount - 1;
if (window.obj1899_onAppear_runningActionsCount < 0) {
	window.obj1899_onAppear_runningActionsCount = 0;
} else if (window.obj1899_onAppear_runningActionsCount == 0) {
	obj1899_onAppear_actionGroup1();
}
	}, 1);
}














};
obj1899_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1899_onAppear_activeActionGroupIndex = -1;
		$("#obj1899").trigger("obj1899_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1899) {
				console.warn("de-queueing event obj1899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1899_onAppear_activeActionGroupIndex = 1;
	





















};
obj1903_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1903_onLoad_activeActionGroupIndex = -1;
		$("#obj1903").trigger("obj1903_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1903) {
				console.warn("de-queueing event obj1903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1903_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1903 
scale_2004();
function scale_2004() {
	window.obj1903_onLoad_runningActionsCount = obj1903_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1903";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1903';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
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
		scale_2004_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2004_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2004_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2004_completed() {
	setTimeout(function() {
		window.obj1903_onLoad_runningActionsCount = window.obj1903_onLoad_runningActionsCount - 1;
if (window.obj1903_onLoad_runningActionsCount < 0) {
	window.obj1903_onLoad_runningActionsCount = 0;
} else if (window.obj1903_onLoad_runningActionsCount == 0) {
	obj1903_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1903_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1903_onLoad_activeActionGroupIndex = -1;
		$("#obj1903").trigger("obj1903_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1903) {
				console.warn("de-queueing event obj1903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1903_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1903 
scale_2005();
function scale_2005() {
	window.obj1903_onLoad_runningActionsCount = obj1903_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1903";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1903';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
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
		scale_2005_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2005_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2005_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2005_completed() {
	setTimeout(function() {
		window.obj1903_onLoad_runningActionsCount = window.obj1903_onLoad_runningActionsCount - 1;
if (window.obj1903_onLoad_runningActionsCount < 0) {
	window.obj1903_onLoad_runningActionsCount = 0;
} else if (window.obj1903_onLoad_runningActionsCount == 0) {
	obj1903_onLoad_actionGroup2();
}
	}, 1);
}












};
obj1903_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1903_onLoad_activeActionGroupIndex = -1;
		$("#obj1903").trigger("obj1903_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1903) {
				console.warn("de-queueing event obj1903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1903_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1903_onLoad();
function loop_obj1903_onLoad() {
	var loopCount = 0;
	window.obj1903_onLoad_loopCount = window.obj1903_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1903_onLoad_loopCount > loopCount) {
		window.obj1903_onLoad_loopCount = 0
		obj1903_onLoad_actionGroup3();
	} else {
		obj1903_onLoad_actionGroup0();
	}
}













};
obj1903_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1903_onLoad_activeActionGroupIndex = -1;
		$("#obj1903").trigger("obj1903_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1903) {
				console.warn("de-queueing event obj1903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1903_onLoad_activeActionGroupIndex = 3;
	





















};
obj1903_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1903_onAppear_activeActionGroupIndex = -1;
		$("#obj1903").trigger("obj1903_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1903) {
				console.warn("de-queueing event obj1903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1903_onAppear_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1903 
rotate_2017();
function rotate_2017() {
	window.obj1903_onAppear_runningActionsCount = obj1903_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj1903";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1903';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '152.2274';
	var rotationSpeed = 0;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2017_completed(); }
	//TweenMax.to(targetObjectId, 0, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2017_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2017_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2017_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2017_completed() {
	setTimeout(function() {
		window.obj1903_onAppear_runningActionsCount = window.obj1903_onAppear_runningActionsCount - 1;
if (window.obj1903_onAppear_runningActionsCount < 0) {
	window.obj1903_onAppear_runningActionsCount = 0;
} else if (window.obj1903_onAppear_runningActionsCount == 0) {
	obj1903_onAppear_actionGroup1();
}
	}, 1);
}














};
obj1903_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1903_onAppear_activeActionGroupIndex = -1;
		$("#obj1903").trigger("obj1903_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1903) {
				console.warn("de-queueing event obj1903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1903_onAppear_activeActionGroupIndex = 1;
	





















};
obj1905_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1905_onLoad_activeActionGroupIndex = -1;
		$("#obj1905").trigger("obj1905_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1905) {
				console.warn("de-queueing event obj1905." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1905").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1905_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1905 
scale_2000();
function scale_2000() {
	window.obj1905_onLoad_runningActionsCount = obj1905_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1905";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1905';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.1';
	var scaleYValue = '1.1';
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
		scale_2000_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2000_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2000_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2000_completed() {
	setTimeout(function() {
		window.obj1905_onLoad_runningActionsCount = window.obj1905_onLoad_runningActionsCount - 1;
if (window.obj1905_onLoad_runningActionsCount < 0) {
	window.obj1905_onLoad_runningActionsCount = 0;
} else if (window.obj1905_onLoad_runningActionsCount == 0) {
	obj1905_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1905_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1905_onLoad_activeActionGroupIndex = -1;
		$("#obj1905").trigger("obj1905_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1905) {
				console.warn("de-queueing event obj1905." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1905").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1905_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1905 
scale_2001();
function scale_2001() {
	window.obj1905_onLoad_runningActionsCount = obj1905_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1905";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1905';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
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
		scale_2001_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2001_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2001_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2001_completed() {
	setTimeout(function() {
		window.obj1905_onLoad_runningActionsCount = window.obj1905_onLoad_runningActionsCount - 1;
if (window.obj1905_onLoad_runningActionsCount < 0) {
	window.obj1905_onLoad_runningActionsCount = 0;
} else if (window.obj1905_onLoad_runningActionsCount == 0) {
	obj1905_onLoad_actionGroup2();
}
	}, 1);
}












};
obj1905_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1905_onLoad_activeActionGroupIndex = -1;
		$("#obj1905").trigger("obj1905_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1905) {
				console.warn("de-queueing event obj1905." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1905").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1905_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1905_onLoad();
function loop_obj1905_onLoad() {
	var loopCount = 0;
	window.obj1905_onLoad_loopCount = window.obj1905_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1905_onLoad_loopCount > loopCount) {
		window.obj1905_onLoad_loopCount = 0
		obj1905_onLoad_actionGroup3();
	} else {
		obj1905_onLoad_actionGroup0();
	}
}













};
obj1905_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1905_onLoad_activeActionGroupIndex = -1;
		$("#obj1905").trigger("obj1905_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1905) {
				console.warn("de-queueing event obj1905." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1905").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1905_onLoad_activeActionGroupIndex = 3;
	





















};
obj1905_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1905_onAppear_activeActionGroupIndex = -1;
		$("#obj1905").trigger("obj1905_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1905) {
				console.warn("de-queueing event obj1905." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1905").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1905_onAppear_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj1905 
rotate_2015();
function rotate_2015() {
	window.obj1905_onAppear_runningActionsCount = obj1905_onAppear_runningActionsCount + 1;
	
	var targetObjectId = "#obj1905";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1905';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '95';
	var rotationSpeed = 0;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2015_completed(); }
	//TweenMax.to(targetObjectId, 0, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2015_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2015_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2015_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2015_completed() {
	setTimeout(function() {
		window.obj1905_onAppear_runningActionsCount = window.obj1905_onAppear_runningActionsCount - 1;
if (window.obj1905_onAppear_runningActionsCount < 0) {
	window.obj1905_onAppear_runningActionsCount = 0;
} else if (window.obj1905_onAppear_runningActionsCount == 0) {
	obj1905_onAppear_actionGroup1();
}
	}, 1);
}














};
obj1905_onAppear_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1905_onAppear_activeActionGroupIndex = -1;
		$("#obj1905").trigger("obj1905_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1905) {
				console.warn("de-queueing event obj1905." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1905").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1905_onAppear_activeActionGroupIndex = 1;
	





















};
obj1993_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_onLoad_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1993 
scale_1996();
function scale_1996() {
	window.obj1993_onLoad_runningActionsCount = obj1993_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1993";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1993';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1.05';
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
		scale_1996_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1996_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1996_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1996_completed() {
	setTimeout(function() {
		window.obj1993_onLoad_runningActionsCount = window.obj1993_onLoad_runningActionsCount - 1;
if (window.obj1993_onLoad_runningActionsCount < 0) {
	window.obj1993_onLoad_runningActionsCount = 0;
} else if (window.obj1993_onLoad_runningActionsCount == 0) {
	obj1993_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1993_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_onLoad_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1993 
scale_1997();
function scale_1997() {
	window.obj1993_onLoad_runningActionsCount = obj1993_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1993";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1993';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1';
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
		scale_1997_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1997_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1997_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1997_completed() {
	setTimeout(function() {
		window.obj1993_onLoad_runningActionsCount = window.obj1993_onLoad_runningActionsCount - 1;
if (window.obj1993_onLoad_runningActionsCount < 0) {
	window.obj1993_onLoad_runningActionsCount = 0;
} else if (window.obj1993_onLoad_runningActionsCount == 0) {
	obj1993_onLoad_actionGroup2();
}
	}, 1);
}












};
obj1993_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_onLoad_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1993_onLoad();
function loop_obj1993_onLoad() {
	var loopCount = 0;
	window.obj1993_onLoad_loopCount = window.obj1993_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1993_onLoad_loopCount > loopCount) {
		window.obj1993_onLoad_loopCount = 0
		obj1993_onLoad_actionGroup3();
	} else {
		obj1993_onLoad_actionGroup0();
	}
}













};
obj1993_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1993_onLoad_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_onLoad_activeActionGroupIndex = 3;
	





















};
obj1993_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1993");
//	action: dragDrop
//	target: obj1993 
dragDrop_2569();
function dragDrop_2569() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1993_onTouchDown_runningActionsCount = obj1993_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1993');
	var page = $('.SCPage');
	//relative positions and scroll parameters
	var nodeRect = node[0].getBoundingClientRect();
	var contRect = $('.SCContent')[0].getBoundingClientRect();
	var htmlRect = $('html')[0].getBoundingClientRect();
	var pageRect = page[0].getBoundingClientRect();
	var scrollLeft = $('.SCContent').scrollLeft();
	var scrollTop = $('.SCContent').scrollTop();
	var relativeX = pageRect.left;
	var relativeY = pageRect.top;
	var docRelativeX = $(document).scrollLeft();
	var docRelativeY = $(document).scrollTop();
	//div container
	var isBoundObject = false;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj');
	 	var containerNodeOffset = containerNode[0].getBoundingClientRect();
		var containerMinX = scrollLeft-docRelativeX-contRect.left+(containerNodeOffset.left-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width);
		var containerMinY = scrollTop-docRelativeY-contRect.top+(containerNodeOffset.top-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height);
		var containerMaxX = containerMinX + containerNodeOffset.width;
		var containerMaxY = containerMinY + containerNodeOffset.height;
	}		 
	//end div container
	// init Position
	var initPosClient;
	console.warn(event);
	if (event.type == "touchstart") {
		initPosClient = {
		 	x: (event.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
	    };
	 } 
	else {
		initPosClient = {
		 	x: (event.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
  	 		y: (event.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
		};
	}
	var nodeDeltaX = initPosClient.x - nodeRect.left;
	var nodeDeltaY = initPosClient.y - nodeRect.top;
	$(this).bind(window.touchMoveEvent,function(e){
		e.stopPropagation();
    	var finalPosClient;
    	if (e.type == "touchmove") {
    		finalPosClient = {
	 			x: (e.changedTouches[0].clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.changedTouches[0].clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
    	} else {
    		finalPosClient = {
	 			x: (e.clientX-htmlRect.left)/(htmlRect.right-htmlRect.left)*(htmlRect.width),
	 			y: (e.clientY-htmlRect.top)/(htmlRect.bottom-htmlRect.top)*(htmlRect.height)
    		}
			if (e.type == "mousemove") {
				var leftMouseButtonDown = e.buttons === undefined ? e.which === 1 : e.buttons === 1;
				if (!leftMouseButtonDown) {
					endDrag(e);
					return;
				}
			}
    	}
		var newAbsoluteLeft = (0-nodeDeltaX+scrollLeft-contRect.left+finalPosClient.x);
		var newAbsoluteTop = (0-nodeDeltaY+scrollTop-contRect.top+finalPosClient.y);
		if (containerNodeOffset != null) {
			if (newAbsoluteTop < containerMinY) {
				newAbsoluteTop = containerMinY;
			}
			if ((newAbsoluteTop + nodeRect.height) > containerMaxY) {
				newAbsoluteTop = containerMaxY - nodeRect.height;
			}
			if (newAbsoluteLeft < containerMinX) {
				newAbsoluteLeft = containerMinX;
			}
			if ((newAbsoluteLeft + nodeRect.width) > containerMaxX) {
				newAbsoluteLeft = containerMaxX - nodeRect.width;
			}
		}
	    node.css({
            left: newAbsoluteLeft + 'px',
        	top : newAbsoluteTop + 'px'
	    });
	});
	var endDrag = function(e) {
    	$(this).unbind(window.touchUpEvent + ' ' + window.touchMoveEvent); 
		// $(".SCPage").unbind("mouseleave");
    	window.obj1993_onTouchDown_runningActionsCount = window.obj1993_onTouchDown_runningActionsCount - 1;
if (window.obj1993_onTouchDown_runningActionsCount < 0) {
	window.obj1993_onTouchDown_runningActionsCount = 0;
} else if (window.obj1993_onTouchDown_runningActionsCount == 0) {
	obj1993_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2574","#obj2572","#obj2570");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2569 = false;
    	var dropped_id_2569;
    	var eventType;
    	if (e.type == "touchend") {
    		x = e.changedTouches[0].clientX;
    		y = e.changedTouches[0].clientY;
    	} else {
    		x = e.clientX;
			y = e.clientY;
    	}
    	
		//case: droppable elements 
		var objectIndex;
		if (droppableElements.length != 0) {
			for (var i = droppableElements.length-1; i >= 0; i--)
			{
				if (isLocationInElementDragDropOffset(droppableElements[i], x, y))
				{
					objectIndex = i;
					dropped_2569 = true;
					dropped_id_2569 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2569) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1993").trigger('SCActionDragDrop2569_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1993_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1993_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1993 
move_2597();
function move_2597() {
	window.obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_runningActionsCount = obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1043;
	var moveY = 220;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_runningActionsCount = window.obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1993_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1993 
move_2601();
function move_2601() {
	window.obj1993_droppedInsideTargetActions_3_runningActionsCount = obj1993_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1043;
	var moveY = 220;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1993_droppedInsideTargetActions_3_runningActionsCount = window.obj1993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1993_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	});
}



















};
obj1993_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj1899 
hide_2594();
function hide_2594() {
	var selector = "#obj1899";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1993_droppedInsideTargetActions_3_runningActionsCount = obj1993_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1993_droppedInsideTargetActions_3_runningActionsCount = window.obj1993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1993_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2594(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1993_droppedInsideTargetActions_3_runningActionsCount = window.obj1993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1993_droppedInsideTargetActions_3_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}

















//	action: run action list container
//	target: obj2513 
runActionList_2595();
function runActionList_2595() {
	window.obj1993_droppedInsideTargetActions_3_runningActionsCount = obj1993_droppedInsideTargetActions_3_runningActionsCount + 1;
	$("#obj2513").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1993_droppedInsideTargetActions_3_runningActionsCount = window.obj1993_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1993_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1993_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1993_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1993_droppedInsideTargetActions_3_actionGroup2();
}		
	}, 1);
}



};
obj1993_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1993_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	





















};
obj1993_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1993 
move_2600();
function move_2600() {
	window.obj1993_droppedInsideTargetActions_2_runningActionsCount = obj1993_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1043;
	var moveY = 220;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1993_droppedInsideTargetActions_2_runningActionsCount = window.obj1993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1993_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}



















};
obj1993_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj1903 
hide_2591();
function hide_2591() {
	var selector = "#obj1903";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1993_droppedInsideTargetActions_2_runningActionsCount = obj1993_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1993_droppedInsideTargetActions_2_runningActionsCount = window.obj1993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1993_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2591(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1993_droppedInsideTargetActions_2_runningActionsCount = window.obj1993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1993_droppedInsideTargetActions_2_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}

















//	action: run action list container
//	target: obj2511 
runActionList_2592();
function runActionList_2592() {
	window.obj1993_droppedInsideTargetActions_2_runningActionsCount = obj1993_droppedInsideTargetActions_2_runningActionsCount + 1;
	$("#obj2511").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1993_droppedInsideTargetActions_2_runningActionsCount = window.obj1993_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1993_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1993_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1993_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1993_droppedInsideTargetActions_2_actionGroup2();
}		
	}, 1);
}



};
obj1993_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1993_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	





















};
obj1993_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1993 
move_2599();
function move_2599() {
	window.obj1993_droppedInsideTargetActions_runningActionsCount = obj1993_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 1043;
	var moveY = 220;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1993_droppedInsideTargetActions_runningActionsCount = window.obj1993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1993_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1993_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1993_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_droppedInsideTargetActions_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj1905 
hide_2588();
function hide_2588() {
	var selector = "#obj1905";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1993_droppedInsideTargetActions_runningActionsCount = obj1993_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1993_droppedInsideTargetActions_runningActionsCount = window.obj1993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1993_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2588(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1993_droppedInsideTargetActions_runningActionsCount = window.obj1993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1993_droppedInsideTargetActions_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}

















//	action: run action list container
//	target: obj2509 
runActionList_2589();
function runActionList_2589() {
	window.obj1993_droppedInsideTargetActions_runningActionsCount = obj1993_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj2509").trigger('SCEventRun');
	setTimeout(function() {
		window.obj1993_droppedInsideTargetActions_runningActionsCount = window.obj1993_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1993_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1993_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1993_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1993_droppedInsideTargetActions_actionGroup2();
}		
	}, 1);
}



};
obj1993_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1993_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1993").trigger("obj1993_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1993) {
				console.warn("de-queueing event obj1993." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1993").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1993_droppedInsideTargetActions_activeActionGroupIndex = 2;
	





















};
obj1866_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1866_onLoad_activeActionGroupIndex = -1;
		$("#obj1866").trigger("obj1866_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1866) {
				console.warn("de-queueing event obj1866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1866_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1866 
hide_1869();
function hide_1869() {
	var selector = "#obj1866";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1866_onLoad_runningActionsCount = obj1866_onLoad_runningActionsCount + 1;
	
	var animationType = "slideOutLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1866_onLoad_runningActionsCount = window.obj1866_onLoad_runningActionsCount - 1;
if (window.obj1866_onLoad_runningActionsCount < 0) {
	window.obj1866_onLoad_runningActionsCount = 0;
} else if (window.obj1866_onLoad_runningActionsCount == 0) {
	obj1866_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1869(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1866_onLoad_runningActionsCount = window.obj1866_onLoad_runningActionsCount - 1;
if (window.obj1866_onLoad_runningActionsCount < 0) {
	window.obj1866_onLoad_runningActionsCount = 0;
} else if (window.obj1866_onLoad_runningActionsCount == 0) {
	obj1866_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj1866_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1866_onLoad_activeActionGroupIndex = -1;
		$("#obj1866").trigger("obj1866_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1866) {
				console.warn("de-queueing event obj1866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1866_onLoad_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1870();
function runjs_1870() {
	window.obj1866_onLoad_runningActionsCount = obj1866_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj1866"));
	
	setTimeout(function() {
		window.obj1866_onLoad_runningActionsCount = window.obj1866_onLoad_runningActionsCount - 1;
if (window.obj1866_onLoad_runningActionsCount < 0) {
	window.obj1866_onLoad_runningActionsCount = 0;
} else if (window.obj1866_onLoad_runningActionsCount == 0) {
	obj1866_onLoad_actionGroup2();
}
	}, 1);
}







};
obj1866_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1866_onLoad_activeActionGroupIndex = -1;
		$("#obj1866").trigger("obj1866_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1866) {
				console.warn("de-queueing event obj1866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1866_onLoad_activeActionGroupIndex = 2;
	





















};
obj1882_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1882_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1882").trigger("obj1882_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1882) {
				console.warn("de-queueing event obj1882." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1882").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1882_SCEventRun_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1884();
function runjs_1884() {
	window.obj1882_SCEventRun_runningActionsCount = obj1882_SCEventRun_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1866"));
	
	setTimeout(function() {
		window.obj1882_SCEventRun_runningActionsCount = window.obj1882_SCEventRun_runningActionsCount - 1;
if (window.obj1882_SCEventRun_runningActionsCount < 0) {
	window.obj1882_SCEventRun_runningActionsCount = 0;
} else if (window.obj1882_SCEventRun_runningActionsCount == 0) {
	obj1882_SCEventRun_actionGroup1();
}
	}, 1);
}







};
obj1882_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1882_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1882").trigger("obj1882_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1882) {
				console.warn("de-queueing event obj1882." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1882").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1882_SCEventRun_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj1866
(function(){
	window.obj1882_SCEventRun_runningActionsCount = obj1882_SCEventRun_runningActionsCount + 1;

	var selector = "#obj1866";
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
					window.obj1882_SCEventRun_runningActionsCount = window.obj1882_SCEventRun_runningActionsCount - 1;
if (window.obj1882_SCEventRun_runningActionsCount < 0) {
	window.obj1882_SCEventRun_runningActionsCount = 0;
} else if (window.obj1882_SCEventRun_runningActionsCount == 0) {
	obj1882_SCEventRun_actionGroup2();
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
				window.obj1882_SCEventRun_runningActionsCount = window.obj1882_SCEventRun_runningActionsCount - 1;
if (window.obj1882_SCEventRun_runningActionsCount < 0) {
	window.obj1882_SCEventRun_runningActionsCount = 0;
} else if (window.obj1882_SCEventRun_runningActionsCount == 0) {
	obj1882_SCEventRun_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj1882_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1882_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1882").trigger("obj1882_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1882) {
				console.warn("de-queueing event obj1882." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1882").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1882_SCEventRun_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_1886();
function goToPage_1886() {
	window.obj1882_SCEventRun_runningActionsCount = obj1882_SCEventRun_runningActionsCount + 1;
	$("#anchor70")[0].click();
	window.obj1882_SCEventRun_runningActionsCount = window.obj1882_SCEventRun_runningActionsCount - 1;
if (window.obj1882_SCEventRun_runningActionsCount < 0) {
	window.obj1882_SCEventRun_runningActionsCount = 0;
} else if (window.obj1882_SCEventRun_runningActionsCount == 0) {
	obj1882_SCEventRun_actionGroup3();
}
}





















};
obj1882_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1882_SCEventRun_activeActionGroupIndex = -1;
		$("#obj1882").trigger("obj1882_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1882) {
				console.warn("de-queueing event obj1882." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1882").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1882_SCEventRun_activeActionGroupIndex = 3;
	





















};
obj2509_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2509_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2509").trigger("obj2509_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2509) {
				console.warn("de-queueing event obj2509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2509_SCEventRun_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1993 
move_2516();
function move_2516() {
	window.obj2509_SCEventRun_runningActionsCount = obj2509_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-166";
	var moveY = "+=28";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2509_SCEventRun_runningActionsCount = window.obj2509_SCEventRun_runningActionsCount - 1;
if (window.obj2509_SCEventRun_runningActionsCount < 0) {
	window.obj2509_SCEventRun_runningActionsCount = 0;
} else if (window.obj2509_SCEventRun_runningActionsCount == 0) {
	obj2509_SCEventRun_actionGroup1();
}
		}, 1);
	});
}



















};
obj2509_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2509_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2509").trigger("obj2509_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2509) {
				console.warn("de-queueing event obj2509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2509_SCEventRun_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1993 
move_2517();
function move_2517() {
	window.obj2509_SCEventRun_runningActionsCount = obj2509_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-174";
	var moveY = "+=61";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2509_SCEventRun_runningActionsCount = window.obj2509_SCEventRun_runningActionsCount - 1;
if (window.obj2509_SCEventRun_runningActionsCount < 0) {
	window.obj2509_SCEventRun_runningActionsCount = 0;
} else if (window.obj2509_SCEventRun_runningActionsCount == 0) {
	obj2509_SCEventRun_actionGroup2();
}
		}, 1);
	});
}



















};
obj2509_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2509_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2509").trigger("obj2509_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2509) {
				console.warn("de-queueing event obj2509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2509_SCEventRun_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj1993 
move_2518();
function move_2518() {
	window.obj2509_SCEventRun_runningActionsCount = obj2509_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-144";
	var moveY = "+=113";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2509_SCEventRun_runningActionsCount = window.obj2509_SCEventRun_runningActionsCount - 1;
if (window.obj2509_SCEventRun_runningActionsCount < 0) {
	window.obj2509_SCEventRun_runningActionsCount = 0;
} else if (window.obj2509_SCEventRun_runningActionsCount == 0) {
	obj2509_SCEventRun_actionGroup3();
}
		}, 1);
	});
}



















};
obj2509_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2509_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2509").trigger("obj2509_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2509) {
				console.warn("de-queueing event obj2509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2509_SCEventRun_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1993 
move_2519();
function move_2519() {
	window.obj2509_SCEventRun_runningActionsCount = obj2509_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-59";
	var moveY = "+=179";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2509_SCEventRun_runningActionsCount = window.obj2509_SCEventRun_runningActionsCount - 1;
if (window.obj2509_SCEventRun_runningActionsCount < 0) {
	window.obj2509_SCEventRun_runningActionsCount = 0;
} else if (window.obj2509_SCEventRun_runningActionsCount == 0) {
	obj2509_SCEventRun_actionGroup4();
}
		}, 1);
	});
}



















};
obj2509_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2509_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2509").trigger("obj2509_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2509) {
				console.warn("de-queueing event obj2509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2509_SCEventRun_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1993 
move_2520();
function move_2520() {
	window.obj2509_SCEventRun_runningActionsCount = obj2509_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-26";
	var moveY = "+=187";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2509_SCEventRun_runningActionsCount = window.obj2509_SCEventRun_runningActionsCount - 1;
if (window.obj2509_SCEventRun_runningActionsCount < 0) {
	window.obj2509_SCEventRun_runningActionsCount = 0;
} else if (window.obj2509_SCEventRun_runningActionsCount == 0) {
	obj2509_SCEventRun_actionGroup5();
}
		}, 1);
	});
}



















};
obj2509_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2509_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2509").trigger("obj2509_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2509) {
				console.warn("de-queueing event obj2509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2509_SCEventRun_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj1993 
move_2521();
function move_2521() {
	window.obj2509_SCEventRun_runningActionsCount = obj2509_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=187";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2509_SCEventRun_runningActionsCount = window.obj2509_SCEventRun_runningActionsCount - 1;
if (window.obj2509_SCEventRun_runningActionsCount < 0) {
	window.obj2509_SCEventRun_runningActionsCount = 0;
} else if (window.obj2509_SCEventRun_runningActionsCount == 0) {
	obj2509_SCEventRun_actionGroup6();
}
		}, 1);
	});
}



















};
obj2509_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2509_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2509").trigger("obj2509_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2509) {
				console.warn("de-queueing event obj2509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2509_SCEventRun_activeActionGroupIndex = 6;
	


















//	action: run action list container
//	target: obj1882 
runActionList_2524();
function runActionList_2524() {
	window.obj2509_SCEventRun_runningActionsCount = obj2509_SCEventRun_runningActionsCount + 1;
	$("#obj1882").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2509_SCEventRun_runningActionsCount = window.obj2509_SCEventRun_runningActionsCount - 1;
if (window.obj2509_SCEventRun_runningActionsCount < 0) {
	window.obj2509_SCEventRun_runningActionsCount = 0;
} else if (window.obj2509_SCEventRun_runningActionsCount == 0) {
	obj2509_SCEventRun_actionGroup7();
}		
	}, 1);
}



};
obj2509_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2509_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2509").trigger("obj2509_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2509) {
				console.warn("de-queueing event obj2509." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2509").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2509_SCEventRun_activeActionGroupIndex = 7;
	





















};
obj2511_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2511_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2511").trigger("obj2511_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2511) {
				console.warn("de-queueing event obj2511." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2511").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2511_SCEventRun_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1993 
move_2527();
function move_2527() {
	window.obj2511_SCEventRun_runningActionsCount = obj2511_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-166";
	var moveY = "+=28";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2511_SCEventRun_runningActionsCount = window.obj2511_SCEventRun_runningActionsCount - 1;
if (window.obj2511_SCEventRun_runningActionsCount < 0) {
	window.obj2511_SCEventRun_runningActionsCount = 0;
} else if (window.obj2511_SCEventRun_runningActionsCount == 0) {
	obj2511_SCEventRun_actionGroup1();
}
		}, 1);
	});
}



















};
obj2511_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2511_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2511").trigger("obj2511_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2511) {
				console.warn("de-queueing event obj2511." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2511").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2511_SCEventRun_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1993 
move_2528();
function move_2528() {
	window.obj2511_SCEventRun_runningActionsCount = obj2511_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-174";
	var moveY = "+=61";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2511_SCEventRun_runningActionsCount = window.obj2511_SCEventRun_runningActionsCount - 1;
if (window.obj2511_SCEventRun_runningActionsCount < 0) {
	window.obj2511_SCEventRun_runningActionsCount = 0;
} else if (window.obj2511_SCEventRun_runningActionsCount == 0) {
	obj2511_SCEventRun_actionGroup2();
}
		}, 1);
	});
}



















};
obj2511_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2511_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2511").trigger("obj2511_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2511) {
				console.warn("de-queueing event obj2511." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2511").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2511_SCEventRun_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj1993 
move_2529();
function move_2529() {
	window.obj2511_SCEventRun_runningActionsCount = obj2511_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-144";
	var moveY = "+=113";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2511_SCEventRun_runningActionsCount = window.obj2511_SCEventRun_runningActionsCount - 1;
if (window.obj2511_SCEventRun_runningActionsCount < 0) {
	window.obj2511_SCEventRun_runningActionsCount = 0;
} else if (window.obj2511_SCEventRun_runningActionsCount == 0) {
	obj2511_SCEventRun_actionGroup3();
}
		}, 1);
	});
}



















};
obj2511_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2511_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2511").trigger("obj2511_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2511) {
				console.warn("de-queueing event obj2511." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2511").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2511_SCEventRun_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1993 
move_2530();
function move_2530() {
	window.obj2511_SCEventRun_runningActionsCount = obj2511_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-157";
	var moveY = "+=65";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2511_SCEventRun_runningActionsCount = window.obj2511_SCEventRun_runningActionsCount - 1;
if (window.obj2511_SCEventRun_runningActionsCount < 0) {
	window.obj2511_SCEventRun_runningActionsCount = 0;
} else if (window.obj2511_SCEventRun_runningActionsCount == 0) {
	obj2511_SCEventRun_actionGroup4();
}
		}, 1);
	});
}



















};
obj2511_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2511_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2511").trigger("obj2511_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2511) {
				console.warn("de-queueing event obj2511." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2511").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2511_SCEventRun_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1993 
move_2534();
function move_2534() {
	window.obj2511_SCEventRun_runningActionsCount = obj2511_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-162";
	var moveY = "+=-11";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2511_SCEventRun_runningActionsCount = window.obj2511_SCEventRun_runningActionsCount - 1;
if (window.obj2511_SCEventRun_runningActionsCount < 0) {
	window.obj2511_SCEventRun_runningActionsCount = 0;
} else if (window.obj2511_SCEventRun_runningActionsCount == 0) {
	obj2511_SCEventRun_actionGroup5();
}
		}, 1);
	});
}



















};
obj2511_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2511_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2511").trigger("obj2511_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2511) {
				console.warn("de-queueing event obj2511." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2511").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2511_SCEventRun_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj1993 
move_2535();
function move_2535() {
	window.obj2511_SCEventRun_runningActionsCount = obj2511_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-155";
	var moveY = "+=50";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2511_SCEventRun_runningActionsCount = window.obj2511_SCEventRun_runningActionsCount - 1;
if (window.obj2511_SCEventRun_runningActionsCount < 0) {
	window.obj2511_SCEventRun_runningActionsCount = 0;
} else if (window.obj2511_SCEventRun_runningActionsCount == 0) {
	obj2511_SCEventRun_actionGroup6();
}
		}, 1);
	});
}



















};
obj2511_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2511_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2511").trigger("obj2511_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2511) {
				console.warn("de-queueing event obj2511." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2511").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2511_SCEventRun_activeActionGroupIndex = 6;
	


//	action: move
//	target: obj1993 
move_2545();
function move_2545() {
	window.obj2511_SCEventRun_runningActionsCount = obj2511_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-153";
	var moveY = "+=102";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2511_SCEventRun_runningActionsCount = window.obj2511_SCEventRun_runningActionsCount - 1;
if (window.obj2511_SCEventRun_runningActionsCount < 0) {
	window.obj2511_SCEventRun_runningActionsCount = 0;
} else if (window.obj2511_SCEventRun_runningActionsCount == 0) {
	obj2511_SCEventRun_actionGroup7();
}
		}, 1);
	});
}



















};
obj2511_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2511_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2511").trigger("obj2511_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2511) {
				console.warn("de-queueing event obj2511." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2511").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2511_SCEventRun_activeActionGroupIndex = 7;
	


//	action: move
//	target: obj1993 
move_2546();
function move_2546() {
	window.obj2511_SCEventRun_runningActionsCount = obj2511_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-153";
	var moveY = "+=102";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2511_SCEventRun_runningActionsCount = window.obj2511_SCEventRun_runningActionsCount - 1;
if (window.obj2511_SCEventRun_runningActionsCount < 0) {
	window.obj2511_SCEventRun_runningActionsCount = 0;
} else if (window.obj2511_SCEventRun_runningActionsCount == 0) {
	obj2511_SCEventRun_actionGroup8();
}
		}, 1);
	});
}



















};
obj2511_SCEventRun_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2511_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2511").trigger("obj2511_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2511) {
				console.warn("de-queueing event obj2511." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2511").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2511_SCEventRun_activeActionGroupIndex = 8;
	


















//	action: run action list container
//	target: obj1882 
runActionList_2533();
function runActionList_2533() {
	window.obj2511_SCEventRun_runningActionsCount = obj2511_SCEventRun_runningActionsCount + 1;
	$("#obj1882").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2511_SCEventRun_runningActionsCount = window.obj2511_SCEventRun_runningActionsCount - 1;
if (window.obj2511_SCEventRun_runningActionsCount < 0) {
	window.obj2511_SCEventRun_runningActionsCount = 0;
} else if (window.obj2511_SCEventRun_runningActionsCount == 0) {
	obj2511_SCEventRun_actionGroup9();
}		
	}, 1);
}



};
obj2511_SCEventRun_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2511_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2511").trigger("obj2511_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2511) {
				console.warn("de-queueing event obj2511." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2511").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2511_SCEventRun_activeActionGroupIndex = 9;
	





















};
obj2513_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2513_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2513").trigger("obj2513_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2513) {
				console.warn("de-queueing event obj2513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2513_SCEventRun_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1993 
move_2549();
function move_2549() {
	window.obj2513_SCEventRun_runningActionsCount = obj2513_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-166";
	var moveY = "+=28";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2513_SCEventRun_runningActionsCount = window.obj2513_SCEventRun_runningActionsCount - 1;
if (window.obj2513_SCEventRun_runningActionsCount < 0) {
	window.obj2513_SCEventRun_runningActionsCount = 0;
} else if (window.obj2513_SCEventRun_runningActionsCount == 0) {
	obj2513_SCEventRun_actionGroup1();
}
		}, 1);
	});
}



















};
obj2513_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2513_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2513").trigger("obj2513_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2513) {
				console.warn("de-queueing event obj2513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2513_SCEventRun_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1993 
move_2550();
function move_2550() {
	window.obj2513_SCEventRun_runningActionsCount = obj2513_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-174";
	var moveY = "+=61";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2513_SCEventRun_runningActionsCount = window.obj2513_SCEventRun_runningActionsCount - 1;
if (window.obj2513_SCEventRun_runningActionsCount < 0) {
	window.obj2513_SCEventRun_runningActionsCount = 0;
} else if (window.obj2513_SCEventRun_runningActionsCount == 0) {
	obj2513_SCEventRun_actionGroup2();
}
		}, 1);
	});
}



















};
obj2513_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2513_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2513").trigger("obj2513_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2513) {
				console.warn("de-queueing event obj2513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2513_SCEventRun_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj1993 
move_2551();
function move_2551() {
	window.obj2513_SCEventRun_runningActionsCount = obj2513_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-148";
	var moveY = "+=95";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2513_SCEventRun_runningActionsCount = window.obj2513_SCEventRun_runningActionsCount - 1;
if (window.obj2513_SCEventRun_runningActionsCount < 0) {
	window.obj2513_SCEventRun_runningActionsCount = 0;
} else if (window.obj2513_SCEventRun_runningActionsCount == 0) {
	obj2513_SCEventRun_actionGroup3();
}
		}, 1);
	});
}



















};
obj2513_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2513_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2513").trigger("obj2513_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2513) {
				console.warn("de-queueing event obj2513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2513_SCEventRun_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1993 
move_2553();
function move_2553() {
	window.obj2513_SCEventRun_runningActionsCount = obj2513_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-161";
	var moveY = "+=-26";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2513_SCEventRun_runningActionsCount = window.obj2513_SCEventRun_runningActionsCount - 1;
if (window.obj2513_SCEventRun_runningActionsCount < 0) {
	window.obj2513_SCEventRun_runningActionsCount = 0;
} else if (window.obj2513_SCEventRun_runningActionsCount == 0) {
	obj2513_SCEventRun_actionGroup4();
}
		}, 1);
	});
}



















};
obj2513_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2513_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2513").trigger("obj2513_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2513) {
				console.warn("de-queueing event obj2513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2513_SCEventRun_activeActionGroupIndex = 4;
	


//	action: move
//	target: obj1993 
move_2554();
function move_2554() {
	window.obj2513_SCEventRun_runningActionsCount = obj2513_SCEventRun_runningActionsCount + 1;

	var easing = "ease-out";
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
	var targetObject = $("#obj1993");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-162";
	var moveY = "+=-106";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2513_SCEventRun_runningActionsCount = window.obj2513_SCEventRun_runningActionsCount - 1;
if (window.obj2513_SCEventRun_runningActionsCount < 0) {
	window.obj2513_SCEventRun_runningActionsCount = 0;
} else if (window.obj2513_SCEventRun_runningActionsCount == 0) {
	obj2513_SCEventRun_actionGroup5();
}
		}, 1);
	});
}
//	action: move
//	target: obj2865 
move_2867();
function move_2867() {
	window.obj2513_SCEventRun_runningActionsCount = obj2513_SCEventRun_runningActionsCount + 1;

	var easing = "ease-out";
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
	var targetObject = $("#obj2865");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=257";
	var moveY = "+=104";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2513_SCEventRun_runningActionsCount = window.obj2513_SCEventRun_runningActionsCount - 1;
if (window.obj2513_SCEventRun_runningActionsCount < 0) {
	window.obj2513_SCEventRun_runningActionsCount = 0;
} else if (window.obj2513_SCEventRun_runningActionsCount == 0) {
	obj2513_SCEventRun_actionGroup5();
}
		}, 1);
	});
}










//	action: playAudio
//	target: obj3207 
playAudio_3209();
function playAudio_3209() {
	window.obj2513_SCEventRun_runningActionsCount = obj2513_SCEventRun_runningActionsCount + 1;
	var myAudio = $("#obj3207")[0];
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
		    window.obj2513_SCEventRun_runningActionsCount = window.obj2513_SCEventRun_runningActionsCount - 1;
if (window.obj2513_SCEventRun_runningActionsCount < 0) {
	window.obj2513_SCEventRun_runningActionsCount = 0;
} else if (window.obj2513_SCEventRun_runningActionsCount == 0) {
	obj2513_SCEventRun_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2513_SCEventRun_runningActionsCount = window.obj2513_SCEventRun_runningActionsCount - 1;
if (window.obj2513_SCEventRun_runningActionsCount < 0) {
	window.obj2513_SCEventRun_runningActionsCount = 0;
} else if (window.obj2513_SCEventRun_runningActionsCount == 0) {
	obj2513_SCEventRun_actionGroup5();
}
	}
}









};
obj2513_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2513_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2513").trigger("obj2513_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2513) {
				console.warn("de-queueing event obj2513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2513_SCEventRun_activeActionGroupIndex = 5;
	








//	action: wait
wait_2555();
function wait_2555() {
	window.obj2513_SCEventRun_runningActionsCount = obj2513_SCEventRun_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2513_SCEventRun_runningActionsCount = window.obj2513_SCEventRun_runningActionsCount - 1;
if (window.obj2513_SCEventRun_runningActionsCount < 0) {
	window.obj2513_SCEventRun_runningActionsCount = 0;
} else if (window.obj2513_SCEventRun_runningActionsCount == 0) {
	obj2513_SCEventRun_actionGroup6();
}
	}, 1000);
}













};
obj2513_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2513_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2513").trigger("obj2513_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2513) {
				console.warn("de-queueing event obj2513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2513_SCEventRun_activeActionGroupIndex = 6;
	


















//	action: run action list container
//	target: obj3195 
runActionList_3201();
function runActionList_3201() {
	window.obj2513_SCEventRun_runningActionsCount = obj2513_SCEventRun_runningActionsCount + 1;
	$("#obj3195").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2513_SCEventRun_runningActionsCount = window.obj2513_SCEventRun_runningActionsCount - 1;
if (window.obj2513_SCEventRun_runningActionsCount < 0) {
	window.obj2513_SCEventRun_runningActionsCount = 0;
} else if (window.obj2513_SCEventRun_runningActionsCount == 0) {
	obj2513_SCEventRun_actionGroup7();
}		
	}, 1);
}



};
obj2513_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2513_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2513").trigger("obj2513_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2513) {
				console.warn("de-queueing event obj2513." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2513").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2513_SCEventRun_activeActionGroupIndex = 7;
	





















};
obj2570_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2570_onTap_activeActionGroupIndex = -1;
		$("#obj2570").trigger("obj2570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2570) {
				console.warn("de-queueing event obj2570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2570_onTap_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj3181 
playAudio_3185();
function playAudio_3185() {
	window.obj2570_onTap_runningActionsCount = obj2570_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3181")[0];
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
		    window.obj2570_onTap_runningActionsCount = window.obj2570_onTap_runningActionsCount - 1;
if (window.obj2570_onTap_runningActionsCount < 0) {
	window.obj2570_onTap_runningActionsCount = 0;
} else if (window.obj2570_onTap_runningActionsCount == 0) {
	obj2570_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2570_onTap_runningActionsCount = window.obj2570_onTap_runningActionsCount - 1;
if (window.obj2570_onTap_runningActionsCount < 0) {
	window.obj2570_onTap_runningActionsCount = 0;
} else if (window.obj2570_onTap_runningActionsCount == 0) {
	obj2570_onTap_actionGroup1();
}
	}
}





//	action: run action list container
//	target: obj2871 
runActionList_2879();
function runActionList_2879() {
	window.obj2570_onTap_runningActionsCount = obj2570_onTap_runningActionsCount + 1;
	$("#obj2871").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2570_onTap_runningActionsCount = window.obj2570_onTap_runningActionsCount - 1;
if (window.obj2570_onTap_runningActionsCount < 0) {
	window.obj2570_onTap_runningActionsCount = 0;
} else if (window.obj2570_onTap_runningActionsCount == 0) {
	obj2570_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2513 
runActionList_2577();
function runActionList_2577() {
	window.obj2570_onTap_runningActionsCount = obj2570_onTap_runningActionsCount + 1;
	$("#obj2513").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2570_onTap_runningActionsCount = window.obj2570_onTap_runningActionsCount - 1;
if (window.obj2570_onTap_runningActionsCount < 0) {
	window.obj2570_onTap_runningActionsCount = 0;
} else if (window.obj2570_onTap_runningActionsCount == 0) {
	obj2570_onTap_actionGroup1();
}		
	}, 1);
}



};
obj2570_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2570_onTap_activeActionGroupIndex = -1;
		$("#obj2570").trigger("obj2570_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2570) {
				console.warn("de-queueing event obj2570." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2570").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2570_onTap_activeActionGroupIndex = 1;
	





















};
obj2572_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2572_onTap_activeActionGroupIndex = -1;
		$("#obj2572").trigger("obj2572_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2572) {
				console.warn("de-queueing event obj2572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2572_onTap_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj3181 
playAudio_3184();
function playAudio_3184() {
	window.obj2572_onTap_runningActionsCount = obj2572_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3181")[0];
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
		    window.obj2572_onTap_runningActionsCount = window.obj2572_onTap_runningActionsCount - 1;
if (window.obj2572_onTap_runningActionsCount < 0) {
	window.obj2572_onTap_runningActionsCount = 0;
} else if (window.obj2572_onTap_runningActionsCount == 0) {
	obj2572_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2572_onTap_runningActionsCount = window.obj2572_onTap_runningActionsCount - 1;
if (window.obj2572_onTap_runningActionsCount < 0) {
	window.obj2572_onTap_runningActionsCount = 0;
} else if (window.obj2572_onTap_runningActionsCount == 0) {
	obj2572_onTap_actionGroup1();
}
	}
}





//	action: run action list container
//	target: obj2871 
runActionList_2880();
function runActionList_2880() {
	window.obj2572_onTap_runningActionsCount = obj2572_onTap_runningActionsCount + 1;
	$("#obj2871").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2572_onTap_runningActionsCount = window.obj2572_onTap_runningActionsCount - 1;
if (window.obj2572_onTap_runningActionsCount < 0) {
	window.obj2572_onTap_runningActionsCount = 0;
} else if (window.obj2572_onTap_runningActionsCount == 0) {
	obj2572_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2511 
runActionList_2579();
function runActionList_2579() {
	window.obj2572_onTap_runningActionsCount = obj2572_onTap_runningActionsCount + 1;
	$("#obj2511").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2572_onTap_runningActionsCount = window.obj2572_onTap_runningActionsCount - 1;
if (window.obj2572_onTap_runningActionsCount < 0) {
	window.obj2572_onTap_runningActionsCount = 0;
} else if (window.obj2572_onTap_runningActionsCount == 0) {
	obj2572_onTap_actionGroup1();
}		
	}, 1);
}



};
obj2572_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2572_onTap_activeActionGroupIndex = -1;
		$("#obj2572").trigger("obj2572_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2572) {
				console.warn("de-queueing event obj2572." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2572").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2572_onTap_activeActionGroupIndex = 1;
	





















};
obj2574_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2574_onTap_activeActionGroupIndex = -1;
		$("#obj2574").trigger("obj2574_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2574) {
				console.warn("de-queueing event obj2574." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2574").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2574_onTap_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj3181 
playAudio_3183();
function playAudio_3183() {
	window.obj2574_onTap_runningActionsCount = obj2574_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3181")[0];
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
		    window.obj2574_onTap_runningActionsCount = window.obj2574_onTap_runningActionsCount - 1;
if (window.obj2574_onTap_runningActionsCount < 0) {
	window.obj2574_onTap_runningActionsCount = 0;
} else if (window.obj2574_onTap_runningActionsCount == 0) {
	obj2574_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2574_onTap_runningActionsCount = window.obj2574_onTap_runningActionsCount - 1;
if (window.obj2574_onTap_runningActionsCount < 0) {
	window.obj2574_onTap_runningActionsCount = 0;
} else if (window.obj2574_onTap_runningActionsCount == 0) {
	obj2574_onTap_actionGroup1();
}
	}
}





//	action: run action list container
//	target: obj2871 
runActionList_2881();
function runActionList_2881() {
	window.obj2574_onTap_runningActionsCount = obj2574_onTap_runningActionsCount + 1;
	$("#obj2871").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2574_onTap_runningActionsCount = window.obj2574_onTap_runningActionsCount - 1;
if (window.obj2574_onTap_runningActionsCount < 0) {
	window.obj2574_onTap_runningActionsCount = 0;
} else if (window.obj2574_onTap_runningActionsCount == 0) {
	obj2574_onTap_actionGroup1();
}		
	}, 1);
}
//	action: run action list container
//	target: obj2509 
runActionList_2586();
function runActionList_2586() {
	window.obj2574_onTap_runningActionsCount = obj2574_onTap_runningActionsCount + 1;
	$("#obj2509").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2574_onTap_runningActionsCount = window.obj2574_onTap_runningActionsCount - 1;
if (window.obj2574_onTap_runningActionsCount < 0) {
	window.obj2574_onTap_runningActionsCount = 0;
} else if (window.obj2574_onTap_runningActionsCount == 0) {
	obj2574_onTap_actionGroup1();
}		
	}, 1);
}



};
obj2574_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2574_onTap_activeActionGroupIndex = -1;
		$("#obj2574").trigger("obj2574_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2574) {
				console.warn("de-queueing event obj2574." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2574").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2574_onTap_activeActionGroupIndex = 1;
	





















};
obj2865_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2865_onLoad_activeActionGroupIndex = -1;
		$("#obj2865").trigger("obj2865_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2865) {
				console.warn("de-queueing event obj2865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2865_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj2865 
scale_2884();
function scale_2884() {
	window.obj2865_onLoad_runningActionsCount = obj2865_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2865";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2865';
	var transformOriginX = '50%';
	var transformOriginY = '100%';
	var scaleXValue = '1';
	var scaleYValue = '1.05';
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
		scale_2884_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2884_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2884_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2884_completed() {
	setTimeout(function() {
		window.obj2865_onLoad_runningActionsCount = window.obj2865_onLoad_runningActionsCount - 1;
if (window.obj2865_onLoad_runningActionsCount < 0) {
	window.obj2865_onLoad_runningActionsCount = 0;
} else if (window.obj2865_onLoad_runningActionsCount == 0) {
	obj2865_onLoad_actionGroup1();
}
	}, 1);
}












};
obj2865_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2865_onLoad_activeActionGroupIndex = -1;
		$("#obj2865").trigger("obj2865_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2865) {
				console.warn("de-queueing event obj2865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2865_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj2865 
scale_2885();
function scale_2885() {
	window.obj2865_onLoad_runningActionsCount = obj2865_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2865";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2865';
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
		scale_2885_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2885_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2885_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2885_completed() {
	setTimeout(function() {
		window.obj2865_onLoad_runningActionsCount = window.obj2865_onLoad_runningActionsCount - 1;
if (window.obj2865_onLoad_runningActionsCount < 0) {
	window.obj2865_onLoad_runningActionsCount = 0;
} else if (window.obj2865_onLoad_runningActionsCount == 0) {
	obj2865_onLoad_actionGroup2();
}
	}, 1);
}












};
obj2865_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2865_onLoad_activeActionGroupIndex = -1;
		$("#obj2865").trigger("obj2865_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2865) {
				console.warn("de-queueing event obj2865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2865_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2865_onLoad();
function loop_obj2865_onLoad() {
	var loopCount = 0;
	window.obj2865_onLoad_loopCount = window.obj2865_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2865_onLoad_loopCount > loopCount) {
		window.obj2865_onLoad_loopCount = 0
		obj2865_onLoad_actionGroup3();
	} else {
		obj2865_onLoad_actionGroup0();
	}
}













};
obj2865_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2865_onLoad_activeActionGroupIndex = -1;
		$("#obj2865").trigger("obj2865_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2865) {
				console.warn("de-queueing event obj2865." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2865").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2865_onLoad_activeActionGroupIndex = 3;
	





















};
obj2871_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2871_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2871").trigger("obj2871_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2871) {
				console.warn("de-queueing event obj2871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2871_SCEventRun_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj2574 
hide_2873();
function hide_2873() {
	var selector = "#obj2574";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2871_SCEventRun_runningActionsCount = obj2871_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2871_SCEventRun_runningActionsCount = window.obj2871_SCEventRun_runningActionsCount - 1;
if (window.obj2871_SCEventRun_runningActionsCount < 0) {
	window.obj2871_SCEventRun_runningActionsCount = 0;
} else if (window.obj2871_SCEventRun_runningActionsCount == 0) {
	obj2871_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2873(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2871_SCEventRun_runningActionsCount = window.obj2871_SCEventRun_runningActionsCount - 1;
if (window.obj2871_SCEventRun_runningActionsCount < 0) {
	window.obj2871_SCEventRun_runningActionsCount = 0;
} else if (window.obj2871_SCEventRun_runningActionsCount == 0) {
	obj2871_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2572 
hide_2874();
function hide_2874() {
	var selector = "#obj2572";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2871_SCEventRun_runningActionsCount = obj2871_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2871_SCEventRun_runningActionsCount = window.obj2871_SCEventRun_runningActionsCount - 1;
if (window.obj2871_SCEventRun_runningActionsCount < 0) {
	window.obj2871_SCEventRun_runningActionsCount = 0;
} else if (window.obj2871_SCEventRun_runningActionsCount == 0) {
	obj2871_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2874(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2871_SCEventRun_runningActionsCount = window.obj2871_SCEventRun_runningActionsCount - 1;
if (window.obj2871_SCEventRun_runningActionsCount < 0) {
	window.obj2871_SCEventRun_runningActionsCount = 0;
} else if (window.obj2871_SCEventRun_runningActionsCount == 0) {
	obj2871_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2570 
hide_2875();
function hide_2875() {
	var selector = "#obj2570";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2871_SCEventRun_runningActionsCount = obj2871_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2871_SCEventRun_runningActionsCount = window.obj2871_SCEventRun_runningActionsCount - 1;
if (window.obj2871_SCEventRun_runningActionsCount < 0) {
	window.obj2871_SCEventRun_runningActionsCount = 0;
} else if (window.obj2871_SCEventRun_runningActionsCount == 0) {
	obj2871_SCEventRun_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2875(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2871_SCEventRun_runningActionsCount = window.obj2871_SCEventRun_runningActionsCount - 1;
if (window.obj2871_SCEventRun_runningActionsCount < 0) {
	window.obj2871_SCEventRun_runningActionsCount = 0;
} else if (window.obj2871_SCEventRun_runningActionsCount == 0) {
	obj2871_SCEventRun_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2871_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2871_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2871").trigger("obj2871_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2871) {
				console.warn("de-queueing event obj2871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2871_SCEventRun_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj1905 
hide_2876();
function hide_2876() {
	var selector = "#obj1905";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2871_SCEventRun_runningActionsCount = obj2871_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2871_SCEventRun_runningActionsCount = window.obj2871_SCEventRun_runningActionsCount - 1;
if (window.obj2871_SCEventRun_runningActionsCount < 0) {
	window.obj2871_SCEventRun_runningActionsCount = 0;
} else if (window.obj2871_SCEventRun_runningActionsCount == 0) {
	obj2871_SCEventRun_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2876(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2871_SCEventRun_runningActionsCount = window.obj2871_SCEventRun_runningActionsCount - 1;
if (window.obj2871_SCEventRun_runningActionsCount < 0) {
	window.obj2871_SCEventRun_runningActionsCount = 0;
} else if (window.obj2871_SCEventRun_runningActionsCount == 0) {
	obj2871_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj1903 
hide_2877();
function hide_2877() {
	var selector = "#obj1903";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2871_SCEventRun_runningActionsCount = obj2871_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2871_SCEventRun_runningActionsCount = window.obj2871_SCEventRun_runningActionsCount - 1;
if (window.obj2871_SCEventRun_runningActionsCount < 0) {
	window.obj2871_SCEventRun_runningActionsCount = 0;
} else if (window.obj2871_SCEventRun_runningActionsCount == 0) {
	obj2871_SCEventRun_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2877(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2871_SCEventRun_runningActionsCount = window.obj2871_SCEventRun_runningActionsCount - 1;
if (window.obj2871_SCEventRun_runningActionsCount < 0) {
	window.obj2871_SCEventRun_runningActionsCount = 0;
} else if (window.obj2871_SCEventRun_runningActionsCount == 0) {
	obj2871_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj1899 
hide_2878();
function hide_2878() {
	var selector = "#obj1899";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2871_SCEventRun_runningActionsCount = obj2871_SCEventRun_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2871_SCEventRun_runningActionsCount = window.obj2871_SCEventRun_runningActionsCount - 1;
if (window.obj2871_SCEventRun_runningActionsCount < 0) {
	window.obj2871_SCEventRun_runningActionsCount = 0;
} else if (window.obj2871_SCEventRun_runningActionsCount == 0) {
	obj2871_SCEventRun_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2878(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2871_SCEventRun_runningActionsCount = window.obj2871_SCEventRun_runningActionsCount - 1;
if (window.obj2871_SCEventRun_runningActionsCount < 0) {
	window.obj2871_SCEventRun_runningActionsCount = 0;
} else if (window.obj2871_SCEventRun_runningActionsCount == 0) {
	obj2871_SCEventRun_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2871_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2871_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2871").trigger("obj2871_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2871) {
				console.warn("de-queueing event obj2871." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2871").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2871_SCEventRun_activeActionGroupIndex = 2;
	





















};
obj3195_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3195_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3195").trigger("obj3195_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3195) {
				console.warn("de-queueing event obj3195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3195_SCEventRun_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3197();
function runjs_3197() {
	window.obj3195_SCEventRun_runningActionsCount = obj3195_SCEventRun_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1866"));
	
	setTimeout(function() {
		window.obj3195_SCEventRun_runningActionsCount = window.obj3195_SCEventRun_runningActionsCount - 1;
if (window.obj3195_SCEventRun_runningActionsCount < 0) {
	window.obj3195_SCEventRun_runningActionsCount = 0;
} else if (window.obj3195_SCEventRun_runningActionsCount == 0) {
	obj3195_SCEventRun_actionGroup1();
}
	}, 1);
}







};
obj3195_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3195_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3195").trigger("obj3195_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3195) {
				console.warn("de-queueing event obj3195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3195_SCEventRun_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj1866
(function(){
	window.obj3195_SCEventRun_runningActionsCount = obj3195_SCEventRun_runningActionsCount + 1;

	var selector = "#obj1866";
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
					window.obj3195_SCEventRun_runningActionsCount = window.obj3195_SCEventRun_runningActionsCount - 1;
if (window.obj3195_SCEventRun_runningActionsCount < 0) {
	window.obj3195_SCEventRun_runningActionsCount = 0;
} else if (window.obj3195_SCEventRun_runningActionsCount == 0) {
	obj3195_SCEventRun_actionGroup2();
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
				window.obj3195_SCEventRun_runningActionsCount = window.obj3195_SCEventRun_runningActionsCount - 1;
if (window.obj3195_SCEventRun_runningActionsCount < 0) {
	window.obj3195_SCEventRun_runningActionsCount = 0;
} else if (window.obj3195_SCEventRun_runningActionsCount == 0) {
	obj3195_SCEventRun_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3195_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3195_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3195").trigger("obj3195_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3195) {
				console.warn("de-queueing event obj3195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3195_SCEventRun_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_3200();
function goToPage_3200() {
	window.obj3195_SCEventRun_runningActionsCount = obj3195_SCEventRun_runningActionsCount + 1;
	$("#anchor72")[0].click();
	window.obj3195_SCEventRun_runningActionsCount = window.obj3195_SCEventRun_runningActionsCount - 1;
if (window.obj3195_SCEventRun_runningActionsCount < 0) {
	window.obj3195_SCEventRun_runningActionsCount = 0;
} else if (window.obj3195_SCEventRun_runningActionsCount == 0) {
	obj3195_SCEventRun_actionGroup3();
}
}





















};
obj3195_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3195_SCEventRun_activeActionGroupIndex = -1;
		$("#obj3195").trigger("obj3195_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3195) {
				console.warn("de-queueing event obj3195." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3195").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3195_SCEventRun_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj1888: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1888_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1888_onLoad is still running");
	return;
}
var obj1888_onLoad_runningActionsCount = 0;
var obj1888_onLoad_loopCount = 0;
obj1888_onLoad_actionGroup0();
});










/*
 *
 *   obj1889: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1889_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1889_onLoad is still running");
	return;
}
var obj1889_onLoad_runningActionsCount = 0;
var obj1889_onLoad_loopCount = 0;
obj1889_onLoad_actionGroup0();
});










/*
 *
 *   obj1890: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1890_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1890_onLoad is still running");
	return;
}
var obj1890_onLoad_runningActionsCount = 0;
var obj1890_onLoad_loopCount = 0;
obj1890_onLoad_actionGroup0();
});




















/*
 *
 *   obj1899: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1899_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1899_onLoad is still running");
	return;
}
var obj1899_onLoad_runningActionsCount = 0;
var obj1899_onLoad_loopCount = 0;
obj1899_onLoad_actionGroup0();
});




/*
 *
 *   obj1899: Event Appear
 *
 */
$("#obj1899").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(1899, "onDisappear") || 
		pubcoder.isActionListRunning(1899, "onAppear")) {
		console.warn("queueing event obj1899." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 1899, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj1899_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1899_onAppear is still running");
	return;
}
var obj1899_onAppear_runningActionsCount = 0;
var obj1899_onAppear_loopCount = 0;
obj1899_onAppear_actionGroup0();
});





/*
 *
 *   obj1903: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1903_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1903_onLoad is still running");
	return;
}
var obj1903_onLoad_runningActionsCount = 0;
var obj1903_onLoad_loopCount = 0;
obj1903_onLoad_actionGroup0();
});




/*
 *
 *   obj1903: Event Appear
 *
 */
$("#obj1903").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(1903, "onDisappear") || 
		pubcoder.isActionListRunning(1903, "onAppear")) {
		console.warn("queueing event obj1903." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 1903, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj1903_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1903_onAppear is still running");
	return;
}
var obj1903_onAppear_runningActionsCount = 0;
var obj1903_onAppear_loopCount = 0;
obj1903_onAppear_actionGroup0();
});





/*
 *
 *   obj1905: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1905_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1905_onLoad is still running");
	return;
}
var obj1905_onLoad_runningActionsCount = 0;
var obj1905_onLoad_loopCount = 0;
obj1905_onLoad_actionGroup0();
});




/*
 *
 *   obj1905: Event Appear
 *
 */
$("#obj1905").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(1905, "onDisappear") || 
		pubcoder.isActionListRunning(1905, "onAppear")) {
		console.warn("queueing event obj1905." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 1905, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj1905_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1905_onAppear is still running");
	return;
}
var obj1905_onAppear_runningActionsCount = 0;
var obj1905_onAppear_loopCount = 0;
obj1905_onAppear_actionGroup0();
});




/*
 *
 *   obj1993: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1993");
	var winTarget = document.getElementById("obj1993");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1993").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1993_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1993_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1993_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1993_onTouchDown is still running");
	return;
}
var obj1993_onTouchDown_runningActionsCount = 0;
var obj1993_onTouchDown_loopCount = 0;
obj1993_onTouchDown_actionGroup0();
});

/*
 *
 *   obj1993: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1993_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1993_onLoad is still running");
	return;
}
var obj1993_onLoad_runningActionsCount = 0;
var obj1993_onLoad_loopCount = 0;
obj1993_onLoad_actionGroup0();
});


/*
 *
 *   obj1993: Event SCActionDragDrop2569_droppedOutsideTargetActions
 *
 */
$("#obj1993").bind("SCActionDragDrop2569_droppedOutsideTargetActions", function(event) {
	if (window.obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1993_SCActionDragDrop2569_droppedOutsideTargetActions is still running");
	return;
}
var obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_loopCount = 0;
obj1993_SCActionDragDrop2569_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1993: Event droppedInsideTargetActions_3
 *
 */
$("#obj1993").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj1993_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1993_droppedInsideTargetActions_3 is still running");
	return;
}
var obj1993_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1993_droppedInsideTargetActions_3_loopCount = 0;
obj1993_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj1993: Event droppedInsideTargetActions_2
 *
 */
$("#obj1993").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj1993_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1993_droppedInsideTargetActions_2 is still running");
	return;
}
var obj1993_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1993_droppedInsideTargetActions_2_loopCount = 0;
obj1993_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj1993: Event droppedInsideTargetActions
 *
 */
$("#obj1993").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1993_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1993_droppedInsideTargetActions is still running");
	return;
}
var obj1993_droppedInsideTargetActions_runningActionsCount = 0;
var obj1993_droppedInsideTargetActions_loopCount = 0;
obj1993_droppedInsideTargetActions_actionGroup0();
});

















/*
 *
 *   obj1866: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1866_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1866_onLoad is still running");
	return;
}
var obj1866_onLoad_runningActionsCount = 0;
var obj1866_onLoad_loopCount = 0;
obj1866_onLoad_actionGroup0();
});












/*
 *
 *   obj1882: Event SCEventRun
 *
 */
$("#obj1882").bind("SCEventRun", function(event) {
	if (window.obj1882_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1882_SCEventRun is still running");
	return;
}
var obj1882_SCEventRun_runningActionsCount = 0;
var obj1882_SCEventRun_loopCount = 0;
obj1882_SCEventRun_actionGroup0();
});










/*
 *
 *   obj2509: Event SCEventRun
 *
 */
$("#obj2509").bind("SCEventRun", function(event) {
	if (window.obj2509_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2509_SCEventRun is still running");
	return;
}
var obj2509_SCEventRun_runningActionsCount = 0;
var obj2509_SCEventRun_loopCount = 0;
obj2509_SCEventRun_actionGroup0();
});










/*
 *
 *   obj2511: Event SCEventRun
 *
 */
$("#obj2511").bind("SCEventRun", function(event) {
	if (window.obj2511_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2511_SCEventRun is still running");
	return;
}
var obj2511_SCEventRun_runningActionsCount = 0;
var obj2511_SCEventRun_loopCount = 0;
obj2511_SCEventRun_actionGroup0();
});










/*
 *
 *   obj2513: Event SCEventRun
 *
 */
$("#obj2513").bind("SCEventRun", function(event) {
	if (window.obj2513_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2513_SCEventRun is still running");
	return;
}
var obj2513_SCEventRun_runningActionsCount = 0;
var obj2513_SCEventRun_loopCount = 0;
obj2513_SCEventRun_actionGroup0();
});





/*
 *
 *   obj2570: Event Touch Down
 *
 */
$("#obj2570").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2570_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2570_onTap is still running");
	return;
}
var obj2570_onTap_runningActionsCount = 0;
var obj2570_onTap_loopCount = 0;
obj2570_onTap_actionGroup0();
});










/*
 *
 *   obj2572: Event Touch Down
 *
 */
$("#obj2572").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2572_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2572_onTap is still running");
	return;
}
var obj2572_onTap_runningActionsCount = 0;
var obj2572_onTap_loopCount = 0;
obj2572_onTap_actionGroup0();
});










/*
 *
 *   obj2574: Event Touch Down
 *
 */
$("#obj2574").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2574_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2574_onTap is still running");
	return;
}
var obj2574_onTap_runningActionsCount = 0;
var obj2574_onTap_loopCount = 0;
obj2574_onTap_actionGroup0();
});












/*
 *
 *   obj2865: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2865_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2865_onLoad is still running");
	return;
}
var obj2865_onLoad_runningActionsCount = 0;
var obj2865_onLoad_loopCount = 0;
obj2865_onLoad_actionGroup0();
});












/*
 *
 *   obj2871: Event SCEventRun
 *
 */
$("#obj2871").bind("SCEventRun", function(event) {
	if (window.obj2871_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2871_SCEventRun is still running");
	return;
}
var obj2871_SCEventRun_runningActionsCount = 0;
var obj2871_SCEventRun_loopCount = 0;
obj2871_SCEventRun_actionGroup0();
});




















/*
 *
 *   obj3195: Event SCEventRun
 *
 */
$("#obj3195").bind("SCEventRun", function(event) {
	if (window.obj3195_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3195_SCEventRun is still running");
	return;
}
var obj3195_SCEventRun_runningActionsCount = 0;
var obj3195_SCEventRun_loopCount = 0;
obj3195_SCEventRun_actionGroup0();
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
	
$("#obj1887").trigger('SCEventShow');
$("#obj1888").trigger('SCEventShow');
$("#obj1889").trigger('SCEventShow');
$("#obj1890").trigger('SCEventShow');
$("#obj1895").trigger('SCEventShow');
$("#obj1899").trigger('SCEventShow');
$("#obj1903").trigger('SCEventShow');
$("#obj1905").trigger('SCEventShow');
$("#obj1993").trigger('SCEventShow');
$("#obj1880").trigger('SCEventShow');
$("#obj1866").trigger('SCEventShow');
$("#obj2570").trigger('SCEventShow');
$("#obj2572").trigger('SCEventShow');
$("#obj2574").trigger('SCEventShow');
$("#obj2865").trigger('SCEventShow');
$("#obj3181").trigger('SCEventShow');
$("#obj3207").trigger('SCEventShow');
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