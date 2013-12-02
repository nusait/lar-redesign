<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title></title>
        <style type="text/css">
    .gradientBoxesWithOuterShadows {
height: 280px;

/*
background-color: Red;
*/

/* outer shadows  (note the rgba is red, green, blue, alpha) */
/*
-webkit-box-shadow: 0px 0px 12px rgba(0, 0, 88, 0.4);
-moz-box-shadow: 0px 1px 6px rgba(23, 69, 188, .5);
*/

/* rounded corners */
/*
-webkit-border-radius: 12px;
-moz-border-radius: 7px;
border-radius: 7px;
-ms-border-radius: 7px;
-o-border-radius: 7px;
*/

/* background: rgb(226,226,226); */ /* Old browsers */
/* IE9 SVG, needs conditional override of 'filter' to 'none' */
/*
background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIxNCUiIHN0b3AtY29sb3I9IiNlMmUyZTIiIHN0b3Atb3BhY2l0eT0iMSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmVmZWZlIiBzdG9wLW9wYWNpdHk9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==);
*/
/* background: -moz-linear-gradient(top,  rgba(226,226,226,1) 14%, rgba(254,254,254,1) 100%); */ /* FF3.6+ */
/* background: -webkit-gradient(linear, left top, left bottom, color-stop(14%,rgba(226,226,226,1)), color-stop(100%,rgba(254,254,254,1))); */ /* Chrome,Safari4+ */
/* background: -webkit-linear-gradient(top,  rgba(226,226,226,1) 14%,rgba(254,254,254,1) 100%); */ /* Chrome10+,Safari5.1+ */
/* background: -o-linear-gradient(top,  rgba(226,226,226,1) 14%,rgba(254,254,254,1) 100%); */ /* Opera 11.10+ */
/* background: -ms-linear-gradient(top,  rgba(226,226,226,1) 14%,rgba(254,254,254,1) 100%); */ /* IE10+ */
/* background: linear-gradient(to bottom,  rgba(226,226,226,1) 14%,rgba(254,254,254,1) 100%); */ /* W3C */
/* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=0 ); */ /* IE6-8 */
/* -webkit-tap-highlight-color: rgba(255, 255, 255, 0); */

}
 </style>
    <script type="text/javascript" src="js/jquery.js"></script>


