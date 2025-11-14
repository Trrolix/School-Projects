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
