kenshiro.KenshiroImage = {
    WALKING_KENSHIRO = "walking_kenshiro.jpg",
    RUNNING_KENSHIRO = "running_kenshiro.jpg",
    PUNCHING_KENSHIRO = "punching_kenshiro.jpg",
    HEAD_KENSHIRO = "head_kenshiro.jpg"
}
// rotation is a boolean flag.
func newKenshiro(id_name, class_name, image_name, width, height, xMovement, yMovement, rotation) {

    return {
        id: id_name,
        class: class_name,
        width: width,
        height: height,
        xMovement: xMovement,
        yMovement: yMovement,
        rotation: rotation
    }
}