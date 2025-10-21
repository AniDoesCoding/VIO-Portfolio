//Page States

var stateIp1 = 0;
var stateIp2 = 1;
var stateIp3 = 0;

var stateIp1C1 = 0;
var stateIp1C2 = 1;
var stateIp2C1 = 0;
var stateIp2C2 = 1;
var stateIp3C1 = 0;

var stateIM = 0;
var stateP4 = 0;
var stateCard = 0;
var stateWindow = 0;

var glowOp = 1;
var glowDir = "DOWN";

var stateComic = 1;

//Audio Initialise

let backMusic1 = new Audio('../sound/storyBack.mp3');
let backMusic2 = new Audio('../sound/endBack.mp3');
let talk1 = new Audio('../sound/a1.MP3');
let talk2 = new Audio('../sound/a2.MP3');
let talk3 = new Audio('../sound/a3.MP3');
let talk4 = new Audio('../sound/a4.MP3');
let talk5 = new Audio('../sound/a5.MP3');
let talk6 = new Audio('../sound/a6.MP3');
let talk7 = new Audio('../sound/a7.MP3');
let talk8 = new Audio('../sound/a8.MP3');
let talk9 = new Audio('../sound/a9.MP3');
let talk10 = new Audio('../sound/a10.MP3');
let talk11 = new Audio('../sound/a11.MP3');
let talk18 = new Audio('../sound/a18.MP3');

let stateBack = 0;
let stateAmbient = 0;
let stateMute = 0;

backMusic1.volume = 0.1;
backMusic2.volume = 0.1;

backMusic1.loop = true;
backMusic2.loop = true;

//On Click

$('body').click(function(e) {
    var x, y, width, height;
    x = e.pageX;  
    y = e.pageY; 
    width = $('body').width();
    height = $('body').height();
    xPoint = x / width;
    yPoint = y / height;

    console.log(x + "+" + y);
    console.log(width + " by " + height);
    console.log("Location: " + xPoint + " " + yPoint);

   clickCheck(xPoint, yPoint); 
})

//Click checker

