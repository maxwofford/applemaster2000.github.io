var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup(){
    createCanvas(480,600);
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/2;
}
function keyPressed(){
    if(keyCode === 115 || keyCode === 83){
        saveCanvas('geometricPattern', 'png');
    }
    return false;
}
function draw(){
    rVal = 255;
    gVal = 0;
    bVal = 0;
    
    var alternatingRow = false;
    
    var y = height;
    while(y >= 0){
        var x;
        
        if(alternatingRow){
            x = circleRadius;
        }
        else{
            x = 0;
        }
        while(x <= width){
            fill(color(rVal, gVal, bVal));
            stroke(color(rVal, gVal, bVal));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
        y = y - circleRadius;
        alternatingRow = !alternatingRow;
        rVal = rVal - 1;
        gVal = gVal + 5;
        bVal = bVal + 2;
    }
}