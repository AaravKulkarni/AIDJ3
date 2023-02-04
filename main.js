marvel = "";
hp = "";
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload(){
    marvel = loadSound("Marvel Opening Theme.mp3");
    hp = loadSound("Harry Potter Theme Song.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log('PoseNet has started');
}

function gotPoses(results){

    if(results.length > 0){
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;


        console.log("Left Wrist X = "+leftWristX);
        console.log("Left Wrist Y = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("Right Wrist X = "+rightWristX);
        console.log("Right Wrist Y = "+rightWristY);
    }


}

function draw(){
    image(video, 0, 0, 600, 500);
}