// Clickables

const blen1 = $('#Blen1');
const blen2 = $('#Blen2');
const blen3 = $('#Blen3');
const blen4 = $('#Blen4');
const blen5 = $('#Blen5');

var sB1 = 0;
var sB2 = 0;
var sB3 = 0;
var sB4 = 0;
var sB5 = 0;

blen1.click(function(e) {
    if (sB1 == 0) {
        blen1.attr("src","media/showcase/BlenG1C.png");
        sB1 = 1;
    }
    else {
        blen1.attr("src","media/showcase/BlenG1.png");
        sB1 = 0;
    }
});

blen3.click(function(e) {
    if (sB3 == 0) {
        blen3.attr("src","media/showcase/BlenG3C.png");
        sB3 = 1;
    }
    else {
        blen3.attr("src","media/showcase/BlenG3.png");
        sB3 = 0;
    }
});

blen4.click(function(e) {
    if (sB4 == 0) {
        blen4.attr("src","media/showcase/BlenG4C.png");
        sB4 = 1;
    }
    else {
        blen4.attr("src","media/showcase/BlenG4.png");
        sB4 = 0;
    }
});

blen5.click(function(e) {
    if (sB5 == 0) {
        blen5.attr("src","media/showcase/BlenG5C.png");
        sB5 = 1;
    }
    else {
        blen5.attr("src","media/showcase/BlenG5.png");
        sB5 = 0;
    }
});

window.addEventListener("keydown", function(e) {
    var press = new Audio('sound/Lizard.mp3');
    press.play();
    press.volume = 1;
});

$('#string01').mouseover(function(e) {
    $('#blank').html("Header");
});

$('#string02').mouseover(function(e) {
    $('#blank').html("About Me");
});

$('#string03').mouseover(function(e) {
    $('#blank').html("First Year");
});

$('#string04').mouseover(function(e) {
    $('#blank').html("Second Year");
});

$('#string05').mouseover(function(e) {
    $('#blank').html("Comic");
});

$('#string06').mouseover(function(e) {
    $('#blank').html("Final Notes");
});

$('#string07').mouseover(function(e) {
    $('#blank').html("Character Design");
});

$('#string08').mouseover(function(e) {
    $('#blank').html("Blender Character Design");
});

$('#string09').mouseover(function(e) {
    $('#blank').html("Enviromental Design");
});

$('#string10').mouseover(function(e) {
    $('#blank').html("Enviromental Design Continued");
});

var glowOp = 1;
var glowDir = "DOWN";

function glowPulse() {
    var glow = document.querySelectorAll(".glow");
    if (glowDir == "UP") {
        glowOp += 0.01;
        for (var i = 0; i < glow.length; i++) {
            glow[i].style.setProperty("opacity",glowOp);
        }

        if (glowOp >= 1) {
            glowDir = "DOWN";
        }
    }
    else {
        glowOp -= 0.01;
        for (var i = 0; i < glow.length; i++) {
            glow[i].style.setProperty("opacity",glowOp);
        }

        if (glowOp <= 0) {
            glowDir = "UP";
        }
    }
}

setInterval(glowPulse, 25);