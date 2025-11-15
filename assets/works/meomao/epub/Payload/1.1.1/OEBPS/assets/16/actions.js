pubcoder.projectID = pubcoder.projectID || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.id = pubcoder.project.id || "7DBBEB3E39C1498B86E072C5CBBBE131";
pubcoder.project.title = pubcoder.project.title || "Meow Maow";
pubcoder.page.id = pubcoder.page.id || 2845;
pubcoder.page.title = pubcoder.page.title || "16";
pubcoder.page.number = pubcoder.page.number || 16;
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
var obj2849_onLoad_activeActionGroupIndex = -1;
var obj2849_onLoad_runningActionsCount = 0;
var obj2849_onLoad_loopCount = 0;
var obj2860_onLoad_activeActionGroupIndex = -1;
var obj2860_onLoad_runningActionsCount = 0;
var obj2860_onLoad_loopCount = 0;
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
		
obj2849_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2849_onLoad_activeActionGroupIndex = -1;
		$("#obj2849").trigger("obj2849_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2849) {
				console.warn("de-queueing event obj2849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2849_onLoad_activeActionGroupIndex = 0;
	

//	action: show 
//	selector: #obj2849
(function(){
	window.obj2849_onLoad_runningActionsCount = obj2849_onLoad_runningActionsCount + 1;

	var selector = "#obj2849";
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
					window.obj2849_onLoad_runningActionsCount = window.obj2849_onLoad_runningActionsCount - 1;
if (window.obj2849_onLoad_runningActionsCount < 0) {
	window.obj2849_onLoad_runningActionsCount = 0;
} else if (window.obj2849_onLoad_runningActionsCount == 0) {
	obj2849_onLoad_actionGroup1();
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
				window.obj2849_onLoad_runningActionsCount = window.obj2849_onLoad_runningActionsCount - 1;
if (window.obj2849_onLoad_runningActionsCount < 0) {
	window.obj2849_onLoad_runningActionsCount = 0;
} else if (window.obj2849_onLoad_runningActionsCount == 0) {
	obj2849_onLoad_actionGroup1();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2849_onLoad_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2849_onLoad_activeActionGroupIndex = -1;
		$("#obj2849").trigger("obj2849_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2849) {
				console.warn("de-queueing event obj2849." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2849").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2849_onLoad_activeActionGroupIndex = 1;
	





















};
obj2860_onLoad_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2860_onLoad_activeActionGroupIndex = -1;
		$("#obj2860").trigger("obj2860_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2860) {
				console.warn("de-queueing event obj2860." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2860").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2860_onLoad_activeActionGroupIndex = 0;
	












//	action: playAudio
//	target: obj2860 
playAudio_2862();
function playAudio_2862() {
	window.obj2860_onLoad_runningActionsCount = obj2860_onLoad_runningActionsCount + 1;
	var myAudio = $("#obj2860")[0];
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
		    window.obj2860_onLoad_runningActionsCount = window.obj2860_onLoad_runningActionsCount - 1;
if (window.obj2860_onLoad_runningActionsCount < 0) {
	window.obj2860_onLoad_runningActionsCount = 0;
} else if (window.obj2860_onLoad_runningActionsCount == 0) {
	obj2860_onLoad_actionGroup1();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2860_onLoad_runningActionsCount = window.obj2860_onLoad_runningActionsCount - 1;
if (window.obj2860_onLoad_runningActionsCount < 0) {
	window.obj2860_onLoad_runningActionsCount = 0;
} else if (window.obj2860_onLoad_runningActionsCount == 0) {
	obj2860_onLoad_actionGroup1();
}
	}
}









};
obj2860_onLoad_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2860_onLoad_activeActionGroupIndex = -1;
		$("#obj2860").trigger("obj2860_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2860) {
				console.warn("de-queueing event obj2860." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2860").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2860_onLoad_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj2849 
hide_2863();
function hide_2863() {
	var selector = "#obj2849";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2860_onLoad_runningActionsCount = obj2860_onLoad_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2860_onLoad_runningActionsCount = window.obj2860_onLoad_runningActionsCount - 1;
if (window.obj2860_onLoad_runningActionsCount < 0) {
	window.obj2860_onLoad_runningActionsCount = 0;
} else if (window.obj2860_onLoad_runningActionsCount == 0) {
	obj2860_onLoad_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2863(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2860_onLoad_runningActionsCount = window.obj2860_onLoad_runningActionsCount - 1;
if (window.obj2860_onLoad_runningActionsCount < 0) {
	window.obj2860_onLoad_runningActionsCount = 0;
} else if (window.obj2860_onLoad_runningActionsCount == 0) {
	obj2860_onLoad_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2860_onLoad_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2860_onLoad_activeActionGroupIndex = -1;
		$("#obj2860").trigger("obj2860_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2860) {
				console.warn("de-queueing event obj2860." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2860").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2860_onLoad_activeActionGroupIndex = 2;
	
//	action: goToPage
goToPage_2864();
function goToPage_2864() {
	window.obj2860_onLoad_runningActionsCount = obj2860_onLoad_runningActionsCount + 1;
	$("#anchor69")[0].click();
	window.obj2860_onLoad_runningActionsCount = window.obj2860_onLoad_runningActionsCount - 1;
if (window.obj2860_onLoad_runningActionsCount < 0) {
	window.obj2860_onLoad_runningActionsCount = 0;
} else if (window.obj2860_onLoad_runningActionsCount == 0) {
	obj2860_onLoad_actionGroup3();
}
}





















};
obj2860_onLoad_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2860_onLoad_activeActionGroupIndex = -1;
		$("#obj2860").trigger("obj2860_onLoad_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2860) {
				console.warn("de-queueing event obj2860." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2860").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2860_onLoad_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		















/*
 *
 *   obj2849: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2849_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2849_onLoad is still running");
	return;
}
var obj2849_onLoad_runningActionsCount = 0;
var obj2849_onLoad_loopCount = 0;
obj2849_onLoad_actionGroup0();
});




















/*
 *
 *   obj2860: Event Load
 *
 */
$(window).bind(PubCoder.Events.PageReady, function(event) {
	if (window.obj2860_onLoad_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2860_onLoad is still running");
	return;
}
var obj2860_onLoad_runningActionsCount = 0;
var obj2860_onLoad_loopCount = 0;
obj2860_onLoad_actionGroup0();
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
	
$("#obj2846").trigger('SCEventShow');
$("#obj2853").trigger('SCEventShow');
$("#obj2860").trigger('SCEventShow');
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