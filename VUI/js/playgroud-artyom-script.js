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
        indexes:["Hallo","Guten Morgen"],
        smart: false,
        action: function(){
            artyom.say("Guten Morgen, welche Informationen kann ich bereit stellen?");
        }
    });
    artyom.addCommands({
        indexes:["Status","Übersicht","Bericht wiederholen"],
        smart: false,
        action: function(i){
            if(i==0 || i==1){
                artyom.say("Die Zahlen der gestrigen Produktion sind vollständig vorhanden. Willst du eine grobe zusammenfassung oder einen Bericht?");
            };
            if(i==2){
                artyom.say("Bericht wird wiederholt. Willst du eine grobe zusammenfassung oder einen Bericht?");                
            }
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
        indexes:["Wie vergleichen diese Daten mit dem letzten Monat?","Vergleich","Vergleich mit dem letzen Monat"],
        smart: false,
        action: function(){
            artyom.say("Die Produktion ist um 12% gestiegen, der Auschuss um 5% gefallen und die Krankmeldungen um 25% gestiegen.");
        }
    });  
    artyom.addCommands({
        indexes:["Ist es zu Produktionsstopps gekommen?","Produktionsstopp","Verschleiß","Wie hoch waren die Verschleißkosten"],
        smart: false,
        action: function(i){
            if(i==0 || i==1){
            artyom.say("Um 13:34 Uhr ist es zu einem teilweisen Stopp der Produktion gekommen.Der Angegebene Grund ist: Systemwartungen");
            };
            if(i==2 || i==3){
            artyom.say("Die Verleißkosten beliefen sich auf 6 543 Euro.");
            }
        }
    }); 
    artyom.addCommands({
        indexes:["Wie viele Krankmeldungen gab es?","Krankmeldungen","Details"],
        smart: false,
        action: function(i){
            if(i==0 || i==1){
            artyom.say("Es haben sich 12 Mitarbeiter krank gemeldet, wovon 9 in der Produktion arbeiten und 3 in der Verwaltung");
            };
            if(i==2){
                artyom.say("Die durschnittliche Kranksheitsdauer beträgt 4 Tage. Hierdurch sind im letzten Monat 86 534 Euro Mehrkosten angefallen.");                
            }
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
