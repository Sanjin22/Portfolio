window.onscroll = () => {
  funkcija();
};

function funkcija() {
  var pocetna = document.documentElement.scrollTop;
  var visinaGl =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var skrolano = (pocetna / visinaGl) * 100;
  document.getElementById("slider").style.width = skrolano + "%";
}