<script>
 function load() {
      loadChart();
             setInterval(function(){loadChart()}, 2000);
         }
          function loadChart() {
       // names_=getParameterByName('Answer').split('|');
     //  values_=getParameterByName('AnswerCount').split(',');
     // alert(window.bridge.getAnswer());
    //alert(window.bridge.getAnswerCount());
    $('#sample1').val(window.bridge.getAnswer().toString());
   $('#sample2').val(window.bridge.getAnswerCount().toString());
    $('#sample3').val(window.bridge.getQuestionID().toString());
        names_ = $('#sample1').val().split('|');
        values_ = $('#sample2').val().split(',');
  QuestionID = $('#sample3').val();

              $.ajax({
                 type: "GET",
                 //url: "http://www.audienceopinion.com/services/Report/getResults/"+QuestionID,
                 //url: "http://192.168.2.184:8080/services/Report/getResults/"+QuestionID,
                 //url: "http://vm-survey-app.dunnsg.msft/services/Report/getResults/"+QuestionID,
                 url: "http://vm-ao-dev.dunnsg.msft/services/Report/getResults/"+QuestionID,

                 dataType: "xml",
                 success: function (data) {

                     $(data).find("questionResults").filter(":first")
    .each(function () {

        $(this).find("entry").each(function () {
            var answer_number = parseInt($(this).find("key").text());
            var count = parseInt($(this).find("value").text());

            values_[parseInt(answer_number) - 1] = parseInt(count);

        });
    });
                     pieChart();
                 }
             });

    }
    var names_ = ['gsghsfghshghasghgshsghagshgshsgashghghghhghghghgghghgghggggg', 'rajdsdsadsada', 'Kumsdsadsdsar', 'Gnaddsdsdsga', 'Kasdsadsdsyu', 'snsdsadsaddeha'];
    var values_ = [10, 45, 65, 78, 99, 50];
    function pieChart() {

        // Config settings
        var chartSizePercent = 70;                        // The chart radius relative to the canvas width/height (in percent)
        var sliceBorderWidth = 5;                         // Width (in pixels) of the border around each slice
        var sliceBorderStyle = "#fff";                    // Colour of the border around each slice
        var sliceGradientColour = "#ddd";                 // Colour to use for one end of the chart gradient
        var maxPullOutDistance = 5;                      // How far, in pixels, to pull slices out when clicked
        var pullOutFrameStep = 2;                         // How many pixels to move a slice with each animation frame
        var pullOutFrameInterval = 10;                    // How long (in ms) between each animation frame
        var pullOutLabelPadding = 30;                     // Padding between pulled-out slice and its label
        var pullOutLabelFont = "bold 12px 'Trebuchet MS', Verdana, sans-serif";  // Pull-out slice label font
        var pullOutValueFont = "bold 12px 'Trebuchet MS', Verdana, sans-serif";  // Pull-out slice value font
        var pullOutValuePrefix = "$";                     // Pull-out slice value prefix
        var pullOutShadowColour = "rgba( 0, 0, 0, .5 )";  // Colour to use for the pull-out slice shadow
        var pullOutShadowOffsetX = 1;                     // X-offset (in pixels) of the pull-out slice shadow
        var pullOutShadowOffsetY = 1;                     // Y-offset (in pixels) of the pull-out slice shadow
        var pullOutShadowBlur = 0;                        // How much to blur the pull-out slice shadow
        var pullOutBorderWidth = 2;                       // Width (in pixels) of the pull-out slice border
        var pullOutBorderStyle = "#333";                  // Colour of the pull-out slice border
        var chartStartAngle = -.5 * Math.PI;              // Start the chart at 12 o'clock instead of 3 o'clock

        //my changes

        var colors_ = ['#F14440', '#3A9EA2', '#FF850D', '#510708', '#A6CEE8', '#9BBC57'];

        // Declare some variables for the chart
        var canvas;                       // The canvas element in the page
        var currentPullOutSlice = -1;     // The slice currently pulled out (-1 = no slice)
        var currentPullOutDistance = 0;   // How many pixels the pulled-out slice is currently pulled out in the animation
        var animationId = 0;              // Tracks the interval ID for the animation created by setInterval()
        var chartData = [];               // Chart data (labels, values, and angles)
        var chartColours = [];            // Chart colours (pulled from the HTML table)
        var totalValue = 0;               // Total of all the values in the chart
        var canvasWidth;                  // Width of the canvas, in pixels
        var canvasHeight;                 // Height of the canvas, in pixels
        var centreX;                      // X-coordinate of centre of the canvas/chart
        var centreY;                      // Y-coordinate of centre of the canvas/chart
        var chartRadius;                  // Radius of the pie chart, in pixels

        // Set things up and draw the chart
        init();


        /**
        * Set up the chart data and colours, as well as the chart and table click handlers,
        * and draw the initial pie chart
        */



        function init() {
            var fieldSet = document.getElementById("fieldText");
            // Get the canvas element in the page
            fieldSet.innerHTML="";

            canvas = document.getElementById('chart');

            // Exit if the browser isn't canvas-capable
            if (typeof canvas.getContext === 'undefined') return;

            // Initialise some properties of the canvas and chart
            canvasWidth = 230;
            canvasHeight = 230;
            centreX = 150;
            centreY = 140;
            chartRadius = Math.min(canvasWidth, canvasHeight) / 2 * (chartSizePercent / 100);

            // Grab the data from the table,
            // and assign click handlers to the table data cells

            var currentRow = -1;
            var currentCell = 0;

            for (var i = 0; i < names_.length; i++) {
                chartData[i] = [];
                chartData[i]['label'] = names_[i];
                var value = parseFloat(values_[i]);
                totalValue += value;
                value = value.toFixed(2);
                chartData[i]['value'] = value;
                //adding controls dynamically;
                var spanTag = document.createElement("span");

                spanTag.id = "span1" + i.toString();
                spanTag.style.color = colors_[i];
                if (i != 0)
                    spanTag.innerHTML = "-" + names_[i];
                else
                    spanTag.innerHTML = names_[i];
                fieldSet.appendChild(spanTag);

                if (hex = colors_[i].match(/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/)) {
                    chartColours[i] = [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];


                }
                else {
                    alert("Error: Colour could not be determined! Please specify table colours using the format '#xxxxxx'");
                    return;
                }
            }

            $('#chartData td').each(function () {
                currentCell++;
                currentRow++;

                // Store the slice index in this cell, and attach a click handler to it
                //$(this).data('slice', currentRow);
                //$(this).click(handleTableClick);

                // Extract and store the cell colour


            });
            var currentPos = 0; // The current position of the slice in the pie (from 0 to 1)
            for (var slice in chartData) {
                chartData[slice]['startAngle'] = 2 * Math.PI * currentPos;
                chartData[slice]['endAngle'] = 2 * Math.PI * (currentPos + (chartData[slice]['value'] / totalValue));
                currentPos += chartData[slice]['value'] / totalValue;
            }

            drawChart();
            $('#chart').click(handleChartClick);
        }


        /**
        * Process mouse clicks in the chart area.
        *
        * If a slice was clicked, toggle it in or out.
        * If the user clicked outside the pie, push any slices back in.
        *
        * @param Event The click event
        */
        function handleChartClick(clickEvent) {

            // Get the mouse cursor position at the time of the click, relative to the canvas
            var mouseX = clickEvent.pageX - this.offsetLeft;
            var mouseY = clickEvent.pageY - this.offsetTop;

            // Was the click inside the pie chart?
            var xFromCentre = mouseX - centreX;
            var yFromCentre = mouseY - centreY;
            var distanceFromCentre = Math.sqrt(Math.pow(Math.abs(xFromCentre), 2) + Math.pow(Math.abs(yFromCentre), 2));
            if (distanceFromCentre <= chartRadius) {

                // Yes, the click was inside the chart.
                // Find the slice that was clicked by comparing angles relative to the chart centre.

                var clickAngle = Math.atan2(yFromCentre, xFromCentre) - chartStartAngle;
                if (clickAngle < 0) clickAngle = 2 * Math.PI + clickAngle;

                for (var slice in chartData) {
                    if (clickAngle >= chartData[slice]['startAngle'] && clickAngle <= chartData[slice]['endAngle']) {

                        // Slice found. Pull it out or push it in, as required.
                        toggleSlice(slice);
                        return;
                    }
                }
            }

            // User must have clicked outside the pie. Push any pulled-out slice back in.
            pushIn();
        }


        /**
        * Process mouse clicks in the table area.
        *
        * Retrieve the slice number from the jQuery data stored in the
        * clicked table cell, then toggle the slice
        *
        * @param Event The click event
        */

        function handleTableClick(clickEvent) {
            var slice = $(this).data('slice');
            toggleSlice(slice);
        }


        /**
        * Push a slice in or out.
        *
        * If it's already pulled out, push it in. Otherwise, pull it out.
        *
        * @param Number The slice index (between 0 and the number of slices - 1)
        */

        function toggleSlice(slice) {
            if (slice == currentPullOutSlice) {
                pushIn();
            } else {
                startPullOut(slice);
            }
        }


        /**
        * Start pulling a slice out from the pie.
        *
        * @param Number The slice index (between 0 and the number of slices - 1)
        */

        function startPullOut(slice) {

            // Exit if we're already pulling out this slice
            if (currentPullOutSlice == slice) return;

            // Record the slice that we're pulling out, clear any previous animation, then start the animation
            currentPullOutSlice = slice;
            currentPullOutDistance = 0;
            clearInterval(animationId);
            animationId = setInterval(
            function () {
                animatePullOut(slice);
            }, pullOutFrameInterval);

            // Highlight the corresponding row in the key table
            $('#chartData td').removeClass('highlight');
            var labelCell = $('#chartData td:eq(' + (slice * 2) + ')');
            var valueCell = $('#chartData td:eq(' + (slice * 2 + 1) + ')');
            //labelCell.addClass('highlight');
            //valueCell.addClass('highlight');
        }


        /**
        * Draw a frame of the pull-out animation.
        *
        * @param Number The index of the slice being pulled out
        */

        function animatePullOut(slice) {

            // Pull the slice out some more
            currentPullOutDistance += 10;

            // If we've pulled it right out, stop animating
            if (currentPullOutDistance >= maxPullOutDistance) {
                currentPullOutDistance = maxPullOutDistance;
                clearInterval(animationId);
            }
            clearInterval(animationId);
            // return;
            //}

            // Draw the frame
            drawChart();
        }


        /**
        * Push any pulled-out slice back in.
        *
        * Resets the animation variables and redraws the chart.
        * Also un-highlights all rows in the table.
        */

        function pushIn() {
            currentPullOutSlice = -1;
            currentPullOutDistance = 0;
            clearInterval(animationId);
            drawChart();
            $('#chartData td').removeClass('highlight');
        }


        /**
        * Draw the chart.
        *
        * Loop through each slice of the pie, and draw it.
        */

        function drawChart() {

            // Get a drawing context
            var context = canvas.getContext('2d');

            // Clear the canvas, ready for the new frame
            context.clearRect(0, 0, 300, 400);
			context.restore();

            // Draw each slice of the chart, skipping the pull-out slice (if any)
            for (var slice in chartData) {
                if (slice != currentPullOutSlice) drawSlice(context, slice);
            }

            // If there's a pull-out slice in effect, draw it.
            // (We draw the pull-out slice last so its drop shadow doesn't get painted over.)
            if (currentPullOutSlice != -1) drawSlice(context, currentPullOutSlice);
        }


        /**
        * Draw an individual slice in the chart.
        *
        * @param Context A canvas context to draw on
        * @param Number The index of the slice to draw
        */

        function drawSlice(context, slice) {

            // Compute the adjusted start and end angles for the slice
            var startAngle = chartData[slice]['startAngle'] + chartStartAngle;
            var endAngle = chartData[slice]['endAngle'] + chartStartAngle;

            if (slice == currentPullOutSlice && chartData[slice]['value']!=0) {

                // We're pulling (or have pulled) this slice out.
                // Offset it from the pie centre, draw the text label,
                // and add a drop shadow.
                //currentPullOutDistance = 0;
                var midAngle = (startAngle + endAngle) / 2;
                var actualPullOutDistance = currentPullOutDistance * easeOut(currentPullOutDistance / maxPullOutDistance, .8);
                startX = centreX + Math.cos(midAngle) * actualPullOutDistance;
                startY = centreY + Math.sin(midAngle) * actualPullOutDistance;
                //startX = centreX ;
                //startY = centreY;
                context.fillStyle = 'rgb(' + chartColours[slice].join(',') + ')';
                context.textAlign = "center";
                context.font = pullOutLabelFont;
                var XlabelPoint_ = centreX + Math.cos(midAngle) * (chartRadius + maxPullOutDistance + pullOutLabelPadding);
                var YlabelPoint_ = centreY + Math.sin(midAngle) * (chartRadius + maxPullOutDistance + pullOutLabelPadding);
                var xFromCentre_ = XlabelPoint_ - centreX;
                var yFromCentre_ = YlabelPoint_ - centreY;
                var fourthoff = (0 <= yFromCentre_) && (0 <= xFromCentre_);
                var firstoff = (0 <= yFromCentre_) && (0 >= xFromCentre_);
                var secondoff = (0 >= yFromCentre_) && (0 >= xFromCentre_);
                var thirdoff = (0 >= yFromCentre_) && (0 <= xFromCentre_);
                context.save();
                var clickAngle_ = Math.atan2(yFromCentre_, xFromCentre_) - chartStartAngle;
                var distanceFromCentre = Math.sqrt(Math.pow(Math.abs(xFromCentre_), 2) + Math.pow(Math.abs(yFromCentre_), 2));
                var availble_space = 0;
                var xlocation = centreX + Math.cos(midAngle) * (chartRadius + maxPullOutDistance + pullOutLabelPadding);
                var ylocation = centreY + Math.sin(midAngle) * (chartRadius + maxPullOutDistance + pullOutLabelPadding);
                if (fourthoff) {
                    //alert('Fourth off');
                    if (chartRadius < distanceFromCentre) {
                        availble_space = 300 - XlabelPoint_;
                    }
                    else {
                        availble_space = 300 - XlabelPoint_;
                    }
                }
                else if (firstoff) {
                    //alert('firstoff off');
                    var temp = (chartRadius < (YlabelPoint_ - centreY)) || ((-1) * chartRadius > (YlabelPoint_ - centreY));
                    if (temp) {
                        availble_space = 300 - XlabelPoint_;
                    }
                    else {
                        availble_space = XlabelPoint_;
                    }
                }
                else if (secondoff) {
                    // alert('secondoff off');
                    var temp = (chartRadius < (YlabelPoint_ - centreY)) || ((-1) * chartRadius > (YlabelPoint_ - centreY));
                    if (temp) {
                        availble_space = 300 - XlabelPoint_;
                    }
                    else {
                        availble_space = XlabelPoint_;
                    }
                }
                else if (thirdoff) {
                    // alert('thirdoff off');
                    if (chartRadius < distanceFromCentre) {
                        availble_space = 300 - XlabelPoint_;
                    }
                    else {
                        availble_space = 300 - XlabelPoint_;
                    }
                }

                var legendlenghtAllowed = Math.round(availble_space / 3) - 6;
                var lendstring = "";
                if (chartData[slice]['label'].length <= legendlenghtAllowed) {
                    lendstring = chartData[slice]['label'];
                }
                else {
                    lendstring = chartData[slice]['label'].substr(0, legendlenghtAllowed) + "..";
                }
                //context.rotate(clickAngle_ + chartStartAngle);
                //  alert(xFromCentre_);
                // alert(yFromCentre_);
                //context.fillStyle = '#1FB4DE'; // set canvas background color
                // context.fillRect(10, 10, 100, 50);
                //context.fillText("ssaxsasaa", 10, 10);
                context.fillText(lendstring, xlocation, ylocation);
                context.restore();
                //context.font = pullOutValueFont;
                //context.fillText( " (" + (parseInt(chartData[slice]['value'] / totalValue * 100 + .5)) + "%)", centreX + Math.cos(midAngle) * (chartRadius + maxPullOutDistance + pullOutLabelPadding), centreY + Math.sin(midAngle) * (chartRadius + maxPullOutDistance + pullOutLabelPadding) + 20);
                // context.shadowOffsetX = pullOutShadowOffsetX;
                //context.shadowOffsetY = pullOutShadowOffsetY;
                // context.shadowBlur = pullOutShadowBlur;

            } else {
            if( chartData[slice]['value']!=0)
            {
                // This slice isn't pulled out, so draw it from the pie centre
                var midAngle = (startAngle + endAngle) / 2;
                var actualPullOutDistance = currentPullOutDistance * easeOut(currentPullOutDistance / maxPullOutDistance, .8);
                //startX = centreX + Math.cos(midAngle) * actualPullOutDistance;
                // startY = centreY + Math.sin(midAngle) * actualPullOutDistance;
                startX = centreX;
                startY = centreY;
                context.fillStyle = 'rgb(' + chartColours[slice].join(',') + ')';
                context.textAlign = "center";
                context.font = pullOutLabelFont;
                // context.fillText(chartData[slice]['label'], centreX + Math.cos(midAngle) * (chartRadius + maxPullOutDistance + pullOutLabelPadding), centreY + Math.sin(midAngle) * (chartRadius + maxPullOutDistance + pullOutLabelPadding));
                context.font = pullOutValueFont;
                context.fillText(" (" + (parseInt(chartData[slice]['value'] / totalValue * 100 + .5)) + "%)", centreX + Math.cos(midAngle) * (chartRadius + maxPullOutDistance + pullOutLabelPadding), centreY + Math.sin(midAngle) * (chartRadius + maxPullOutDistance + pullOutLabelPadding) + 20);
                // context.shadowOffsetX = pullOutShadowOffsetX;
                //context.shadowOffsetY = pullOutShadowOffsetY;
                //  context.shadowBlur = pullOutShadowBlur;
                // startX = centreX;
                // startY = centreY;
                }
            }
            if (chartData[slice]['value'] != 0) {
                // Set up the gradient fill for the slice
                var sliceGradient = context.createLinearGradient(0, 0, canvasWidth * .75, canvasHeight * .75);
                sliceGradient.addColorStop(0, sliceGradientColour);
                sliceGradient.addColorStop(1, 'rgb(' + chartColours[slice].join(',') + ')');

                // Draw the slice
                context.beginPath();
                context.moveTo(startX, startY);
                context.arc(startX, startY, chartRadius, startAngle, endAngle, false);
                context.lineTo(startX, startY);
                context.closePath();
                context.fillStyle = sliceGradient;
                // context.shadowColor = (slice == currentPullOutSlice) ? pullOutShadowColour : "rgba( 0, 0, 0, 0 )";
                context.fill();
                //context.shadowColor = "rgba( 0, 0, 0, 0 )";

                // Style the slice border appropriately
                if (slice == currentPullOutSlice) {
                    context.lineWidth = pullOutBorderWidth;
                    context.strokeStyle = pullOutBorderStyle;
                } else {
                    context.lineWidth = sliceBorderWidth;
                    context.strokeStyle = sliceBorderStyle;
                }

                // Draw the slice border
                context.stroke();
            }
        }


        /**
        * Easing function.
        *
        * A bit hacky but it seems to work! (Note to self: Re-read my school maths books sometime)
        *
        * @param Number The ratio of the current distance travelled to the maximum distance
        * @param Number The power (higher numbers = more gradual easing)
        * @return Number The new ratio
        */

        function easeOut(ratio, power) {
            return (Math.pow(1 - ratio, power) + 1);
        }


    }

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(window.location.href);
        if (results == null)
            return "";
        else
            return decodeURIComponent(results[1].replace(/\+/g, " "));
    }


</script>
</head>
<body onload="load()">
<center>
<div align="center" class="gradientBoxesWithOuterShadows" id="container" onload="aaaa()">

  <canvas id="chart" width="300" height="280"></canvas>
</div>

  <fieldset id="fieldText" style="word-wrap: break-word;width:245px;">


  </fieldset>
 </center>
    <input type="hidden" id="sample1"/>
      <input type="hidden" id="sample2"/>
<input type="hidden" id="sample3"/>


</body>
</html>
