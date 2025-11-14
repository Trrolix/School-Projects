/*
var data_n = new Date();
var data_l = data_n.toString();
var data_u = data_n.toGMTString();
var data_r = data_n.toLocaleString();
document.write("<b>Czas lokalny:</b> " + data_l + "<br>");
document.write("<b>Czas uniwersalny:</b> " + data_u + "<br>");
document.write("<b>Czas regionalny:</b> " + data_r + "<br>")
*/


/*
function data_czas() {
 var miesiace = ["stycznia", "lutego", "marca", "kwietnia", "maja", 
"czerwca", "lipca", "sierpnia", "września", "października", "listopada", 
"grudnia"];
 var dni = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", 
"Piątek", "Sobota"];
 var data = new Date();
 var rok = data.getFullYear();
 var mies = data.getMonth();
 var nr_dzien = data.getDate();
 var dzien = data.getDay();
 var godz = data.getHours();
 var min = data.getMinutes();
 var sek = data.getSeconds();
 if (min < 10) {
 min = "0" + min;
 }
 if (sek < 10) {
 sek = "0" + sek;
 }
 var p_data_czas = dni[dzien] + ", " + nr_dzien + " " + miesiace[mies] + " " + rok + 
" roku<br>" + "Godzina: " + godz + ":" + min + ":" + sek;
 document.write(p_data_czas);
}
document.write("<b>Dzisiaj jest: <br>");
data_czas();
document.write("</b>")
*/

function Kartka() {
    const dni = ["NIEDZIELA", "PONIEDZIAŁEK", "WTOREK", "ŚRODA", "CZWARTEK", "PIĄTEK", "SOBOTA"];
    const miesiace = ["STYCZEŃ", "LUTY", "MARZEC", "KWIECIEŃ", "MAJ", "CZERWIEC", "LIPIEC", "SIERPIEŃ", "WRZESIEŃ", "PAŹDZIERNIK", "LISTOPAD", "GRUDZIEŃ"];

    const teraz = new Date();
    const dzienTygodnia = teraz.getDay();
    const numerDnia = teraz.getDate();
    const miesiac = teraz.getMonth();

    let godzina = teraz.getHours();
    let minuta = teraz.getMinutes();
    let sekunda = teraz.getSeconds();

    if (minuta < 10) minuta = "0" + minuta;
    if (sekunda < 10) sekunda = "0" + sekunda;

    document.getElementById("nazwaDnia").innerText = dni[dzienTygodnia];
    document.getElementById("numerDnia").innerText = numerDnia;
    document.getElementById("miesiac").innerText = miesiace[miesiac];
    document.getElementById("czas").innerText = "Godzina: " + godzina + ":" + minuta + ":" + sekunda;
  }

  setInterval(Kartka, 1000);
  Kartka();