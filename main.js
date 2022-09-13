img="";
estatus="";
function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("estatus").innerHTML="estatus: detectando objetos";
}
function preload()
{
    img=loadImage("dog_cat.jpg")
}

function modelLoaded()
{
    console.log("¡modelo cargado!");
    estatus=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
}

function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("perro",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#06AA67");
    text("gato", 320, 120);
    noFill();
    stroke("#06AA67");
    rect(300, 90, 270, 320);

}
