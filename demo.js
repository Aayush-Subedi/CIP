google.load("visualization", "1.1", {
  packages: ["geochart"],
});
google.setOnLoadCallback(drawStuff);
function drawStuff() {
  var data = google.visualization.arrayToDataTable([
    ["Country", "NGO", "Domain"],
    ["Nepal", "SPOWC, CDSN", "https://www.ketaaketi.de/nepal"],
    [
      "Sierra Leone",
      "Mindokatie Salone, SEN",
      "https://www.ketaaketi.de/sierra-leone",
    ],
    [
      "Burundi",
      "Iterambere Iwacu, Arame, UMUCO",
      "https://www.ketaaketi.de/burundi",
    ],
    ["Zimbabwe", "Simba Kumukadzi", "https://www.ketaaketi.de/Simbabwe"],
    ["Ecuador", "MAKIPURANA", "https://www.ketaaketi.de/Ecuador"],
    ["Madagascar", "PUR", "https://www.ketaaketi.de/aktuelles"],
    [
      "Liberia",
      "Sustainable Livelihoods Support Program",
      "https://www.ketaaketi.de/aktuelles",
    ],
    [
      { v: "SS", f: "South Sudan" },
      "She matters",
      "https://www.ketaaketi.de/aktuelles",
    ],
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([
    0,
    {
      type: "number",
      calc: function (data, row) {
        var sourceValue = data.getValue(row, 1);
        return {
          f: "Partner NGO: " + sourceValue,
        };
      },
    },
  ]);
  var options = {
    resolution: "countries",
    keepAspectRatio: true,
    colorAxis: "#000000",
    datalessRegionColor: "#bebebe",
    backgroundColor: "#ffffff",
    defaultColor: "#951F26",
    enableRegionInteractivity: true,
  };
  var chart = new google.visualization.GeoChart(
    document.getElementById("1927338168")
  );
  google.visualization.events.addListener(chart, "select", function () {
    var selection = chart.getSelection();
    if (selection.length > 0) {
      console.log(data.getValue(selection[0].row, 2));
      window.open(data.getValue(selection[0].row, 2));
    }
  });
  chart.draw(view, options);
}
