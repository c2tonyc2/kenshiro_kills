$(document).ready(function () {

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
        class: className
    };
    console.log(kenshiro.id);
    actualMoveFunction = moveFunction(kenshiro, xMovement, yMovement);
    setInterval(actualMoveFunction, 30);
    return kenshiro;
}

function slidingKenshiroMoveFunctionGenerator(kenshiro, xMovement, yMovement) {
    var kenshiroElem = document.getElementById(kenshiro.id);
    var rect = kenshiroElem.getBoundingClientRect();
    var count = {x: rect.left, y: rect.top};
    return function() {
        console.log(rect.top, rect.left, xMovement);

        var elem = document.getElementById(kenshiro.id);
        var newX = elem.style.top + xMovement;
        elem.style.left = count.x + xMovement;
        elem.style.top = count.y + yMovement;
        
        var rect1 = elem.getBoundingClientRect();
        count.x = rect1.left;
        count.y = rect1.top;

        document.getElementById(kenshiro.id).style.left += yMovement;
    };
}

function newBouncingKenshiro(idName, className, imageName, x, y, width, height, moveFunction, rotation) {
    newKenshiro(idName, className, imageName, x, y, width, height, moveFunction, rotation);
}

newKenshiro("test1", "test", "img/kenshiro.png", 0, 0, 100, 100, 10, 0, slidingKenshiroMoveFunctionGenerator, false);
newKenshiro("test2", "test", "img/kenshiro.png", 1000, 100, 100, 100, -10, 0, slidingKenshiroMoveFunctionGenerator, false);


// func bouncingKenshiroMoveFunctionGenerator(kenshiro, xMovement, yMovement) {
//     var kenshiroElem = $(kenshiro.id);
//     var rect = kenshiroElem.getBoundingClientRect();
//     var coords = {top: rect.top, left: rect.left};
//     return func() {
//         kenshiroElem.css({left: coords.top + xMovement, top: coords.left + yMovement});

//     };
// }
});
