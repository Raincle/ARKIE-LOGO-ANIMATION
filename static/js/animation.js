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

        function frameSvg(offset) {
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

            var fOffset = offset/2;
            var b = 100;

            var fp1 = op6;
            var fp2 = {
              x: fp1.x+Math.sqrt(Math.pow(fOffset,2)/3),
              y: fp1.y-fOffset
            };
            var fp3 = {
              x: fp2.x+Math.sqrt(Math.pow((b+Math.sqrt(Math.pow(fOffset,2)/3)),2)*3/4),
              y: fp2.y+b/2
            };
            var fp15 = {
              x: fp1.x,
              y: fp1.y+Math.sqrt(Math.pow(fOffset,2)*4/3)
            };
            var fp14 = {
              x: fp15.x+Math.sqrt(Math.pow((b-Math.sqrt(Math.pow(fOffset,2)/3)),2)*4/3),
              y: fp15.y+b/2
            };


            var fp6 = op2;
            var fp5 = {
              x: fp6.x-Math.sqrt(Math.pow(fOffset,2)/3),
              y: fp2.y
            };
            var fp4 = {
              x: fp5.x-Math.sqrt(Math.pow((b+Math.sqrt(Math.pow(fOffset,2)/3)),2)*3/4),
              y: fp3.y
            };
            var fp7 = {
              x: fp6.x,
              y: fp15.y
            };
            var fp8 = {
              x: fp7.x-Math.sqrt(Math.pow((b-Math.sqrt(Math.pow(fOffset,2)/3)),2)*4/3),
              y: fp14.y
            };


            var fp11 = op4;
            var fp10 = {
              x: fp11.x+fOffset,
              y: fp11.y-Math.sqrt(Math.pow(fOffset,2)/3)
            };
            var fp12 = {
              x: fp11.x-fOffset,
              y: fp10.y
            };
            var fp9 = {
              x: fp10.x,
              y: fp10.y-b
            };
            var fp13 = {
              x: fp12.x,
              y: fp12.y-b
            };



            var fPath = "<path fill='black' d='" +
              "M"+fp1.x+" "+fp1.y+
              "L"+fp2.x+" "+fp2.y+
              "L"+fp3.x+" "+fp3.y+
              "L"+fp4.x+" "+fp4.y+
              "L"+fp5.x+" "+fp5.y+
              "L"+fp6.x+" "+fp6.y+
              "L"+fp7.x+" "+fp7.y+
              "L"+fp8.x+" "+fp8.y+
              "L"+fp9.x+" "+fp9.y+
              "L"+fp10.x+" "+fp10.y+
              "L"+fp11.x+" "+fp11.y+
              "L"+fp12.x+" "+fp12.y+
              "L"+fp13.x+" "+fp13.y+
              "L"+fp14.x+" "+fp14.y+
              "L"+fp15.x+" "+fp15.y+
              "Z' /> ";

            return path+fPath;
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
          frameSvg(offset)+
          "</svg>";

        return svg;
    }

    var fps = 24;

    var length = 250;
    var offset = 1;

    var isReverse = false;
    var renderQueue = setInterval(function() {
        if (offset===length) {
            isReverse = true;
        } else if (offset===0) {
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

    //$('.animation-wrapper').html(initSvg(Math.sqrt(Math.pow(length,2)*4/3), 40));
});