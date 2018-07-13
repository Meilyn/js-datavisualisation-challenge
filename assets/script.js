var div = document.createElement("div");
div.id = "tabInfractions";
var ctnInfractions = document.getElementById("mw-content-text");

ctnInfractions.insertBefore(div, table1);

var data = [];
var table = document.getElementById("table1");
var years = table.getElementsByTagName("tr")[1].getElementsByTagName("th");
var yearsArray = [];

for(let i = 2; i < years.length; i++) {
let content = years[i].innerHTML;
yearsArray.push(content);
}

var rows = table.getElementsByTagName("tr");

for(let i = 2; i < rows.length; i++) {
let cells = rows[i].getElementsByTagName("td");

    for(let j = 0; j < cells.length; j++) {
            if(j === 0) {
                    var pays = cells[j].innerHTML;
            }
                    
            else if(!isNaN(parseInt(cells[j].innerHTML))) {
                    data.push({data:parseInt(cells[j].innerHTML), pays:pays, years:yearsArray[j-1]});
            }

    }
}

var svg = dimple.newSvg("#tabInfractions", "100%", 450);

  var myChart = new dimple.chart(svg, data);
  myChart.setBounds(30, 110, "90%", 305);
  var x = myChart.addCategoryAxis("x", "years");
  myChart.addMeasureAxis("y", "data");
  myChart.addSeries("pays", dimple.plot.line);
  myChart.addLegend(0, 10, "100%", 200);
  myChart.draw();


/* CHART 2 */

var div = document.createElement("div");
div.id = "tabdiv2";
var container = document.getElementById("mw-content-text");

container.insertBefore(div, table2);

var data = [];
var table = document.getElementById("table2");
var years = table.getElementsByTagName("tr")[0].getElementsByTagName("th");
var yearsArray = [];

for(let i = 2; i < years.length; i++) {
let content = years[i].innerHTML;
yearsArray.push(content);

}

var rows = table.getElementsByTagName("tr");

for(let i = 0; i < rows.length; i++) {
let cells = rows[i].getElementsByTagName("td");

    for(let j = 0; j < cells.length; j++) {
            if(j === 0) {
                    var pays = cells[j].innerHTML;
            }
                    
            else if(!isNaN(parseInt(cells[j].innerHTML))) {
                    data.push({data:parseInt(cells[j].innerHTML), pays:pays, year:yearsArray[j-1]});
            }

    }
}



var myChart = new dimple.chart(dimple.newSvg("#tabdiv2", "100%",550),data);

myChart.setBounds(30, 130, "90%", 305);

var x = myChart.addCategoryAxis("x", ["year", "pays"]);
x.addOrderRule("year",false);
myChart.addMeasureAxis("y", "data");
myChart.addSeries("pays", dimple.plot.bar);
myChart.addLegend(0, 10, "100%", 200);
myChart.draw();

//Troisieme Tableau 

var bodyContent = document.getElementById("bodyContent");
var divCriminalite = document.createElement("div");
var conCriminalite = document.getElementById("content");
conCriminalite.insertBefore(divCriminalite, bodyContent);
divCriminalite.id = "tab3div";

var svg = dimple.newSvg("#tab3div", "90%", 500);
var myChart = new dimple.chart(svg, []);

myChart.setBounds(60, 30, "100%", "70%");
myChart.addCategoryAxis("x", "number");
myChart.addMeasureAxis("y", "variable");
var s = myChart.addSeries(null, dimple.plot.ring);
myChart.draw();

// AJAX

let grapCriminalite = []


function chartprout() {

var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://inside.becode.org/api/v1/data/random.json");
ourRequest.onload = function() {
    ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData);


for ( let i=0; i<ourData.length; i++ ){

    obj = {
        variable: ourData[i][1],
//Numero "e"
number: ourData[i][0],
}
grapCriminalite.push(obj);

}
console.log(grapCriminalite);
};

ourRequest.send();
myChart.data = grapCriminalite;
myChart.draw();
setInterval(function(){chartprout()}, 1000);

}

chartprout();



