pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 898;
pubcoder.page.title = pubcoder.page.title || "10";
pubcoder.page.number = pubcoder.page.number || 10;
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
var obj903_onLoad_activeActionGroupIndex = -1;
var obj903_onLoad_runningActionsCount = 0;
var obj903_onLoad_loopCount = 0;
var obj909_onTap_activeActionGroupIndex = -1;
var obj909_onTap_runningActionsCount = 0;
var obj909_onTap_loopCount = 0;
var obj909_onLoad_activeActionGroupIndex = -1;
var obj909_onLoad_runningActionsCount = 0;
var obj909_onLoad_loopCount = 0;
var obj919_onLoad_activeActionGroupIndex = -1;
var obj919_onLoad_runningActionsCount = 0;
var obj919_onLoad_loopCount = 0;
var obj2037_onLoad_activeActionGroupIndex = -1;
var obj2037_onLoad_runningActionsCount = 0;
var obj2037_onLoad_loopCount = 0;
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
		
obj903_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj903_onLoad_activeActionGroupIndex = -1;
		$("#obj903").trigger("obj903_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 903) {
				console.warn("de-queueing event obj903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj903_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj903
(function(){
	window.obj903_onLoad_runningActionsCount = obj903_onLoad_runningActionsCount + 1;

	var selector = "#obj903";
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
					window.obj903_onLoad_runningActionsCount = window.obj903_onLoad_runningActionsCount - 1;
if (window.obj903_onLoad_runningActionsCount < 0) {
	window.obj903_onLoad_runningActionsCount = 0;
} else if (window.obj903_onLoad_runningActionsCount == 0) {
	obj903_onLoad_actionGroup1();
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
				window.obj903_onLoad_runningActionsCount = window.obj903_onLoad_runningActionsCount - 1;
if (window.obj903_onLoad_runningActionsCount < 0) {
	window.obj903_onLoad_runningActionsCount = 0;
} else if (window.obj903_onLoad_runningActionsCount == 0) {
	obj903_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj903_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj903_onLoad_activeActionGroupIndex = -1;
		$("#obj903").trigger("obj903_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 903) {
				console.warn("de-queueing event obj903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj903_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_907();
function wait_907() {
	window.obj903_onLoad_runningActionsCount = obj903_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj903_onLoad_runningActionsCount = window.obj903_onLoad_runningActionsCount - 1;
if (window.obj903_onLoad_runningActionsCount < 0) {
	window.obj903_onLoad_runningActionsCount = 0;
} else if (window.obj903_onLoad_runningActionsCount == 0) {
	obj903_onLoad_actionGroup2();
}
	}, 3000);
}













};
obj903_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj903_onLoad_activeActionGroupIndex = -1;
		$("#obj903").trigger("obj903_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 903) {
				console.warn("de-queueing event obj903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj903_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj909
(function(){
	window.obj903_onLoad_runningActionsCount = obj903_onLoad_runningActionsCount + 1;

	var selector = "#obj909";
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
					window.obj903_onLoad_runningActionsCount = window.obj903_onLoad_runningActionsCount - 1;
if (window.obj903_onLoad_runningActionsCount < 0) {
	window.obj903_onLoad_runningActionsCount = 0;
} else if (window.obj903_onLoad_runningActionsCount == 0) {
	obj903_onLoad_actionGroup3();
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
				window.obj903_onLoad_runningActionsCount = window.obj903_onLoad_runningActionsCount - 1;
if (window.obj903_onLoad_runningActionsCount < 0) {
	window.obj903_onLoad_runningActionsCount = 0;
} else if (window.obj903_onLoad_runningActionsCount == 0) {
	obj903_onLoad_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj903_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj903_onLoad_activeActionGroupIndex = -1;
		$("#obj903").trigger("obj903_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 903) {
				console.warn("de-queueing event obj903." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj903").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj903_onLoad_activeActionGroupIndex = 3;
	





















};
obj909_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj909_onTap_activeActionGroupIndex = -1;
		$("#obj909").trigger("obj909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 909) {
				console.warn("de-queueing event obj909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj909_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj903 
hide_911();
function hide_911() {
	var selector = "#obj903";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj909_onTap_runningActionsCount = obj909_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj909_onTap_runningActionsCount = window.obj909_onTap_runningActionsCount - 1;
if (window.obj909_onTap_runningActionsCount < 0) {
	window.obj909_onTap_runningActionsCount = 0;
} else if (window.obj909_onTap_runningActionsCount == 0) {
	obj909_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_911(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj909_onTap_runningActionsCount = window.obj909_onTap_runningActionsCount - 1;
if (window.obj909_onTap_runningActionsCount < 0) {
	window.obj909_onTap_runningActionsCount = 0;
} else if (window.obj909_onTap_runningActionsCount == 0) {
	obj909_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj919 
hide_912();
function hide_912() {
	var selector = "#obj919";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj909_onTap_runningActionsCount = obj909_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj909_onTap_runningActionsCount = window.obj909_onTap_runningActionsCount - 1;
if (window.obj909_onTap_runningActionsCount < 0) {
	window.obj909_onTap_runningActionsCount = 0;
} else if (window.obj909_onTap_runningActionsCount == 0) {
	obj909_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_912(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj909_onTap_runningActionsCount = window.obj909_onTap_runningActionsCount - 1;
if (window.obj909_onTap_runningActionsCount < 0) {
	window.obj909_onTap_runningActionsCount = 0;
} else if (window.obj909_onTap_runningActionsCount == 0) {
	obj909_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj909 
hide_913();
function hide_913() {
	var selector = "#obj909";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj909_onTap_runningActionsCount = obj909_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj909_onTap_runningActionsCount = window.obj909_onTap_runningActionsCount - 1;
if (window.obj909_onTap_runningActionsCount < 0) {
	window.obj909_onTap_runningActionsCount = 0;
} else if (window.obj909_onTap_runningActionsCount == 0) {
	obj909_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_913(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj909_onTap_runningActionsCount = window.obj909_onTap_runningActionsCount - 1;
if (window.obj909_onTap_runningActionsCount < 0) {
	window.obj909_onTap_runningActionsCount = 0;
} else if (window.obj909_onTap_runningActionsCount == 0) {
	obj909_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}











//	action: playAudio
//	target: obj3166 
playAudio_3168();
function playAudio_3168() {
	window.obj909_onTap_runningActionsCount = obj909_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3166")[0];
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
		    window.obj909_onTap_runningActionsCount = window.obj909_onTap_runningActionsCount - 1;
if (window.obj909_onTap_runningActionsCount < 0) {
	window.obj909_onTap_runningActionsCount = 0;
} else if (window.obj909_onTap_runningActionsCount == 0) {
	obj909_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj909_onTap_runningActionsCount = window.obj909_onTap_runningActionsCount - 1;
if (window.obj909_onTap_runningActionsCount < 0) {
	window.obj909_onTap_runningActionsCount = 0;
} else if (window.obj909_onTap_runningActionsCount == 0) {
	obj909_onTap_actionGroup1();
}
	}
}









};
obj909_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj909_onTap_activeActionGroupIndex = -1;
		$("#obj909").trigger("obj909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 909) {
				console.warn("de-queueing event obj909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj909_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_914();
function goToPage_914() {
	window.obj909_onTap_runningActionsCount = obj909_onTap_runningActionsCount + 1;
	$("#anchor51")[0].click();
	window.obj909_onTap_runningActionsCount = window.obj909_onTap_runningActionsCount - 1;
if (window.obj909_onTap_runningActionsCount < 0) {
	window.obj909_onTap_runningActionsCount = 0;
} else if (window.obj909_onTap_runningActionsCount == 0) {
	obj909_onTap_actionGroup2();
}
}





















};
obj909_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj909_onTap_activeActionGroupIndex = -1;
		$("#obj909").trigger("obj909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 909) {
				console.warn("de-queueing event obj909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj909_onTap_activeActionGroupIndex = 2;
	





















};
obj909_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj909_onLoad_activeActionGroupIndex = -1;
		$("#obj909").trigger("obj909_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 909) {
				console.warn("de-queueing event obj909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj909_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj909 
move_937();
function move_937() {
	window.obj909_onLoad_runningActionsCount = obj909_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj909");
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
			window.obj909_onLoad_runningActionsCount = window.obj909_onLoad_runningActionsCount - 1;
if (window.obj909_onLoad_runningActionsCount < 0) {
	window.obj909_onLoad_runningActionsCount = 0;
} else if (window.obj909_onLoad_runningActionsCount == 0) {
	obj909_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj909_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj909_onLoad_activeActionGroupIndex = -1;
		$("#obj909").trigger("obj909_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 909) {
				console.warn("de-queueing event obj909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj909_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj909 
move_938();
function move_938() {
	window.obj909_onLoad_runningActionsCount = obj909_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj909");
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
			window.obj909_onLoad_runningActionsCount = window.obj909_onLoad_runningActionsCount - 1;
if (window.obj909_onLoad_runningActionsCount < 0) {
	window.obj909_onLoad_runningActionsCount = 0;
} else if (window.obj909_onLoad_runningActionsCount == 0) {
	obj909_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj909_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj909_onLoad_activeActionGroupIndex = -1;
		$("#obj909").trigger("obj909_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 909) {
				console.warn("de-queueing event obj909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj909_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj909_onLoad();
function loop_obj909_onLoad() {
	var loopCount = 0;
	window.obj909_onLoad_loopCount = window.obj909_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj909_onLoad_loopCount > loopCount) {
		window.obj909_onLoad_loopCount = 0
		obj909_onLoad_actionGroup3();
	} else {
		obj909_onLoad_actionGroup0();
	}
}













};
obj909_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj909_onLoad_activeActionGroupIndex = -1;
		$("#obj909").trigger("obj909_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 909) {
				console.warn("de-queueing event obj909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj909_onLoad_activeActionGroupIndex = 3;
	





















};
obj919_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj919_onLoad_activeActionGroupIndex = -1;
		$("#obj919").trigger("obj919_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 919) {
				console.warn("de-queueing event obj919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj919_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj919
(function(){
	window.obj919_onLoad_runningActionsCount = obj919_onLoad_runningActionsCount + 1;

	var selector = "#obj919";
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
					window.obj919_onLoad_runningActionsCount = window.obj919_onLoad_runningActionsCount - 1;
if (window.obj919_onLoad_runningActionsCount < 0) {
	window.obj919_onLoad_runningActionsCount = 0;
} else if (window.obj919_onLoad_runningActionsCount == 0) {
	obj919_onLoad_actionGroup1();
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
				window.obj919_onLoad_runningActionsCount = window.obj919_onLoad_runningActionsCount - 1;
if (window.obj919_onLoad_runningActionsCount < 0) {
	window.obj919_onLoad_runningActionsCount = 0;
} else if (window.obj919_onLoad_runningActionsCount == 0) {
	obj919_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj919_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj919_onLoad_activeActionGroupIndex = -1;
		$("#obj919").trigger("obj919_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 919) {
				console.warn("de-queueing event obj919." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj919").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj919_onLoad_activeActionGroupIndex = 1;
	





















};
obj2037_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2037_onLoad_activeActionGroupIndex = -1;
		$("#obj2037").trigger("obj2037_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2037) {
				console.warn("de-queueing event obj2037." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2037").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2037_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj2037 
playAudio_2039();
function playAudio_2039() {
	window.obj2037_onLoad_runningActionsCount = obj2037_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj2037")[0];
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
		    window.obj2037_onLoad_runningActionsCount = window.obj2037_onLoad_runningActionsCount - 1;
if (window.obj2037_onLoad_runningActionsCount < 0) {
	window.obj2037_onLoad_runningActionsCount = 0;
} else if (window.obj2037_onLoad_runningActionsCount == 0) {
	obj2037_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2037_onLoad_runningActionsCount = window.obj2037_onLoad_runningActionsCount - 1;
if (window.obj2037_onLoad_runningActionsCount < 0) {
	window.obj2037_onLoad_runningActionsCount = 0;
} else if (window.obj2037_onLoad_runningActionsCount == 0) {
	obj2037_onLoad_actionGroup1();
}
	}
}









};
obj2037_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2037_onLoad_activeActionGroupIndex = -1;
		$("#obj2037").trigger("obj2037_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2037) {
				console.warn("de-queueing event obj2037." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2037").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2037_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj903: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj903_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj903_onLoad is still running");
	return;
}
var obj903_onLoad_runningActionsCount = 0;
var obj903_onLoad_loopCount = 0;
obj903_onLoad_actionGroup0();
});








/*
 *
 *   obj909: Event Touch Down
 *
 */
$("#obj909").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj909_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj909_onTap is still running");
	return;
}
var obj909_onTap_runningActionsCount = 0;
var obj909_onTap_loopCount = 0;
obj909_onTap_actionGroup0();
});


/*
 *
 *   obj909: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj909_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj909_onLoad is still running");
	return;
}
var obj909_onLoad_runningActionsCount = 0;
var obj909_onLoad_loopCount = 0;
obj909_onLoad_actionGroup0();
});










/*
 *
 *   obj919: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj919_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj919_onLoad is still running");
	return;
}
var obj919_onLoad_runningActionsCount = 0;
var obj919_onLoad_loopCount = 0;
obj919_onLoad_actionGroup0();
});




















/*
 *
 *   obj2037: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2037_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2037_onLoad is still running");
	return;
}
var obj2037_onLoad_runningActionsCount = 0;
var obj2037_onLoad_loopCount = 0;
obj2037_onLoad_actionGroup0();
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
	
$("#obj899").trigger('SCEventShow');
$("#obj923").trigger('SCEventShow');
$("#obj2037").trigger('SCEventShow');
$("#obj3166").trigger('SCEventShow');
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