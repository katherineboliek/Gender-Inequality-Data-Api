var years = [];
var maleIceland = [];
var femaleIceland = [];

function loadDataThree(){
  $.ajax({
    url:'manager.xml',
    type: 'GET',
    datatype: 'xml',
    success: parseDataThree
  });
} // important! using ajax to call xml

function parseDataThree(xml){
  $(xml).find("year").each(function(index){
    years.push($(this).attr("name"));

    maleIceland.push(parseFloat($(this).find("iceland_male").text()));
    femaleIceland.push(parseFloat($(this).find("iceland_female").text()));
  });

  buildLineGraph();
}

function buildLineGraph() {
    $('#manager').highcharts({
        title: {
            text: 'Icelandic percentage of workers in managerial positions',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: <a href="http://stats.oecd.org/index.aspx?queryid=54751#">OECD</a>',
            x: -20
        },
        xAxis: {
            categories: years
        },
        yAxis: {
            title: {
                text: 'Percentage'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        plotOptions: {
            series: {
                connectNulls: true
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Male',
            data: maleIceland,
            color: '#FF0000'
        }, {
            name: 'Female',
            data: femaleIceland,
            color: '#0000FF'
        }]
    });
};
$(document).ready(function(){
//console.log("doc ready!");
loadDataThree();
})
