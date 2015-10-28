function buildMap() {
  console.log("buildingMap!")
//Prepare demo data
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
        "sequence": [23.1, 23.6, 22.1, null, 19.6, 19, 19.2, 19.8, null, 19.8, 18.8, 17.8, 19.1, 17.9],
        "value": null
    },
    {
        "hc-key": "jp",
        "sequence": [33.9, 33.9, 32.5, 32, 31.1, 32.8, 33, 31.7, 30.7, 28.3, 28.7, 27.4, 26.5, 26.6],
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
        "sequence": [14.6, 15.1, 15.2, 15.1, 15, 14.4, 14, 14, 14.3, 14, 14.1, null, null, null],
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
        "sequence": [null, null, null, null, null, 16.7, 18.6, 12.5, 22.2, 16.7, 11.6, 10, 13.6, 15.4],
        "value": null
    },
    {
        "hc-key": "es",
        "sequence": [null, null, null, null, 12.6, 12.5, 10.4, 8.9, 11.8, 7.3, 6.1, 10.6, 8.6, null],
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
        "sequence": [26.3, 25.6, 24.4, 24.1, 23.3, 22, 21.7, 21.6, 21.8, 20.7, 19.2, 18.2, 17.8, 17.5],
        "value": null
    },
    {
        "hc-key": "gr",
        "sequence": [null, null, null, null, 13.9, 16.7, 11.9, 11.6, 9.5, 9.6, 12.2, 10.7, 6.9, null],
        "value": null
    },
    {
        "hc-key": "as",
        "value": null
    },
    {
        "hc-key": "dk",
        "sequence": [14.7, 14.5, 13.7, 12.3, 12.3, 12, 12.8, 9.2, 12.3, 12.1, 11.8, 8.8, 7.8, null],
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
        "sequence": [23.9, 24.4, 24, 22.5, 22.7, 21.3, 21.2, 20.8, 20.5, 19.8, 18.8, 19.2, 18.8, 19],
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
        "sequence": [null, null, 18.7, null, null, null, 18.3, null, null, null, 20.5, null, null, null],
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
        "sequence": [null, null, null, null, null, null, null, null, null, null, 20.1, null, null, null],
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
        "sequence": [10.2, 10.7, 10.7, 10.2, 9.7, 9.4, 9.2, 9.8, 9.2, 8.7, 8.1, 7.8, 6.4, 7],
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
        "sequence": [20.4, 21.2, 20.4, 20.1, 20, 18.9, 19.4, 21.4, 21.2, 19.7, 18.9, 18.6, 18.7, null],
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
        "sequence": [15.5, 16.6, 15.8, 16, 15.3, 14.4, 14.6, 16.4, 15.4, 14.9, 14.3, 15.9, 15.1, null],
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
        "sequence": [null, null, null, null, null, null, 4, null, null, 9.1, null, 16, null, null],
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
        "sequence": [null, null, 24, null, null, null, 28.1, null, null, null, 31.5, null, null, null],
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
        "sequence": [7.4, null, 11, null, 6.7, null, 6.9, null, 11.8, null, 11.1, null, 11.1, null],
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
        "sequence": [20.1, 19.3, 19, 20.3, 22.9, 17.1, 19.5, 17.3, 17.9, 17.6, 16.9, 16.6],
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
        "sequence": [null, null, null, null, 13, 16, 14.4, 15.3, 15.6, null, 13.5, 15.2, 16.3, null],
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
        "sequence": [19.7, null, null, 19.7, 18.2, 13.8, 14.4, 18, 15, 14.9, 12.8, 10.4, 8.3, 12.8],
        "value": null
    },
    {
        "hc-key": "kp",
        "value": null
    },
    {
        "hc-key": "kr",
        "sequence": [41.8, 40.5, 41.1, 40.1, 39.6, 39.6, 39.8, 38.2, 39, 38.6, 39.6, 36.6, 36.3, 36.6],
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
        "sequence": [null, null, null, null, null, null, null, null, null, null, 11.6, null, null, null],
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
        "sequence": [null, null, 20.4, 20.7,	20.9,	20.1, 17.8, 17.5, 16.4, 16.5, 14.8, 15.4, 16, 14.1],
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
        "sequence": [23.1, 22.8, 24.5, 21.1, 22.4, 22, 21.9, 21.6, 20.9, 19.4, 19.2, 18.6, 18.2, null],
        "value": null
    },
    {
        "hc-key": "sz",
        "value": null
    },
    {
        "hc-key": "hu",
        "sequence": [14.1, 13.7, 9.1, 1.5, 3, 4, 0.4, 3.6, 2.2, 3.9, 6.4, 6.9, null, 8.7],
        "value": null
    },
    {
        "hc-key": "ro",
        "value": null
    },
    {
        "hc-key": "lu",
        "sequence": [null, null, 15.5, null, null, null, null, null, null, null, 6.5, null, null, null],
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
        "sequence": [22.2, null, 21.2, null, 20.1, null, 19.3, null, 19.5, null, 18.5, null, null, null],
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
        "sequence": [null, 28.1, 24.5, 24.6, 25.5, 22.4, 22, 21.2, 22, 20.3, 20.7, 21.8, null, null],
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
        "sequence": [null, 14.3, 11.3, null, 10.6, null, 11.4, null, 13, null, 7.2, null, 10.6, null],
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
        "sequence": [19.1, 17, 16.1, 15.8, 16.3, 16.1, 15.5, 17.1, 18, 15.3, 16, 16.5, 15.4, 15.5],
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
        "sequence": [7.1, 8.1, 7.5, 7.4, 7.6, 9.6, 9.3, 7, 7.8, 7.8, 6.8, 4.2, 6.2, 5.6],
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
        "sequence": [null, null, null, null, 19.2, 13.2, 12.4, 15.9, 13.3, 16, 14.3, 14.1, null, null],
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

} //buildMap

$(document).ready(function(){
console.log("about to build map");
buildMap();
})