function clickCheck(xPoint, yPoint) {
    //ip1B1
    if ((xPoint > 0.6 && xPoint < 0.685) && (yPoint > 0.6 && yPoint < 0.63)) {
        switch (stateIp1) {
            case 0: {
                stateIp1 = 2;
                $("#ip1P").attr("src","../media/ip1TextC.png");
                break;
            }
            case 1: {
                stateIp1 = 3;
                $("#ip1P").attr("src","../media/ip1TextD.png");
                break;
            }
            case 2: {
                stateIp1 = 0;
                $("#ip1P").attr("src","../media/ip1TextA.png");
                break;
            }
            case 3: {
                stateIp1 = 1;
                $("#ip1P").attr("src","../media/ip1TextA.png");
                break;
            }
        }
    }

    //ip1B2
    if ((xPoint > 0.81 && xPoint < 0.895) && (yPoint > 0.6 && yPoint < 0.63)) {
        var c11 = document.querySelectorAll(".C11");
        var c12 = document.querySelectorAll(".C12");
        switch (stateIp1) {
            case 0: {
                stateIp1 = 1;
                $("#ip1P").attr("src","../media/ip1TextA.png");
                break;
            }
            case 1: {
                stateIp1 = 0;
                $("#ip1P").attr("src","../media/ip1TextA.png");
                break;
            }
            case 2: {
                stateIp1 = 3;
                $("#ip1P").attr("src","../media/ip1TextD.png");
                break;
            }
            case 3: {
                stateIp1 = 2;
                $("#ip1P").attr("src","../media/ip1TextC.png");
                break;
            }
        }

        switch (stateIp1C1) {
            case 1: {
                stateIp1C1 = 0;
                c11[0].style.setProperty("filter","brightness(1)");
                c11[1].style.setProperty("filter","brightness(1)");
                stateIp1C2 = 0;
                c12[0].style.setProperty("filter","brightness(0.5)");
                c12[1].style.setProperty("filter","brightness(0.5)");
                break;
            }
            case 0: {
                stateIp1C1 = 1;
                c11[0].style.setProperty("filter","brightness(0.5)");
                c11[1].style.setProperty("filter","brightness(0.5)");
                stateIp1C2 = 1;
                c12[0].style.setProperty("filter","brightness(1)");
                c12[1].style.setProperty("filter","brightness(1)");
                break;
            }
        }
    }

    //ip2
    if ((xPoint > 0.024 && xPoint < 0.485) && (yPoint > 0.62 && yPoint < 0.71)) {
        switch (stateIp2) {
            case 0: {
                stateIp2 = 2;
                $("#ip2P").attr("src","../media/ip2TextC.png");
                break;
            }
            case 1: {
                stateIp2 = 3;
                $("#ip2P").attr("src","../media/ip2TextD.png");
                break;
            }
            case 2: {
                stateIp2 = 0;
                $("#ip2P").attr("src","../media/ip2TextA.png");
                break;
            }
            case 3: {
                stateIp2 = 1;
                $("#ip2P").attr("src","../media/ip2TextA.png");
                break;
            }
        }
    }

    //ip3
    if ((xPoint > 0.68 && xPoint < 0.8) && (yPoint > 0.7 && yPoint < 0.76)) {
        switch (stateIp3) {
            case 0: {
                stateIp3 = 1;
                $("#ip3P").attr("src","../media/ip3TextB.png");
                $("#ip3B").attr("src","../media/ip3B2.png");
                break;
            }
            case 1: {
                stateIp3 = 0;
                $("#ip3P").attr("src","../media/ip3TextA.png");
                $("#ip3B").attr("src","../media/ip3B1.png");
                break;
            }
        }
    }

    //ip1c1
    if ((xPoint > 0.007 && xPoint < 0.3) && (yPoint > 0.55 && yPoint < 0.61)) {
        var c11 = document.querySelectorAll(".C11");
        var c12 = document.querySelectorAll(".C12");
        switch (stateIp1C1) {
            case 0: {
                stateIp1C1 = 1;
                c11[0].style.setProperty("filter","brightness(1)");
                c11[1].style.setProperty("filter","brightness(1)");
                stateIp1C2 = 0;
                c12[0].style.setProperty("filter","brightness(0.5)");
                c12[1].style.setProperty("filter","brightness(0.5)");
                break;
            }
            case 1: {
                stateIp1C1 = 0;
                c11[0].style.setProperty("filter","brightness(0.5)");
                c11[1].style.setProperty("filter","brightness(0.5)");
                stateIp1C2 = 1;
                c12[0].style.setProperty("filter","brightness(1)");
                c12[1].style.setProperty("filter","brightness(1)");
                break;
            }
        }

        switch (stateIp1) {
            case 0: {
                stateIp1 = 1;
                $("#ip1P").attr("src","../media/ip1TextA.png");
                break;
            }
            case 1: {
                stateIp1 = 0;
                $("#ip1P").attr("src","../media/ip1TextA.png");
                break;
            }
            case 2: {
                stateIp1 = 3;
                $("#ip1P").attr("src","../media/ip1TextC.png");
                break;
            }
            case 3: {
                stateIp1 = 2;
                $("#ip1P").attr("src","../media/ip1TextD.png");
                break;
            }
        }
    }

    //ip1c2
    if ((xPoint > 0.3 && xPoint < 0.5) && (yPoint > 0.57 && yPoint < 0.61)) {
        var c11 = document.querySelectorAll(".C11");
        var c12 = document.querySelectorAll(".C12");
        switch (stateIp1C2) {
            case 0: {
                stateIp1C2 = 1;
                c12[0].style.setProperty("filter","brightness(1)");
                c12[1].style.setProperty("filter","brightness(1)");
                stateIp1C1 = 0;
                c11[0].style.setProperty("filter","brightness(0.5)");
                c11[1].style.setProperty("filter","brightness(0.5)");
                break;
            }
            case 1: {
                stateIp1C2 = 0;
                c12[0].style.setProperty("filter","brightness(0.5)");
                c12[1].style.setProperty("filter","brightness(0.5)");
                stateIp1C1 = 1;
                c11[0].style.setProperty("filter","brightness(1)");
                c11[1].style.setProperty("filter","brightness(1)");
                break;
            }
        }

        switch (stateIp1) {
            case 0: {
                stateIp1 = 1;
                $("#ip1P").attr("src","../media/ip1TextA.png");
                break;
            }
            case 1: {
                stateIp1 = 0;
                $("#ip1P").attr("src","../media/ip1TextA.png");
                break;
            }
            case 2: {
                stateIp1 = 3;
                $("#ip1P").attr("src","../media/ip1TextC.png");
                break;
            }
            case 3: {
                stateIp1 = 2;
                $("#ip1P").attr("src","../media/ip1TextD.png");
                break;
            }
        }
    }

    //ip2c1
    if ((xPoint > 0.48 && xPoint < 0.77) && (yPoint > 0.65 && yPoint < 0.71)) {
        var c21 = document.querySelectorAll(".C21");
        var c22 = document.querySelectorAll(".C22");
        switch (stateIp2C1) {
            case 0: {
                stateIp2C1 = 1;
                c21[0].style.setProperty("filter","brightness(1)");
                c21[1].style.setProperty("filter","brightness(1)");
                stateIp2C2 = 0;
                c22[0].style.setProperty("filter","brightness(0.5)");
                c22[1].style.setProperty("filter","brightness(0.5)");
                break;
            }
            case 1: {
                stateIp2C1 = 0;
                c21[0].style.setProperty("filter","brightness(0.5)");
                c21[1].style.setProperty("filter","brightness(0.5)");
                stateIp2C2 = 1;
                c22[0].style.setProperty("filter","brightness(1)");
                c22[1].style.setProperty("filter","brightness(1)");
                break;
            }
        }

        switch (stateIp2) {
            case 0: {
                stateIp2 = 1;
                $("#ip2P").attr("src","../media/ip2TextA.png");
                break;
            }
            case 1: {
                stateIp2 = 0;
                $("#ip2P").attr("src","../media/ip2TextA.png");
                break;
            }
            case 2: {
                stateIp2 = 3;
                $("#ip2P").attr("src","../media/ip2TextD.png");
                break;
            }
            case 3: {
                stateIp2 = 2;
                $("#ip2P").attr("src","../media/ip2TextC.png");
                break;
            }
        }
    }

    //ip2c2
    if ((xPoint > 0.74 && xPoint < 1) && (yPoint > 0.63 && yPoint < 0.70)) {
        var c21 = document.querySelectorAll(".C21");
        var c22 = document.querySelectorAll(".C22");
        switch (stateIp2C2) {
            case 0: {
                stateIp2C2 = 1;
                c22[0].style.setProperty("filter","brightness(1)");
                c22[1].style.setProperty("filter","brightness(1)");
                stateIp2C1 = 0;
                c21[0].style.setProperty("filter","brightness(0.5)");
                c21[1].style.setProperty("filter","brightness(0.5)");
                break;
            }
            case 1: {
                stateIp2C2 = 0;
                c22[0].style.setProperty("filter","brightness(0.5)");
                c22[1].style.setProperty("filter","brightness(0.5)");
                stateIp2C1 = 1;
                c21[0].style.setProperty("filter","brightness(1)");
                c21[1].style.setProperty("filter","brightness(1)");
                break;
            }
        }

        switch (stateIp2) {
            case 0: {
                stateIp2 = 1;
                $("#ip2P").attr("src","../media/ip2TextA.png");
                break;
            }
            case 1: {
                stateIp2 = 0;
                $("#ip2P").attr("src","../media/ip2TextA.png");
                break;
            }
            case 2: {
                stateIp2 = 3;
                $("#ip2P").attr("src","../media/ip2TextD.png");
                break;
            }
            case 3: {
                stateIp2 = 2;
                $("#ip2P").attr("src","../media/ip2TextC.png");
                break;
            }
        }
    }

    //ip3c
    if ((xPoint > 0.049 && xPoint < 0.5) && (yPoint > 0.72 && yPoint < 0.78)) {
        switch (stateIp3C1) {
            case 0: {
                stateIp3C1 = 1;
                $(".C3").attr("src","../media/ip3Char2.png");
                $(".C3G").attr("src","../media/ip3Char2G.png");
                break;
            }
            case 1: {
                stateIp3C1 = 2;
                $(".C3").attr("src","../media/ip3Char1.png");
                $(".C3G").attr("src","../media/ip3Char1G.png");
                break;
            }
            case 2: {
                stateIp3C1 = 0;
                $(".C3").attr("src","../media/ip3Char.png");
                $(".C3G").attr("src","../media/ip3CharG.png");
                break;
            }
        }
    }

    //AM
    if ((xPoint > 0 && xPoint < 0.6) && (yPoint > 0.9 && yPoint < 1)) {
        switch (stateIM) {
            case 0: {
                stateIM = 1;
                $("#AMP").attr("src","../media/AMp2.png");
                $("#AMI").attr("src","../media/AMi2.png");
                break;
            }
            case 1: {
                stateIM = 2;
                $("#AMP").attr("src","../media/AMp3.png");
                $("#AMI").attr("src","../media/AMi3.png");
                break;
            }
            case 2: {
                stateIM = 3;
                $("#AMP").attr("src","../media/AMp4.png");
                $("#AMI").attr("src","../media/AMi1.png");
                break;
            }
            case 3: {
                stateIM = 0;
                $("#AMP").attr("src","../media/AMp1.png");
                $("#AMI").attr("src","../media/AMi4A.png");
                break;
            }
        }
    }

    //City
    if ((xPoint > 0 && xPoint < 0.33) && (yPoint > 0.32 && yPoint < 0.42)) {
        if (stateCard == 0) {
            stateCard = 1;
            $("#card").attr("src","../media/cityI1.png");
        }
        else {
            stateCard = 0;
            $("#card").attr("src","../media/cityI0.png");
        }
    }

    if ((xPoint > 0.34 && xPoint < 0.66) && (yPoint > 0.32 && yPoint < 0.42)) {
        if (stateCard == 0) {
            stateCard = 2;
            $("#card").attr("src","../media/cityI2.png");
        }
        else {
            stateCard = 0;
            $("#card").attr("src","../media/cityI0.png");
        }
    }

    if ((xPoint > 0.67 && xPoint < 1) && (yPoint > 0.32 && yPoint < 0.42)) {
        if (stateCard == 0) {
            stateCard = 3;
            $("#card").attr("src","../media/cityI3.png");
        }
        else {
            stateCard = 0;
            $("#card").attr("src","../media/cityI0.png");
        }
    }

    //lab
    if ((xPoint > 0.75 && xPoint < 1) && (yPoint > 0.42 && yPoint < 0.46)) {
        switch (stateWindow) {
            case 0: {
                $("#labS").attr("src","../media/labS2.png");
                stateWindow++;
                break;
            }
            case 1: {
                $("#labS").attr("src","../media/labS3.png");
                stateWindow++;
                break;
            }
            case 2: {
                $("#labS").attr("src","../media/labS4.png");
                stateWindow++;
                break;
            }
            case 3: {
                $("#labS").attr("src","../media/labS5.png");
                stateWindow++;
                break;
            }
            case 4: {
                $("#labS").attr("src","../media/labS6.png");
                stateWindow++;
                break;
            }
            case 5: {
                $("#labS").attr("src","../media/labS7.png");
                stateWindow++;
                break;
            }
            case 6: {
                $("#labS").attr("src","../media/labS8.png");
                stateWindow++;
                break;
            }
            case 7: {
                $("#labS").attr("src","../media/labS9.png");
                stateWindow++;
                break;
            }
            case 8: {
                $("#labS").attr("src","../media/labS10.png");
                stateWindow++;
                break;
            }
            case 9: {
                $("#labS").attr("src","../media/labS1.png");
                stateWindow = 0;
                break;
            }
        }
    }
}

