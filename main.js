status = "";
object_name = "";
function preload() {
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.position(430, 300);
    video = createCapture(VIDEO);
    video.size400, 300
    video.hide();
}

function draw() {
    image(video, 0, 0, 400, 300);
}

function start() {
    objectdetecter = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
    object_name = document.getElementById("input").value;
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
}