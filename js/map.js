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

function loadData(){
  console.log("loadData");
  $.ajax({
    url:'wagegap.xml',
    type: 'GET',
    datatype: 'xml',
    success: parseData
  });
} // important! using ajax to call xml

function parseData(xml){
  console.log("parseData");
  $(xml).find("country").each(function(index){
    var tempData = [];
    countries.push($(this).attr("name"));
    $(this).children().each(function(index){

        //console.log($(this).text());

        if ($(this).text() != ""){
          tempData.push(Number($(this).text()));
        }else{
          tempData.push(null);
        }

    });
    console.log(countries[index]);
    console.log(tempData);

    //tempData.push(parseFloat($(this).find("_2000").text())
    // _2000.push(parseFloat($(this).find("_2000").text()));
    // _2001.push(parseFloat($(this).find("_2001").text()));
    // _2002.push(parseFloat($(this).find("_2002").text()));
    // _2003.push(parseFloat($(this).find("_2003").text()));
    // _2004.push(parseFloat($(this).find("_2004").text()));
    // _2005.push(parseFloat($(this).find("_2005").text()));
    // _2006.push(parseFloat($(this).find("_2006").text()));
    // _2007.push(parseFloat($(this).find("_2007").text()));
    // _2008.push(parseFloat($(this).find("_2008").text()));
    // _2009.push(parseFloat($(this).find("_2009").text()));
    // _2010.push(parseFloat($(this).find("_2010").text()));
    // _2011.push(parseFloat($(this).find("_2011").text()));
    // _2012.push(parseFloat($(this).find("_2012").text()));
    // _2013.push(parseFloat($(this).find("_2013").text()));

    //tempCountry = "Country: [" + _2000[i] + "]";

  });

  console.log(countries);
  console.log(_2000);
}

