/* --- 1. ADATOK ELTÁROLÁSA (A RECEPT) ---*/
 // 'const' = konstans. Olyan változó, aminek az értéke (a listaegésze) nem fog változni.
 // '[]' egy tömb (Array), ani egy sorszámozott lista.
 // '{}' egy Objektum. Ez egy "csomag", amiben összevontuk a kérdést, a válaszokat és a jót
const kerdesek = [
    {
    kerdes: "Melyik országban alapították a Hondát?", // Kulcs: Érték páros
    valaszok: ["USA", "Japán", "Németország"], // Ez itt egy tömb a tömbben!
    helyes: 1 // A 2. válasz a jó (mivel 0-tól számolunk: 0, 1, 2)
    },
    {
        kerdes: "Melyik évben mutatták be az első Honda Accordot?",
        valaszok: ["1976", "1990", "2005"],
        helyes: 0 // Az első válasz a jó (1976)
    }
   
];

//'let' = olyan változü, amit később át fogunk írni (felülírható).
// Ebben tartjuk számon, hogy a listában éppen hol áll a "könyvjelzőnk".
let kerdesIndex = 0;

 /* --- 2. INDÍTÁS (A START GOMB) ---*/
/* METÓDUS: Elindítja a kvízt */
function inditKviz() {
    kerdesIndex = 0; // Mindig nulláról indulunk (az első kérdéstől)
    mutasdAkerdest(); // Rögtön meg is hívjuk a következő "munkást", hogy rajzoljon.
}

/* --- 3. MEGJELENÍTÉS (A kőműves munka) --- */
function mutasdAkerdest() {
    // Összekötjük a JS változókat a HTML-ben lévő "dobozokkal" az ID alapján.
    // Ez olyan, mintha megfognám a távirányítót, amivel a TV-t irányítom
    const kerdesSzoveg = document.getElementById("kerdes");
    const gombDoboz = document.getElementById("valaszok");
    const visszaJelzes = document.getElementById("visszajelzes");

    // Tiszta lapot kezdünk: töröljük az előző kérdés gombjait és szövegeket.
    // Az innerHTML = "" gyakorlatilag egy virtuális radír
    visszaJelzes.innerText = "";
    gombDoboz.innerHTML = "";

    // Kivesszük a 'kerdesek' listából azt az egy darab csomagot (objektum),
    // ahol a könyvjelző (kerdesIndex) éppen áll.
    const aktualis = kerdesek[kerdesIndex];

    // A HTML bekezdésbe beleírjuk az aktuális kérdés szövegét.
    kerdesSzoveg.innerText = aktualis.kerdes;

    /* CIKLUS: (A gyártósor):
        Végigmegyünk az aktuális kérdés 'valaszok' listáján.
        a 'foreach' azt jelenti "csináld meg minden egyes elemmel a következőket..." */
    aktualis.valaszok.forEach((szoveg, sorszam) => {
        // 1. Létrehozunk a semmiből egy új gomb elemet a memóriában.
        const gomb = document.createElement("button"); 

        // 2. Beleírjuk a gombra az adott választ (pl. "Japán").
        gomb.innerText = szoveg; 

        // 3. Ráragasztunk wgy eseményfigyelőt: ha rákattintanak,
        // hívja meg az ellenőrzés funkciót, és mondja meg neki, hanyadik gomb volt ez.
        // Az () => egy "nyíl függvény" (arrow function), egy rövidítés a JS-ben.
        gomb.onclick = () => ellenorzes(sorszam);

        // 4. Az elkészült gombot ténylegesen betesszük a HTML-be a többi közé.
        gombDoboz.appendChild(gomb); // Beteszi a gombot a dobozba
    });

}
/* --- 4. ELLENŐRZÉS ÉS DÖNTÉS (A BÍRÓ) --- */

// A 'tipp' paraméter (tölcsér bemenet) kapja meg, melyik gombot nyomtam meg (0, 1 vagy 2).
function ellenorzes(tipp) {
    const visszaJelzes = document.getElementById("visszajelzes");

    // Megnézzük a listákban hogy mi volt az elmentett 'helyes' szám.
    const joValasz = kerdesek[kerdesIndex].helyes;

    // Összehasonlítás: ha a tipp megegyezik a jó válasszal...
    // A '===' a szigorú egyenlőség: nem csak az érték, a tipus is stimmeljen.
    if(tipp === joValasz){
        visszaJelzes.innerText = "Találat! Ügyes";
        visszaJelzes.style.color = "green"; // Dinamikusan átirjuk a CSS színét zöldre.

    }else{
        visszaJelzes.innerText = "Sajnos nem.";
        visszaJelzes.style.color = "red"; // Dinamikusan átirjuk a CSS színét pirosra.
    }
    /* IDŐZÍTETT TOVÁBBLÉPÉS */
    // A settimeout elhalasztja a futást, hogy legyen idő elolvasni a visszajelzést.
    setTimeout(() => {

        // Továbblépünk a következő kérdésre (növeljük az indexet 1-gyel).
        kerdesIndex++; 

        // LOGIKAI VIZSGÁLAT: Van-e még kérdés a litában?
        // Ha az index (pl. 1) kisebb, mint a lista hossza (2), akkor mehet tovább.
        if(kerdesIndex < kerdesek.length) {
            mutasdAkerdest();// Újrarajzoljuk az oldalt a következő kérdéssel.

        }else{
            // Ha elfogytak a kérdések, lecseréljük az egész doboz tartalmát egy végszóra
            document.getElementById("kviz-reszleg").innerHTML = "<h2> Szép munka!</h2>";
        }
    }, 1500); // 1500 ezredmásodperc = 1.5 másodperc várakozás


}