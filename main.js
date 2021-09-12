noseX = 0;
noseY = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function getPoses(results){
    if (results.length > 0 ){
        console.log(results);
        noseX = results[0].pose.nose.x-50;
        noseY = results[0].pose.nose.y-0;
    }
}

function draw(){
    image(video, 0, 0, 400, 300);
    image(clown_nose, noseX, noseY, 100, 50);
}

function take_snapshot(){
    save("snapshot.png")
}