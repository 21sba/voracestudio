pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 758;
pubcoder.page.title = pubcoder.page.title || "8";
pubcoder.page.number = pubcoder.page.number || 8;
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
var obj773_onLoad_activeActionGroupIndex = -1;
var obj773_onLoad_runningActionsCount = 0;
var obj773_onLoad_loopCount = 0;
var obj759_onLoad_activeActionGroupIndex = -1;
var obj759_onLoad_runningActionsCount = 0;
var obj759_onLoad_loopCount = 0;
var obj764_onTap_activeActionGroupIndex = -1;
var obj764_onTap_runningActionsCount = 0;
var obj764_onTap_loopCount = 0;
var obj764_onLoad_activeActionGroupIndex = -1;
var obj764_onLoad_runningActionsCount = 0;
var obj764_onLoad_loopCount = 0;
var obj777_onLoad_activeActionGroupIndex = -1;
var obj777_onLoad_runningActionsCount = 0;
var obj777_onLoad_loopCount = 0;
var obj2031_onLoad_activeActionGroupIndex = -1;
var obj2031_onLoad_runningActionsCount = 0;
var obj2031_onLoad_loopCount = 0;
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
		
obj773_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj773_onLoad_activeActionGroupIndex = -1;
		$("#obj773").trigger("obj773_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 773) {
				console.warn("de-queueing event obj773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj773_onLoad_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_776();
function runjs_776() {
	window.obj773_onLoad_runningActionsCount = obj773_onLoad_runningActionsCount + 1;

	PubCoder.sendPageObjectToBack($("#obj773"));
	
	setTimeout(function() {
		window.obj773_onLoad_runningActionsCount = window.obj773_onLoad_runningActionsCount - 1;
if (window.obj773_onLoad_runningActionsCount < 0) {
	window.obj773_onLoad_runningActionsCount = 0;
} else if (window.obj773_onLoad_runningActionsCount == 0) {
	obj773_onLoad_actionGroup1();
}
	}, 1);
}







};
obj773_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj773_onLoad_activeActionGroupIndex = -1;
		$("#obj773").trigger("obj773_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 773) {
				console.warn("de-queueing event obj773." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj773").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj773_onLoad_activeActionGroupIndex = 1;
	





















};
obj759_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj759_onLoad_activeActionGroupIndex = -1;
		$("#obj759").trigger("obj759_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 759) {
				console.warn("de-queueing event obj759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj759_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj759
(function(){
	window.obj759_onLoad_runningActionsCount = obj759_onLoad_runningActionsCount + 1;

	var selector = "#obj759";
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
					window.obj759_onLoad_runningActionsCount = window.obj759_onLoad_runningActionsCount - 1;
if (window.obj759_onLoad_runningActionsCount < 0) {
	window.obj759_onLoad_runningActionsCount = 0;
} else if (window.obj759_onLoad_runningActionsCount == 0) {
	obj759_onLoad_actionGroup1();
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
				window.obj759_onLoad_runningActionsCount = window.obj759_onLoad_runningActionsCount - 1;
if (window.obj759_onLoad_runningActionsCount < 0) {
	window.obj759_onLoad_runningActionsCount = 0;
} else if (window.obj759_onLoad_runningActionsCount == 0) {
	obj759_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj759_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj759_onLoad_activeActionGroupIndex = -1;
		$("#obj759").trigger("obj759_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 759) {
				console.warn("de-queueing event obj759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj759_onLoad_activeActionGroupIndex = 1;
	








//	action: wait
wait_762();
function wait_762() {
	window.obj759_onLoad_runningActionsCount = obj759_onLoad_runningActionsCount + 1;
	setTimeout(function() {
		window.obj759_onLoad_runningActionsCount = window.obj759_onLoad_runningActionsCount - 1;
if (window.obj759_onLoad_runningActionsCount < 0) {
	window.obj759_onLoad_runningActionsCount = 0;
} else if (window.obj759_onLoad_runningActionsCount == 0) {
	obj759_onLoad_actionGroup2();
}
	}, 2500);
}













};
obj759_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj759_onLoad_activeActionGroupIndex = -1;
		$("#obj759").trigger("obj759_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 759) {
				console.warn("de-queueing event obj759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj759_onLoad_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj764
(function(){
	window.obj759_onLoad_runningActionsCount = obj759_onLoad_runningActionsCount + 1;

	var selector = "#obj764";
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
					window.obj759_onLoad_runningActionsCount = window.obj759_onLoad_runningActionsCount - 1;
if (window.obj759_onLoad_runningActionsCount < 0) {
	window.obj759_onLoad_runningActionsCount = 0;
} else if (window.obj759_onLoad_runningActionsCount == 0) {
	obj759_onLoad_actionGroup3();
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
				window.obj759_onLoad_runningActionsCount = window.obj759_onLoad_runningActionsCount - 1;
if (window.obj759_onLoad_runningActionsCount < 0) {
	window.obj759_onLoad_runningActionsCount = 0;
} else if (window.obj759_onLoad_runningActionsCount == 0) {
	obj759_onLoad_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj759_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj759_onLoad_activeActionGroupIndex = -1;
		$("#obj759").trigger("obj759_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 759) {
				console.warn("de-queueing event obj759." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj759").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj759_onLoad_activeActionGroupIndex = 3;
	





















};
obj764_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj764_onTap_activeActionGroupIndex = -1;
		$("#obj764").trigger("obj764_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 764) {
				console.warn("de-queueing event obj764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj764_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj759 
hide_766();
function hide_766() {
	var selector = "#obj759";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj764_onTap_runningActionsCount = obj764_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj764_onTap_runningActionsCount = window.obj764_onTap_runningActionsCount - 1;
if (window.obj764_onTap_runningActionsCount < 0) {
	window.obj764_onTap_runningActionsCount = 0;
} else if (window.obj764_onTap_runningActionsCount == 0) {
	obj764_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_766(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj764_onTap_runningActionsCount = window.obj764_onTap_runningActionsCount - 1;
if (window.obj764_onTap_runningActionsCount < 0) {
	window.obj764_onTap_runningActionsCount = 0;
} else if (window.obj764_onTap_runningActionsCount == 0) {
	obj764_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj777 
hide_800();
function hide_800() {
	var selector = "#obj777";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj764_onTap_runningActionsCount = obj764_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj764_onTap_runningActionsCount = window.obj764_onTap_runningActionsCount - 1;
if (window.obj764_onTap_runningActionsCount < 0) {
	window.obj764_onTap_runningActionsCount = 0;
} else if (window.obj764_onTap_runningActionsCount == 0) {
	obj764_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_800(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj764_onTap_runningActionsCount = window.obj764_onTap_runningActionsCount - 1;
if (window.obj764_onTap_runningActionsCount < 0) {
	window.obj764_onTap_runningActionsCount = 0;
} else if (window.obj764_onTap_runningActionsCount == 0) {
	obj764_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}
//	action: hide
//	selector: obj#obj764 
hide_767();
function hide_767() {
	var selector = "#obj764";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj764_onTap_runningActionsCount = obj764_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj764_onTap_runningActionsCount = window.obj764_onTap_runningActionsCount - 1;
if (window.obj764_onTap_runningActionsCount < 0) {
	window.obj764_onTap_runningActionsCount = 0;
} else if (window.obj764_onTap_runningActionsCount == 0) {
	obj764_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_767(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj764_onTap_runningActionsCount = window.obj764_onTap_runningActionsCount - 1;
if (window.obj764_onTap_runningActionsCount < 0) {
	window.obj764_onTap_runningActionsCount = 0;
} else if (window.obj764_onTap_runningActionsCount == 0) {
	obj764_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}











//	action: playAudio
//	target: obj3160 
playAudio_3162();
function playAudio_3162() {
	window.obj764_onTap_runningActionsCount = obj764_onTap_runningActionsCount + 1;
	var myAudio = $("#obj3160")[0];
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
		    window.obj764_onTap_runningActionsCount = window.obj764_onTap_runningActionsCount - 1;
if (window.obj764_onTap_runningActionsCount < 0) {
	window.obj764_onTap_runningActionsCount = 0;
} else if (window.obj764_onTap_runningActionsCount == 0) {
	obj764_onTap_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj764_onTap_runningActionsCount = window.obj764_onTap_runningActionsCount - 1;
if (window.obj764_onTap_runningActionsCount < 0) {
	window.obj764_onTap_runningActionsCount = 0;
} else if (window.obj764_onTap_runningActionsCount == 0) {
	obj764_onTap_actionGroup1();
}
	}
}









};
obj764_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj764_onTap_activeActionGroupIndex = -1;
		$("#obj764").trigger("obj764_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 764) {
				console.warn("de-queueing event obj764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj764_onTap_activeActionGroupIndex = 1;
	
//	action: goToPage
goToPage_768();
function goToPage_768() {
	window.obj764_onTap_runningActionsCount = obj764_onTap_runningActionsCount + 1;
	$("#anchor44")[0].click();
	window.obj764_onTap_runningActionsCount = window.obj764_onTap_runningActionsCount - 1;
if (window.obj764_onTap_runningActionsCount < 0) {
	window.obj764_onTap_runningActionsCount = 0;
} else if (window.obj764_onTap_runningActionsCount == 0) {
	obj764_onTap_actionGroup2();
}
}





















};
obj764_onTap_actionGroup2 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj764_onTap_activeActionGroupIndex = -1;
		$("#obj764").trigger("obj764_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 764) {
				console.warn("de-queueing event obj764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj764_onTap_activeActionGroupIndex = 2;
	





















};
obj764_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj764_onLoad_activeActionGroupIndex = -1;
		$("#obj764").trigger("obj764_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 764) {
				console.warn("de-queueing event obj764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj764_onLoad_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj764 
move_934();
function move_934() {
	window.obj764_onLoad_runningActionsCount = obj764_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj764");
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
			window.obj764_onLoad_runningActionsCount = window.obj764_onLoad_runningActionsCount - 1;
if (window.obj764_onLoad_runningActionsCount < 0) {
	window.obj764_onLoad_runningActionsCount = 0;
} else if (window.obj764_onLoad_runningActionsCount == 0) {
	obj764_onLoad_actionGroup1();
}
		}, 1);
	});
}



















};
obj764_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj764_onLoad_activeActionGroupIndex = -1;
		$("#obj764").trigger("obj764_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 764) {
				console.warn("de-queueing event obj764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj764_onLoad_activeActionGroupIndex = 1;
	


//	action: move
//	target: obj764 
move_935();
function move_935() {
	window.obj764_onLoad_runningActionsCount = obj764_onLoad_runningActionsCount + 1;

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
	var targetObject = $("#obj764");
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
			window.obj764_onLoad_runningActionsCount = window.obj764_onLoad_runningActionsCount - 1;
if (window.obj764_onLoad_runningActionsCount < 0) {
	window.obj764_onLoad_runningActionsCount = 0;
} else if (window.obj764_onLoad_runningActionsCount == 0) {
	obj764_onLoad_actionGroup2();
}
		}, 1);
	});
}



















};
obj764_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj764_onLoad_activeActionGroupIndex = -1;
		$("#obj764").trigger("obj764_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 764) {
				console.warn("de-queueing event obj764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj764_onLoad_activeActionGroupIndex = 2;
	








//	action: loop
loop_obj764_onLoad();
function loop_obj764_onLoad() {
	var loopCount = 0;
	window.obj764_onLoad_loopCount = window.obj764_onLoad_loopCount + 1;
	if (loopCount != 0 && window.obj764_onLoad_loopCount > loopCount) {
		window.obj764_onLoad_loopCount = 0
		obj764_onLoad_actionGroup3();
	} else {
		obj764_onLoad_actionGroup0();
	}
}













};
obj764_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj764_onLoad_activeActionGroupIndex = -1;
		$("#obj764").trigger("obj764_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 764) {
				console.warn("de-queueing event obj764." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj764").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj764_onLoad_activeActionGroupIndex = 3;
	





















};
obj777_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj777_onLoad_activeActionGroupIndex = -1;
		$("#obj777").trigger("obj777_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 777) {
				console.warn("de-queueing event obj777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj777_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj777
(function(){
	window.obj777_onLoad_runningActionsCount = obj777_onLoad_runningActionsCount + 1;

	var selector = "#obj777";
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
					window.obj777_onLoad_runningActionsCount = window.obj777_onLoad_runningActionsCount - 1;
if (window.obj777_onLoad_runningActionsCount < 0) {
	window.obj777_onLoad_runningActionsCount = 0;
} else if (window.obj777_onLoad_runningActionsCount == 0) {
	obj777_onLoad_actionGroup1();
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
				window.obj777_onLoad_runningActionsCount = window.obj777_onLoad_runningActionsCount - 1;
if (window.obj777_onLoad_runningActionsCount < 0) {
	window.obj777_onLoad_runningActionsCount = 0;
} else if (window.obj777_onLoad_runningActionsCount == 0) {
	obj777_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj777_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj777_onLoad_activeActionGroupIndex = -1;
		$("#obj777").trigger("obj777_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 777) {
				console.warn("de-queueing event obj777." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj777").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj777_onLoad_activeActionGroupIndex = 1;
	





















};
obj2031_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2031_onLoad_activeActionGroupIndex = -1;
		$("#obj2031").trigger("obj2031_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2031) {
				console.warn("de-queueing event obj2031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2031_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj2031 
playAudio_2033();
function playAudio_2033() {
	window.obj2031_onLoad_runningActionsCount = obj2031_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj2031")[0];
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
		    window.obj2031_onLoad_runningActionsCount = window.obj2031_onLoad_runningActionsCount - 1;
if (window.obj2031_onLoad_runningActionsCount < 0) {
	window.obj2031_onLoad_runningActionsCount = 0;
} else if (window.obj2031_onLoad_runningActionsCount == 0) {
	obj2031_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2031_onLoad_runningActionsCount = window.obj2031_onLoad_runningActionsCount - 1;
if (window.obj2031_onLoad_runningActionsCount < 0) {
	window.obj2031_onLoad_runningActionsCount = 0;
} else if (window.obj2031_onLoad_runningActionsCount == 0) {
	obj2031_onLoad_actionGroup1();
}
	}
}









};
obj2031_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2031_onLoad_activeActionGroupIndex = -1;
		$("#obj2031").trigger("obj2031_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2031) {
				console.warn("de-queueing event obj2031." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2031").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2031_onLoad_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		





/*
 *
 *   obj773: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj773_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj773_onLoad is still running");
	return;
}
var obj773_onLoad_runningActionsCount = 0;
var obj773_onLoad_loopCount = 0;
obj773_onLoad_actionGroup0();
});










/*
 *
 *   obj759: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj759_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj759_onLoad is still running");
	return;
}
var obj759_onLoad_runningActionsCount = 0;
var obj759_onLoad_loopCount = 0;
obj759_onLoad_actionGroup0();
});








/*
 *
 *   obj764: Event Touch Down
 *
 */
$("#obj764").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj764_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj764_onTap is still running");
	return;
}
var obj764_onTap_runningActionsCount = 0;
var obj764_onTap_loopCount = 0;
obj764_onTap_actionGroup0();
});


/*
 *
 *   obj764: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj764_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj764_onLoad is still running");
	return;
}
var obj764_onLoad_runningActionsCount = 0;
var obj764_onLoad_loopCount = 0;
obj764_onLoad_actionGroup0();
});










/*
 *
 *   obj777: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj777_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj777_onLoad is still running");
	return;
}
var obj777_onLoad_runningActionsCount = 0;
var obj777_onLoad_loopCount = 0;
obj777_onLoad_actionGroup0();
});




















/*
 *
 *   obj2031: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2031_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2031_onLoad is still running");
	return;
}
var obj2031_onLoad_runningActionsCount = 0;
var obj2031_onLoad_loopCount = 0;
obj2031_onLoad_actionGroup0();
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
	
$("#obj773").trigger('SCEventShow');
$("#obj892").trigger('SCEventShow');
$("#obj2031").trigger('SCEventShow');
$("#obj3160").trigger('SCEventShow');
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