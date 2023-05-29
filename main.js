cancion_1 = "";
cancion_2 = "";

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function preload(){
    cancion_1= loadSound("dance_monkey.mp3");
    cancion_2 =loadSound("never_gonna_give_you_up.mp3");
}

function draw(){
    image(video, 0, 0, 300, 300);
}