//Comic Interactivity

$("#prev").click(function(e){
    console.log("You know what that means?");

    if (stateComic > 1) stateComic--;
    console.log(stateComic);

    if (stateComic <= 1) $("#prev").attr("disabled","disabled");
    $("#next").removeAttr("disabled");

    changePage();
    setTimeout(playAudio, 100);
})

$("#next").click(function(e){
    console.log("FISH");

    if (stateComic < 18) stateComic++;
    console.log(stateComic);

    if (stateComic >= 18) $("#next").attr("disabled","disabled");
    $("#prev").removeAttr("disabled");

    changePage();
    setTimeout(playAudio, 100);
})

$("#interMute").click(function(e){
    if (stateMute == 0) {
        playAudio();
        stateMute = 1;
        $("#interMute").attr("src","../media/mute_G.png");
    }
    else {
        pauseAll();
        stateMute = 0;
        $("#interMute").attr("src","../media/mute_R.png");
    }
})

function changePage() {
    switch (stateComic) {
        case 1: {
            $("#comicView").attr("src","../media/f1.gif");
            $("#text1").attr("src","../media/t0.png");
            $("#text2").attr("src","../media/t1.png");
            break;
        }
        case 2: {
            $("#comicView").attr("src","../media/f2.gif");
            $("#text1").attr("src","../media/t2.png");
            $("#text2").attr("src","../media/t3.png");
            break;
        }
        case 3: {
            $("#comicView").attr("src","../media/f3.gif");
            $("#text1").attr("src","../media/t4.png");
            $("#text2").attr("src","../media/t5.png");
            break;
        }
        case 4: {
            $("#comicView").attr("src","../media/f4.gif");
            $("#text1").attr("src","../media/t6.png");
            $("#text2").attr("src","");
            break;
        }
        case 5: {
            $("#comicView").attr("src","../media/f5.gif");
            $("#text1").attr("src","../media/t7.png");
            $("#text2").attr("src","");
            break;
        }
        case 6: {
            $("#comicView").attr("src","../media/f6.gif");
            $("#text1").attr("src","../media/t8.png");
            $("#text2").attr("src","../media/t9.png");
            break;
        }
        case 7: {
            $("#comicView").attr("src","../media/f7.gif");
            $("#text1").attr("src","../media/t10.png");
            $("#text2").attr("src","../media/t11.png");
            break;
        }
        case 8: {
            $("#comicView").attr("src","../media/f8.gif");
            $("#text1").attr("src","../media/t12.png");
            $("#text2").attr("src","../media/t13.png");
            break;
        }
        case 9: {
            $("#comicView").attr("src","../media/f9.gif");
            $("#text1").attr("src","../media/t14.png");
            $("#text2").attr("src","");
            break;
        }
        case 10: {
            $("#comicView").attr("src","../media/f10.png");
            $("#text1").attr("src","../media/t15.png");
            $("#text2").attr("src","../media/t16.png");
            break;
        }
        case 11: {
            $("#comicView").attr("src","../media/f11.gif");
            $("#text1").attr("src","../media/t17.png");
            $("#text2").attr("src","../media/t18.png");
            break;
        }
        case 12: {
            $("#comicView").attr("src","../media/f12.png");
            $("#text1").attr("src","");
            $("#text2").attr("src","");
            break;
        }
        case 13: {
            $("#comicView").attr("src","../media/f13.png");
            $("#text1").attr("src","");
            $("#text2").attr("src","");
            break;
        }
        case 14: {
            $("#comicView").attr("src","../media/f14.png");
            $("#text1").attr("src","");
            $("#text2").attr("src","");
            break;
        }
        case 15: {
            $("#comicView").attr("src","../media/f15.png");
            $("#text1").attr("src","");
            $("#text2").attr("src","");
            break;
        }
        case 16: {
            $("#comicView").attr("src","../media/f16.png");
            $("#text1").attr("src","");
            $("#text2").attr("src","");
            break;
        }
        case 17: {
            $("#comicView").attr("src","../media/f17.png");
            $("#text1").attr("src","");
            $("#text2").attr("src","");
            break;
        }
        case 18: {
            $("#comicView").attr("src","../media/f18.png");
            $("#text1").attr("src","../media/t19.png");
            $("#text2").attr("src","../media/t20.png");
            break;
        }
    }
}

