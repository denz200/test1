# RealEstateCare

## Installatie en compilatie

### Project opzetten

```npm install```

### Compileren voor ontwikkeling

```npm run dev```

### Compileren voor productie

```npm run build```

## De pagina’s van RealEstateCare

### Inloggen

De applicatie begint bij de loginpagina. Want zonder dat je ingelogd bent, kun je ook niets in de applicatie. Er zijn twee gebruikers mogelijk: “user1” en “user2”. Het wachtwoord kan iets willekeurigs zijn, als er maar iets is ingevuld. Als dit gelukt is, springt de applicatie van het “login" inlogfase naar het “twoFactor” inlogfase.

In deze twoFactor inlogfase moet de gebruiker de authenticatiecode invoeren die ze ontvangen op hun mobiel. Voor de demo is dit “123456”.

Mocht er iets misgaan, dan geeft de applicatie een alertMessage door naar het ion-alert component.

### Dashboard

Op het dashboard kan de inspecteur navigeren naar: openstaande inspecties, uitgevoerde inspecties, documentatie en instellingen.

### Openstaande inspecties

Op de openstaande inspecties pagina staan de inspecties die nog moeten worden uitgevoerd voor de ingelogde inspecteur. Als deze pagina geopend wordt, zorgt de created() lifecycle hook ervoor dat de inspecties worden opgehaald. Het communiceren met de API gebeurt vervolgens weer in een eigen service.

### Inspectie detail

Als er op een inspectie geklikt wordt, kan de inspecteur de inspectiegegevens invullen. Hier zijn altijd vier inspectiedoelen beschikbaar om in te vullen: Schade opnemen, Achterstallig onderhoud opnemen, Technische installaties inspecteren en Modificaties inventariseren.

Per inspectie verschilt welk inspectiedoel standaard aan staat. Wel is het zo dat de inspecteur zelf kan kiezen welke doelen bij de inspectie horen via een checkbox. Het kan dus zo zijn dat de inspecteur alle vier inspectiedoelen relevant vindt voor het project.

Elk inspectiedoel heeft zijn eigen invoervelden, en alles moet ingevoerd worden voor de inspectiedoelen die aangevinkt staan. Ook kan de inspecteur foto’s als bewijsmateriaal toevoegen.

### Uitgevoerde inspecties

Op de uitgevoerde inspecties pagina staan de inspecties die uitgevoerd zijn. Er staat ook een datum waarop de inspectie is uitgevoerd. De inspecteur kan op elke inspectie klikken om deze vervolgens te kunnen bewerken.

### Documentatie

Op de documentatie pagina staat informatie die de inspecteur meer leert over de applicatie. Bijvoorbeeld bij foutmeldingen kan de inspecteur terecht op deze pagina.

### Instellingen

Op de instellingen pagina kan de inspecteur zijn/haar weergavenaam, avatar en wachtwoord veranderen. En ook instellingen zoals dark mode, meldingen en geluiden.

## Tooling

Visual Studio Code met VueJS, Ionic, Vue Router, Pinia, Axios en Ionicons. Extensies: ESLint, Path Intellisense, Prettier, Vue - Official.

## Usability

De usability van RealEstateCare is goed getest en er is rekening gehouden met de 10 heuristieken van Jakob Nielsen.

### Heuristiek 1: Zichtbaarheid van de status is belangrijk.

-   Er wordt een loader getoond als de inspecties worden opgehaald uit de API via de inspectieservice.

### Heuristiek 2: Het systeem en de echte wereld komen overeen.

-   RealEstateCare is gemaakt voor inspecteurs, en die snappen wat ze moeten invullen bij het uitvoeren van een inspectie.
-   Er worden duidelijke icoontjes gebruikt op het dashboard en in de navigatiebalk onderin.

### Heuristiek 3: Gebruiker heeft controle en vrijheid.

-   Er is op elke pagina een mogelijkheid om terug te keren naar de vorige pagina via het pijltje linksboven in het scherm.
-   Als een inspectie toch een ander of aanvullend inspectiedoel heeft, kan dat eenvoudig ingeschakeld worden op de inspectiedetailpagina.

### Heuristiek 4: Wees consistent.

-   De navigatiebalken bovenaan en onderaan worden op elke pagina getoond.
-   De account/inlogpagina zit altijd rechtsboven in het scherm.
-   Linksboven staat altijd een terugknop.

### Heuristiek 5: Maak geen fouten.

