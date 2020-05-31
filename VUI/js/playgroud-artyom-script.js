window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    artyom.addCommands({
        indexes:["Status","Übersicht"],
        smart: false,
        action: function(){
            artyom.say("Die Zahlen der gestrigen Produktion sind vollständig vorhanden. Willst du eine grobe zusammenfassung oder einen Bericht?");
        }
    });
    artyom.addCommands({
        indexes:["Bericht","Zeig mir den Bericht"],
        smart: false,
        action: function(){
            artyom.say("Es wurden gestern 123 987 Einheiten produziert ein Anstieg von 10%. Hiervon waren 9 875 Einheiten Ausschuss, dies sind 5 % weniger als gestern");
        }
    });
    artyom.addCommands({
        indexes:["Wie vergleichen diese Daten mit dem letzten Monat?","Vergleich","Verlgeich mit dem letzen Monat"],
        smart: false,
        action: function(){
            artyom.say("Die Produktion ist um 12% gestiegen, der Auschuss um 5% gefallen und die Krankmeldungen um 25% gestiegen.");
        }
    });  
    artyom.addCommands({
        indexes:["Ist es zu Produktionsstopps gekommen?","Produktionsstopp"],
        smart: false,
        action: function(){
            artyom.say("Um 13:34 Uhr ist es zu einem teilweisen Stopp der Produktion gekommen.Der Angegeben Grund ist: Systemwarungen");
        }
    });
    artyom.addCommands({
        indexes:["Bericht wiederholen","Wiederholen"],
        smart: false,
        action: function(){
            artyom.say("Die Zahlen der gestrigen Produktion sind vollständig vorhanden. Willst du eine grobe zusammenfassung oder einen Bericht?");
        }
    });  
    artyom.addCommands({
        indexes:["Zeig mir eine Zusammenfassung","Zusammenfassung"],
        smart: false,
        action: function(){
            artyom.say("Die Produzierte Stückzahl ist um 10% über norm, Ausschuss ist um 5 % gefallen");
        }
    });
    


    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map
