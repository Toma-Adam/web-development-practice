# Honda Accord Interaktív Kvíz - Tanulási Projekt

Ez egy interaktív, webes kvíz alkalmazás, amely a **Honda Accord** történetével kapcsolatos ismereteket teszteli. A projekt elsődleges célja a JavaScript logika, a DOM manipuláció és a tiszta kódstruktúra elmélyítése a **Webler Full-stack képzésére** való felkészülés jegyében.

## Miért készült ez a projekt?
Ez a repozitórium nem csupán egy működő alkalmazás, hanem egy **interaktív tananyag**. A forráskód (különösen a `script.js`) szándékosan **részletesen felülkommentelt**, hogy:
- Segítse a szintaxis (szabályrendszer) rögzítését.
- Dokumentálja az adatok útját a "tölcséren" (függvényeken) keresztül.
- Magyarázatot adjon a "miért"-ekre a kezdő programozói szemléletmód kialakításához.

## Funkciók
- **Dinamikus tartalom:** A kérdések és válaszok egy központi adatstruktúrából (Array of Objects) töltődnek be.
- **Automatizált gombgyártás:** A JavaScript "gyártósor" (forEach ciklus) hozza létre a válaszlehetőségeket.
- **Vizuális visszajelzés:** Azonnali színkódolt (zöld/piros) kiértékelés minden válasz után.
- **Időzített vezérlés:** `setTimeout` használata a felhasználói élmény javítása érdekében.

## Technikai részletek
- **HTML5:** Strukturált felépítés, szemantikus elemek használata.
- **CSS3:** Modern Flexbox elrendezés, `border-box` méretezés és `transition` animációk a reszponzivitásért.
- **Vanilla JavaScript:** Külső könyvtárak nélküli, tiszta JS logika, eseménykezelés és időzítés.

## Fájlszerkezet
- `index.html`: A weboldal vázszerkezete.
- `style.css`: A vizuális megjelenésért és a kártya-alapú dizájnért felelős stíluslap.
- `script.js`: A kvíz "motorja", részletes magyar nyelvű magyarázatokkal minden logikai egységhez.

## Használat
1. Klónozd vagy töltsd le a repozitóriumot.
2. Nyisd meg az `index.html` fájlt bármelyik modern böngészőben.
3. Olvasd el a kód melletti kommenteket a működés megértéséhez!