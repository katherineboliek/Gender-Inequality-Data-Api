function buildMap() {
  console.log("buildingMap!")
//Prepare demo data


  $.getJSON('mapdata.json', function (data) {
  //   console.log("-------Data: --------");
  // console.log(data);



  // Initiate the chart
  $('#map').highcharts('Map', {
      title: {
          text: 'Wage Gap 2000-2013'
      },

      subtitle: {
          text: 'Source: <a href="http://stats.oecd.org/index.aspx?queryid=54751#">OECD</a>'
      },

      mapNavigation: {
          enabled: false,
          buttonOptions: {
              verticalAlign: 'bottom'
          }
      },

      colorAxis: {
          min: 0,
          max: 40,
          minColor: '#ff0000',
          maxColor: '#0000ff',
      },

      motion: {
          enabled: true,
          axisLabel: 'year',
          labels: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2013],
          series: 0, // The series which holds points to update
          updateInterval: 5,
          magnet: {
              round: 'floor', // ceil / floor / round
              step: 0.1
          }
      },

      series: [{
          data: data,
          mapData: Highcharts.maps['custom/world-highres'],
          joinBy: null,
          allAreas: false,
          name: 'Wage Gap',
          states: {
              hover: {
                  color: '#BADA55'
              }

          },
          dataLabels: {
              format: '{point.name}',
              enabled: false // Setting this to false currently helps a great deal on performance
          }
      }]
  });
})

} //buildMap


$(document).ready(function(){
// console.log("about to build map");
buildMap();
})