buildMap();
function buildMap() {

// Prepare demo data
var data = [
  {
      "hc-key": "fo",
      "value": null
  },
  {
      "hc-key": "um",
      "value": null
  },
  {
      "hc-key": "us",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "jp",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "sc",
      "value": null
  },
  {
      "hc-key": "in",
      "value": null
  },
  {
      "hc-key": "fr",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "fm",
      "value": null
  },
  {
      "hc-key": "cn",
      "value": null
  },
  {
      "hc-key": "sw",
      "value": null
  },
  {
      "hc-key": "sh",
      "value": null
  },
  {
      "hc-key": "br",
      "value": null
  },
  {
      "hc-key": "ec",
      "value": null
  },
  {
      "hc-key": "au",
      "sequence": [17.2, 14.3, 15, 13, 14.4, 15.8, 16.7, 15.4, 11.9, 16.4, 14, 16, 13.8, 18],
      "value": null
  },
  {
      "hc-key": "ki",
      "value": null
  },
  {
      "hc-key": "ph",
      "value": null
  },
  {
      "hc-key": "mx",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "es",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "bu",
      "value": null
  },
  {
      "hc-key": "mv",
      "value": null
  },
  {
      "hc-key": "sp",
      "value": null
  },
  {
      "hc-key": "gb",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "gr",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "as",
      "value": null
  },
  {
      "hc-key": "dk",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "gl",
      "value": null
  },
  {
      "hc-key": "gu",
      "value": null
  },
  {
      "hc-key": "mp",
      "value": null
  },
  {
      "hc-key": "pr",
      "value": null
  },
  {
      "hc-key": "vi",
      "value": null
  },
  {
      "hc-key": "ca",
      "sequence": [23.9, 24.4, 24, 22.5, 22.7, 21.3, 21.2, NaN, NaN, 19.8, 18.8, 19.2, 18.8, 19],
      "value": null
  },
  {
      "hc-key": "st",
      "value": null
  },
  {
      "hc-key": "tz",
      "value": null
  },
  {
      "hc-key": "cv",
      "value": null
  },
  {
      "hc-key": "dm",
      "value": null
  },
  {
      "hc-key": "nl",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "jm",
      "value": null
  },
  {
      "hc-key": "ws",
      "value": null
  },
  {
      "hc-key": "om",
      "value": null
  },
  {
      "hc-key": "vc",
      "value": null
  },
  {
      "hc-key": "tr",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "bd",
      "value": null
  },
  {
      "hc-key": "sb",
      "value": null
  },
  {
      "hc-key": "lc",
      "value": null
  },
  {
      "hc-key": "nr",
      "value": null
  },
  {
      "hc-key": "no",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "kn",
      "value": null
  },
  {
      "hc-key": "bh",
      "value": null
  },
  {
      "hc-key": "to",
      "value": null
  },
  {
      "hc-key": "fi",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "id",
      "value": null
  },
  {
      "hc-key": "mu",
      "value": null
  },
  {
      "hc-key": "se",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "tt",
      "value": null
  },
  {
      "hc-key": "my",
      "value": null
  },
  {
      "hc-key": "bs",
      "value": null
  },
  {
      "hc-key": "pa",
      "value": null
  },
  {
      "hc-key": "pw",
      "value": null
  },
  {
      "hc-key": "tv",
      "value": null
  },
  {
      "hc-key": "mh",
      "value": null
  },
  {
      "hc-key": "cl",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "th",
      "value": null
  },
  {
      "hc-key": "gd",
      "value": null
  },
  {
      "hc-key": "ee",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "ag",
      "value": null
  },
  {
      "hc-key": "tw",
      "value": null
  },
  {
      "hc-key": "bb",
      "value": null
  },
  {
      "hc-key": "it",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "mt",
      "value": null
  },
  {
      "hc-key": "pg",
      "value": null
  },
  {
      "hc-key": "de",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "vu",
      "value": null
  },
  {
      "hc-key": "sg",
      "value": null
  },
  {
      "hc-key": "cy",
      "value": null
  },
  {
      "hc-key": "km",
      "value": null
  },
  {
      "hc-key": "fj",
      "value": null
  },
  {
      "hc-key": "ru",
      "value": null
  },
  {
      "hc-key": "va",
      "value": null
  },
  {
      "hc-key": "sm",
      "value": null
  },
  {
      "hc-key": "kz",
      "value": null
  },
  {
      "hc-key": "az",
      "value": null
  },
  {
      "hc-key": "am",
      "value": null
  },
  {
      "hc-key": "tj",
      "value": null
  },
  {
      "hc-key": "ls",
      "value": null
  },
  {
      "hc-key": "uz",
      "value": null
  },
  {
      "hc-key": "pt",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "ma",
      "value": null
  },
  {
      "hc-key": "co",
      "value": null
  },
  {
      "hc-key": "tl",
      "value": null
  },
  {
      "hc-key": "kh",
      "value": null
  },
  {
      "hc-key": "ar",
      "value": null
  },
  {
      "hc-key": "sa",
      "value": null
  },
  {
      "hc-key": "pk",
      "value": null
  },
  {
      "hc-key": "ye",
      "value": null
  },
  {
      "hc-key": "ae",
      "value": null
  },
  {
      "hc-key": "ke",
      "value": null
  },
  {
      "hc-key": "pe",
      "value": null
  },
  {
      "hc-key": "do",
      "value": null
  },
  {
      "hc-key": "ht",
      "value": null
  },
  {
      "hc-key": "ao",
      "value": null
  },
  {
      "hc-key": "vn",
      "value": null
  },
  {
      "hc-key": "mz",
      "value": null
  },
  {
      "hc-key": "cr",
      "value": null
  },
  {
      "hc-key": "ir",
      "value": null
  },
  {
      "hc-key": "sv",
      "value": null
  },
  {
      "hc-key": "sl",
      "value": null
  },
  {
      "hc-key": "gw",
      "value": null
  },
  {
      "hc-key": "hr",
      "value": null
  },
  {
      "hc-key": "bz",
      "value": null
  },
  {
      "hc-key": "za",
      "value": null
  },
  {
      "hc-key": "cd",
      "value": null
  },
  {
      "hc-key": "kw",
      "value": null
  },
  {
      "hc-key": "ie",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "kp",
      "value": null
  },
  {
      "hc-key": "kr",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "gy",
      "value": null
  },
  {
      "hc-key": "hn",
      "value": null
  },
  {
      "hc-key": "mm",
      "value": null
  },
  {
      "hc-key": "ga",
      "value": null
  },
  {
      "hc-key": "gq",
      "value": null
  },
  {
      "hc-key": "ni",
      "value": null
  },
  {
      "hc-key": "ug",
      "value": null
  },
  {
      "hc-key": "mw",
      "value": null
  },
  {
      "hc-key": "sx",
      "value": null
  },
  {
      "hc-key": "tm",
      "value": null
  },
  {
      "hc-key": "zm",
      "value": null
  },
  {
      "hc-key": "nc",
      "value": null
  },
  {
      "hc-key": "mr",
      "value": null
  },
  {
      "hc-key": "dz",
      "value": null
  },
  {
      "hc-key": "lt",
      "value": null
  },
  {
      "hc-key": "et",
      "value": null
  },
  {
      "hc-key": "sd",
      "value": null
  },
  {
      "hc-key": "er",
      "value": null
  },
  {
      "hc-key": "gh",
      "value": null
  },
  {
      "hc-key": "si",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "gt",
      "value": null
  },
  {
      "hc-key": "ba",
      "value": null
  },
  {
      "hc-key": "jo",
      "value": null
  },
  {
      "hc-key": "sy",
      "value": null
  },
  {
      "hc-key": "mc",
      "value": null
  },
  {
      "hc-key": "al",
      "value": null
  },
  {
      "hc-key": "uy",
      "value": null
  },
  {
      "hc-key": "cnm",
      "value": null
  },
  {
      "hc-key": "mn",
      "value": null
  },
  {
      "hc-key": "rw",
      "value": null
  },
  {
      "hc-key": "so",
      "value": null
  },
  {
      "hc-key": "bo",
      "value": null
  },
  {
      "hc-key": "cm",
      "value": null
  },
  {
      "hc-key": "cg",
      "value": null
  },
  {
      "hc-key": "eh",
      "value": null
  },
  {
      "hc-key": "rs",
      "value": null
  },
  {
      "hc-key": "me",
      "value": null
  },
  {
      "hc-key": "bj",
      "value": null
  },
  {
      "hc-key": "ng",
      "value": null
  },
  {
      "hc-key": "tg",
      "value": null
  },
  {
      "hc-key": "la",
      "value": null
  },
  {
      "hc-key": "af",
      "value": null
  },
  {
      "hc-key": "ua",
      "value": null
  },
  {
      "hc-key": "sk",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "jk",
      "value": null
  },
  {
      "hc-key": "bg",
      "value": null
  },
  {
      "hc-key": "qa",
      "value": null
  },
  {
      "hc-key": "li",
      "value": null
  },
  {
      "hc-key": "at",
      "sequence": [23.1, 22.8, 24.5, 21.1, 22.4, 22, 21.9, 21.6, NaN, 19.4, 19.2, 18.6, 18.2, null],
      "value": null
  },
  {
      "hc-key": "sz",
      "value": null
  },
  {
      "hc-key": "hu",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "ro",
      "value": null
  },
  {
      "hc-key": "lu",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "ad",
      "value": null
  },
  {
      "hc-key": "ci",
      "value": null
  },
  {
      "hc-key": "lr",
      "value": null
  },
  {
      "hc-key": "bn",
      "value": null
  },
  {
      "hc-key": "be",
      "sequence": [13.6, 13.2, 11.6, 15.2, 11.8, 11.5, 10.3, 9.9, 8.9, 7.5, 7, 5.8, 6.4, null],
      "value": null
  },
  {
      "hc-key": "iq",
      "value": null
  },
  {
      "hc-key": "ge",
      "value": null
  },
  {
      "hc-key": "gm",
      "value": null
  },
  {
      "hc-key": "ch",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "td",
      "value": null
  },
  {
      "hc-key": "kv",
      "value": null
  },
  {
      "hc-key": "lb",
      "value": null
  },
  {
      "hc-key": "dj",
      "value": null
  },
  {
      "hc-key": "bi",
      "value": null
  },
  {
      "hc-key": "sr",
      "value": null
  },
  {
      "hc-key": "il",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "ml",
      "value": null
  },
  {
      "hc-key": "sn",
      "value": null
  },
  {
      "hc-key": "gn",
      "value": null
  },
  {
      "hc-key": "zw",
      "value": null
  },
  {
      "hc-key": "pl",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "mk",
      "value": null
  },
  {
      "hc-key": "py",
      "value": null
  },
  {
      "hc-key": "by",
      "value": null
  },
  {
      "hc-key": "lv",
      "value": null
  },
  {
      "hc-key": "cz",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "bf",
      "value": null
  },
  {
      "hc-key": "na",
      "value": null
  },
  {
      "hc-key": "ne",
      "value": null
  },
  {
      "hc-key": "ly",
      "value": null
  },
  {
      "hc-key": "tn",
      "value": null
  },
  {
      "hc-key": "bt",
      "value": null
  },
  {
      "hc-key": "md",
      "value": null
  },
  {
      "hc-key": "ss",
      "value": null
  },
  {
      "hc-key": "cf",
      "value": null
  },
  {
      "hc-key": "nz",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "cu",
      "value": null
  },
  {
      "hc-key": "ve",
      "value": null
  },
  {
      "hc-key": "mg",
      "value": null
  },
  {
      "hc-key": "is",
      "sequence": [5,10,15,20,25,30,35,40,5,10,15,20,25,30],
      "value": null
  },
  {
      "hc-key": "eg",
      "value": null
  },
  {
      "hc-key": "lk",
      "value": null
  },
  {
      "hc-key": "bw",
      "value": null
  },
  {
      "hc-key": "kg",
      "value": null
  },
  {
      "hc-key": "np",
      "value": null
  }
];

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
            format: '{point.hc-a2}',
            enabled: true // Setting this to false currently helps a great deal on performance
        }
    }]
});
}; //buildMap

$(document).ready(function(){
console.log("steven was here!");
loadData();
})
