var KENSHIRO_CLASS = "kenshiro";
var HEAD_KENSHIRO = "url(img/kenshiro_head.png)";
var HEAD_KENSHIRO_HEIGHT = 130;
var HEAD_KENSHIRO_WIDTH = 90;
var WALKING_KENSHIRO = "url(img/kenshiro-walk.gif)";
var WALKING_KENSHIRO_HEIGHT = 290;
var WALKING_KENSHIRO_WIDTH = 150;
var VERTICAL_KENSHIRO = "url(img/kenshiro_vertical.png)";
var VERTICAL_KENSHIRO_HEIGHT = 440;
var VERTICAL_KENSHIRO_WIDTH = 195;
// KenshiroImage = {
//     WALKING_KENSHIRO = "walking_kenshiro.jpg",
//     RUNNING_KENSHIRO = "running_kenshiro.jpg",
//     PUNCHING_KENSHIRO = "punching_kenshiro.jpg",
//     HEAD_KENSHIRO = "head_kenshiro.jpg"
// }
// rotation is a boolean flag.
function newKenshiro(idName, className, imageName, x, y, width, height, xMovement, yMovement, moveFunction, rotation) {

    //create the element in the html
    addImage(imageName, idName, className, x, y, width, height, "kenshiro_end");

    var kenshiro = {
        id: idName,
        class: className,
        moveFunction: moveFunction
    };

    actualMoveFunction = moveFunction(kenshiro, xMovement, yMovement);
    setInterval(actualMoveFunction, 30);
    return kenshiro;
}

function slidingKenshiroMoveFunctionGenerator(kenshiro, xMovement, yMovement) {
    var kenshiroElem = document.getElementById(kenshiro.id);
    var rect = kenshiroElem.getBoundingClientRect();
    var count = {x: rect.left, y: rect.top};
    return function() {
        // console.log(rect.top, rect.left, xMovement);

        var elem = document.getElementById(kenshiro.id);
        if (elem == null) {
            return;
        }
        elem.style.left = count.x + xMovement;
        elem.style.top = count.y + yMovement;
        
        var rect1 = elem.getBoundingClientRect();
        count.x = rect1.left;
        count.y = rect1.top;
    };
}

function newBouncingKenshiro(idName, className, imageName, x, y, width, height, moveFunction, rotation) {
    newKenshiro(idName, className, imageName, x, y, width, height, moveFunction, rotation);
}

// newKenshiro("test1", "test", "img/kenshiro.png", 0, 0, 100, 100, 10, 0, slidingKenshiroMoveFunctionGenerator, false);
// newKenshiro("test3", "test", "url(img/kenshiro.png)", 1000, 100, 100, 100, -10, 0, slidingKenshiroMoveFunctionGenerator, false);

function bouncingKenshiroMoveFunctionGenerator(kenshiro, xMovement, yMovement) {
    var kenshiroElem = document.getElementById(kenshiro.id);
    var rect = kenshiroElem.getBoundingClientRect();
    var data = {x: rect.left, y: rect.top, x_reverse: false, y_reverse: false};
    return function() {
        // console.log(rect.top, rect.left, xMovement);
        // console.log(document.style.bottom);
        var clientHeight = document.body.clientHeight;
        var clientWidth = document.body.clientWidth;
        var elem = document.getElementById(kenshiro.id);
        var elem_top = parseInt(elem.style.top.split("px")[0]);
        var elem_left = parseInt(elem.style.left.split("px")[0]);
        var elem_width = elem.clientWidth;//pixelsToInteger(elem.clientWidth);//pixelsToInteger(elem.style.width);
        var elem_height = elem.clientHeight;//pixelsToInteger(elem.clientHeight);//pixelsToInteger(elem.style.height);
        // console.log(document.body.clientHeight, document.body.clientWidth);        
        // console.log(elem_left, elem_width);
        if (elem_top + elem_height > clientHeight) {
            data.y_reverse = true;
        } else if (elem_top < 0) {
            data.y_reverse = false;
        }

        if (elem_left + elem_width > clientWidth) {
            data.x_reverse = true;
        } else if (elem_left < 0) {
            data.x_reverse = false;
        }

        if (data.x_reverse) {
            elem.style.left = data.x - xMovement;
        } else {
            elem.style.left = data.x + xMovement;
        }

        if (data.y_reverse) {
            elem.style.top = data.y - yMovement;
        } else {
            elem.style.top = data.y + yMovement;
        }
        
        var rect1 = elem.getBoundingClientRect();
        data.x = rect1.left;
        data.y = rect1.top;
    };
}

function deleteKenshiroById(kenshiroId) {
    document.getElementById(kenshiroId).remove();
}

// newKenshiro("test1", "test", VERTICAL_KENSHIRO, 0, 0, VERTICAL_KENSHIRO_WIDTH, VERTICAL_KENSHIRO_HEIGHT, 10, 10, bouncingKenshiroMoveFunctionGenerator, false);

// newKenshiro("test2", "test", HEAD_KENSHIRO, 500, 290, HEAD_KENSHIRO_WIDTH, HEAD_KENSHIRO_HEIGHT, 10, 10, bouncingKenshiroMoveFunctionGenerator, false);

function pixelsToInteger(px) {
    return parseInt(px.split("px")[0]);
}
