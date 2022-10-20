function setup() 
{
    video = createCapture(VIDEO);
    video.size(450, 500);

    canvas = createCanvas(700, 390);
    canvas.position(450, 150);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses)
}
function draw()
{
    background("#969A97");
}
function modelLoaded(){
    console.log("PoseNet Is Initialized!");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}