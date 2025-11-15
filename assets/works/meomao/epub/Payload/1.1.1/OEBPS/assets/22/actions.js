pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 940;
pubcoder.page.title = pubcoder.page.title || "22";
pubcoder.page.number = pubcoder.page.number || 22;
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
var obj1247_onLoad_activeActionGroupIndex = -1;
var obj1247_onLoad_runningActionsCount = 0;
var obj1247_onLoad_loopCount = 0;
var obj1248_onLoad_activeActionGroupIndex = -1;
var obj1248_onLoad_runningActionsCount = 0;
var obj1248_onLoad_loopCount = 0;
var obj1351_onLoad_activeActionGroupIndex = -1;
var obj1351_onLoad_runningActionsCount = 0;
var obj1351_onLoad_loopCount = 0;
var obj1310_onLoad_activeActionGroupIndex = -1;
var obj1310_onLoad_runningActionsCount = 0;
var obj1310_onLoad_loopCount = 0;
var obj1141_onLoad_activeActionGroupIndex = -1;
var obj1141_onLoad_runningActionsCount = 0;
var obj1141_onLoad_loopCount = 0;
var obj1139_onLoad_activeActionGroupIndex = -1;
var obj1139_onLoad_runningActionsCount = 0;
var obj1139_onLoad_loopCount = 0;
var obj1335_onLoad_activeActionGroupIndex = -1;
var obj1335_onLoad_runningActionsCount = 0;
var obj1335_onLoad_loopCount = 0;
var obj1318_onLoad_activeActionGroupIndex = -1;
var obj1318_onLoad_runningActionsCount = 0;
var obj1318_onLoad_loopCount = 0;
var obj1343_onLoad_activeActionGroupIndex = -1;
var obj1343_onLoad_runningActionsCount = 0;
var obj1343_onLoad_loopCount = 0;
var obj1326_onLoad_activeActionGroupIndex = -1;
var obj1326_onLoad_runningActionsCount = 0;
var obj1326_onLoad_loopCount = 0;
var obj1143_onLoad_activeActionGroupIndex = -1;
var obj1143_onLoad_runningActionsCount = 0;
var obj1143_onLoad_loopCount = 0;
var obj1152_onLoad_activeActionGroupIndex = -1;
var obj1152_onLoad_runningActionsCount = 0;
var obj1152_onLoad_loopCount = 0;
var obj1388_onLoad_activeActionGroupIndex = -1;
var obj1388_onLoad_runningActionsCount = 0;
var obj1388_onLoad_loopCount = 0;
var obj941_onDrag_activeActionGroupIndex = -1;
var obj941_onDrag_runningActionsCount = 0;
var obj941_onDrag_loopCount = 0;
var obj941_onTouchDown_activeActionGroupIndex = -1;
var obj941_onTouchDown_runningActionsCount = 0;
var obj941_onTouchDown_loopCount = 0;
var obj941_SCActionDragDrop946_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj941_SCActionDragDrop946_droppedOutsideTargetActions_runningActionsCount = 0;
var obj941_SCActionDragDrop946_droppedOutsideTargetActions_loopCount = 0;
var obj941_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
var obj941_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_9_loopCount = 0;
var obj941_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
var obj941_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_8_loopCount = 0;
var obj941_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
var obj941_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_7_loopCount = 0;
var obj941_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj941_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_6_loopCount = 0;
var obj941_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj941_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_5_loopCount = 0;
var obj941_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj941_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_4_loopCount = 0;
var obj941_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj941_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_3_loopCount = 0;
var obj941_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj941_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_2_loopCount = 0;
var obj941_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj941_droppedInsideTargetActions_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_loopCount = 0;
var obj976_SCEventRun_activeActionGroupIndex = -1;
var obj976_SCEventRun_runningActionsCount = 0;
var obj976_SCEventRun_loopCount = 0;
var obj991_SCEventRun_activeActionGroupIndex = -1;
var obj991_SCEventRun_runningActionsCount = 0;
var obj991_SCEventRun_loopCount = 0;
var obj1954_onTap_activeActionGroupIndex = -1;
var obj1954_onTap_runningActionsCount = 0;
var obj1954_onTap_loopCount = 0;
var obj3261_onAppear_activeActionGroupIndex = -1;
var obj3261_onAppear_runningActionsCount = 0;
var obj3261_onAppear_loopCount = 0;
var obj2150_onLoad_activeActionGroupIndex = -1;
var obj2150_onLoad_runningActionsCount = 0;
var obj2150_onLoad_loopCount = 0;
var obj2151_onLoad_activeActionGroupIndex = -1;
var obj2151_onLoad_runningActionsCount = 0;
var obj2151_onLoad_loopCount = 0;
var obj2152_onLoad_activeActionGroupIndex = -1;
var obj2152_onLoad_runningActionsCount = 0;
var obj2152_onLoad_loopCount = 0;
var obj2147_onLoad_activeActionGroupIndex = -1;
var obj2147_onLoad_runningActionsCount = 0;
var obj2147_onLoad_loopCount = 0;
var obj2148_onLoad_activeActionGroupIndex = -1;
var obj2148_onLoad_runningActionsCount = 0;
var obj2148_onLoad_loopCount = 0;
var obj2149_onLoad_activeActionGroupIndex = -1;
var obj2149_onLoad_runningActionsCount = 0;
var obj2149_onLoad_loopCount = 0;
var obj2215_onTap_activeActionGroupIndex = -1;
var obj2215_onTap_runningActionsCount = 0;
var obj2215_onTap_loopCount = 0;
var obj2215_onLoad_activeActionGroupIndex = -1;
var obj2215_onLoad_runningActionsCount = 0;
var obj2215_onLoad_loopCount = 0;
var obj1440_onLoad_activeActionGroupIndex = -1;
var obj1440_onLoad_runningActionsCount = 0;
var obj1440_onLoad_loopCount = 0;
var obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
var obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj2086_SCEventCounterReachedTargetValue_loopCount = 0;
var obj2086_SCEventCounterValueChange_activeActionGroupIndex = -1;
var obj2086_SCEventCounterValueChange_runningActionsCount = 0;
var obj2086_SCEventCounterValueChange_loopCount = 0;
var obj2223_SCEventRun_activeActionGroupIndex = -1;
var obj2223_SCEventRun_runningActionsCount = 0;
var obj2223_SCEventRun_loopCount = 0;
/*
 * 
 * Init SCCounter
 *
 * 
 */
 
var obj2086_counterValue = 0;
var obj2086_counterTargetValue = 4;
var obj2086_counterCanExceedTargetValue = false;
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
		
