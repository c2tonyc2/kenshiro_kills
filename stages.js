function horizontalKenshiroStage() {
    var clientHeight = document.body.clientHeight;
    var clientWidth = document.body.clientWidth;

    var startingHeightTop = 0;
    var startingHeightBottom = clientWidth - 400;

    var topY = 0;
    var bottomY = clientHeight - WALKING_KENSHIRO_HEIGHT;

    var count = 1;
    var top = true;
    while (count < 50) {
        if (count % 2 == 1) {
            var y = topY;
            if (!top) {
                y = bottomY;
                top = true;
            } else {
                y = topY;
                top = false;
            }
            newKenshiro(count.toString(), KENSHIRO_CLASS, WALKING_KENSHIRO, -WALKING_KENSHIRO_WIDTH * (1.1 * count), y, WALKING_KENSHIRO_WIDTH, WALKING_KENSHIRO_HEIGHT, 10, 0, slidingKenshiroMoveFunctionGenerator, false);
        }
        count += 1;
    }
}

horizontalKenshiroStage();
var elems = document.getElementsByClassName(KENSHIRO_CLASS);
// for (var i=0; i<elems.length;i++) {
//     var elem = elems[i];
//     console.log(elem.id);
//     elems[i].addEventListener("click", function() {
//         console.log("atatatata", elem.id);
//         deleteKenshiroById(elem.id);
//     });
// }
console.log("over")