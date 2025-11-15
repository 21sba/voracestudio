pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 2971;
pubcoder.page.title = pubcoder.page.title || "26";
pubcoder.page.number = pubcoder.page.number || 26;
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
var obj2979_onLoad_activeActionGroupIndex = -1;
var obj2979_onLoad_runningActionsCount = 0;
var obj2979_onLoad_loopCount = 0;
var obj2978_onLoad_activeActionGroupIndex = -1;
var obj2978_onLoad_runningActionsCount = 0;
var obj2978_onLoad_loopCount = 0;
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
		
obj2979_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2979_onLoad_activeActionGroupIndex = -1;
		$("#obj2979").trigger("obj2979_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2979) {
				console.warn("de-queueing event obj2979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2979_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj2979
(function(){
	window.obj2979_onLoad_runningActionsCount = obj2979_onLoad_runningActionsCount + 1;

	var selector = "#obj2979";
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
					window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup1();
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
				window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2979_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2979_onLoad_activeActionGroupIndex = -1;
		$("#obj2979").trigger("obj2979_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2979) {
				console.warn("de-queueing event obj2979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2979_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_2989();
function wait_2989() {
	window.obj2979_onLoad_runningActionsCount = obj2979_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup2();
}
	}, 2000);
}













};
obj2979_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2979_onLoad_activeActionGroupIndex = -1;
		$("#obj2979").trigger("obj2979_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2979) {
				console.warn("de-queueing event obj2979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2979_onLoad_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2979 
hide_2990();
function hide_2990() {
	var selector = "#obj2979";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2979_onLoad_runningActionsCount = obj2979_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2990(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj2978 
hide_2991();
function hide_2991() {
	var selector = "#obj2978";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2979_onLoad_runningActionsCount = obj2979_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2991(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2979_onLoad_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2979_onLoad_activeActionGroupIndex = -1;
		$("#obj2979").trigger("obj2979_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2979) {
				console.warn("de-queueing event obj2979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2979_onLoad_activeActionGroupIndex = 3;
	

//	action: show 
//	selector: #obj2980
(function(){
	window.obj2979_onLoad_runningActionsCount = obj2979_onLoad_runningActionsCount + 1;

	var selector = "#obj2980";
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
					window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup4();
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
				window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup4();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2979_onLoad_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2979_onLoad_activeActionGroupIndex = -1;
		$("#obj2979").trigger("obj2979_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2979) {
				console.warn("de-queueing event obj2979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2979_onLoad_activeActionGroupIndex = 4;
	








//	action: wait
wait_2994();
function wait_2994() {
	window.obj2979_onLoad_runningActionsCount = obj2979_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup5();
}
	}, 1000);
}













};
obj2979_onLoad_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2979_onLoad_activeActionGroupIndex = -1;
		$("#obj2979").trigger("obj2979_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2979) {
				console.warn("de-queueing event obj2979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2979_onLoad_activeActionGroupIndex = 5;
	

//	action: hide
//	selector: obj#obj2980 
hide_2993();
function hide_2993() {
	var selector = "#obj2980";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2979_onLoad_runningActionsCount = obj2979_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup6();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2993(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup6();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2979_onLoad_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2979_onLoad_activeActionGroupIndex = -1;
		$("#obj2979").trigger("obj2979_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2979) {
				console.warn("de-queueing event obj2979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2979_onLoad_activeActionGroupIndex = 6;
	
//	action: goToPage
goToPage_3037();
function goToPage_3037() {
	window.obj2979_onLoad_runningActionsCount = obj2979_onLoad_runningActionsCount + 1;
	$("#anchor97")[0].click();
	window.obj2979_onLoad_runningActionsCount = window.obj2979_onLoad_runningActionsCount - 1;
if (window.obj2979_onLoad_runningActionsCount < 0) {
	window.obj2979_onLoad_runningActionsCount = 0;
} else if (window.obj2979_onLoad_runningActionsCount == 0) {
	obj2979_onLoad_actionGroup7();
}
}





















};
obj2979_onLoad_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2979_onLoad_activeActionGroupIndex = -1;
		$("#obj2979").trigger("obj2979_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2979) {
				console.warn("de-queueing event obj2979." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2979").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2979_onLoad_activeActionGroupIndex = 7;
	





















};
obj2978_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2978_onLoad_activeActionGroupIndex = -1;
		$("#obj2978").trigger("obj2978_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2978) {
				console.warn("de-queueing event obj2978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2978_onLoad_activeActionGroupIndex = 0;
	








//	action: wait
wait_3004();
function wait_3004() {
	window.obj2978_onLoad_runningActionsCount = obj2978_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj2978_onLoad_runningActionsCount = window.obj2978_onLoad_runningActionsCount - 1;
if (window.obj2978_onLoad_runningActionsCount < 0) {
	window.obj2978_onLoad_runningActionsCount = 0;
} else if (window.obj2978_onLoad_runningActionsCount == 0) {
	obj2978_onLoad_actionGroup1();
}
	}, 700);
}













};
obj2978_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2978_onLoad_activeActionGroupIndex = -1;
		$("#obj2978").trigger("obj2978_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2978) {
				console.warn("de-queueing event obj2978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2978_onLoad_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj2978
(function(){
	window.obj2978_onLoad_runningActionsCount = obj2978_onLoad_runningActionsCount + 1;

	var selector = "#obj2978";
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
					window.obj2978_onLoad_runningActionsCount = window.obj2978_onLoad_runningActionsCount - 1;
if (window.obj2978_onLoad_runningActionsCount < 0) {
	window.obj2978_onLoad_runningActionsCount = 0;
} else if (window.obj2978_onLoad_runningActionsCount == 0) {
	obj2978_onLoad_actionGroup2();
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
				window.obj2978_onLoad_runningActionsCount = window.obj2978_onLoad_runningActionsCount - 1;
if (window.obj2978_onLoad_runningActionsCount < 0) {
	window.obj2978_onLoad_runningActionsCount = 0;
} else if (window.obj2978_onLoad_runningActionsCount == 0) {
	obj2978_onLoad_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2978_onLoad_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2978_onLoad_activeActionGroupIndex = -1;
		$("#obj2978").trigger("obj2978_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2978) {
				console.warn("de-queueing event obj2978." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2978").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2978_onLoad_activeActionGroupIndex = 2;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj2979: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2979_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2979_onLoad is still running");
	return;
}
var obj2979_onLoad_runningActionsCount = 0;
var obj2979_onLoad_loopCount = 0;
obj2979_onLoad_actionGroup0();
});










/*
 *
 *   obj2978: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2978_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2978_onLoad is still running");
	return;
}
var obj2978_onLoad_runningActionsCount = 0;
var obj2978_onLoad_loopCount = 0;
obj2978_onLoad_actionGroup0();
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
	
$("#obj2972").trigger('SCEventShow');
$("#obj2984").trigger('SCEventShow');
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