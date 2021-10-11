status="";

function setup(){
    canvas= createCanvas(640,300);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";

    
}

function modelLoaded(){
    console.log("Model is loaded");
    status= true;
    object_detector.detect(image_var, gotResult);
}

function gotResult(error,result){
    if(error){
        console.error(error);
    }
    console.log(result);
}