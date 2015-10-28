var years = [];
var maleIceland = [];
var femaleIceland = [];
var maleKorea = [];
var femaleKorea = [];

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
    maleKorea.push(parseFloat($(this).find("korea_male").text()));
    femaleKorea.push(parseFloat($(this).find("korea_female").text()));

  });

  console.log(years);
  console.log(maleIceland);
  console.log(maleKorea);

  buildLineGraph();
}

function buildLineGraph() {
    $('#manager').highcharts({
        title: {
            text: 'Percentage of men and women in managerial positions',
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
            name: 'Iceland Male',
            data: maleIceland,
            color: '#FF0000'
        }, {
            name: 'Iceland Female',
            data: femaleIceland,
            color: '#0000FF'
        }, {
            name: 'Korea Male',
            data: maleKorea,
            color: '#FF0000'
        }, {
            name: 'Korea Female',
            data: femaleKorea,
            color: '#0000FF'
        }]
    });
};
$(document).ready(function(){
console.log("doc ready!");
loadDataThree();
})
