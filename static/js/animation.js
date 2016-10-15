$(function() {

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();


    function initSvg(a,offset) {
        var p1 = {
            x: Math.sqrt(Math.pow(a,2)*3/4),
            y: 0
        };
        var p2 = {
            x: Math.sqrt(Math.pow(a,2)*3/4)*2,
            y: a/2
        };
        var p3 = {
            x: p2.x,
            y: a*3/2
        };
        var p4 = {
            x: p1.x,
            y: 2*a
        };
        var p5 = {
            x: 0,
            y: a*3/2
        };
        var p6 = {
            x: 0,
            y: a/2
        };

        function offsetedSvg(offset) {
            var op1 = {
                x: p1.x,
                y: Math.sqrt(Math.pow(offset,2)*4/3)
            };
            var op2 = {
                x: p2.x-offset,
                y: p2.y+Math.sqrt(Math.pow(offset,2)/3)
            };
            var op3 = {
                x: p3.x-offset,
                y: p3.y-Math.sqrt(Math.pow(offset,2)/3)
            };
            var op4 = {
                x: p4.x,
                y: p4.y-op1.y
            };
            var op5 = {
                x: offset,
                y: op3.y
            };
            var op6 = {
                x: offset,
                y: op2.y
            };

            var path = "<path fill='white' d='" +
              "M"+op1.x+" "+op1.y+
              "L"+op2.x+" "+op2.y+
              "L"+op3.x+" "+op3.y+
              "L"+op4.x+" "+op4.y+
              "L"+op5.x+" "+op5.y+
              "L"+op6.x+" "+op6.y+
              "Z' /> ";

            return path;
        }

        var svg = "<svg viewBox='0 0 " +
          Math.sqrt(Math.pow(a,2)*3/4)*2 +
          " " +
          2*a +
          "'> " +
          "<path fill='black' d='" +
          "M"+p1.x+" "+p1.y+
          "L"+p2.x+" "+p2.y+
          "L"+p3.x+" "+p3.y+
          "L"+p4.x+" "+p4.y+
          "L"+p5.x+" "+p5.y+
          "L"+p6.x+" "+p6.y+
          "Z' /> "+
          offsetedSvg(offset)+
          "</svg>";

        return svg;
    }

    var fps = 50;

    var length = 250;
    var offset = 1;

    var isReverse = false;
    var renderQueue = setInterval(function() {
        if (offset>=length) {
            isReverse = true;
        } else if (offset>=0) {
            isReverse = false;
        };
        if (!isReverse) {
            offset += 1;
            console.log('in render, offset: ',offset);
            $('.animation-wrapper').html(initSvg(Math.sqrt(Math.pow(length,2)*4/3), offset));
        } else {
            console.log('in reverse');
            offset -= 1;
            console.log('in render, offset: ',offset);
            $('.animation-wrapper').html(initSvg(Math.sqrt(Math.pow(length,2)*4/3), offset));
            //clearInterval(renderQueue);
        }
    },1000/fps);

});