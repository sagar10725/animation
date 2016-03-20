'use strict';
window.onload = function () {
    document.getElementById('btnStart').onclick = start;
    document.getElementById('btnStop').onclick = stop;
    document.getElementById('fontSize').onchange = size;
    document.getElementById('chkbox').onchange = turbo;
    
};

var timer;
var index = 0;
var speed = 250;

function start() {
    document.getElementById('btnStart').disabled = true;
    document.getElementById('animation').disabled = true;
    document.getElementById('btnStop').disabled = false;
    document.getElementById('txtarea').style.color = "";
    /*if(document.getElementById('animation').value == 'JUGGLER'){
        document.getElementById('txtarea').value = JUGGLER;
    }*/
    var animationType = document.getElementById('animation').value;
    clearInterval(timer);
    var splitframe = ANIMATIONS[animationType].split("=====\n");
    //alert(splitframe);
    timer = setInterval(interval, speed);

    function interval() {
        if (index == splitframe.length) {
            index = 0;
        }
        document.getElementById('txtarea').value = splitframe[index];
        index++;
    }
}

function stop() {
    document.getElementById('btnStart').disabled = false;
    document.getElementById('animation').disabled = false;
    document.getElementById('btnStop').disabled = true;
    //document.getElementById('txtarea').value = "";
    clearInterval(timer);
    timer = 0;
    index = 0;
    textAling(); 
    document.getElementById('txtarea').style.fontSize = 12 + "px";
}

function textAling(){
    var h = window.height();
   // var $dummy = parseInt(document.getElementById('#txtarea').height);
    alert(h);
   /* var top = Math.max( 0, ( h - $dummy ) * 0.5 );
    $('#txtarea').css({
      paddingTop: top,
      height: h - top
    });*/
}

function size() {
    var FONTS = [];
    FONTS['Tiny'] = "7pt";
    FONTS['Small'] = "10pt";
    FONTS['Medium'] = "12pt";
    FONTS['Large'] = "16pt";
    FONTS['XL'] = "24pt";
    FONTS['XXL'] = "32pt";
    //alert('u choosed ' + document.getElementById('size').value);
    var fontsize = document.getElementById('fontSize').value;
    document.getElementById('txtarea').style.fontSize = FONTS[fontsize];
}

function turbo() {
    if (document.getElementById('chkbox').checked) {
        speed = 50;
        //alert(' value is ' + speed);
    } else {
        speed = 250;
        //alert('value is ' + speed);
    }
    if (timer !== null) {
        start();
    }
}