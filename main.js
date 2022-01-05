rightWristX=0;
rightWristY=0;
leftWristX =0;
leftWristY =0;
song1="";
song2="";
function preload(){
song1=loadSound("Permission to Dance.mp3");
song2=loadSound("bad habits.mp3");

}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    PoseNet=ml5.poseNet(video,modelLoaded);
    PoseNet.on('pose', gotResults);
}
function draw(){
image(video,0,0,600,500);
}
function modelLoaded(){
    console.log("modelLoaded");
    
}
function gotResults(results){
if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);
    console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
}


}