function playAudio() {
    pauseAll();
    stateMute = 1;
    $("#interMute").attr("src","../media/mute_G.png");

    switch (stateComic) {
        case 1: {
            if (stateBack != 1) {
                backMusic1.play();
                backMusic2.pause();
                stateBack = 1;
            }
            talk1.play();
            break;
        }
        case 2: {
            if (stateBack != 1) {
                backMusic1.play();
                backMusic2.pause();
                stateBack = 1;
            }
            talk2.play();
            break;
        }
        case 3: {
            if (stateBack != 1) {
                backMusic1.play();
                backMusic2.pause();
                stateBack = 1;
            }
            talk3.play();
            break;
        }
        case 4: {
            if (stateBack != 1) {
                backMusic1.play();
                backMusic2.pause();
                stateBack = 1;
            }
            talk4.play();
            break;
        }
        case 5: {
            if (stateBack != 1) {
                backMusic1.play();
                backMusic2.pause();
                stateBack = 1;
            }
            talk5.play();
            break;
        }
        case 6: {
            if (stateBack != 1) {
                backMusic1.play();
                backMusic2.pause();
                stateBack = 1;
            }
            talk6.play();
            break;
        }
        case 7: {
            if (stateBack != 1) {
                backMusic1.play();
                backMusic2.pause();
                stateBack = 1;
            }
            talk7.play();
            break;
        }
        case 8: {
            if (stateBack != 1) {
                backMusic1.play();
                backMusic2.pause();
                stateBack = 1;
            }
            talk8.play();
            break;
        }
        case 9: {
            if (stateBack != 1) {
                backMusic1.play();
                backMusic2.pause();
                stateBack = 1;
            }
            talk9.play();
            break;
        }
        case 10: {
            if (stateBack != 1) {
                backMusic1.play();
                backMusic2.pause();
                stateBack = 1;
            }
            talk10.play();
            break;
        }
        case 11: {
            if (stateBack != 1) {
                backMusic1.play();
                backMusic2.pause();
                stateBack = 1;
            }
            talk11.play();
            break;
        }
        case 12: {
            if (stateBack != 2) {
                backMusic2.play();
                backMusic1.pause();
                stateBack = 2;
            }
            break;
        }
        case 13: {
            if (stateBack != 2) {
                backMusic2.play();
                backMusic1.pause();
                stateBack = 2;
            }
            break;
        }
        case 14: {
            if (stateBack != 2) {
                backMusic2.play();
                backMusic1.pause();
                stateBack = 2;
            }
            break;
        }
        case 15: {
            if (stateBack != 2) {
                backMusic2.play();
                backMusic1.pause();
                stateBack = 2;
            }
            break;
        }
        case 16: {
            if (stateBack != 2) {
                backMusic2.play();
                backMusic1.pause();
                stateBack = 2;
            }
            break;
        }
        case 17: {
            if (stateBack != 2) {
                backMusic2.play();
                backMusic1.pause();
                stateBack = 2;
            }
            break;
        }
        case 18: {
            if (stateBack != 2) {
                backMusic2.play();
                backMusic1.pause();
                stateBack = 2;
            }
            talk18.play();
            break;
        }
    }
}

