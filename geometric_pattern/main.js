var NUM_CIRCLES = 12;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;
var body = document.body,
html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
    circleDiameter = width/NUM_CIRCLES;
    circleRadius = circleDiameter/2;
    
    rVal = 255;
    gVal = 0;
    bVal = 0;
}
function keyPressed(){
    if(keyCode === 115 || keyCode === 83){
        saveCanvas('geometricPattern', 'png');
    }
    return false;
}
function draw(){
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
            stroke(color(rVal - 50, gVal + 30, bVal + 40));
            ellipse(x, y, circleDiameter, circleDiameter);
            x = x + circleDiameter;
        }
        y = y - circleRadius;
        alternatingRow = !alternatingRow;
        rVal = (rVal + 10)%256;
        gVal = (gVal + 25)%256;
        bVal = (bVal + 100)%256;
    }
}