-   Er worden over de hele applicatie meldingen gegeven aan de gebruiker als er iets misgaat, en vooral wat er misgaat. De oplossing staat altijd in de foutmelding..
-   Voorbeelden zijn: alle velden moeten ingevuld worden bij het inspectiedetail, wachtwoorden moeten overeenkomen, er moet een gebruikersnaam én wachtwoord ingevoerd worden.
-   Wachtwoorden moeten twee maal ingetypt worden om typefouten te voorkomen.
-   Er worden specifieke invoervelden gebruikt zodat de gebruiker bijna geen fout kan maken bij het invoeren van een inspectie.

### Heuristiek 6: Zorg dat de bezoeker niks hoeft te onthouden.

-   De applicatie is zo ontwikkeld dat de inspecteur gemakkelijk kan zien of er inspecties open staan.
-   Eenmaal ingevuld, kan de inspecteur de ingevoerde inspecties gemakkelijk inkijken en bewerken.
-   Er is een documentatie/kennisbank pagina beschikbaar voor vragen.

### Heuristiek 7: Flexibiliteit en efficiency.

-   De bezoekers van de applicatie zijn inspecteurs die weten hoe ze een inspectie moeten uitvoeren.
-   Als er toch vragen zijn, is er een documentatie pagina.

### Heuristiek 8: Hou het minimaal en verfijnd.

-   Er is geen overbodige tekst of vormgeving. Op elke pagina staat wat er moet staan.

### Heuristiek 9: Maak foutmeldingen minder eng.

-   De enige foutmelding die eng kan zijn, is als er geen data kan worden opgehaald uit de API.
-   Om dit minder eng te maken, is er een leuk plaatje op de pagina te zien.

### Heuristiek 10: Bied een helpende hand

-   Er is een kennisbank / documentatie pagina beschikbaar. Deze is makkelijk te vinden in de onderste navigatiebalk.

## WCAG

Er is rekening gehouden met de vier principes van de WCAG. Er is bijvoorbeeld getest om de applicatie te bedienen met alleen het toetsenbord, en dit is mogelijk. Ook hebben alle afbeeldingen een ALT-tekst.

Voor het testen van toegankelijkheid heb ik [deze](https://addons.mozilla.org/nl/firefox/addon/ainspector-wcag/) extensie gebruikt met ruleset WCAG 2.1, Level A.

Tijdens het testen zag ik dat nog niet alles perfect was. Dit zijn een paar dingen die ik heb aangepast:

-   Sommige kleuren zijn veranderd om aan WCAG richtlijnen te voldoen.
-   Een leuke afbeelding wordt getoond bij een foutmelding.
-   De navigatiebalk kleiner gemaakt zodat er op landschapsmodus op mobiel meer te zien is (WCAG punt 1.3.4 Weergavestand).
-   Sommige kleuren donkerder gemaakt zodat het voldoet aan WCAG.
-   aria-attributen toegevoegd zoals aria-label.
-   De toolbar title is ook automatisch tot een H1 gemaakt.

Een paar toegankelijkheid dingen lukten niet:

-   De navigatie items in de onderste balk moeten in een `<nav>`, worden geplaatst, maar daardoor brak de layout.
-   De `<title>` en `<h1>` moeten (gedeeltelijk) overeenkomen. Maar ik denk niet dat dat een belangrijk punt is voor de huidige applicatie.

De shadow dom voorkomt dat ik bepaalde elementen kan aanpassen, maar alle aanpassingen die mogelijk waren, heb ik doorgevoerd. Daardoor zie ik in de extensie alleen nog violations en warnings voor de zaken waarover ik geen controle heb of die mij niet zijn gelukt.

De applicatie voldoet dus niet helemaal aan de WCAG 2.1-richtlijnen, maar grotendeels wel.

## Veiligheid en best practices

Er is ook rekening gehouden met veiligheid en best practices. Ik heb de [style guide](https://vuejs.org/style-guide/) van Vue doorgelezen en mijn code er zoveel mogelijk op aangepast. Zo had ik eerst nog geen multi-word component names. Maar nu ik weet dat het conflicten kan opleveren, heb ik deze toegepast op alle componenten. Ook heb ik de [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) van OWASP gelezen.

## Wat er nog niet goed gaat

-   Als er op desktop schermen naar een andere pagina genavigeerd wordt, dan worden de icoontjes en tekst heel klein. Dit is me nog niet gelukt op te lossen. Op mobiele apparaten werkt dit wel goed.
-   De camera app openen via de webpagina op desktop/laptop. Wel kan er een afbeelding worden gekozen via de mediabibliotheek.
