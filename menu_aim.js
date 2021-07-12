var x1 = 0;
var y1 = 0;
var set = false;
var x2 = 0;
var y2 = 0;
var aSine = 0;
var angle = 0;

Math.degrees = function(radians) {
    return radians*(180/Math.PI);
}

var popup_menu_nav = document.querySelector('.js-popup-menu-nav');
popup_menu_nav.addEventListener('mousemove', function(e){
    if (!set) {
        x1 = e.pageX,
        y1 = e.pageY;
        set = true;
    }
    setTimeout(callback.bind(this, e), 300);
});

function getAngle(x1, y1, x2, y2) {
    var distY = y2 - y1;
    var distX = x2 - x1;
    var aTan = Math.abs(Math.atan2(distY, distX)* 180 / Math.PI);
    return aTan;
}

function callback(e) {
    x2 = e.pageX;
    y2 = e.pageY;
    angle = getAngle(x1, y1, x2, y2);
    set = false;
}
