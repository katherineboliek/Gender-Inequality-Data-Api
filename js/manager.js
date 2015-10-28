var countries = [];
var _2000 = [];
var _2001 = [];
var _2002 = [];
var _2003 = [];
var _2004 = [];
var _2005 = [];
var _2006 = [];
var _2007 = [];
var _2008 = [];
var _2009 = [];
var _2010 = [];
var _2011 = [];
var _2012 = [];
var _2013 = [];
var maleIceland = [];

function loadDataThree(){
  $.ajax({
    url:'manager.xml',
    type: 'GET',
    datatype: 'xml',
    success: parseDataThree
  });
} // important! using ajax to call xml

function parseDataThree(xml){
  $(xml).find("country").each(function(index){
    countries.push($(this).attr("name"));
    _2000.push(parseFloat($(this).find("_2000").text()));
    _2001.push(parseFloat($(this).find("_2001").text()));
    _2002.push(parseFloat($(this).find("_2002").text()));
    _2003.push(parseFloat($(this).find("_2003").text()));
    _2004.push(parseFloat($(this).find("_2004").text()));
    _2005.push(parseFloat($(this).find("_2005").text()));
    _2006.push(parseFloat($(this).find("_2006").text()));
    _2007.push(parseFloat($(this).find("_2007").text()));
    _2008.push(parseFloat($(this).find("_2008").text()));
    _2009.push(parseFloat($(this).find("_2009").text()));
    _2010.push(parseFloat($(this).find("_2010").text()));
    _2011.push(parseFloat($(this).find("_2011").text()));
    _2012.push(parseFloat($(this).find("_2012").text()));
    _2013.push(parseFloat($(this).find("_2013").text()));
  });

  console.log(countries);
  console.log(_2000);

  buildLineGraph();
}

function buildLineGraph() {
    $('#manager').highcharts({
        title: {
            text: 'Monthly Average Temperature',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            x: -20
        },
        xAxis: {
            categories: countries
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Iceland Male',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'Iceland Female',
            data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }, {
            name: 'Korea Male',
            data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
            name: 'Korea Female',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }]
    });
};
$(document).ready(function(){
console.log("doc ready!");
loadDataThree();
})
