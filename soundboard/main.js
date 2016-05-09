function makeChop3Sound(){
    var chop3Sound = new Audio("chop3.mp3");
    chop3Sound.play();
}

function makeKick4Sound(){
    var kick4Sound = new Audio("kick4.mp3");
    kick4Sound.play();
}

function makePerc1Sound(){
    var perc1Sound = new Audio("perc1.mp3");
    perc1Sound.play();
}

function makeVox9Sound(){
    var vox9Sound = new Audio("vox9.mp3");
    vox9Sound.play();
}

$("#chop3").on("click", makeChop3Sound);
$("#kick4").on("click", makeKick4Sound);
$("#perc1").on("click", makePerc1Sound);
$("#vox9").on("click", makeVox9Sound);
$(document).keypress(delegateKeypress);

function delegateKeypress(event){
    if(event.keyCode == 100){
        $("#chop3").trigger("click");
    }
    if(event.keyCode == 102){
        $("#kick4").trigger("click");
    }
    if(event.keyCode == 106){
        $("#perc1").trigger("click");
    }
    if(event.keyCode == 107){
        $("#vox9").trigger("click");
    }
}