$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: false,
        easing: 'easeInOutCubic',
        showActiveTooltip: false,
		slidesNavigation: false,
		navigation: false,
		loopHorizontal: false,
		continuousHorizontal: false,
		controlArrows: false,
		keyboardScrolling: true,

	});
});



anime({
    targets: '.main',
    translateX: [0, 60],
    loop: true,
    easing: 'easeInOutExpo',
    opacity: [1, 0],
    endDelay: 50,
    duration: 2000,
    direction: 'alternate'
});


anime({
    targets: '.sub-ne',
    translateX: [-100, 60],
    loop: true,
    easing: 'easeInOutExpo',
    opacity: [1, 0],
    endDelay: 50,
    duration: 2000,
    direction: 'alternate'
});
