	$(document).ready(function () {
	    $('#latest-event').startTreadmill({
	        runAfterPageLoad: true
	        , direction: "up"
	        , speed: "medium"
	        , viewable: 3
	        , pause: false
	    });
	});