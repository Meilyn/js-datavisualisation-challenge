let table1 = document.getElementById('table1');
let rows = table1.getElementsByTagName('tr');
let date = 2000;
let tableV = [];

 


for (let i = 2; i < rows.length ; i++) {
  for(let j = 2; j < rows[i].children.length; j++){
    tableV.push({
      'pays':rows[i].children[1].innerHTML,
      'valeur': rows[i].children[j].innerHTML,
      'années': j + date
    })
  }

}


    let parentTab1 = table1.parentNode;
    let grapInfractions = document.createElement("div");
    grapInfractions.id = "Infractions";
    parentTab1.insertBefore(grapInfractions, table1);



     var svg = dimple.newSvg("#"+grapInfractions.id,590, 400);

     var myChart = new dimple.chart(svg, tableV );

     
      myChart.setBounds(60, 30, 505, 305);
      var x = myChart.addCategoryAxis("x", "années");
      x.addOrderRule("années");
      myChart.addMeasureAxis("y", "valeur");
      myChart.addSeries("valeur", dimple.plot.bar);
      myChart.addLegend(60, 10, 500, 20, "right");
      myChart.draw();

