window.onload = function () {
    document.getElementById('btn_lähetä').addEventListener("click", btn_lähetä);

};
function btn_lähetä() {
    var errormessage = "";
    var käyttäjäID = document.getElementById('KäyttäjäID').value;
    if (käyttäjäID.length < 6) {
        errormessage += "<br>Käyttäjä ID pitää olla vähintään 6 merkkiä pitkä";
    }
    const salasana = document.getElementById('Salasana').value;
    if (salasana.length > 5 && salasana.match(/[a-z]/) && salasana.match(/[A-Z]/) && salasana.match(/\d/) && salasana.match(/[^a-zA-Z\d]/)) {


    } else {
        errormessage += "<br>Salasanan pitää olla vähintään 6 merkkiä pitkä, sisältää vähintään yksi numero ja joku erikoismerkki.";
    }


    const nimi = document.getElementById('Nimi').value;
    const osoite = document.getElementById('Osoite').value;
    const maa = document.getElementById('Maa').value;

    const postinumero = document.getElementById('Postinumero').value;
    console.log(Number(postinumero));
    if (isNaN(Number(postinumero))  || postinumero.length!=5){
        errormessage += "<br>Postinumerossa pitää olla 5 numeroa";

    }

    const sähkoposti = document.getElementById('Sähkoposti').value;
    atpos = sähkoposti.indexOf("@");
    dotpos = sähkoposti.lastIndexOf(".");

    if (atpos < 1 || (dotpos  < 1)) {
        errormessage += "<br>Syötä oikea sähköposti.";
    }
    var sukupuoli = document.querySelector('input[name="sukupuoli"]:checked');
    if (sukupuoli == null) {
        errormessage += "<br>sukupuoli ei täytetty";
    }
    else {
        sukupuoli = sukupuoli.value;
    }
     const kieli_Suomi = document.getElementById('suomi').value;
     const kieli_Mu = document.getElementById('muu').value;

     const lisätietoja = document.getElementById('Lisätietoja').value;


    var inputedvalue=`KäyttäjäID: ${käyttäjäID}`+
    `<br>Salasana: ${salasana}`+
    `<br>Nimi: ${nimi}`+
    `<br>Osoite: ${osoite}`+
    `<br>Maa: ${maa}`+
    `<br>Postinumero: ${postinumero}`+
    `<br>Sähkoposti: ${sähkoposti}`+
    `<br>Sukupuoli: ${sukupuoli}`+
    `<br>Kieli_Suomi: ${kieli_Suomi}`+
    `<br>Kieli_Mu: ${kieli_Mu}`+

    `<br>Lisätietoja: ${lisätietoja}`
    ;

    console.log(inputedvalue);
    document.querySelector('.errormessage').innerHTML = errormessage;


}
