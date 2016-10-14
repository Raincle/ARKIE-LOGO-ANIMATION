$(function() {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    var polyHeight = Math.sqrt(Math.pow(250,2)-Math.pow(125,2));
    var p1Obj = {
        x:125,
        y:0
    };
    var p2Obj = {
        x:375,
        y:0
    };
    var p3Obj = {
        x:500,
        y:polyHeight
    };
    var p4Obj = {
        x:375,
        y:2*polyHeight
    };
    var p5Obj = {
        x:125,
        y:2*polyHeight
    };
    var p6Obj = {
        x:0,
        y:polyHeight
    };

    function offsetedSvg(b) {
        var p1 = {
            x: 125 + Math.sqrt(Math.pow(b,2)/3),
            y: b
        };
        var p2 = {
            x: 375- Math.sqrt(Math.pow(b,2)/3),
            y: b
        };
        var p3 = {
            x: 500- Math.sqrt(Math.pow(b,2)*4/3),
            y:polyHeight
        };
        var p4 = {
            x: 375- Math.sqrt(Math.pow(b,2)/3),
            y: 2*polyHeight-b
        };
        var p5 = {
            x: 125 + Math.sqrt(Math.pow(b,2)/3),
            y: 2*polyHeight-b
        };
        var p6 = {
            x: Math.sqrt(Math.pow(b,2)*4/3),
            y: polyHeight
        };

        var path = "<path fill='white' d='" +
            "M"+p1.x+" "+p1.y+
            "L"+p2.x+" "+p2.y+
            "L"+p3.x+" "+p3.y+
            "L"+p4.x+" "+p4.y+
            "L"+p5.x+" "+p5.y+
            "L"+p6.x+" "+p6.y+
            "Z' /> ";

        return path;
    }


    var p1 = "M125 0";
    var p2 = "L375 0";

    var p3 = "L500 "+polyHeight;
    var p4 = "L375 "+2*polyHeight;
    var p5 = "L125 "+2*polyHeight;
    var p6 = "L0 "+polyHeight;

    var svg = "<svg viewBox='0 0 500 500'> " +
        "<path d='" +
        p1+p2+p3+p4+p5+p6 +
        "Z' /> " + offsetedSvg(5)+
        "</svg>";

    $('.animation-wrapper').html(svg);
});