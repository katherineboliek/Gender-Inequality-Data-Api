$(function () {

$.getJSON('js/mapdata.json', function(data) {
  console.log(gotJSON)
  $.each(data, function () {
            this.Code = this.Code.toUpperCase();
        });
        console.log(data);
// Prepare demo data

    // Initiate the chart
    $('#map').highcharts('Map', {
        title: {
            text: 'Highmaps Motion'
        },

        subtitle: {
            text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/au/au-all.js">Australia</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0,
            max: 45
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
                enabled: true // Setting this to false currently helps a great deal on performance
            }
        }]
    });
  });
}); //buildMap

// $(document).ready(function(){
//     console.log("steven was here!");
//     buildMap();
// })