obj1247_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1247_onLoad_activeActionGroupIndex = -1;
		$("#obj1247").trigger("obj1247_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1247) {
				console.warn("de-queueing event obj1247." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1247").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1247_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1247 
move_1264();
function move_1264() {
	window.obj1247_onLoad_runningActionsCount = obj1247_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1247");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-50";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj1247_onLoad_runningActionsCount = window.obj1247_onLoad_runningActionsCount - 1;
if (window.obj1247_onLoad_runningActionsCount < 0) {
	window.obj1247_onLoad_runningActionsCount = 0;
} else if (window.obj1247_onLoad_runningActionsCount == 0) {
	obj1247_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj1247_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1247_onLoad_activeActionGroupIndex = -1;
		$("#obj1247").trigger("obj1247_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1247) {
				console.warn("de-queueing event obj1247." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1247").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1247_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1247 
move_1265();
function move_1265() {
	window.obj1247_onLoad_runningActionsCount = obj1247_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1247");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=50";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj1247_onLoad_runningActionsCount = window.obj1247_onLoad_runningActionsCount - 1;
if (window.obj1247_onLoad_runningActionsCount < 0) {
	window.obj1247_onLoad_runningActionsCount = 0;
} else if (window.obj1247_onLoad_runningActionsCount == 0) {
	obj1247_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj1247_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1247_onLoad_activeActionGroupIndex = -1;
		$("#obj1247").trigger("obj1247_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1247) {
				console.warn("de-queueing event obj1247." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1247").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1247_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1247_onLoad();
function loop_obj1247_onLoad() {
	var loopCount = 0;
	window.obj1247_onLoad_loopCount = window.obj1247_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1247_onLoad_loopCount > loopCount) {
		window.obj1247_onLoad_loopCount = 0
		obj1247_onLoad_actionGroup3();
	} else {
		obj1247_onLoad_actionGroup0();
	}
}













};
obj1247_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1247_onLoad_activeActionGroupIndex = -1;
		$("#obj1247").trigger("obj1247_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1247) {
				console.warn("de-queueing event obj1247." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1247").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1247_onLoad_activeActionGroupIndex = 3;
	





















};
obj1248_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1248_onLoad_activeActionGroupIndex = -1;
		$("#obj1248").trigger("obj1248_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1248) {
				console.warn("de-queueing event obj1248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1248_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1248 
move_1252();
function move_1252() {
	window.obj1248_onLoad_runningActionsCount = obj1248_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1248");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=50";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 4000, easing, function() {
		setTimeout(function() {
			window.obj1248_onLoad_runningActionsCount = window.obj1248_onLoad_runningActionsCount - 1;
if (window.obj1248_onLoad_runningActionsCount < 0) {
	window.obj1248_onLoad_runningActionsCount = 0;
} else if (window.obj1248_onLoad_runningActionsCount == 0) {
	obj1248_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj1248_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1248_onLoad_activeActionGroupIndex = -1;
		$("#obj1248").trigger("obj1248_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1248) {
				console.warn("de-queueing event obj1248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1248_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1248 
move_1253();
function move_1253() {
	window.obj1248_onLoad_runningActionsCount = obj1248_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1248");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-50";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 4000, easing, function() {
		setTimeout(function() {
			window.obj1248_onLoad_runningActionsCount = window.obj1248_onLoad_runningActionsCount - 1;
if (window.obj1248_onLoad_runningActionsCount < 0) {
	window.obj1248_onLoad_runningActionsCount = 0;
} else if (window.obj1248_onLoad_runningActionsCount == 0) {
	obj1248_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj1248_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1248_onLoad_activeActionGroupIndex = -1;
		$("#obj1248").trigger("obj1248_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1248) {
				console.warn("de-queueing event obj1248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1248_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1248_onLoad();
function loop_obj1248_onLoad() {
	var loopCount = 0;
	window.obj1248_onLoad_loopCount = window.obj1248_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1248_onLoad_loopCount > loopCount) {
		window.obj1248_onLoad_loopCount = 0
		obj1248_onLoad_actionGroup3();
	} else {
		obj1248_onLoad_actionGroup0();
	}
}













};
obj1248_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1248_onLoad_activeActionGroupIndex = -1;
		$("#obj1248").trigger("obj1248_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1248) {
				console.warn("de-queueing event obj1248." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1248").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1248_onLoad_activeActionGroupIndex = 3;
	





















};
obj1351_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1351_onLoad_activeActionGroupIndex = -1;
		$("#obj1351").trigger("obj1351_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1351) {
				console.warn("de-queueing event obj1351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1351_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1351 
scale_1355();
function scale_1355() {
	window.obj1351_onLoad_runningActionsCount = obj1351_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1351";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1351';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
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
		scale_1355_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1355_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1355_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1355_completed() {
	setTimeout(function() {
		window.obj1351_onLoad_runningActionsCount = window.obj1351_onLoad_runningActionsCount - 1;
if (window.obj1351_onLoad_runningActionsCount < 0) {
	window.obj1351_onLoad_runningActionsCount = 0;
} else if (window.obj1351_onLoad_runningActionsCount == 0) {
	obj1351_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1351_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1351_onLoad_activeActionGroupIndex = -1;
		$("#obj1351").trigger("obj1351_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1351) {
				console.warn("de-queueing event obj1351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1351_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1351 
scale_1357();
function scale_1357() {
	window.obj1351_onLoad_runningActionsCount = obj1351_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1351";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1351';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_1357_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1357_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1357_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1357_completed() {
	setTimeout(function() {
		window.obj1351_onLoad_runningActionsCount = window.obj1351_onLoad_runningActionsCount - 1;
if (window.obj1351_onLoad_runningActionsCount < 0) {
	window.obj1351_onLoad_runningActionsCount = 0;
} else if (window.obj1351_onLoad_runningActionsCount == 0) {
	obj1351_onLoad_actionGroup2();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj1351 
(function () {
	window.obj1351_onLoad_runningActionsCount = obj1351_onLoad_runningActionsCount + 1;

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
	
	$("#obj1351").animate({ opacity: '1'}, 1200, easing, function() {
		setTimeout(function() {
			window.obj1351_onLoad_runningActionsCount = window.obj1351_onLoad_runningActionsCount - 1;
if (window.obj1351_onLoad_runningActionsCount < 0) {
	window.obj1351_onLoad_runningActionsCount = 0;
} else if (window.obj1351_onLoad_runningActionsCount == 0) {
	obj1351_onLoad_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj1351 
(function () {
	window.obj1351_onLoad_runningActionsCount = obj1351_onLoad_runningActionsCount + 1;

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
	
	$("#obj1351").animate({ opacity: '0'}, 1200, easing, function() {
		setTimeout(function() {
			window.obj1351_onLoad_runningActionsCount = window.obj1351_onLoad_runningActionsCount - 1;
if (window.obj1351_onLoad_runningActionsCount < 0) {
	window.obj1351_onLoad_runningActionsCount = 0;
} else if (window.obj1351_onLoad_runningActionsCount == 0) {
	obj1351_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj1351_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1351_onLoad_activeActionGroupIndex = -1;
		$("#obj1351").trigger("obj1351_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1351) {
				console.warn("de-queueing event obj1351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1351_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1351_onLoad();
function loop_obj1351_onLoad() {
	var loopCount = 0;
	window.obj1351_onLoad_loopCount = window.obj1351_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1351_onLoad_loopCount > loopCount) {
		window.obj1351_onLoad_loopCount = 0
		obj1351_onLoad_actionGroup3();
	} else {
		obj1351_onLoad_actionGroup0();
	}
}













};
obj1351_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1351_onLoad_activeActionGroupIndex = -1;
		$("#obj1351").trigger("obj1351_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1351) {
				console.warn("de-queueing event obj1351." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1351").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1351_onLoad_activeActionGroupIndex = 3;
	





















};
obj1310_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1310_onLoad_activeActionGroupIndex = -1;
		$("#obj1310").trigger("obj1310_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1310) {
				console.warn("de-queueing event obj1310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1310_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1310 
scale_1313();
function scale_1313() {
	window.obj1310_onLoad_runningActionsCount = obj1310_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1310";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1310';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
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
		scale_1313_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1313_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1313_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1313_completed() {
	setTimeout(function() {
		window.obj1310_onLoad_runningActionsCount = window.obj1310_onLoad_runningActionsCount - 1;
if (window.obj1310_onLoad_runningActionsCount < 0) {
	window.obj1310_onLoad_runningActionsCount = 0;
} else if (window.obj1310_onLoad_runningActionsCount == 0) {
	obj1310_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1310_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1310_onLoad_activeActionGroupIndex = -1;
		$("#obj1310").trigger("obj1310_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1310) {
				console.warn("de-queueing event obj1310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1310_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1310 
scale_1315();
function scale_1315() {
	window.obj1310_onLoad_runningActionsCount = obj1310_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1310";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1310';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '1.5';
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
		scale_1315_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1315_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1315_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1315_completed() {
	setTimeout(function() {
		window.obj1310_onLoad_runningActionsCount = window.obj1310_onLoad_runningActionsCount - 1;
if (window.obj1310_onLoad_runningActionsCount < 0) {
	window.obj1310_onLoad_runningActionsCount = 0;
} else if (window.obj1310_onLoad_runningActionsCount == 0) {
	obj1310_onLoad_actionGroup2();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj1310 
(function () {
	window.obj1310_onLoad_runningActionsCount = obj1310_onLoad_runningActionsCount + 1;

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
	
	$("#obj1310").animate({ opacity: '1'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj1310_onLoad_runningActionsCount = window.obj1310_onLoad_runningActionsCount - 1;
if (window.obj1310_onLoad_runningActionsCount < 0) {
	window.obj1310_onLoad_runningActionsCount = 0;
} else if (window.obj1310_onLoad_runningActionsCount == 0) {
	obj1310_onLoad_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj1310 
(function () {
	window.obj1310_onLoad_runningActionsCount = obj1310_onLoad_runningActionsCount + 1;

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
	
	$("#obj1310").animate({ opacity: '0'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj1310_onLoad_runningActionsCount = window.obj1310_onLoad_runningActionsCount - 1;
if (window.obj1310_onLoad_runningActionsCount < 0) {
	window.obj1310_onLoad_runningActionsCount = 0;
} else if (window.obj1310_onLoad_runningActionsCount == 0) {
	obj1310_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj1310_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1310_onLoad_activeActionGroupIndex = -1;
		$("#obj1310").trigger("obj1310_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1310) {
				console.warn("de-queueing event obj1310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1310_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1310_onLoad();
function loop_obj1310_onLoad() {
	var loopCount = 0;
	window.obj1310_onLoad_loopCount = window.obj1310_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1310_onLoad_loopCount > loopCount) {
		window.obj1310_onLoad_loopCount = 0
		obj1310_onLoad_actionGroup3();
	} else {
		obj1310_onLoad_actionGroup0();
	}
}













};
obj1310_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1310_onLoad_activeActionGroupIndex = -1;
		$("#obj1310").trigger("obj1310_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1310) {
				console.warn("de-queueing event obj1310." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1310").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1310_onLoad_activeActionGroupIndex = 3;
	





















};
obj1141_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1141_onLoad_activeActionGroupIndex = -1;
		$("#obj1141").trigger("obj1141_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1141) {
				console.warn("de-queueing event obj1141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1141_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1141 
scale_1272();
function scale_1272() {
	window.obj1141_onLoad_runningActionsCount = obj1141_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1141";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1141';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
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
		scale_1272_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1272_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1272_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1272_completed() {
	setTimeout(function() {
		window.obj1141_onLoad_runningActionsCount = window.obj1141_onLoad_runningActionsCount - 1;
if (window.obj1141_onLoad_runningActionsCount < 0) {
	window.obj1141_onLoad_runningActionsCount = 0;
} else if (window.obj1141_onLoad_runningActionsCount == 0) {
	obj1141_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1141_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1141_onLoad_activeActionGroupIndex = -1;
		$("#obj1141").trigger("obj1141_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1141) {
				console.warn("de-queueing event obj1141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1141_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1141 
scale_1271();
function scale_1271() {
	window.obj1141_onLoad_runningActionsCount = obj1141_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1141";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1141';
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
		scale_1271_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1271_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1271_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1271_completed() {
	setTimeout(function() {
		window.obj1141_onLoad_runningActionsCount = window.obj1141_onLoad_runningActionsCount - 1;
if (window.obj1141_onLoad_runningActionsCount < 0) {
	window.obj1141_onLoad_runningActionsCount = 0;
} else if (window.obj1141_onLoad_runningActionsCount == 0) {
	obj1141_onLoad_actionGroup2();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj1141 
(function () {
	window.obj1141_onLoad_runningActionsCount = obj1141_onLoad_runningActionsCount + 1;

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
	
	$("#obj1141").animate({ opacity: '1'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1141_onLoad_runningActionsCount = window.obj1141_onLoad_runningActionsCount - 1;
if (window.obj1141_onLoad_runningActionsCount < 0) {
	window.obj1141_onLoad_runningActionsCount = 0;
} else if (window.obj1141_onLoad_runningActionsCount == 0) {
	obj1141_onLoad_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj1141 
(function () {
	window.obj1141_onLoad_runningActionsCount = obj1141_onLoad_runningActionsCount + 1;

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
	
	$("#obj1141").animate({ opacity: '0'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1141_onLoad_runningActionsCount = window.obj1141_onLoad_runningActionsCount - 1;
if (window.obj1141_onLoad_runningActionsCount < 0) {
	window.obj1141_onLoad_runningActionsCount = 0;
} else if (window.obj1141_onLoad_runningActionsCount == 0) {
	obj1141_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj1141_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1141_onLoad_activeActionGroupIndex = -1;
		$("#obj1141").trigger("obj1141_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1141) {
				console.warn("de-queueing event obj1141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1141_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1141_onLoad();
function loop_obj1141_onLoad() {
	var loopCount = 0;
	window.obj1141_onLoad_loopCount = window.obj1141_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1141_onLoad_loopCount > loopCount) {
		window.obj1141_onLoad_loopCount = 0
		obj1141_onLoad_actionGroup3();
	} else {
		obj1141_onLoad_actionGroup0();
	}
}













};
obj1141_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1141_onLoad_activeActionGroupIndex = -1;
		$("#obj1141").trigger("obj1141_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1141) {
				console.warn("de-queueing event obj1141." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1141").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1141_onLoad_activeActionGroupIndex = 3;
	





















};
obj1139_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1139_onLoad_activeActionGroupIndex = -1;
		$("#obj1139").trigger("obj1139_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1139) {
				console.warn("de-queueing event obj1139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1139_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1139 
scale_1306();
function scale_1306() {
	window.obj1139_onLoad_runningActionsCount = obj1139_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1139";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1139';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
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
		scale_1306_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1306_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1306_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1306_completed() {
	setTimeout(function() {
		window.obj1139_onLoad_runningActionsCount = window.obj1139_onLoad_runningActionsCount - 1;
if (window.obj1139_onLoad_runningActionsCount < 0) {
	window.obj1139_onLoad_runningActionsCount = 0;
} else if (window.obj1139_onLoad_runningActionsCount == 0) {
	obj1139_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1139_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1139_onLoad_activeActionGroupIndex = -1;
		$("#obj1139").trigger("obj1139_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1139) {
				console.warn("de-queueing event obj1139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1139_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1139 
scale_1304();
function scale_1304() {
	window.obj1139_onLoad_runningActionsCount = obj1139_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1139";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1139';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_1304_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1304_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1304_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1304_completed() {
	setTimeout(function() {
		window.obj1139_onLoad_runningActionsCount = window.obj1139_onLoad_runningActionsCount - 1;
if (window.obj1139_onLoad_runningActionsCount < 0) {
	window.obj1139_onLoad_runningActionsCount = 0;
} else if (window.obj1139_onLoad_runningActionsCount == 0) {
	obj1139_onLoad_actionGroup2();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj1139 
(function () {
	window.obj1139_onLoad_runningActionsCount = obj1139_onLoad_runningActionsCount + 1;

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
	
	$("#obj1139").animate({ opacity: '1'}, 1200, easing, function() {
		setTimeout(function() {
			window.obj1139_onLoad_runningActionsCount = window.obj1139_onLoad_runningActionsCount - 1;
if (window.obj1139_onLoad_runningActionsCount < 0) {
	window.obj1139_onLoad_runningActionsCount = 0;
} else if (window.obj1139_onLoad_runningActionsCount == 0) {
	obj1139_onLoad_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj1139 
(function () {
	window.obj1139_onLoad_runningActionsCount = obj1139_onLoad_runningActionsCount + 1;

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
	
	$("#obj1139").animate({ opacity: '0'}, 1200, easing, function() {
		setTimeout(function() {
			window.obj1139_onLoad_runningActionsCount = window.obj1139_onLoad_runningActionsCount - 1;
if (window.obj1139_onLoad_runningActionsCount < 0) {
	window.obj1139_onLoad_runningActionsCount = 0;
} else if (window.obj1139_onLoad_runningActionsCount == 0) {
	obj1139_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj1139_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1139_onLoad_activeActionGroupIndex = -1;
		$("#obj1139").trigger("obj1139_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1139) {
				console.warn("de-queueing event obj1139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1139_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1139_onLoad();
function loop_obj1139_onLoad() {
	var loopCount = 0;
	window.obj1139_onLoad_loopCount = window.obj1139_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1139_onLoad_loopCount > loopCount) {
		window.obj1139_onLoad_loopCount = 0
		obj1139_onLoad_actionGroup3();
	} else {
		obj1139_onLoad_actionGroup0();
	}
}













};
obj1139_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1139_onLoad_activeActionGroupIndex = -1;
		$("#obj1139").trigger("obj1139_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1139) {
				console.warn("de-queueing event obj1139." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1139").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1139_onLoad_activeActionGroupIndex = 3;
	





















};
obj1335_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1335_onLoad_activeActionGroupIndex = -1;
		$("#obj1335").trigger("obj1335_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1335) {
				console.warn("de-queueing event obj1335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1335_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1335 
scale_1338();
function scale_1338() {
	window.obj1335_onLoad_runningActionsCount = obj1335_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1335";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1335';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
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
		scale_1338_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1338_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1338_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1338_completed() {
	setTimeout(function() {
		window.obj1335_onLoad_runningActionsCount = window.obj1335_onLoad_runningActionsCount - 1;
if (window.obj1335_onLoad_runningActionsCount < 0) {
	window.obj1335_onLoad_runningActionsCount = 0;
} else if (window.obj1335_onLoad_runningActionsCount == 0) {
	obj1335_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1335_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1335_onLoad_activeActionGroupIndex = -1;
		$("#obj1335").trigger("obj1335_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1335) {
				console.warn("de-queueing event obj1335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1335_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1335 
scale_1340();
function scale_1340() {
	window.obj1335_onLoad_runningActionsCount = obj1335_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1335";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1335';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '1.5';
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
		scale_1340_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1340_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1340_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1340_completed() {
	setTimeout(function() {
		window.obj1335_onLoad_runningActionsCount = window.obj1335_onLoad_runningActionsCount - 1;
if (window.obj1335_onLoad_runningActionsCount < 0) {
	window.obj1335_onLoad_runningActionsCount = 0;
} else if (window.obj1335_onLoad_runningActionsCount == 0) {
	obj1335_onLoad_actionGroup2();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj1335 
(function () {
	window.obj1335_onLoad_runningActionsCount = obj1335_onLoad_runningActionsCount + 1;

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
	
	$("#obj1335").animate({ opacity: '1'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj1335_onLoad_runningActionsCount = window.obj1335_onLoad_runningActionsCount - 1;
if (window.obj1335_onLoad_runningActionsCount < 0) {
	window.obj1335_onLoad_runningActionsCount = 0;
} else if (window.obj1335_onLoad_runningActionsCount == 0) {
	obj1335_onLoad_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj1335 
(function () {
	window.obj1335_onLoad_runningActionsCount = obj1335_onLoad_runningActionsCount + 1;

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
	
	$("#obj1335").animate({ opacity: '0'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj1335_onLoad_runningActionsCount = window.obj1335_onLoad_runningActionsCount - 1;
if (window.obj1335_onLoad_runningActionsCount < 0) {
	window.obj1335_onLoad_runningActionsCount = 0;
} else if (window.obj1335_onLoad_runningActionsCount == 0) {
	obj1335_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj1335_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1335_onLoad_activeActionGroupIndex = -1;
		$("#obj1335").trigger("obj1335_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1335) {
				console.warn("de-queueing event obj1335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1335_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1335_onLoad();
function loop_obj1335_onLoad() {
	var loopCount = 0;
	window.obj1335_onLoad_loopCount = window.obj1335_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1335_onLoad_loopCount > loopCount) {
		window.obj1335_onLoad_loopCount = 0
		obj1335_onLoad_actionGroup3();
	} else {
		obj1335_onLoad_actionGroup0();
	}
}













};
obj1335_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1335_onLoad_activeActionGroupIndex = -1;
		$("#obj1335").trigger("obj1335_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1335) {
				console.warn("de-queueing event obj1335." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1335").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1335_onLoad_activeActionGroupIndex = 3;
	





















};
obj1318_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1318_onLoad_activeActionGroupIndex = -1;
		$("#obj1318").trigger("obj1318_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1318) {
				console.warn("de-queueing event obj1318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1318_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1318 
scale_1321();
function scale_1321() {
	window.obj1318_onLoad_runningActionsCount = obj1318_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1318";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1318';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
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
		scale_1321_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1321_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1321_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1321_completed() {
	setTimeout(function() {
		window.obj1318_onLoad_runningActionsCount = window.obj1318_onLoad_runningActionsCount - 1;
if (window.obj1318_onLoad_runningActionsCount < 0) {
	window.obj1318_onLoad_runningActionsCount = 0;
} else if (window.obj1318_onLoad_runningActionsCount == 0) {
	obj1318_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1318_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1318_onLoad_activeActionGroupIndex = -1;
		$("#obj1318").trigger("obj1318_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1318) {
				console.warn("de-queueing event obj1318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1318_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1318 
scale_1323();
function scale_1323() {
	window.obj1318_onLoad_runningActionsCount = obj1318_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1318";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1318';
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
		scale_1323_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1323_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1323_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1323_completed() {
	setTimeout(function() {
		window.obj1318_onLoad_runningActionsCount = window.obj1318_onLoad_runningActionsCount - 1;
if (window.obj1318_onLoad_runningActionsCount < 0) {
	window.obj1318_onLoad_runningActionsCount = 0;
} else if (window.obj1318_onLoad_runningActionsCount == 0) {
	obj1318_onLoad_actionGroup2();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj1318 
(function () {
	window.obj1318_onLoad_runningActionsCount = obj1318_onLoad_runningActionsCount + 1;

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
	
	$("#obj1318").animate({ opacity: '1'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1318_onLoad_runningActionsCount = window.obj1318_onLoad_runningActionsCount - 1;
if (window.obj1318_onLoad_runningActionsCount < 0) {
	window.obj1318_onLoad_runningActionsCount = 0;
} else if (window.obj1318_onLoad_runningActionsCount == 0) {
	obj1318_onLoad_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj1318 
(function () {
	window.obj1318_onLoad_runningActionsCount = obj1318_onLoad_runningActionsCount + 1;

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
	
	$("#obj1318").animate({ opacity: '0'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1318_onLoad_runningActionsCount = window.obj1318_onLoad_runningActionsCount - 1;
if (window.obj1318_onLoad_runningActionsCount < 0) {
	window.obj1318_onLoad_runningActionsCount = 0;
} else if (window.obj1318_onLoad_runningActionsCount == 0) {
	obj1318_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj1318_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1318_onLoad_activeActionGroupIndex = -1;
		$("#obj1318").trigger("obj1318_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1318) {
				console.warn("de-queueing event obj1318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1318_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1318_onLoad();
function loop_obj1318_onLoad() {
	var loopCount = 0;
	window.obj1318_onLoad_loopCount = window.obj1318_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1318_onLoad_loopCount > loopCount) {
		window.obj1318_onLoad_loopCount = 0
		obj1318_onLoad_actionGroup3();
	} else {
		obj1318_onLoad_actionGroup0();
	}
}













};
obj1318_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1318_onLoad_activeActionGroupIndex = -1;
		$("#obj1318").trigger("obj1318_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1318) {
				console.warn("de-queueing event obj1318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1318_onLoad_activeActionGroupIndex = 3;
	





















};
obj1343_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1343_onLoad_activeActionGroupIndex = -1;
		$("#obj1343").trigger("obj1343_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1343) {
				console.warn("de-queueing event obj1343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1343_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1343 
scale_1346();
function scale_1346() {
	window.obj1343_onLoad_runningActionsCount = obj1343_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1343";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1343';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
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
		scale_1346_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1346_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1346_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1346_completed() {
	setTimeout(function() {
		window.obj1343_onLoad_runningActionsCount = window.obj1343_onLoad_runningActionsCount - 1;
if (window.obj1343_onLoad_runningActionsCount < 0) {
	window.obj1343_onLoad_runningActionsCount = 0;
} else if (window.obj1343_onLoad_runningActionsCount == 0) {
	obj1343_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1343_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1343_onLoad_activeActionGroupIndex = -1;
		$("#obj1343").trigger("obj1343_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1343) {
				console.warn("de-queueing event obj1343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1343_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1343 
scale_1348();
function scale_1348() {
	window.obj1343_onLoad_runningActionsCount = obj1343_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1343";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1343';
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
		scale_1348_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1348_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1348_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1348_completed() {
	setTimeout(function() {
		window.obj1343_onLoad_runningActionsCount = window.obj1343_onLoad_runningActionsCount - 1;
if (window.obj1343_onLoad_runningActionsCount < 0) {
	window.obj1343_onLoad_runningActionsCount = 0;
} else if (window.obj1343_onLoad_runningActionsCount == 0) {
	obj1343_onLoad_actionGroup2();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj1343 
(function () {
	window.obj1343_onLoad_runningActionsCount = obj1343_onLoad_runningActionsCount + 1;

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
	
	$("#obj1343").animate({ opacity: '1'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1343_onLoad_runningActionsCount = window.obj1343_onLoad_runningActionsCount - 1;
if (window.obj1343_onLoad_runningActionsCount < 0) {
	window.obj1343_onLoad_runningActionsCount = 0;
} else if (window.obj1343_onLoad_runningActionsCount == 0) {
	obj1343_onLoad_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj1343 
(function () {
	window.obj1343_onLoad_runningActionsCount = obj1343_onLoad_runningActionsCount + 1;

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
	
	$("#obj1343").animate({ opacity: '0'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1343_onLoad_runningActionsCount = window.obj1343_onLoad_runningActionsCount - 1;
if (window.obj1343_onLoad_runningActionsCount < 0) {
	window.obj1343_onLoad_runningActionsCount = 0;
} else if (window.obj1343_onLoad_runningActionsCount == 0) {
	obj1343_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj1343_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1343_onLoad_activeActionGroupIndex = -1;
		$("#obj1343").trigger("obj1343_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1343) {
				console.warn("de-queueing event obj1343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1343_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1343_onLoad();
function loop_obj1343_onLoad() {
	var loopCount = 0;
	window.obj1343_onLoad_loopCount = window.obj1343_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1343_onLoad_loopCount > loopCount) {
		window.obj1343_onLoad_loopCount = 0
		obj1343_onLoad_actionGroup3();
	} else {
		obj1343_onLoad_actionGroup0();
	}
}













};
obj1343_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1343_onLoad_activeActionGroupIndex = -1;
		$("#obj1343").trigger("obj1343_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1343) {
				console.warn("de-queueing event obj1343." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1343").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1343_onLoad_activeActionGroupIndex = 3;
	





















};
obj1326_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1326_onLoad_activeActionGroupIndex = -1;
		$("#obj1326").trigger("obj1326_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1326) {
				console.warn("de-queueing event obj1326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1326_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1326 
scale_1330();
function scale_1330() {
	window.obj1326_onLoad_runningActionsCount = obj1326_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1326";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1326';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
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
		scale_1330_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1330_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1330_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1330_completed() {
	setTimeout(function() {
		window.obj1326_onLoad_runningActionsCount = window.obj1326_onLoad_runningActionsCount - 1;
if (window.obj1326_onLoad_runningActionsCount < 0) {
	window.obj1326_onLoad_runningActionsCount = 0;
} else if (window.obj1326_onLoad_runningActionsCount == 0) {
	obj1326_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1326_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1326_onLoad_activeActionGroupIndex = -1;
		$("#obj1326").trigger("obj1326_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1326) {
				console.warn("de-queueing event obj1326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1326_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1326 
scale_1332();
function scale_1332() {
	window.obj1326_onLoad_runningActionsCount = obj1326_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1326";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1326';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_1332_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1332_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1332_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1332_completed() {
	setTimeout(function() {
		window.obj1326_onLoad_runningActionsCount = window.obj1326_onLoad_runningActionsCount - 1;
if (window.obj1326_onLoad_runningActionsCount < 0) {
	window.obj1326_onLoad_runningActionsCount = 0;
} else if (window.obj1326_onLoad_runningActionsCount == 0) {
	obj1326_onLoad_actionGroup2();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj1326 
(function () {
	window.obj1326_onLoad_runningActionsCount = obj1326_onLoad_runningActionsCount + 1;

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
	
	$("#obj1326").animate({ opacity: '1'}, 1200, easing, function() {
		setTimeout(function() {
			window.obj1326_onLoad_runningActionsCount = window.obj1326_onLoad_runningActionsCount - 1;
if (window.obj1326_onLoad_runningActionsCount < 0) {
	window.obj1326_onLoad_runningActionsCount = 0;
} else if (window.obj1326_onLoad_runningActionsCount == 0) {
	obj1326_onLoad_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj1326 
(function () {
	window.obj1326_onLoad_runningActionsCount = obj1326_onLoad_runningActionsCount + 1;

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
	
	$("#obj1326").animate({ opacity: '0'}, 1200, easing, function() {
		setTimeout(function() {
			window.obj1326_onLoad_runningActionsCount = window.obj1326_onLoad_runningActionsCount - 1;
if (window.obj1326_onLoad_runningActionsCount < 0) {
	window.obj1326_onLoad_runningActionsCount = 0;
} else if (window.obj1326_onLoad_runningActionsCount == 0) {
	obj1326_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj1326_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1326_onLoad_activeActionGroupIndex = -1;
		$("#obj1326").trigger("obj1326_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1326) {
				console.warn("de-queueing event obj1326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1326_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1326_onLoad();
function loop_obj1326_onLoad() {
	var loopCount = 0;
	window.obj1326_onLoad_loopCount = window.obj1326_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1326_onLoad_loopCount > loopCount) {
		window.obj1326_onLoad_loopCount = 0
		obj1326_onLoad_actionGroup3();
	} else {
		obj1326_onLoad_actionGroup0();
	}
}













};
obj1326_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1326_onLoad_activeActionGroupIndex = -1;
		$("#obj1326").trigger("obj1326_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1326) {
				console.warn("de-queueing event obj1326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1326_onLoad_activeActionGroupIndex = 3;
	





















};
obj1143_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1143_onLoad_activeActionGroupIndex = -1;
		$("#obj1143").trigger("obj1143_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1143) {
				console.warn("de-queueing event obj1143." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1143").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1143_onLoad_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj1143 
scale_1286();
function scale_1286() {
	window.obj1143_onLoad_runningActionsCount = obj1143_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1143";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1143';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.8';
	var scaleYValue = '0.8';
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
		scale_1286_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1286_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1286_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1286_completed() {
	setTimeout(function() {
		window.obj1143_onLoad_runningActionsCount = window.obj1143_onLoad_runningActionsCount - 1;
if (window.obj1143_onLoad_runningActionsCount < 0) {
	window.obj1143_onLoad_runningActionsCount = 0;
} else if (window.obj1143_onLoad_runningActionsCount == 0) {
	obj1143_onLoad_actionGroup1();
}
	}, 1);
}












};
obj1143_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1143_onLoad_activeActionGroupIndex = -1;
		$("#obj1143").trigger("obj1143_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1143) {
				console.warn("de-queueing event obj1143." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1143").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1143_onLoad_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj1143 
scale_1284();
function scale_1284() {
	window.obj1143_onLoad_runningActionsCount = obj1143_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj1143";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj1143';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1';
	var scaleYValue = '1';
	var effectDuration = '1.5';
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
		scale_1284_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1284_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1284_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1284_completed() {
	setTimeout(function() {
		window.obj1143_onLoad_runningActionsCount = window.obj1143_onLoad_runningActionsCount - 1;
if (window.obj1143_onLoad_runningActionsCount < 0) {
	window.obj1143_onLoad_runningActionsCount = 0;
} else if (window.obj1143_onLoad_runningActionsCount == 0) {
	obj1143_onLoad_actionGroup2();
}
	}, 1);
}












//	action: runJqueryAnimation
//	target: obj1143 
(function () {
	window.obj1143_onLoad_runningActionsCount = obj1143_onLoad_runningActionsCount + 1;

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
	
	$("#obj1143").animate({ opacity: '1'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj1143_onLoad_runningActionsCount = window.obj1143_onLoad_runningActionsCount - 1;
if (window.obj1143_onLoad_runningActionsCount < 0) {
	window.obj1143_onLoad_runningActionsCount = 0;
} else if (window.obj1143_onLoad_runningActionsCount == 0) {
	obj1143_onLoad_actionGroup2();
}
		}, 1);
	});
})();
//	action: runJqueryAnimation
//	target: obj1143 
(function () {
	window.obj1143_onLoad_runningActionsCount = obj1143_onLoad_runningActionsCount + 1;

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
	
	$("#obj1143").animate({ opacity: '0'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj1143_onLoad_runningActionsCount = window.obj1143_onLoad_runningActionsCount - 1;
if (window.obj1143_onLoad_runningActionsCount < 0) {
	window.obj1143_onLoad_runningActionsCount = 0;
} else if (window.obj1143_onLoad_runningActionsCount == 0) {
	obj1143_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj1143_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1143_onLoad_activeActionGroupIndex = -1;
		$("#obj1143").trigger("obj1143_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1143) {
				console.warn("de-queueing event obj1143." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1143").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1143_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1143_onLoad();
function loop_obj1143_onLoad() {
	var loopCount = 0;
	window.obj1143_onLoad_loopCount = window.obj1143_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1143_onLoad_loopCount > loopCount) {
		window.obj1143_onLoad_loopCount = 0
		obj1143_onLoad_actionGroup3();
	} else {
		obj1143_onLoad_actionGroup0();
	}
}













};
obj1143_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1143_onLoad_activeActionGroupIndex = -1;
		$("#obj1143").trigger("obj1143_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1143) {
				console.warn("de-queueing event obj1143." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1143").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1143_onLoad_activeActionGroupIndex = 3;
	





















};
obj1152_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1152_onLoad_activeActionGroupIndex = -1;
		$("#obj1152").trigger("obj1152_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1152) {
				console.warn("de-queueing event obj1152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1152_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1152 
move_1157();
function move_1157() {
	window.obj1152_onLoad_runningActionsCount = obj1152_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=20";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj1152_onLoad_runningActionsCount = window.obj1152_onLoad_runningActionsCount - 1;
if (window.obj1152_onLoad_runningActionsCount < 0) {
	window.obj1152_onLoad_runningActionsCount = 0;
} else if (window.obj1152_onLoad_runningActionsCount == 0) {
	obj1152_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1154 
move_1181();
function move_1181() {
	window.obj1152_onLoad_runningActionsCount = obj1152_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1154");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=20";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj1152_onLoad_runningActionsCount = window.obj1152_onLoad_runningActionsCount - 1;
if (window.obj1152_onLoad_runningActionsCount < 0) {
	window.obj1152_onLoad_runningActionsCount = 0;
} else if (window.obj1152_onLoad_runningActionsCount == 0) {
	obj1152_onLoad_actionGroup1();
}
		}, 1);
	});
}
//	action: move
//	target: obj1145 
move_1182();
function move_1182() {
	window.obj1152_onLoad_runningActionsCount = obj1152_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=20";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj1152_onLoad_runningActionsCount = window.obj1152_onLoad_runningActionsCount - 1;
if (window.obj1152_onLoad_runningActionsCount < 0) {
	window.obj1152_onLoad_runningActionsCount = 0;
} else if (window.obj1152_onLoad_runningActionsCount == 0) {
	obj1152_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj1152_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1152_onLoad_activeActionGroupIndex = -1;
		$("#obj1152").trigger("obj1152_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1152) {
				console.warn("de-queueing event obj1152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1152_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1152 
move_1158();
function move_1158() {
	window.obj1152_onLoad_runningActionsCount = obj1152_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1152");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-20";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj1152_onLoad_runningActionsCount = window.obj1152_onLoad_runningActionsCount - 1;
if (window.obj1152_onLoad_runningActionsCount < 0) {
	window.obj1152_onLoad_runningActionsCount = 0;
} else if (window.obj1152_onLoad_runningActionsCount == 0) {
	obj1152_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj1154 
move_1183();
function move_1183() {
	window.obj1152_onLoad_runningActionsCount = obj1152_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1154");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-20";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj1152_onLoad_runningActionsCount = window.obj1152_onLoad_runningActionsCount - 1;
if (window.obj1152_onLoad_runningActionsCount < 0) {
	window.obj1152_onLoad_runningActionsCount = 0;
} else if (window.obj1152_onLoad_runningActionsCount == 0) {
	obj1152_onLoad_actionGroup2();
}
		}, 1);
	});
}
//	action: move
//	target: obj1145 
move_1184();
function move_1184() {
	window.obj1152_onLoad_runningActionsCount = obj1152_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1145");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-20";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj1152_onLoad_runningActionsCount = window.obj1152_onLoad_runningActionsCount - 1;
if (window.obj1152_onLoad_runningActionsCount < 0) {
	window.obj1152_onLoad_runningActionsCount = 0;
} else if (window.obj1152_onLoad_runningActionsCount == 0) {
	obj1152_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj1152_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1152_onLoad_activeActionGroupIndex = -1;
		$("#obj1152").trigger("obj1152_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1152) {
				console.warn("de-queueing event obj1152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1152_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1152_onLoad();
function loop_obj1152_onLoad() {
	var loopCount = 0;
	window.obj1152_onLoad_loopCount = window.obj1152_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1152_onLoad_loopCount > loopCount) {
		window.obj1152_onLoad_loopCount = 0
		obj1152_onLoad_actionGroup3();
	} else {
		obj1152_onLoad_actionGroup0();
	}
}













};
obj1152_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1152_onLoad_activeActionGroupIndex = -1;
		$("#obj1152").trigger("obj1152_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1152) {
				console.warn("de-queueing event obj1152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1152_onLoad_activeActionGroupIndex = 3;
	





















};
obj1388_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1388_onLoad_activeActionGroupIndex = -1;
		$("#obj1388").trigger("obj1388_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1388) {
				console.warn("de-queueing event obj1388." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1388").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1388_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1388 
move_1411();
function move_1411() {
	window.obj1388_onLoad_runningActionsCount = obj1388_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1388");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 455;
	var moveY = 209;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 3000, easing, function() {
		setTimeout(function() {
			window.obj1388_onLoad_runningActionsCount = window.obj1388_onLoad_runningActionsCount - 1;
if (window.obj1388_onLoad_runningActionsCount < 0) {
	window.obj1388_onLoad_runningActionsCount = 0;
} else if (window.obj1388_onLoad_runningActionsCount == 0) {
	obj1388_onLoad_actionGroup1();
}
		}, 1);
	});
}



















//	action: runJqueryAnimation
//	target: obj1388 
(function () {
	window.obj1388_onLoad_runningActionsCount = obj1388_onLoad_runningActionsCount + 1;

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
	
	$("#obj1388").animate({ opacity: '0.2'}, 0, easing, function() {
		setTimeout(function() {
			window.obj1388_onLoad_runningActionsCount = window.obj1388_onLoad_runningActionsCount - 1;
if (window.obj1388_onLoad_runningActionsCount < 0) {
	window.obj1388_onLoad_runningActionsCount = 0;
} else if (window.obj1388_onLoad_runningActionsCount == 0) {
	obj1388_onLoad_actionGroup1();
}
		}, 1);
	});
})();
};
obj1388_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1388_onLoad_activeActionGroupIndex = -1;
		$("#obj1388").trigger("obj1388_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1388) {
				console.warn("de-queueing event obj1388." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1388").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1388_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj1388 
move_1404();
function move_1404() {
	window.obj1388_onLoad_runningActionsCount = obj1388_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj1388");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=-285";
	var moveY = "+=-184";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1388_onLoad_runningActionsCount = window.obj1388_onLoad_runningActionsCount - 1;
if (window.obj1388_onLoad_runningActionsCount < 0) {
	window.obj1388_onLoad_runningActionsCount = 0;
} else if (window.obj1388_onLoad_runningActionsCount == 0) {
	obj1388_onLoad_actionGroup2();
}
		}, 1);
	});
}



















//	action: runJqueryAnimation
//	target: obj1388 
(function () {
	window.obj1388_onLoad_runningActionsCount = obj1388_onLoad_runningActionsCount + 1;

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
	
	$("#obj1388").animate({ opacity: '0'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj1388_onLoad_runningActionsCount = window.obj1388_onLoad_runningActionsCount - 1;
if (window.obj1388_onLoad_runningActionsCount < 0) {
	window.obj1388_onLoad_runningActionsCount = 0;
} else if (window.obj1388_onLoad_runningActionsCount == 0) {
	obj1388_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj1388_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1388_onLoad_activeActionGroupIndex = -1;
		$("#obj1388").trigger("obj1388_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1388) {
				console.warn("de-queueing event obj1388." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1388").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1388_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj1388_onLoad();
function loop_obj1388_onLoad() {
	var loopCount = 0;
	window.obj1388_onLoad_loopCount = window.obj1388_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj1388_onLoad_loopCount > loopCount) {
		window.obj1388_onLoad_loopCount = 0
		obj1388_onLoad_actionGroup3();
	} else {
		obj1388_onLoad_actionGroup0();
	}
}













};
obj1388_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1388_onLoad_activeActionGroupIndex = -1;
		$("#obj1388").trigger("obj1388_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1388) {
				console.warn("de-queueing event obj1388." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1388").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1388_onLoad_activeActionGroupIndex = 3;
	





















};
obj941_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_onTouchDown_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_onTouchDown_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1388 
hide_1447();
function hide_1447() {
	var selector = "#obj1388";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj941_onTouchDown_runningActionsCount = obj941_onTouchDown_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 200;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj941_onTouchDown_runningActionsCount = window.obj941_onTouchDown_runningActionsCount - 1;
if (window.obj941_onTouchDown_runningActionsCount < 0) {
	window.obj941_onTouchDown_runningActionsCount = 0;
} else if (window.obj941_onTouchDown_runningActionsCount == 0) {
	obj941_onTouchDown_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1447(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj941_onTouchDown_runningActionsCount = window.obj941_onTouchDown_runningActionsCount - 1;
if (window.obj941_onTouchDown_runningActionsCount < 0) {
	window.obj941_onTouchDown_runningActionsCount = 0;
} else if (window.obj941_onTouchDown_runningActionsCount == 0) {
	obj941_onTouchDown_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}









//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj941");
//	action: dragDrop
//	target: obj941 
dragDrop_946();
function dragDrop_946() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj941_onTouchDown_runningActionsCount = obj941_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj941');
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
	var isBoundObject = true;
	var containerNode;
	if (isBoundObject) {
	  	containerNode = $('#obj959');
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
    	window.obj941_onTouchDown_runningActionsCount = window.obj941_onTouchDown_runningActionsCount - 1;
if (window.obj941_onTouchDown_runningActionsCount < 0) {
	window.obj941_onTouchDown_runningActionsCount = 0;
} else if (window.obj941_onTouchDown_runningActionsCount == 0) {
	obj941_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1143","#obj1326","#obj1343","#obj1318","#obj1335","#obj1139","#obj1141","#obj1310","#obj1351");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6","droppedInsideTargetActions_7","droppedInsideTargetActions_8","droppedInsideTargetActions_9") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_946 = false;
    	var dropped_id_946;
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
					dropped_946 = true;
					dropped_id_946 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_946) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj941").trigger('SCActionDragDrop946_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj941_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj941_onTouchDown_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj941_SCActionDragDrop946_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_SCActionDragDrop946_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_SCActionDragDrop946_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_SCActionDragDrop946_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj941 
move_969();
function move_969() {
	window.obj941_SCActionDragDrop946_droppedOutsideTargetActions_runningActionsCount = obj941_SCActionDragDrop946_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj941");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 455;
	var moveY = 209;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj941_SCActionDragDrop946_droppedOutsideTargetActions_runningActionsCount = window.obj941_SCActionDragDrop946_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj941_SCActionDragDrop946_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj941_SCActionDragDrop946_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj941_SCActionDragDrop946_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj941_SCActionDragDrop946_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj941_SCActionDragDrop946_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj941_SCActionDragDrop946_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_SCActionDragDrop946_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_SCActionDragDrop946_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj941_droppedInsideTargetActions_9_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_9_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_9_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj941 
move_1988();
function move_1988() {
	window.obj941_droppedInsideTargetActions_9_runningActionsCount = obj941_droppedInsideTargetActions_9_runningActionsCount + 1;

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
	var targetObject = $("#obj941");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 936;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj941_droppedInsideTargetActions_9_runningActionsCount = window.obj941_droppedInsideTargetActions_9_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_9_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_9_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_9_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_9_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj991 
runActionList_1989();
function runActionList_1989() {
	window.obj941_droppedInsideTargetActions_9_runningActionsCount = obj941_droppedInsideTargetActions_9_runningActionsCount + 1;
	$("#obj991").trigger('SCEventRun');
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_9_runningActionsCount = window.obj941_droppedInsideTargetActions_9_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_9_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_9_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_9_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_9_actionGroup1();
}		
	}, 1);
}



};
obj941_droppedInsideTargetActions_9_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_9_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_9_activeActionGroupIndex = 1;
	








//	action: wait
wait_2084();
function wait_2084() {
	window.obj941_droppedInsideTargetActions_9_runningActionsCount = obj941_droppedInsideTargetActions_9_runningActionsCount + 1;
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_9_runningActionsCount = window.obj941_droppedInsideTargetActions_9_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_9_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_9_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_9_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_9_actionGroup2();
}
	}, 5000);
}













};
obj941_droppedInsideTargetActions_9_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_9_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_9_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1351 
hide_2085();
function hide_2085() {
	var selector = "#obj1351";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj941_droppedInsideTargetActions_9_runningActionsCount = obj941_droppedInsideTargetActions_9_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj941_droppedInsideTargetActions_9_runningActionsCount = window.obj941_droppedInsideTargetActions_9_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_9_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_9_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_9_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_9_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2085(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj941_droppedInsideTargetActions_9_runningActionsCount = window.obj941_droppedInsideTargetActions_9_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_9_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_9_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_9_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_9_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj941_droppedInsideTargetActions_9_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_9_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_9_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_9_activeActionGroupIndex = 3;
	





















};
obj941_droppedInsideTargetActions_8_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_8_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_8_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj941 
move_1985();
function move_1985() {
	window.obj941_droppedInsideTargetActions_8_runningActionsCount = obj941_droppedInsideTargetActions_8_runningActionsCount + 1;

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
	var targetObject = $("#obj941");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 681;
	var moveY = 589;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj941_droppedInsideTargetActions_8_runningActionsCount = window.obj941_droppedInsideTargetActions_8_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_8_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_8_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_8_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_8_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj991 
runActionList_1986();
function runActionList_1986() {
	window.obj941_droppedInsideTargetActions_8_runningActionsCount = obj941_droppedInsideTargetActions_8_runningActionsCount + 1;
	$("#obj991").trigger('SCEventRun');
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_8_runningActionsCount = window.obj941_droppedInsideTargetActions_8_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_8_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_8_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_8_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_8_actionGroup1();
}		
	}, 1);
}



};
obj941_droppedInsideTargetActions_8_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_8_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_8_activeActionGroupIndex = 1;
	








//	action: wait
wait_2082();
function wait_2082() {
	window.obj941_droppedInsideTargetActions_8_runningActionsCount = obj941_droppedInsideTargetActions_8_runningActionsCount + 1;
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_8_runningActionsCount = window.obj941_droppedInsideTargetActions_8_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_8_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_8_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_8_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_8_actionGroup2();
}
	}, 5000);
}













};
obj941_droppedInsideTargetActions_8_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_8_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_8_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1310 
hide_2083();
function hide_2083() {
	var selector = "#obj1310";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj941_droppedInsideTargetActions_8_runningActionsCount = obj941_droppedInsideTargetActions_8_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj941_droppedInsideTargetActions_8_runningActionsCount = window.obj941_droppedInsideTargetActions_8_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_8_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_8_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_8_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_8_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2083(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj941_droppedInsideTargetActions_8_runningActionsCount = window.obj941_droppedInsideTargetActions_8_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_8_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_8_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_8_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_8_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj941_droppedInsideTargetActions_8_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_8_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_8_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_8_activeActionGroupIndex = 3;
	





















};
obj941_droppedInsideTargetActions_7_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_7_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_7_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj941 
move_1982();
function move_1982() {
	window.obj941_droppedInsideTargetActions_7_runningActionsCount = obj941_droppedInsideTargetActions_7_runningActionsCount + 1;

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
	var targetObject = $("#obj941");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 393;
	var moveY = 522;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj941_droppedInsideTargetActions_7_runningActionsCount = window.obj941_droppedInsideTargetActions_7_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_7_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_7_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_7_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_7_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj991 
runActionList_1983();
function runActionList_1983() {
	window.obj941_droppedInsideTargetActions_7_runningActionsCount = obj941_droppedInsideTargetActions_7_runningActionsCount + 1;
	$("#obj991").trigger('SCEventRun');
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_7_runningActionsCount = window.obj941_droppedInsideTargetActions_7_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_7_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_7_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_7_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_7_actionGroup1();
}		
	}, 1);
}



};
obj941_droppedInsideTargetActions_7_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_7_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_7_activeActionGroupIndex = 1;
	








//	action: wait
wait_2080();
function wait_2080() {
	window.obj941_droppedInsideTargetActions_7_runningActionsCount = obj941_droppedInsideTargetActions_7_runningActionsCount + 1;
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_7_runningActionsCount = window.obj941_droppedInsideTargetActions_7_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_7_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_7_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_7_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_7_actionGroup2();
}
	}, 5000);
}













};
obj941_droppedInsideTargetActions_7_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_7_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_7_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1141 
hide_2081();
function hide_2081() {
	var selector = "#obj1141";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj941_droppedInsideTargetActions_7_runningActionsCount = obj941_droppedInsideTargetActions_7_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj941_droppedInsideTargetActions_7_runningActionsCount = window.obj941_droppedInsideTargetActions_7_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_7_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_7_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_7_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_7_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2081(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj941_droppedInsideTargetActions_7_runningActionsCount = window.obj941_droppedInsideTargetActions_7_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_7_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_7_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_7_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_7_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj941_droppedInsideTargetActions_7_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_7_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_7_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_7_activeActionGroupIndex = 3;
	





















};
obj941_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj941 
move_1979();
function move_1979() {
	window.obj941_droppedInsideTargetActions_6_runningActionsCount = obj941_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj941");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 117;
	var moveY = 601;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj941_droppedInsideTargetActions_6_runningActionsCount = window.obj941_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_6_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj991 
runActionList_1980();
function runActionList_1980() {
	window.obj941_droppedInsideTargetActions_6_runningActionsCount = obj941_droppedInsideTargetActions_6_runningActionsCount + 1;
	$("#obj991").trigger('SCEventRun');
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_6_runningActionsCount = window.obj941_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_6_actionGroup1();
}		
	}, 1);
}



};
obj941_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	








//	action: wait
wait_2078();
function wait_2078() {
	window.obj941_droppedInsideTargetActions_6_runningActionsCount = obj941_droppedInsideTargetActions_6_runningActionsCount + 1;
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_6_runningActionsCount = window.obj941_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_6_actionGroup2();
}
	}, 5000);
}













};
obj941_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1139 
hide_2079();
function hide_2079() {
	var selector = "#obj1139";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj941_droppedInsideTargetActions_6_runningActionsCount = obj941_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj941_droppedInsideTargetActions_6_runningActionsCount = window.obj941_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2079(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj941_droppedInsideTargetActions_6_runningActionsCount = window.obj941_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_6_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj941_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	





















};
obj941_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj941 
move_1976();
function move_1976() {
	window.obj941_droppedInsideTargetActions_5_runningActionsCount = obj941_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj941");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 945;
	var moveY = 325;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj941_droppedInsideTargetActions_5_runningActionsCount = window.obj941_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_5_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj991 
runActionList_1977();
function runActionList_1977() {
	window.obj941_droppedInsideTargetActions_5_runningActionsCount = obj941_droppedInsideTargetActions_5_runningActionsCount + 1;
	$("#obj991").trigger('SCEventRun');
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_5_runningActionsCount = window.obj941_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_5_actionGroup1();
}		
	}, 1);
}



};
obj941_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	








//	action: wait
wait_2076();
function wait_2076() {
	window.obj941_droppedInsideTargetActions_5_runningActionsCount = obj941_droppedInsideTargetActions_5_runningActionsCount + 1;
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_5_runningActionsCount = window.obj941_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_5_actionGroup2();
}
	}, 5000);
}













};
obj941_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1335 
hide_2077();
function hide_2077() {
	var selector = "#obj1335";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj941_droppedInsideTargetActions_5_runningActionsCount = obj941_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj941_droppedInsideTargetActions_5_runningActionsCount = window.obj941_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2077(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj941_droppedInsideTargetActions_5_runningActionsCount = window.obj941_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj941_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	





















};
obj941_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj941 
move_1973();
function move_1973() {
	window.obj941_droppedInsideTargetActions_4_runningActionsCount = obj941_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj941");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 232;
	var moveY = 275;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj941_droppedInsideTargetActions_4_runningActionsCount = window.obj941_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_4_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj991 
runActionList_1974();
function runActionList_1974() {
	window.obj941_droppedInsideTargetActions_4_runningActionsCount = obj941_droppedInsideTargetActions_4_runningActionsCount + 1;
	$("#obj991").trigger('SCEventRun');
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_4_runningActionsCount = window.obj941_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_4_actionGroup1();
}		
	}, 1);
}



};
obj941_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	








//	action: wait
wait_2074();
function wait_2074() {
	window.obj941_droppedInsideTargetActions_4_runningActionsCount = obj941_droppedInsideTargetActions_4_runningActionsCount + 1;
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_4_runningActionsCount = window.obj941_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_4_actionGroup2();
}
	}, 5000);
}













};
obj941_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1318 
hide_2075();
function hide_2075() {
	var selector = "#obj1318";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj941_droppedInsideTargetActions_4_runningActionsCount = obj941_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj941_droppedInsideTargetActions_4_runningActionsCount = window.obj941_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2075(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj941_droppedInsideTargetActions_4_runningActionsCount = window.obj941_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj941_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	





















};
obj941_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj941 
move_1370();
function move_1370() {
	window.obj941_droppedInsideTargetActions_3_runningActionsCount = obj941_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj941");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 898;
	var moveY = 50;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj941_droppedInsideTargetActions_3_runningActionsCount = window.obj941_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_3_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj991 
runActionList_1371();
function runActionList_1371() {
	window.obj941_droppedInsideTargetActions_3_runningActionsCount = obj941_droppedInsideTargetActions_3_runningActionsCount + 1;
	$("#obj991").trigger('SCEventRun');
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_3_runningActionsCount = window.obj941_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_3_actionGroup1();
}		
	}, 1);
}



};
obj941_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	








//	action: wait
wait_2072();
function wait_2072() {
	window.obj941_droppedInsideTargetActions_3_runningActionsCount = obj941_droppedInsideTargetActions_3_runningActionsCount + 1;
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_3_runningActionsCount = window.obj941_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_3_actionGroup2();
}
	}, 5000);
}













};
obj941_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1343 
hide_2073();
function hide_2073() {
	var selector = "#obj1343";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj941_droppedInsideTargetActions_3_runningActionsCount = obj941_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj941_droppedInsideTargetActions_3_runningActionsCount = window.obj941_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2073(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj941_droppedInsideTargetActions_3_runningActionsCount = window.obj941_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj941_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	





















};
obj941_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj941 
move_1368();
function move_1368() {
	window.obj941_droppedInsideTargetActions_2_runningActionsCount = obj941_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj941");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 611;
	var moveY = 118;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj941_droppedInsideTargetActions_2_runningActionsCount = window.obj941_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_2_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj991 
runActionList_1369();
function runActionList_1369() {
	window.obj941_droppedInsideTargetActions_2_runningActionsCount = obj941_droppedInsideTargetActions_2_runningActionsCount + 1;
	$("#obj991").trigger('SCEventRun');
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_2_runningActionsCount = window.obj941_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_2_actionGroup1();
}		
	}, 1);
}



};
obj941_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	








//	action: wait
wait_2070();
function wait_2070() {
	window.obj941_droppedInsideTargetActions_2_runningActionsCount = obj941_droppedInsideTargetActions_2_runningActionsCount + 1;
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_2_runningActionsCount = window.obj941_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_2_actionGroup2();
}
	}, 5000);
}













};
obj941_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1326 
hide_2071();
function hide_2071() {
	var selector = "#obj1326";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj941_droppedInsideTargetActions_2_runningActionsCount = obj941_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj941_droppedInsideTargetActions_2_runningActionsCount = window.obj941_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2071(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj941_droppedInsideTargetActions_2_runningActionsCount = window.obj941_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj941_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	





















};
obj941_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj941 
move_1035();
function move_1035() {
	window.obj941_droppedInsideTargetActions_runningActionsCount = obj941_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj941");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 170;
	var moveY = 43;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj941_droppedInsideTargetActions_runningActionsCount = window.obj941_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_actionGroup1();
}
		}, 1);
	});
}
















//	action: run action list container
//	target: obj991 
runActionList_999();
function runActionList_999() {
	window.obj941_droppedInsideTargetActions_runningActionsCount = obj941_droppedInsideTargetActions_runningActionsCount + 1;
	$("#obj991").trigger('SCEventRun');
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_runningActionsCount = window.obj941_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_actionGroup1();
}		
	}, 1);
}



};
obj941_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_activeActionGroupIndex = 1;
	








//	action: wait
wait_2067();
function wait_2067() {
	window.obj941_droppedInsideTargetActions_runningActionsCount = obj941_droppedInsideTargetActions_runningActionsCount + 1;
	setTimeout(function() {
		window.obj941_droppedInsideTargetActions_runningActionsCount = window.obj941_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_actionGroup2();
}
	}, 5000);
}













};
obj941_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj1143 
hide_2068();
function hide_2068() {
	var selector = "#obj1143";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj941_droppedInsideTargetActions_runningActionsCount = obj941_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj941_droppedInsideTargetActions_runningActionsCount = window.obj941_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2068(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj941_droppedInsideTargetActions_runningActionsCount = window.obj941_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj941_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj941_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj941_droppedInsideTargetActions_runningActionsCount == 0) {
	obj941_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj941_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj941_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj941").trigger("obj941_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 941) {
				console.warn("de-queueing event obj941." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj941").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj941_droppedInsideTargetActions_activeActionGroupIndex = 3;
	





















};
obj976_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj976_SCEventRun_activeActionGroupIndex = -1;
		$("#obj976").trigger("obj976_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 976) {
				console.warn("de-queueing event obj976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj976_SCEventRun_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj941 
scale_978();
function scale_978() {
	window.obj976_SCEventRun_runningActionsCount = obj976_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj941";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj941';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.35';
	var scaleYValue = '0.35';
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
		scale_978_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_978_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_978_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_978_completed() {
	setTimeout(function() {
		window.obj976_SCEventRun_runningActionsCount = window.obj976_SCEventRun_runningActionsCount - 1;
if (window.obj976_SCEventRun_runningActionsCount < 0) {
	window.obj976_SCEventRun_runningActionsCount = 0;
} else if (window.obj976_SCEventRun_runningActionsCount == 0) {
	obj976_SCEventRun_actionGroup1();
}
	}, 1);
}












};
obj976_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj976_SCEventRun_activeActionGroupIndex = -1;
		$("#obj976").trigger("obj976_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 976) {
				console.warn("de-queueing event obj976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj976_SCEventRun_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj941 
scale_979();
function scale_979() {
	window.obj976_SCEventRun_runningActionsCount = obj976_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj941";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj941';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.3';
	var scaleYValue = '0.3';
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
		scale_979_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_979_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_979_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_979_completed() {
	setTimeout(function() {
		window.obj976_SCEventRun_runningActionsCount = window.obj976_SCEventRun_runningActionsCount - 1;
if (window.obj976_SCEventRun_runningActionsCount < 0) {
	window.obj976_SCEventRun_runningActionsCount = 0;
} else if (window.obj976_SCEventRun_runningActionsCount == 0) {
	obj976_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj976_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj976_SCEventRun_activeActionGroupIndex = -1;
		$("#obj976").trigger("obj976_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 976) {
				console.warn("de-queueing event obj976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj976_SCEventRun_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj976_SCEventRun();
function loop_obj976_SCEventRun() {
	var loopCount = 1;
	window.obj976_SCEventRun_loopCount = window.obj976_SCEventRun_loopCount + 1;
	if (loopCount != 0 && window.obj976_SCEventRun_loopCount > loopCount) {
		window.obj976_SCEventRun_loopCount = 0
		obj976_SCEventRun_actionGroup3();
	} else {
		obj976_SCEventRun_actionGroup0();
	}
}













};
obj976_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj976_SCEventRun_activeActionGroupIndex = -1;
		$("#obj976").trigger("obj976_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 976) {
				console.warn("de-queueing event obj976." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj976").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj976_SCEventRun_activeActionGroupIndex = 3;
	





















};
obj991_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj991_SCEventRun_activeActionGroupIndex = -1;
		$("#obj991").trigger("obj991_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 991) {
				console.warn("de-queueing event obj991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj991_SCEventRun_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj1954
(function(){
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;

	var selector = "#obj1954";
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
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup1();
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
				window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj991_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj991_SCEventRun_activeActionGroupIndex = -1;
		$("#obj991").trigger("obj991_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 991) {
				console.warn("de-queueing event obj991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj991_SCEventRun_activeActionGroupIndex = 1;
	









//	action: scale
//	target: obj941 
scale_1056();
function scale_1056() {
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj941";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj941';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '1.5';
	var scaleYValue = '1.5';
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
		scale_1056_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1056_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_1056_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_1056_completed() {
	setTimeout(function() {
		window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup2();
}
	}, 1);
}












};
obj991_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj991_SCEventRun_activeActionGroupIndex = -1;
		$("#obj991").trigger("obj991_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 991) {
				console.warn("de-queueing event obj991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj991_SCEventRun_activeActionGroupIndex = 2;
	









//	action: scale
//	target: obj941 
scale_994();
function scale_994() {
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj941";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj941';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.3';
	var scaleYValue = '0.3';
	var effectDuration = '0.3';
	var effectEasing = 'ease-in';
	var effectRepeat = 0;
	var addSum = 1;
	var howManyTimes = effectRepeat + addSum; 
	var effectDurationMS = effectDuration * 1000;
	// translate PubCoder TimingFunction value to one accepted by transition function
	// other values: linear, ease, in, out, in-out + more others if interested
	var scaleMode = "";
	var isInfinite = false;
	if (isInfinite) { 
		scale_994_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_994_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_994_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_994_completed() {
	setTimeout(function() {
		window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup3();
}
	}, 1);
}



//	action: playAudio
//	target: obj1990 
playAudio_1992();
function playAudio_1992() {
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;
	var myAudio = $("#obj1990")[0];
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
		    window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup3();
}
	}
}









};
obj991_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj991_SCEventRun_activeActionGroupIndex = -1;
		$("#obj991").trigger("obj991_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 991) {
				console.warn("de-queueing event obj991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj991_SCEventRun_activeActionGroupIndex = 3;
	


















//	action: run action list container
//	target: obj976 
runActionList_995();
function runActionList_995() {
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;
	$("#obj976").trigger('SCEventRun');
	setTimeout(function() {
		window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup4();
}		
	}, 1);
}



};
obj991_SCEventRun_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj991_SCEventRun_activeActionGroupIndex = -1;
		$("#obj991").trigger("obj991_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 991) {
				console.warn("de-queueing event obj991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj991_SCEventRun_activeActionGroupIndex = 4;
	





















//	action: runJqueryAnimation
//	target: obj941 
(function () {
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;

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
	
	$("#obj941").animate({ opacity: '0.4'}, 0, easing, function() {
		setTimeout(function() {
			window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup5();
}
		}, 1);
	});
})();
};
obj991_SCEventRun_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj991_SCEventRun_activeActionGroupIndex = -1;
		$("#obj991").trigger("obj991_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 991) {
				console.warn("de-queueing event obj991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj991_SCEventRun_activeActionGroupIndex = 5;
	








//	action: wait
wait_996();
function wait_996() {
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;
	setTimeout(function() {
		window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup6();
}
	}, 3600);
}













};
obj991_SCEventRun_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj991_SCEventRun_activeActionGroupIndex = -1;
		$("#obj991").trigger("obj991_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 991) {
				console.warn("de-queueing event obj991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj991_SCEventRun_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj2024 
playAudio_2026();
function playAudio_2026() {
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;
	var myAudio = $("#obj2024")[0];
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
		    window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup7();
}
	}
}









};
obj991_SCEventRun_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj991_SCEventRun_activeActionGroupIndex = -1;
		$("#obj991").trigger("obj991_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 991) {
				console.warn("de-queueing event obj991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj991_SCEventRun_activeActionGroupIndex = 7;
	








//	action: wait
wait_2027();
function wait_2027() {
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;
	setTimeout(function() {
		window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup8();
}
	}, 400);
}













};
obj991_SCEventRun_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj991_SCEventRun_activeActionGroupIndex = -1;
		$("#obj991").trigger("obj991_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 991) {
				console.warn("de-queueing event obj991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj991_SCEventRun_activeActionGroupIndex = 8;
	





















//	action: runJqueryAnimation
//	target: obj941 
(function () {
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;

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
	
	$("#obj941").animate({ opacity: '1'}, 0, easing, function() {
		setTimeout(function() {
			window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup9();
}
		}, 1);
	});
})();
};
obj991_SCEventRun_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj991_SCEventRun_activeActionGroupIndex = -1;
		$("#obj991").trigger("obj991_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 991) {
				console.warn("de-queueing event obj991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj991_SCEventRun_activeActionGroupIndex = 9;
	


//	action: move
//	target: obj941 
move_997();
function move_997() {
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;

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
	var targetObject = $("#obj941");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 455;
	var moveY = 209;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 600, easing, function() {
		setTimeout(function() {
			window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup10();
}
		}, 1);
	});
}







//	action: scale
//	target: obj941 
scale_998();
function scale_998() {
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;
	
	var targetObjectId = "#obj941";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj941';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
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
		scale_998_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_998_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_998_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_998_completed() {
	setTimeout(function() {
		window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup10();
}
	}, 1);
}







//	action: increment counter
//	target: obj2086 
incrementCounter_2098();
function incrementCounter_2098() {
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;

	var oldValue = obj2086_counterValue;
	obj2086_counterValue = obj2086_counterValue + 1;
	if (! obj2086_counterCanExceedTargetValue && obj2086_counterValue > obj2086_counterTargetValue) {
		obj2086_counterValue = obj2086_counterTargetValue;
	}
	if (oldValue != obj2086_counterValue) {
		$("#obj2086").trigger('SCEventCounterValueChange');
		$("#obj2086").trigger('SCEventCounterIncrease');
		if (obj2086_counterValue == obj2086_counterTargetValue)
			$("#obj2086").trigger('SCEventCounterReachedTargetValue');
	}
	setTimeout(function() { window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup10();
} }, 1);
}





};
obj991_SCEventRun_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj991_SCEventRun_activeActionGroupIndex = -1;
		$("#obj991").trigger("obj991_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 991) {
				console.warn("de-queueing event obj991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj991_SCEventRun_activeActionGroupIndex = 10;
	

//	action: hide
//	selector: obj#obj1954 
hide_1959();
function hide_1959() {
	var selector = "#obj1954";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj991_SCEventRun_runningActionsCount = obj991_SCEventRun_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup11();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1959(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj991_SCEventRun_runningActionsCount = window.obj991_SCEventRun_runningActionsCount - 1;
if (window.obj991_SCEventRun_runningActionsCount < 0) {
	window.obj991_SCEventRun_runningActionsCount = 0;
} else if (window.obj991_SCEventRun_runningActionsCount == 0) {
	obj991_SCEventRun_actionGroup11();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj991_SCEventRun_actionGroup11 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj991_SCEventRun_activeActionGroupIndex = -1;
		$("#obj991").trigger("obj991_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 991) {
				console.warn("de-queueing event obj991." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj991").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj991_SCEventRun_activeActionGroupIndex = 11;
	





















};
obj1954_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1954_onTap_activeActionGroupIndex = -1;
		$("#obj1954").trigger("obj1954_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1954) {
				console.warn("de-queueing event obj1954." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1954").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1954_onTap_activeActionGroupIndex = 0;
	








//	action: wait
wait_1956();
function wait_1956() {
	window.obj1954_onTap_runningActionsCount = obj1954_onTap_runningActionsCount + 1;
	setTimeout(function() {
		window.obj1954_onTap_runningActionsCount = window.obj1954_onTap_runningActionsCount - 1;
if (window.obj1954_onTap_runningActionsCount < 0) {
	window.obj1954_onTap_runningActionsCount = 0;
} else if (window.obj1954_onTap_runningActionsCount == 0) {
	obj1954_onTap_actionGroup1();
}
	}, 100);
}













};
obj1954_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1954_onTap_activeActionGroupIndex = -1;
		$("#obj1954").trigger("obj1954_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1954) {
				console.warn("de-queueing event obj1954." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1954").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1954_onTap_activeActionGroupIndex = 1;
	





















};
obj3261_onAppear_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3261_onAppear_activeActionGroupIndex = -1;
		$("#obj3261").trigger("obj3261_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3261) {
				console.warn("de-queueing event obj3261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3261_onAppear_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3261 
move_3264();
function move_3264() {
	window.obj3261_onAppear_runningActionsCount = obj3261_onAppear_runningActionsCount + 1;

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
	var targetObject = $("#obj3261");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=100";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 0, easing, function() {
		setTimeout(function() {
			window.obj3261_onAppear_runningActionsCount = window.obj3261_onAppear_runningActionsCount - 1;
if (window.obj3261_onAppear_runningActionsCount < 0) {
	window.obj3261_onAppear_runningActionsCount = 0;
} else if (window.obj3261_onAppear_runningActionsCount == 0) {
	obj3261_onAppear_actionGroup1();
}
		}, 1);
	});
}



















};
obj3261_onAppear_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3261_onAppear_activeActionGroupIndex = -1;
		$("#obj3261").trigger("obj3261_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3261) {
				console.warn("de-queueing event obj3261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3261_onAppear_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj3261 
move_3265();
function move_3265() {
	window.obj3261_onAppear_runningActionsCount = obj3261_onAppear_runningActionsCount + 1;

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
	var targetObject = $("#obj3261");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = "+=0";
	var moveY = "+=0";
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 1000, easing, function() {
		setTimeout(function() {
			window.obj3261_onAppear_runningActionsCount = window.obj3261_onAppear_runningActionsCount - 1;
if (window.obj3261_onAppear_runningActionsCount < 0) {
	window.obj3261_onAppear_runningActionsCount = 0;
} else if (window.obj3261_onAppear_runningActionsCount == 0) {
	obj3261_onAppear_actionGroup2();
}
		}, 1);
	});
}



















};
obj3261_onAppear_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3261_onAppear_activeActionGroupIndex = -1;
		$("#obj3261").trigger("obj3261_onAppear_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3261) {
				console.warn("de-queueing event obj3261." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3261").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3261_onAppear_activeActionGroupIndex = 2;
	





















};
obj2150_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2150_onLoad_activeActionGroupIndex = -1;
		$("#obj2150").trigger("obj2150_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2150) {
				console.warn("de-queueing event obj2150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2150_onLoad_activeActionGroupIndex = 0;
	





















//	action: runJqueryAnimation
//	target: obj2150 
(function () {
	window.obj2150_onLoad_runningActionsCount = obj2150_onLoad_runningActionsCount + 1;

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
	
	$("#obj2150").animate({ opacity: '1'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj2150_onLoad_runningActionsCount = window.obj2150_onLoad_runningActionsCount - 1;
if (window.obj2150_onLoad_runningActionsCount < 0) {
	window.obj2150_onLoad_runningActionsCount = 0;
} else if (window.obj2150_onLoad_runningActionsCount == 0) {
	obj2150_onLoad_actionGroup1();
}
		}, 1);
	});
})();
};
obj2150_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2150_onLoad_activeActionGroupIndex = -1;
		$("#obj2150").trigger("obj2150_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2150) {
				console.warn("de-queueing event obj2150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2150_onLoad_activeActionGroupIndex = 1;
	





















//	action: runJqueryAnimation
//	target: obj2150 
(function () {
	window.obj2150_onLoad_runningActionsCount = obj2150_onLoad_runningActionsCount + 1;

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
	
	$("#obj2150").animate({ opacity: '0.1'}, 1500, easing, function() {
		setTimeout(function() {
			window.obj2150_onLoad_runningActionsCount = window.obj2150_onLoad_runningActionsCount - 1;
if (window.obj2150_onLoad_runningActionsCount < 0) {
	window.obj2150_onLoad_runningActionsCount = 0;
} else if (window.obj2150_onLoad_runningActionsCount == 0) {
	obj2150_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj2150_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2150_onLoad_activeActionGroupIndex = -1;
		$("#obj2150").trigger("obj2150_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2150) {
				console.warn("de-queueing event obj2150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2150_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2150_onLoad();
function loop_obj2150_onLoad() {
	var loopCount = 0;
	window.obj2150_onLoad_loopCount = window.obj2150_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2150_onLoad_loopCount > loopCount) {
		window.obj2150_onLoad_loopCount = 0
		obj2150_onLoad_actionGroup3();
	} else {
		obj2150_onLoad_actionGroup0();
	}
}













};
obj2150_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2150_onLoad_activeActionGroupIndex = -1;
		$("#obj2150").trigger("obj2150_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2150) {
				console.warn("de-queueing event obj2150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2150_onLoad_activeActionGroupIndex = 3;
	





















};
obj2151_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2151_onLoad_activeActionGroupIndex = -1;
		$("#obj2151").trigger("obj2151_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2151) {
				console.warn("de-queueing event obj2151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2151_onLoad_activeActionGroupIndex = 0;
	





















//	action: runJqueryAnimation
//	target: obj2151 
(function () {
	window.obj2151_onLoad_runningActionsCount = obj2151_onLoad_runningActionsCount + 1;

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
	
	$("#obj2151").animate({ opacity: '0.1'}, 850, easing, function() {
		setTimeout(function() {
			window.obj2151_onLoad_runningActionsCount = window.obj2151_onLoad_runningActionsCount - 1;
if (window.obj2151_onLoad_runningActionsCount < 0) {
	window.obj2151_onLoad_runningActionsCount = 0;
} else if (window.obj2151_onLoad_runningActionsCount == 0) {
	obj2151_onLoad_actionGroup1();
}
		}, 1);
	});
})();
};
obj2151_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2151_onLoad_activeActionGroupIndex = -1;
		$("#obj2151").trigger("obj2151_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2151) {
				console.warn("de-queueing event obj2151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2151_onLoad_activeActionGroupIndex = 1;
	





















//	action: runJqueryAnimation
//	target: obj2151 
(function () {
	window.obj2151_onLoad_runningActionsCount = obj2151_onLoad_runningActionsCount + 1;

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
	
	$("#obj2151").animate({ opacity: '1'}, 850, easing, function() {
		setTimeout(function() {
			window.obj2151_onLoad_runningActionsCount = window.obj2151_onLoad_runningActionsCount - 1;
if (window.obj2151_onLoad_runningActionsCount < 0) {
	window.obj2151_onLoad_runningActionsCount = 0;
} else if (window.obj2151_onLoad_runningActionsCount == 0) {
	obj2151_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj2151_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2151_onLoad_activeActionGroupIndex = -1;
		$("#obj2151").trigger("obj2151_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2151) {
				console.warn("de-queueing event obj2151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2151_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2151_onLoad();
function loop_obj2151_onLoad() {
	var loopCount = 0;
	window.obj2151_onLoad_loopCount = window.obj2151_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2151_onLoad_loopCount > loopCount) {
		window.obj2151_onLoad_loopCount = 0
		obj2151_onLoad_actionGroup3();
	} else {
		obj2151_onLoad_actionGroup0();
	}
}













};
obj2151_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2151_onLoad_activeActionGroupIndex = -1;
		$("#obj2151").trigger("obj2151_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2151) {
				console.warn("de-queueing event obj2151." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2151").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2151_onLoad_activeActionGroupIndex = 3;
	





















};
obj2152_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2152_onLoad_activeActionGroupIndex = -1;
		$("#obj2152").trigger("obj2152_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2152) {
				console.warn("de-queueing event obj2152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2152_onLoad_activeActionGroupIndex = 0;
	





















//	action: runJqueryAnimation
//	target: obj2152 
(function () {
	window.obj2152_onLoad_runningActionsCount = obj2152_onLoad_runningActionsCount + 1;

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
	
	$("#obj2152").animate({ opacity: '0.1'}, 950, easing, function() {
		setTimeout(function() {
			window.obj2152_onLoad_runningActionsCount = window.obj2152_onLoad_runningActionsCount - 1;
if (window.obj2152_onLoad_runningActionsCount < 0) {
	window.obj2152_onLoad_runningActionsCount = 0;
} else if (window.obj2152_onLoad_runningActionsCount == 0) {
	obj2152_onLoad_actionGroup1();
}
		}, 1);
	});
})();
};
obj2152_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2152_onLoad_activeActionGroupIndex = -1;
		$("#obj2152").trigger("obj2152_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2152) {
				console.warn("de-queueing event obj2152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2152_onLoad_activeActionGroupIndex = 1;
	





















//	action: runJqueryAnimation
//	target: obj2152 
(function () {
	window.obj2152_onLoad_runningActionsCount = obj2152_onLoad_runningActionsCount + 1;

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
	
	$("#obj2152").animate({ opacity: '1'}, 950, easing, function() {
		setTimeout(function() {
			window.obj2152_onLoad_runningActionsCount = window.obj2152_onLoad_runningActionsCount - 1;
if (window.obj2152_onLoad_runningActionsCount < 0) {
	window.obj2152_onLoad_runningActionsCount = 0;
} else if (window.obj2152_onLoad_runningActionsCount == 0) {
	obj2152_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj2152_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2152_onLoad_activeActionGroupIndex = -1;
		$("#obj2152").trigger("obj2152_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2152) {
				console.warn("de-queueing event obj2152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2152_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2152_onLoad();
function loop_obj2152_onLoad() {
	var loopCount = 0;
	window.obj2152_onLoad_loopCount = window.obj2152_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2152_onLoad_loopCount > loopCount) {
		window.obj2152_onLoad_loopCount = 0
		obj2152_onLoad_actionGroup3();
	} else {
		obj2152_onLoad_actionGroup0();
	}
}













};
obj2152_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2152_onLoad_activeActionGroupIndex = -1;
		$("#obj2152").trigger("obj2152_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2152) {
				console.warn("de-queueing event obj2152." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2152").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2152_onLoad_activeActionGroupIndex = 3;
	





















};
obj2147_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2147_onLoad_activeActionGroupIndex = -1;
		$("#obj2147").trigger("obj2147_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2147) {
				console.warn("de-queueing event obj2147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2147_onLoad_activeActionGroupIndex = 0;
	





















//	action: runJqueryAnimation
//	target: obj2147 
(function () {
	window.obj2147_onLoad_runningActionsCount = obj2147_onLoad_runningActionsCount + 1;

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
	
	$("#obj2147").animate({ opacity: '0.1'}, 1600, easing, function() {
		setTimeout(function() {
			window.obj2147_onLoad_runningActionsCount = window.obj2147_onLoad_runningActionsCount - 1;
if (window.obj2147_onLoad_runningActionsCount < 0) {
	window.obj2147_onLoad_runningActionsCount = 0;
} else if (window.obj2147_onLoad_runningActionsCount == 0) {
	obj2147_onLoad_actionGroup1();
}
		}, 1);
	});
})();
};
obj2147_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2147_onLoad_activeActionGroupIndex = -1;
		$("#obj2147").trigger("obj2147_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2147) {
				console.warn("de-queueing event obj2147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2147_onLoad_activeActionGroupIndex = 1;
	





















//	action: runJqueryAnimation
//	target: obj2147 
(function () {
	window.obj2147_onLoad_runningActionsCount = obj2147_onLoad_runningActionsCount + 1;

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
	
	$("#obj2147").animate({ opacity: '1'}, 1200, easing, function() {
		setTimeout(function() {
			window.obj2147_onLoad_runningActionsCount = window.obj2147_onLoad_runningActionsCount - 1;
if (window.obj2147_onLoad_runningActionsCount < 0) {
	window.obj2147_onLoad_runningActionsCount = 0;
} else if (window.obj2147_onLoad_runningActionsCount == 0) {
	obj2147_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj2147_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2147_onLoad_activeActionGroupIndex = -1;
		$("#obj2147").trigger("obj2147_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2147) {
				console.warn("de-queueing event obj2147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2147_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2147_onLoad();
function loop_obj2147_onLoad() {
	var loopCount = 0;
	window.obj2147_onLoad_loopCount = window.obj2147_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2147_onLoad_loopCount > loopCount) {
		window.obj2147_onLoad_loopCount = 0
		obj2147_onLoad_actionGroup3();
	} else {
		obj2147_onLoad_actionGroup0();
	}
}













};
obj2147_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2147_onLoad_activeActionGroupIndex = -1;
		$("#obj2147").trigger("obj2147_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2147) {
				console.warn("de-queueing event obj2147." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2147").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2147_onLoad_activeActionGroupIndex = 3;
	





















};
obj2148_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2148_onLoad_activeActionGroupIndex = -1;
		$("#obj2148").trigger("obj2148_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2148) {
				console.warn("de-queueing event obj2148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2148_onLoad_activeActionGroupIndex = 0;
	





















//	action: runJqueryAnimation
//	target: obj2148 
(function () {
	window.obj2148_onLoad_runningActionsCount = obj2148_onLoad_runningActionsCount + 1;

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
	
	$("#obj2148").animate({ opacity: '0.1'}, 800, easing, function() {
		setTimeout(function() {
			window.obj2148_onLoad_runningActionsCount = window.obj2148_onLoad_runningActionsCount - 1;
if (window.obj2148_onLoad_runningActionsCount < 0) {
	window.obj2148_onLoad_runningActionsCount = 0;
} else if (window.obj2148_onLoad_runningActionsCount == 0) {
	obj2148_onLoad_actionGroup1();
}
		}, 1);
	});
})();
};
obj2148_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2148_onLoad_activeActionGroupIndex = -1;
		$("#obj2148").trigger("obj2148_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2148) {
				console.warn("de-queueing event obj2148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2148_onLoad_activeActionGroupIndex = 1;
	





















//	action: runJqueryAnimation
//	target: obj2148 
(function () {
	window.obj2148_onLoad_runningActionsCount = obj2148_onLoad_runningActionsCount + 1;

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
	
	$("#obj2148").animate({ opacity: '1'}, 1300, easing, function() {
		setTimeout(function() {
			window.obj2148_onLoad_runningActionsCount = window.obj2148_onLoad_runningActionsCount - 1;
if (window.obj2148_onLoad_runningActionsCount < 0) {
	window.obj2148_onLoad_runningActionsCount = 0;
} else if (window.obj2148_onLoad_runningActionsCount == 0) {
	obj2148_onLoad_actionGroup2();
}
		}, 1);
	});
})();
};
obj2148_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2148_onLoad_activeActionGroupIndex = -1;
		$("#obj2148").trigger("obj2148_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2148) {
				console.warn("de-queueing event obj2148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2148_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2148_onLoad();
function loop_obj2148_onLoad() {
	var loopCount = 0;
	window.obj2148_onLoad_loopCount = window.obj2148_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2148_onLoad_loopCount > loopCount) {
		window.obj2148_onLoad_loopCount = 0
		obj2148_onLoad_actionGroup3();
	} else {
		obj2148_onLoad_actionGroup0();
	}
}













};
obj2148_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2148_onLoad_activeActionGroupIndex = -1;
		$("#obj2148").trigger("obj2148_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2148) {
				console.warn("de-queueing event obj2148." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2148").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2148_onLoad_activeActionGroupIndex = 3;
	





















};
obj2149_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2149_onLoad_activeActionGroupIndex = -1;
		$("#obj2149").trigger("obj2149_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2149) {
				console.warn("de-queueing event obj2149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2149_onLoad_activeActionGroupIndex = 0;
	







//	action: rotate 
//	target: obj2149 
rotate_2202();
function rotate_2202() {
	window.obj2149_onLoad_runningActionsCount = obj2149_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2149";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2149';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '-1';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2202_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2202_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2202_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2202_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2202_completed() {
	setTimeout(function() {
		window.obj2149_onLoad_runningActionsCount = window.obj2149_onLoad_runningActionsCount - 1;
if (window.obj2149_onLoad_runningActionsCount < 0) {
	window.obj2149_onLoad_runningActionsCount = 0;
} else if (window.obj2149_onLoad_runningActionsCount == 0) {
	obj2149_onLoad_actionGroup1();
}
	}, 1);
}


//	action: scale
//	target: obj2149 
scale_2186();
function scale_2186() {
	window.obj2149_onLoad_runningActionsCount = obj2149_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2149";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2149';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var scaleXValue = '0.98';
	var scaleYValue = '0.98';
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
		scale_2186_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2186_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2186_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2186_completed() {
	setTimeout(function() {
		window.obj2149_onLoad_runningActionsCount = window.obj2149_onLoad_runningActionsCount - 1;
if (window.obj2149_onLoad_runningActionsCount < 0) {
	window.obj2149_onLoad_runningActionsCount = 0;
} else if (window.obj2149_onLoad_runningActionsCount == 0) {
	obj2149_onLoad_actionGroup1();
}
	}, 1);
}












};
obj2149_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2149_onLoad_activeActionGroupIndex = -1;
		$("#obj2149").trigger("obj2149_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2149) {
				console.warn("de-queueing event obj2149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2149_onLoad_activeActionGroupIndex = 1;
	







//	action: rotate 
//	target: obj2149 
rotate_2203();
function rotate_2203() {
	window.obj2149_onLoad_runningActionsCount = obj2149_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2149";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2149';
	var transformOriginX = '50%';
	var transformOriginY = '50%';
	var rotationToDegrees = '1';
	var rotationSpeed = 2;
	var rotationEasing = 'ease';
	var rotationRepeat = 0;
	var addSum = 1;
	var howManyTimes = rotationRepeat + addSum; 
	var rotationSpeedMS = rotationSpeed * 1000;
	
	
	var isInfinite = false;
	if (isInfinite) { rotate_2203_completed(); }
	//TweenMax.to(targetObjectId, 2, {rotation:'+=' + rotationToDegrees, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + rotationEasing + '', repeat:0, onComplete:rotate_2203_completed});
	
	var timesRun = 0;
	timesRun += 1;
	rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2203_completed);
	if (howManyTimes > 1 || isInfinite) {
		var rotateInterval = setInterval(function(){
			timesRun += 1;
			rotate(targetObjectIdString,timesRun,howManyTimes,rotationToDegrees,rotationSpeedMS,rotationEasing,transformOriginX,transformOriginY,rotate_2203_completed);
			if(timesRun === howManyTimes){
		        clearInterval(rotateInterval);
		      }
		}
	,rotationSpeedMS);
	}	
}
function rotate_2203_completed() {
	setTimeout(function() {
		window.obj2149_onLoad_runningActionsCount = window.obj2149_onLoad_runningActionsCount - 1;
if (window.obj2149_onLoad_runningActionsCount < 0) {
	window.obj2149_onLoad_runningActionsCount = 0;
} else if (window.obj2149_onLoad_runningActionsCount == 0) {
	obj2149_onLoad_actionGroup2();
}
	}, 1);
}


//	action: scale
//	target: obj2149 
scale_2185();
function scale_2185() {
	window.obj2149_onLoad_runningActionsCount = obj2149_onLoad_runningActionsCount + 1;
	
	var targetObjectId = "#obj2149";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2149';
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
		scale_2185_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2185_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2185_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2185_completed() {
	setTimeout(function() {
		window.obj2149_onLoad_runningActionsCount = window.obj2149_onLoad_runningActionsCount - 1;
if (window.obj2149_onLoad_runningActionsCount < 0) {
	window.obj2149_onLoad_runningActionsCount = 0;
} else if (window.obj2149_onLoad_runningActionsCount == 0) {
	obj2149_onLoad_actionGroup2();
}
	}, 1);
}












};
obj2149_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2149_onLoad_activeActionGroupIndex = -1;
		$("#obj2149").trigger("obj2149_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2149) {
				console.warn("de-queueing event obj2149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2149_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2149_onLoad();
function loop_obj2149_onLoad() {
	var loopCount = 0;
	window.obj2149_onLoad_loopCount = window.obj2149_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2149_onLoad_loopCount > loopCount) {
		window.obj2149_onLoad_loopCount = 0
		obj2149_onLoad_actionGroup3();
	} else {
		obj2149_onLoad_actionGroup0();
	}
}













};
obj2149_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2149_onLoad_activeActionGroupIndex = -1;
		$("#obj2149").trigger("obj2149_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2149) {
				console.warn("de-queueing event obj2149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2149_onLoad_activeActionGroupIndex = 3;
	





















};
obj2215_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2215_onTap_activeActionGroupIndex = -1;
		$("#obj2215").trigger("obj2215_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2215) {
				console.warn("de-queueing event obj2215." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2215").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2215_onTap_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj3189 
playAudio_3191();
function playAudio_3191() {
	window.obj2215_onTap_runningActionsCount = obj2215_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3189")[0];
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
		    window.obj2215_onTap_runningActionsCount = window.obj2215_onTap_runningActionsCount - 1;
if (window.obj2215_onTap_runningActionsCount < 0) {
	window.obj2215_onTap_runningActionsCount = 0;
} else if (window.obj2215_onTap_runningActionsCount == 0) {
	obj2215_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2215_onTap_runningActionsCount = window.obj2215_onTap_runningActionsCount - 1;
if (window.obj2215_onTap_runningActionsCount < 0) {
	window.obj2215_onTap_runningActionsCount = 0;
} else if (window.obj2215_onTap_runningActionsCount == 0) {
	obj2215_onTap_actionGroup1();
}
	}
}









};
obj2215_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2215_onTap_activeActionGroupIndex = -1;
		$("#obj2215").trigger("obj2215_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2215) {
				console.warn("de-queueing event obj2215." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2215").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2215_onTap_activeActionGroupIndex = 1;
	


















//	action: run action list container
//	target: obj2223 
runActionList_2217();
function runActionList_2217() {
	window.obj2215_onTap_runningActionsCount = obj2215_onTap_runningActionsCount + 1;
	$("#obj2223").trigger('SCEventRun');
	setTimeout(function() {
		window.obj2215_onTap_runningActionsCount = window.obj2215_onTap_runningActionsCount - 1;
if (window.obj2215_onTap_runningActionsCount < 0) {
	window.obj2215_onTap_runningActionsCount = 0;
} else if (window.obj2215_onTap_runningActionsCount == 0) {
	obj2215_onTap_actionGroup2();
}		
	}, 1);
}



};
obj2215_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2215_onTap_activeActionGroupIndex = -1;
		$("#obj2215").trigger("obj2215_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2215) {
				console.warn("de-queueing event obj2215." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2215").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2215_onTap_activeActionGroupIndex = 2;
	





















};
obj2215_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2215_onLoad_activeActionGroupIndex = -1;
		$("#obj2215").trigger("obj2215_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2215) {
				console.warn("de-queueing event obj2215." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2215").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2215_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2215 
move_2219();
function move_2219() {
	window.obj2215_onLoad_runningActionsCount = obj2215_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj2215");
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
			window.obj2215_onLoad_runningActionsCount = window.obj2215_onLoad_runningActionsCount - 1;
if (window.obj2215_onLoad_runningActionsCount < 0) {
	window.obj2215_onLoad_runningActionsCount = 0;
} else if (window.obj2215_onLoad_runningActionsCount == 0) {
	obj2215_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj2215_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2215_onLoad_activeActionGroupIndex = -1;
		$("#obj2215").trigger("obj2215_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2215) {
				console.warn("de-queueing event obj2215." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2215").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2215_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj2215 
move_2220();
function move_2220() {
	window.obj2215_onLoad_runningActionsCount = obj2215_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj2215");
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
			window.obj2215_onLoad_runningActionsCount = window.obj2215_onLoad_runningActionsCount - 1;
if (window.obj2215_onLoad_runningActionsCount < 0) {
	window.obj2215_onLoad_runningActionsCount = 0;
} else if (window.obj2215_onLoad_runningActionsCount == 0) {
	obj2215_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj2215_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2215_onLoad_activeActionGroupIndex = -1;
		$("#obj2215").trigger("obj2215_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2215) {
				console.warn("de-queueing event obj2215." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2215").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2215_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj2215_onLoad();
function loop_obj2215_onLoad() {
	var loopCount = 0;
	window.obj2215_onLoad_loopCount = window.obj2215_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj2215_onLoad_loopCount > loopCount) {
		window.obj2215_onLoad_loopCount = 0
		obj2215_onLoad_actionGroup3();
	} else {
		obj2215_onLoad_actionGroup0();
	}
}













};
obj2215_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2215_onLoad_activeActionGroupIndex = -1;
		$("#obj2215").trigger("obj2215_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2215) {
				console.warn("de-queueing event obj2215." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2215").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2215_onLoad_activeActionGroupIndex = 3;
	





















};
obj1440_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1440_onLoad_activeActionGroupIndex = -1;
		$("#obj1440").trigger("obj1440_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1440) {
				console.warn("de-queueing event obj1440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1440_onLoad_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj1440 
hide_1443();
function hide_1443() {
	var selector = "#obj1440";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1440_onLoad_runningActionsCount = obj1440_onLoad_runningActionsCount + 1;
	
	var animationType = "slideOutLeft";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1440_onLoad_runningActionsCount = window.obj1440_onLoad_runningActionsCount - 1;
if (window.obj1440_onLoad_runningActionsCount < 0) {
	window.obj1440_onLoad_runningActionsCount = 0;
} else if (window.obj1440_onLoad_runningActionsCount == 0) {
	obj1440_onLoad_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1443(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1440_onLoad_runningActionsCount = window.obj1440_onLoad_runningActionsCount - 1;
if (window.obj1440_onLoad_runningActionsCount < 0) {
	window.obj1440_onLoad_runningActionsCount = 0;
} else if (window.obj1440_onLoad_runningActionsCount == 0) {
	obj1440_onLoad_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj1440_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1440_onLoad_activeActionGroupIndex = -1;
		$("#obj1440").trigger("obj1440_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1440) {
				console.warn("de-queueing event obj1440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1440_onLoad_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_1444();
function runjs_1444() {
	window.obj1440_onLoad_runningActionsCount = obj1440_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj1440"));
	
	setTimeout(function() {
		window.obj1440_onLoad_runningActionsCount = window.obj1440_onLoad_runningActionsCount - 1;
if (window.obj1440_onLoad_runningActionsCount < 0) {
	window.obj1440_onLoad_runningActionsCount = 0;
} else if (window.obj1440_onLoad_runningActionsCount == 0) {
	obj1440_onLoad_actionGroup2();
}
	}, 1);
}







};
obj1440_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1440_onLoad_activeActionGroupIndex = -1;
		$("#obj1440").trigger("obj1440_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1440) {
				console.warn("de-queueing event obj1440." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1440").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1440_onLoad_activeActionGroupIndex = 2;
	





















};
obj2086_SCEventCounterReachedTargetValue_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2086").trigger("obj2086_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2086) {
				console.warn("de-queueing event obj2086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = 0;
	









//	action: scale
//	target: obj2136 
scale_2138();
function scale_2138() {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var targetObjectId = "#obj2136";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2136';
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
		scale_2138_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2138_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2138_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2138_completed() {
	setTimeout(function() {
		window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup1();
}
	}, 1);
}












};
obj2086_SCEventCounterReachedTargetValue_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2086").trigger("obj2086_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2086) {
				console.warn("de-queueing event obj2086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = 1;
	













//	action: stopMovie 
//	target: obj2235 
stopAudio_2239();
function stopAudio_2239() {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	var myAudio = $("#obj2235")[0];
	myAudio.pause();
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup2();
}
}








};
obj2086_SCEventCounterReachedTargetValue_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2086").trigger("obj2086_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2086) {
				console.warn("de-queueing event obj2086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj2136
(function(){
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj2136";
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
					window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup3();
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
				window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2086_SCEventCounterReachedTargetValue_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2086").trigger("obj2086_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2086) {
				console.warn("de-queueing event obj2086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj1362 
hide_2211();
function hide_2211() {
	var selector = "#obj1362";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2211(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: show 
//	selector: #obj3261
(function(){
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj3261";
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
					window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup4();
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
				window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2086_SCEventCounterReachedTargetValue_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2086").trigger("obj2086_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2086) {
				console.warn("de-queueing event obj2086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = 4;
	

//	action: hide
//	selector: obj.connecting-line 
hide_2210();
function hide_2210() {
	var selector = ".connecting-line";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup5();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2210(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}








//	action: scale
//	target: obj2136 
scale_2140();
function scale_2140() {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var targetObjectId = "#obj2136";
	var targetObject = $(targetObjectId)[0];
	var targetObjectIdString = 'obj2136';
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
		scale_2140_completed(); 
	}
		var timesRun = 0;
	timesRun += 1;
	scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2140_completed);
	if (howManyTimes > 1 || isInfinite) {
		var scaleInterval = setInterval(function(){
			timesRun += 1;
				scale(targetObjectIdString,timesRun,howManyTimes,scaleXValue,scaleYValue,effectDurationMS,effectEasing,transformOriginX,transformOriginY,scaleMode,scale_2140_completed);
			if(timesRun === howManyTimes){
		        clearInterval(scaleInterval);
		      }
		}
	,rotationSpeedMS);
	}
//	TweenMax.to(targetObjectId, 1, {scaleX: scaleXValue, scaleY: scaleYValue, transformOrigin: transformOriginX + ' ' + transformOriginY, ease:'' + effectEasing + '', repeat:0, onComplete:scale_3492_completed});
	}
function scale_2140_completed() {
	setTimeout(function() {
		window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup5();
}
	}, 1);
}












};
obj2086_SCEventCounterReachedTargetValue_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2086").trigger("obj2086_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2086) {
				console.warn("de-queueing event obj2086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj2228
(function(){
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj2228";
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
		var animationDurationMs = 0;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2149
(function(){
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj2149";
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
					window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2150
(function(){
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj2150";
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
					window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2151
(function(){
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj2151";
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
					window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2152
(function(){
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj2152";
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
					window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2147
(function(){
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj2147";
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
					window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();
//	action: show 
//	selector: #obj2148
(function(){
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj2148";
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
					window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
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
				window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();











//	action: playAudio
//	target: obj2923 
playAudio_2925();
function playAudio_2925() {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	var myAudio = $("#obj2923")[0];
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
		    window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup6();
}
	}
}









};
obj2086_SCEventCounterReachedTargetValue_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2086").trigger("obj2086_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2086) {
				console.warn("de-queueing event obj2086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = 6;
	

//	action: hide
//	selector: obj#obj2228 
hide_2231();
function hide_2231() {
	var selector = "#obj2228";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 2000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup7();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2231(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup7();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}











//	action: playAudio
//	target: obj2232 
playAudio_2234();
function playAudio_2234() {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;
	var myAudio = $("#obj2232")[0];
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
		    window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup7();
}
	}
}









};
obj2086_SCEventCounterReachedTargetValue_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2086").trigger("obj2086_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2086) {
				console.warn("de-queueing event obj2086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = 7;
	

//	action: show 
//	selector: #obj2212
(function(){
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj2212";
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
		var animationDurationMs = 2000;
		var animationIterationCount = "1";
	
		if ($(element).css("display") == "block" || animationType == "" || animationDurationMs == 0) {
			setTimeout(function() {
				$(element).css("display", "block");
				if (isLast) {
					window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup8();
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
				window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup8();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2086_SCEventCounterReachedTargetValue_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2086").trigger("obj2086_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2086) {
				console.warn("de-queueing event obj2086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2215
(function(){
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = obj2086_SCEventCounterReachedTargetValue_runningActionsCount + 1;

	var selector = "#obj2215";
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
					window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup9();
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
				window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount - 1;
if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount < 0) {
	window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterReachedTargetValue_runningActionsCount == 0) {
	obj2086_SCEventCounterReachedTargetValue_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2086_SCEventCounterReachedTargetValue_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = -1;
		$("#obj2086").trigger("obj2086_SCEventCounterReachedTargetValue_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2086) {
				console.warn("de-queueing event obj2086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex = 9;
	





















};
obj2086_SCEventCounterValueChange_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2086_SCEventCounterValueChange_activeActionGroupIndex = -1;
		$("#obj2086").trigger("obj2086_SCEventCounterValueChange_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2086) {
				console.warn("de-queueing event obj2086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2086_SCEventCounterValueChange_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj2235 
playAudio_2238();
function playAudio_2238() {
	window.obj2086_SCEventCounterValueChange_runningActionsCount = obj2086_SCEventCounterValueChange_runningActionsCount + 1;
	var myAudio = $("#obj2235")[0];
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
		    window.obj2086_SCEventCounterValueChange_runningActionsCount = window.obj2086_SCEventCounterValueChange_runningActionsCount - 1;
if (window.obj2086_SCEventCounterValueChange_runningActionsCount < 0) {
	window.obj2086_SCEventCounterValueChange_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterValueChange_runningActionsCount == 0) {
	obj2086_SCEventCounterValueChange_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2086_SCEventCounterValueChange_runningActionsCount = window.obj2086_SCEventCounterValueChange_runningActionsCount - 1;
if (window.obj2086_SCEventCounterValueChange_runningActionsCount < 0) {
	window.obj2086_SCEventCounterValueChange_runningActionsCount = 0;
} else if (window.obj2086_SCEventCounterValueChange_runningActionsCount == 0) {
	obj2086_SCEventCounterValueChange_actionGroup1();
}
	}
}









};
obj2086_SCEventCounterValueChange_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2086_SCEventCounterValueChange_activeActionGroupIndex = -1;
		$("#obj2086").trigger("obj2086_SCEventCounterValueChange_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2086) {
				console.warn("de-queueing event obj2086." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2086").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2086_SCEventCounterValueChange_activeActionGroupIndex = 1;
	





















};
obj2223_SCEventRun_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_SCEventRun_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2225();
function runjs_2225() {
	window.obj2223_SCEventRun_runningActionsCount = obj2223_SCEventRun_runningActionsCount + 1;

	PubCoder.bringPageObjectToFront($("#obj1440"));
	
	setTimeout(function() {
		window.obj2223_SCEventRun_runningActionsCount = window.obj2223_SCEventRun_runningActionsCount - 1;
if (window.obj2223_SCEventRun_runningActionsCount < 0) {
	window.obj2223_SCEventRun_runningActionsCount = 0;
} else if (window.obj2223_SCEventRun_runningActionsCount == 0) {
	obj2223_SCEventRun_actionGroup1();
}
	}, 1);
}







};
obj2223_SCEventRun_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_SCEventRun_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj1440
(function(){
	window.obj2223_SCEventRun_runningActionsCount = obj2223_SCEventRun_runningActionsCount + 1;

	var selector = "#obj1440";
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
					window.obj2223_SCEventRun_runningActionsCount = window.obj2223_SCEventRun_runningActionsCount - 1;
if (window.obj2223_SCEventRun_runningActionsCount < 0) {
	window.obj2223_SCEventRun_runningActionsCount = 0;
} else if (window.obj2223_SCEventRun_runningActionsCount == 0) {
	obj2223_SCEventRun_actionGroup2();
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
				window.obj2223_SCEventRun_runningActionsCount = window.obj2223_SCEventRun_runningActionsCount - 1;
if (window.obj2223_SCEventRun_runningActionsCount < 0) {
	window.obj2223_SCEventRun_runningActionsCount = 0;
} else if (window.obj2223_SCEventRun_runningActionsCount == 0) {
	obj2223_SCEventRun_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2223_SCEventRun_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_SCEventRun_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_2227();
function goToPage_2227() {
	window.obj2223_SCEventRun_runningActionsCount = obj2223_SCEventRun_runningActionsCount + 1;
	$("#anchor83")[0].click();
	window.obj2223_SCEventRun_runningActionsCount = window.obj2223_SCEventRun_runningActionsCount - 1;
if (window.obj2223_SCEventRun_runningActionsCount < 0) {
	window.obj2223_SCEventRun_runningActionsCount = 0;
} else if (window.obj2223_SCEventRun_runningActionsCount == 0) {
	obj2223_SCEventRun_actionGroup3();
}
}





















};
obj2223_SCEventRun_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2223_SCEventRun_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_SCEventRun_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_SCEventRun_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj1247: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1247_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1247_onLoad is still running");
	return;
}
var obj1247_onLoad_runningActionsCount = 0;
var obj1247_onLoad_loopCount = 0;
obj1247_onLoad_actionGroup0();
});










/*
 *
 *   obj1248: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1248_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1248_onLoad is still running");
	return;
}
var obj1248_onLoad_runningActionsCount = 0;
var obj1248_onLoad_loopCount = 0;
obj1248_onLoad_actionGroup0();
});










/*
 *
 *   obj1351: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1351_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1351_onLoad is still running");
	return;
}
var obj1351_onLoad_runningActionsCount = 0;
var obj1351_onLoad_loopCount = 0;
obj1351_onLoad_actionGroup0();
});










/*
 *
 *   obj1310: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1310_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1310_onLoad is still running");
	return;
}
var obj1310_onLoad_runningActionsCount = 0;
var obj1310_onLoad_loopCount = 0;
obj1310_onLoad_actionGroup0();
});










/*
 *
 *   obj1141: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1141_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1141_onLoad is still running");
	return;
}
var obj1141_onLoad_runningActionsCount = 0;
var obj1141_onLoad_loopCount = 0;
obj1141_onLoad_actionGroup0();
});










/*
 *
 *   obj1139: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1139_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1139_onLoad is still running");
	return;
}
var obj1139_onLoad_runningActionsCount = 0;
var obj1139_onLoad_loopCount = 0;
obj1139_onLoad_actionGroup0();
});










/*
 *
 *   obj1335: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1335_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1335_onLoad is still running");
	return;
}
var obj1335_onLoad_runningActionsCount = 0;
var obj1335_onLoad_loopCount = 0;
obj1335_onLoad_actionGroup0();
});










/*
 *
 *   obj1318: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1318_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1318_onLoad is still running");
	return;
}
var obj1318_onLoad_runningActionsCount = 0;
var obj1318_onLoad_loopCount = 0;
obj1318_onLoad_actionGroup0();
});










/*
 *
 *   obj1343: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1343_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1343_onLoad is still running");
	return;
}
var obj1343_onLoad_runningActionsCount = 0;
var obj1343_onLoad_loopCount = 0;
obj1343_onLoad_actionGroup0();
});










/*
 *
 *   obj1326: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1326_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1326_onLoad is still running");
	return;
}
var obj1326_onLoad_runningActionsCount = 0;
var obj1326_onLoad_loopCount = 0;
obj1326_onLoad_actionGroup0();
});










/*
 *
 *   obj1143: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1143_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1143_onLoad is still running");
	return;
}
var obj1143_onLoad_runningActionsCount = 0;
var obj1143_onLoad_loopCount = 0;
obj1143_onLoad_actionGroup0();
});










/*
 *
 *   obj1152: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1152_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1152_onLoad is still running");
	return;
}
var obj1152_onLoad_runningActionsCount = 0;
var obj1152_onLoad_loopCount = 0;
obj1152_onLoad_actionGroup0();
});






























/*
 *
 *   obj1388: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1388_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1388_onLoad is still running");
	return;
}
var obj1388_onLoad_runningActionsCount = 0;
var obj1388_onLoad_loopCount = 0;
obj1388_onLoad_actionGroup0();
});









/*
 *
 *   obj941: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj941");
	var winTarget = document.getElementById("obj941");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj941").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj941_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj941_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj941_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj941_onTouchDown is still running");
	return;
}
var obj941_onTouchDown_runningActionsCount = 0;
var obj941_onTouchDown_loopCount = 0;
obj941_onTouchDown_actionGroup0();
});



/*
 *
 *   obj941: Event SCActionDragDrop946_droppedOutsideTargetActions
 *
 */
$("#obj941").bind("SCActionDragDrop946_droppedOutsideTargetActions", function(event) {
	if (window.obj941_SCActionDragDrop946_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj941_SCActionDragDrop946_droppedOutsideTargetActions is still running");
	return;
}
var obj941_SCActionDragDrop946_droppedOutsideTargetActions_runningActionsCount = 0;
var obj941_SCActionDragDrop946_droppedOutsideTargetActions_loopCount = 0;
obj941_SCActionDragDrop946_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj941: Event droppedInsideTargetActions_9
 *
 */
$("#obj941").bind("droppedInsideTargetActions_9", function(event) {
	if (window.obj941_droppedInsideTargetActions_9_activeActionGroupIndex != -1) {
	console.warn("action list window.obj941_droppedInsideTargetActions_9 is still running");
	return;
}
var obj941_droppedInsideTargetActions_9_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_9_loopCount = 0;
obj941_droppedInsideTargetActions_9_actionGroup0();
});
/*
 *
 *   obj941: Event droppedInsideTargetActions_8
 *
 */
$("#obj941").bind("droppedInsideTargetActions_8", function(event) {
	if (window.obj941_droppedInsideTargetActions_8_activeActionGroupIndex != -1) {
	console.warn("action list window.obj941_droppedInsideTargetActions_8 is still running");
	return;
}
var obj941_droppedInsideTargetActions_8_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_8_loopCount = 0;
obj941_droppedInsideTargetActions_8_actionGroup0();
});
/*
 *
 *   obj941: Event droppedInsideTargetActions_7
 *
 */
$("#obj941").bind("droppedInsideTargetActions_7", function(event) {
	if (window.obj941_droppedInsideTargetActions_7_activeActionGroupIndex != -1) {
	console.warn("action list window.obj941_droppedInsideTargetActions_7 is still running");
	return;
}
var obj941_droppedInsideTargetActions_7_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_7_loopCount = 0;
obj941_droppedInsideTargetActions_7_actionGroup0();
});
/*
 *
 *   obj941: Event droppedInsideTargetActions_6
 *
 */
$("#obj941").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj941_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj941_droppedInsideTargetActions_6 is still running");
	return;
}
var obj941_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_6_loopCount = 0;
obj941_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj941: Event droppedInsideTargetActions_5
 *
 */
$("#obj941").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj941_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj941_droppedInsideTargetActions_5 is still running");
	return;
}
var obj941_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_5_loopCount = 0;
obj941_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj941: Event droppedInsideTargetActions_4
 *
 */
$("#obj941").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj941_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj941_droppedInsideTargetActions_4 is still running");
	return;
}
var obj941_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_4_loopCount = 0;
obj941_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj941: Event droppedInsideTargetActions_3
 *
 */
$("#obj941").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj941_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj941_droppedInsideTargetActions_3 is still running");
	return;
}
var obj941_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_3_loopCount = 0;
obj941_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj941: Event droppedInsideTargetActions_2
 *
 */
$("#obj941").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj941_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj941_droppedInsideTargetActions_2 is still running");
	return;
}
var obj941_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_2_loopCount = 0;
obj941_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj941: Event droppedInsideTargetActions
 *
 */
$("#obj941").bind("droppedInsideTargetActions", function(event) {
	if (window.obj941_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj941_droppedInsideTargetActions is still running");
	return;
}
var obj941_droppedInsideTargetActions_runningActionsCount = 0;
var obj941_droppedInsideTargetActions_loopCount = 0;
obj941_droppedInsideTargetActions_actionGroup0();
});










/*
 *
 *   obj976: Event SCEventRun
 *
 */
$("#obj976").bind("SCEventRun", function(event) {
	if (window.obj976_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj976_SCEventRun is still running");
	return;
}
var obj976_SCEventRun_runningActionsCount = 0;
var obj976_SCEventRun_loopCount = 0;
obj976_SCEventRun_actionGroup0();
});










/*
 *
 *   obj991: Event SCEventRun
 *
 */
$("#obj991").bind("SCEventRun", function(event) {
	if (window.obj991_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj991_SCEventRun is still running");
	return;
}
var obj991_SCEventRun_runningActionsCount = 0;
var obj991_SCEventRun_loopCount = 0;
obj991_SCEventRun_actionGroup0();
});















/*
 *
 *   obj1954: Event Touch Down
 *
 */
$("#obj1954").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1954_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1954_onTap is still running");
	return;
}
var obj1954_onTap_runningActionsCount = 0;
var obj1954_onTap_loopCount = 0;
obj1954_onTap_actionGroup0();
});


























/*
 *
 *   obj3261: Event Appear
 *
 */
$("#obj3261").bind(pubcoder.events.appear, function(event) {
	if (pubcoder.isActionListRunning(3261, "onDisappear") || 
		pubcoder.isActionListRunning(3261, "onAppear")) {
		console.warn("queueing event obj3261." + pubcoder.events.appear);
		pubcoder.queuedEvents.push({ senderObjectId: 3261, eventName: pubcoder.events.appear });
		return;
	}
	if (window.obj3261_onAppear_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3261_onAppear is still running");
	return;
}
var obj3261_onAppear_runningActionsCount = 0;
var obj3261_onAppear_loopCount = 0;
obj3261_onAppear_actionGroup0();
});















/*
 *
 *   obj2150: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2150_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2150_onLoad is still running");
	return;
}
var obj2150_onLoad_runningActionsCount = 0;
var obj2150_onLoad_loopCount = 0;
obj2150_onLoad_actionGroup0();
});










/*
 *
 *   obj2151: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2151_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2151_onLoad is still running");
	return;
}
var obj2151_onLoad_runningActionsCount = 0;
var obj2151_onLoad_loopCount = 0;
obj2151_onLoad_actionGroup0();
});










/*
 *
 *   obj2152: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2152_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2152_onLoad is still running");
	return;
}
var obj2152_onLoad_runningActionsCount = 0;
var obj2152_onLoad_loopCount = 0;
obj2152_onLoad_actionGroup0();
});










/*
 *
 *   obj2147: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2147_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2147_onLoad is still running");
	return;
}
var obj2147_onLoad_runningActionsCount = 0;
var obj2147_onLoad_loopCount = 0;
obj2147_onLoad_actionGroup0();
});










/*
 *
 *   obj2148: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2148_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2148_onLoad is still running");
	return;
}
var obj2148_onLoad_runningActionsCount = 0;
var obj2148_onLoad_loopCount = 0;
obj2148_onLoad_actionGroup0();
});










/*
 *
 *   obj2149: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2149_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2149_onLoad is still running");
	return;
}
var obj2149_onLoad_runningActionsCount = 0;
var obj2149_onLoad_loopCount = 0;
obj2149_onLoad_actionGroup0();
});


















/*
 *
 *   obj2215: Event Touch Down
 *
 */
$("#obj2215").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2215_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2215_onTap is still running");
	return;
}
var obj2215_onTap_runningActionsCount = 0;
var obj2215_onTap_loopCount = 0;
obj2215_onTap_actionGroup0();
});


/*
 *
 *   obj2215: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2215_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2215_onLoad is still running");
	return;
}
var obj2215_onLoad_runningActionsCount = 0;
var obj2215_onLoad_loopCount = 0;
obj2215_onLoad_actionGroup0();
});










/*
 *
 *   obj1440: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj1440_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1440_onLoad is still running");
	return;
}
var obj1440_onLoad_runningActionsCount = 0;
var obj1440_onLoad_loopCount = 0;
obj1440_onLoad_actionGroup0();
});






















/*
 *
 *   obj2086: Event SCEventCounterReachedTargetValue
 *
 */
$("#obj2086").bind("SCEventCounterReachedTargetValue", function(event) {
	if (window.obj2086_SCEventCounterReachedTargetValue_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2086_SCEventCounterReachedTargetValue is still running");
	return;
}
var obj2086_SCEventCounterReachedTargetValue_runningActionsCount = 0;
var obj2086_SCEventCounterReachedTargetValue_loopCount = 0;
obj2086_SCEventCounterReachedTargetValue_actionGroup0();
});
/*
 *
 *   obj2086: Event SCEventCounterValueChange
 *
 */
$("#obj2086").bind("SCEventCounterValueChange", function(event) {
	if (window.obj2086_SCEventCounterValueChange_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2086_SCEventCounterValueChange is still running");
	return;
}
var obj2086_SCEventCounterValueChange_runningActionsCount = 0;
var obj2086_SCEventCounterValueChange_loopCount = 0;
obj2086_SCEventCounterValueChange_actionGroup0();
});










/*
 *
 *   obj2223: Event SCEventRun
 *
 */
$("#obj2223").bind("SCEventRun", function(event) {
	if (window.obj2223_SCEventRun_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2223_SCEventRun is still running");
	return;
}
var obj2223_SCEventRun_runningActionsCount = 0;
var obj2223_SCEventRun_loopCount = 0;
obj2223_SCEventRun_actionGroup0();
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
	
$("#obj959").trigger('SCEventShow');
$("#obj1247").trigger('SCEventShow');
$("#obj1248").trigger('SCEventShow');
$("#obj1351").trigger('SCEventShow');
$("#obj1310").trigger('SCEventShow');
$("#obj1141").trigger('SCEventShow');
$("#obj1139").trigger('SCEventShow');
$("#obj1335").trigger('SCEventShow');
$("#obj1318").trigger('SCEventShow');
$("#obj1343").trigger('SCEventShow');
$("#obj1326").trigger('SCEventShow');
$("#obj1143").trigger('SCEventShow');
$("#obj1152").trigger('SCEventShow');
$("#obj1145").trigger('SCEventShow');
$("#obj1154").trigger('SCEventShow');
$("#obj1388").trigger('SCEventShow');
$("#obj941").trigger('SCEventShow');
$("#obj1362").trigger('SCEventShow');
$("#obj1440").trigger('SCEventShow');
$("#obj1445").trigger('SCEventShow');
$("#obj1990").trigger('SCEventShow');
$("#obj2024").trigger('SCEventShow');
$("#obj2232").trigger('SCEventShow');
$("#obj2235").trigger('SCEventShow');
$("#obj2923").trigger('SCEventShow');
$("#obj3189").trigger('SCEventShow');
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
function drawConnectingLine() {
    // Get the elements
    const rod = document.querySelector('.rod');
    const hook = document.querySelector('.hook');
    // Get the positions of the images
    const rodRect = rod.getBoundingClientRect();
    const hookRect = hook.getBoundingClientRect();
    // Calculate the center points of the images
    const rodCenterX = rodRect.left + rodRect.width / 2;
    const rodCenterY = rodRect.top + rodRect.height / 2;
    const hookCenterX = hookRect.left + hookRect.width / 2;
    const hookCenterY = hookRect.top + hookRect.height / 2;
    // Calculate the distance between the two centers
    const dx = hookCenterX - rodCenterX;
    const dy = hookCenterY - rodCenterY;
    // Calculate the angle of the line
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    // Calculate the length of the line
    const length = Math.sqrt(dx * dx + dy * dy);
    // Create or update the line element
    let line = document.querySelector('.connecting-line');
    if (!line) {
        line = document.createElement('div');
        line.className = 'connecting-line';
        document.body.appendChild(line);
    }
    // Set the length and position of the line
    line.style.width = `${length}px`;
    line.style.left = `${rodCenterX}px`;
    line.style.top = `${rodCenterY}px`;
    line.style.transform = `rotate(${angle}deg)`;
    // Continuously update the line
    requestAnimationFrame(drawConnectingLine);
}
drawConnectingLine();

function syncTunaPosition() {
    const hook = document.querySelector('.hook');
    const tuna = document.querySelector('.tuna');
    if (hook && tuna) {
        const hookCenterX = hook.offsetLeft + hook.offsetWidth / 2;
        const hookCenterY = hook.offsetTop + hook.offsetHeight / 2;
        // Ensure tuna follows the hook's center correctly
        tuna.style.position = 'absolute';
        tuna.style.left = `${hookCenterX - tuna.offsetWidth / 2 - 40}px`;
        tuna.style.top = `${hookCenterY - tuna.offsetHeight / 2 + 110}px`;
    }
    requestAnimationFrame(syncTunaPosition);
}
syncTunaPosition();

});