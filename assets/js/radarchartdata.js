/* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */
var margin = {top: 100, right: 100, bottom: 100, left: 100},
  width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
  height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

var data = [
      [//2014

      {axis:"September",value:395648},
      {axis:"October",value:493978},
      {axis:"November",value:705180},
      {axis:"December",value:580613},
      {axis:"January",value:803872},
      {axis:"February",value:799811},
      {axis:"March",value:759213},
      {axis:"April",value:546703},
      {axis:"May",value:331415},
      {axis:"June",value:289116},
      {axis:"July",value:297593},
      {axis:"August",value:279812}

      ],[//2015

      {axis:"September",value:416274},
      {axis:"October",value:500006},
      {axis:"November",value:651585},
      {axis:"December",value:624236},
      {axis:"January",value:724485},
      {axis:"February",value:596999},
      {axis:"March",value:640208},
      {axis:"April",value:523952},
      {axis:"May",value:340358},
      {axis:"June",value:296765},
      {axis:"July",value:337677},
      {axis:"August",value:325305}

      ],[//2016

      {axis:"September",value:414358},
      {axis:"October",value:542097},
      {axis:"November",value:594978},
      {axis:"December",value:712238},
      {axis:"January",value:771238},
      {axis:"February",value:629106},
      {axis:"March",value:631076},
      {axis:"April",value:447663},
      {axis:"May",value:323823},
      {axis:"June",value:312865},
      {axis:"July",value:367248},
      {axis:"August",value:307226}
      ]
    ];
//////////////////////////////////////////////////////////////
//////////////////// Draw the Chart //////////////////////////
//////////////////////////////////////////////////////////////

var color = d3.scale.ordinal()
  .range(["#7b7b7b","#212121","#0e5096"]);

var radarChartOptions = {
  w: width,
  h: height,
  margin: margin,
  maxValue: 0.5,
  levels: 5,
  roundStrokes: true,
  color: color
};
//Call function to draw the Radar chart
RadarChart(".radarchart", data, radarChartOptions);
