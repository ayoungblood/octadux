/*global console, document */
/*global $ */
/* eslint no-console: "off" */

function buildUi() {
    "use strict";
    console.log("buildUi start");
    
    
    $(function () {
        $(".dial").knob({
            'min': -100,
            'max': 100,
            'step': 1,
            'angleOffset': 225,
            'angleArc': 270,
            'cursor': true,
            'thickness': 0.25,
            'lineCap': "round",
            'width': 56,
            'height': 56,
            'displayPrevious': true,
            'fgColor': "#007fff",
            'inputColor': "#007fff",
            'bgColor': "#181818"
        });
    });
}

function dummyMeterUpdate() {
    $('.ui-section-header meter').attr('value', -100*Math.random());
}

$(document).ready(function () {
    "use strict";
    console.log("main.js start");
    buildUi();
    setInterval(dummyMeterUpdate, 50);
});