function pauseAll() {
    backMusic1.pause();
    backMusic2.pause();

    talk1.pause();
    talk2.pause();
    talk3.pause();
    talk4.pause();
    talk5.pause();
    talk6.pause();
    talk7.pause();
    talk8.pause();
    talk9.pause();
    talk10.pause();
    talk11.pause();
    talk18.pause();

    stateBack = 0;
}

//spider monkey visibility

var c3 = document.querySelector(".C3");
var base;

function setProperty(visibility) {
    base = c3.style.getPropertyValue('--flickerstrength');

    if (base < visibility) {
        base = (((base * 100) + 1) / 100);
        c3.style.setProperty('--flickerstrength',base);
    }

    if (base > visibility){
        base = (((base * 100) - 1) / 100);
        c3.style.setProperty('--flickerstrength',base);
    }

    if (Math.floor(base * 100) == Math.floor(visibility * 100)) {
        setTimeout(changeAnimationTime, 100);
    }
    else {
        setTimeout(setProperty(visibility),100);
    }
}

function changeAnimationTime() {
    var visibility = Math.random();
    if (visibility < 0.5) visibility += 0.5;
    if (visibility < 0.75) visibility += 0.25;
    setTimeout(setProperty(visibility),100);
}

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

function posterSwitch() {
    if (stateIM == 3) {
        switch (stateP4) {
            case 0: {
                stateP4 = 1;
                $("#AMI").attr("src","../media/AMi4B.png");
                break;
            }
            case 1: {
                stateP4 = 2;
                $("#AMI").attr("src","../media/AMi4C.png");
                break;
            }
            case 2: {
                stateP4 = 3;
                $("#AMI").attr("src","../media/AMi4D.png");
                break;
            }
            case 3: {
                stateP4 = 0;
                $("#AMI").attr("src","../media/AMi4A.png");
                break;
            }
        }
    }
    
    switch (stateIM) {
            case 0: {
                $("#AMI").attr("src","../media/AMi1.png");
                break;
            }
            case 1: {
                $("#AMI").attr("src","../media/AMi2.png");
                break;
            }
            case 2: {
                $("#AMI").attr("src","../media/AMi3.png");
                break;
            }
    }

}

setTimeout(changeAnimationTime, 100);
setInterval(glowPulse, 25);
setInterval(posterSwitch, 1000);