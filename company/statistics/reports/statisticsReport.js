import { Template } from 'meteor/templating';

import './statisticsReport.html';

Template.statisticsReport.rendered = function() {
  let barChartCanvas = $("#barReport").get(0).getContext("2d");
  let barChart = new Chart(barChartCanvas);

  let barChartData = {
    labels: ["Octubre", "Noviembre", "Diciembre", "Enero", "Febrero", "Marzo", "Abril"],
    datasets: [
      {
        label               : "Mobile",
        data                : [45, 29, 20, 51, 56, 55, 40],
        fillColor           : "rgba(0, 40, 65, 1)",
        strokeColor         : "rgba(0, 40, 65, 1)",
        pointColor          : "rgba(0, 40, 65, 1)",
        pointStrokeColor    : "#c1c7d1",
        pointHighlightFill  : "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)"
      },
      {
        label               : "Emails",
        data                : [28, 48, 40, 19, 46, 27, 20],
        fillColor           : "rgba(60,141,188,0.9)",
        strokeColor         : "rgba(60,141,188,0.8)",
        pointColor          : "#3b8bba",
        pointStrokeColor    : "rgba(60,141,188,1)",
        pointHighlightFill  : "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)"
      },
      {
        label               : "Reports",
        data                : [54, 13, 10, 40, 30, 33, 50],
        fillColor           : "rgba(168,226,243,0.9)",
        strokeColor         : "rgba(168,226,243,0.8)",
        pointColor          : "#194C69",
        pointStrokeColor    : "rgba(168,226,243,1)",
        pointHighlightFill  : "#fff",
        pointHighlightStroke: "rgba(168,226,243,1)"
      }
    ]
  };

  var barChartOptions = {
    showScale               : true,
    scaleShowGridLines      : true,
    scaleGridLineColor      : 'rgba(0,0,0,.05)',
    scaleGridLineWidth      : 1,
    scaleShowHorizontalLines: true,
    scaleShowVerticalLines  : true,
    bezierCurve             : true,
    bezierCurveTension      : 0.3,
    pointDot                : true,
    pointDotRadius          : 4,
    pointDotStrokeWidth     : 1,
    pointHitDetectionRadius : 20,
    datasetStroke           : true,
    datasetStrokeWidth      : 2,
    datasetFill             : false,
    legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span>datasets[i].label<span></span>/li><%}%></ul>',
    maintainAspectRatio     : true,
    responsive              : true
  };
  barChart.Line(barChartData, barChartOptions);
};

Template.statisticsReport.helpers({
  showReportStatistics() {
    return true;
  },
});
