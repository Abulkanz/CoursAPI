var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var bAffCach = document.getElementById("dispHide");
var noteFr = document.getElementById("noteFr").innerText;
var noteMath = document.getElementById("noteMath").innerText;
var noteHist = document.getElementById("noteHist").innerText;
var moyenne = Math.round((parseFloat(noteFr) + parseFloat(noteMath) + parseFloat(noteHist))) / 3;
moyenne = moyenne.toFixed(2);
var ratioKane = 13.5;


//Mise à l'echelle des notes
var graphFr = noteFr * ratioKane;
var graphMath = noteMath * ratioKane;
var graphHist = noteHist * ratioKane;

//Socle du graphique
var graphBase = 270;
context.beginPath();
context.moveTo(0, graphBase);
context.lineTo(400, graphBase);
context.stroke();
context.closePath();

//Temoin de la moyenne
var graphMoy = 135;
context.beginPath();
context.save();
context.setLineDash([5, 8]);
context.moveTo(0, graphMoy);
context.lineTo(400, graphMoy);
context.stroke();
context.restore();
context.closePath();


//Graph Français
context.beginPath();
context.fillStyle = coulGraph(noteFr);
context.fillRect(30, 270 - graphFr, 30, graphFr);
context.closePath();

//Note Français
context.beginPath();
context.fillStyle = "black";
context.fillText("Français : " + noteFr, 18, graphBase + 12);
context.closePath();



//Graph Maths
context.beginPath();
context.fillStyle = coulGraph(noteMath);
context.fillRect(185, 270 - graphMath, 30, graphMath);
context.closePath();

//Note Maths
context.beginPath();
context.fillStyle = "black";
context.fillText("Maths : " + noteMath, 173, graphBase + 12);
context.closePath();

//Graph Histoire
context.beginPath();
context.fillStyle = coulGraph(noteHist);
context.fillRect(340, 270 - graphHist, 30, graphHist);
context.closePath();

//Note Histoire
context.beginPath();
context.fillStyle = "black";
context.fillText("Histoire : " + noteHist, 330, graphBase + 12);
context.closePath();

//Moyenne
context.beginPath();
context.fillStyle = "black";
context.fillText("Moyenne : " + moyenne, 160, graphBase + 25);
context.closePath();




bAffCach.onclick = function zoneGraph() {
    if (canvas.style.display !== 'none') {
        canvas.style.display = 'none';
    } else {
        canvas.style.display = 'block';
    }
};

function coulGraph(note) {
    if (note < 8) {
        return "red";
    } else if (note >= 8 && note < 10) {
        return "orange";
    } else if (note >= 10 && note < 12) {
        return "plum";
    } else if (note >= 12 && note < 15) {
        return "lightblue";
    } else {
        return "green";
    }
}
;


