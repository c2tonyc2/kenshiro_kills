kenshiro.KenshiroImage = {
    WALKING_KENSHIRO = "walking_kenshiro.jpg",
    RUNNING_KENSHIRO = "running_kenshiro.jpg",
    PUNCHING_KENSHIRO = "punching_kenshiro.jpg",
    HEAD_KENSHIRO = "head_kenshiro.jpg"
}
// rotation is a boolean flag.
func newKenshiro(idName, className, imageName, x, y, width, height, moveFunction, rotation) {

    //create the element in the html
    addImage(imageName, idName, className, x, y, width, height, "kenshiro_end");

    var kenshiro = {
        id: idName,
        class: className,
        width: width,
        height: height,
        xMovement: xMovement,
        yMovement: yMovement,
    };

    setInterval(moveFunction, 30); //$("#image").css({left:value.val, top:value.val});

    return {
        id: idName,
        class: className
    };
}
