<template>
  <base-layout :paginaTitel="paginaTitel" :paginaTerugLink="paginaTerugLink">
    <div class="content-container">
      <ion-list>
        <ion-item-divider>
          <h2 class="heading">
            <strong>Veelvoorkomende foutmeldingen en oplossingen</strong>
          </h2>
        </ion-item-divider>

        <ion-item>
          <ion-text>
            <h3>Onbekende gebruiker</h3>
            <p>
              Controleer of de gebruikersnaam correct is en of er een wachtwoord
              is ingevuld. Er zijn maar twee gebruikers mogelijk:
              <strong>user1</strong> en <strong>user2</strong>.
            </p>
          </ion-text>
        </ion-item>
        <ion-item>
          <ion-text>
            <h3>De ingevoerde code is onjuist</h3>
            <p>
              Zorg ervoor dat u de code correct invoert. De code voor de demo is
              <strong>123456</strong>.
            </p>
          </ion-text>
        </ion-item>
        <ion-item>
          <ion-text>
            <h3>Fout bij het ophalen van uw rapportages</h3>
            <p>
              Controleer of de internetverbinding actief is en probeer het
              opnieuw.
            </p>
          </ion-text>
        </ion-item>
        <ion-item>
          <ion-text>
            <h3>Foto's worden niet geüpload</h3>
            <p>Controleer of de bestandsgrootte niet te groot is.</p>
          </ion-text>
        </ion-item>
        <ion-item>
          <ion-text>
            <h3>Validatiefout</h3>
            <p>Vul alle velden in voor de inspectiedoelen die aan staan.</p>
          </ion-text>
        </ion-item>

        <ion-item-divider mode="ios"></ion-item-divider>

        <ion-item-divider>
          <h2 class="heading"><strong>Pagina uitleg</strong></h2>
        </ion-item-divider>

        <ion-item>
          <ion-text>
            <h3>Dashboard</h3>
            <p>
              Het dashboard is de startpagina van de applicatie. Hier kunt u
              eenvoudig navigeren naar de belangrijkste onderdelen:
            </p>
            <ul>
              <li>Doorklikken naar openstaande inspecties</li>
              <li>Inzien van uitgevoerde inspecties</li>
              <li>Toegang krijgen tot de documentatie voor ondersteuning</li>
              <li>Uw instellingen aanpassen</li>
            </ul>
          </ion-text>
        </ion-item>

        <ion-item-divider></ion-item-divider>

        <ion-item>
          <ion-text>
            <h3>Openstaande inspecties</h3>
            <p>
              Op deze pagina ziet u een overzicht van alle inspecties die nog
              uitgevoerd moeten worden. U kunt op een inspectie klikken om deze
              vervolgens in te vullen.
            </p>
          </ion-text>
        </ion-item>

        <ion-item-divider></ion-item-divider>

        <ion-item>
          <ion-text>
            <h3>Inspectie detail</h3>
            <p>
              Wanneer u een inspectie opent, kunt u hier alle details invullen.
            </p>
            <ul>
              <li>
                Inspectiedoelen kiezen (bijv. Schade opnemen, Achterstallig
                onderhoud)
              </li>
              <li>De inspectiegegevens per inspectiedoel invullen</li>
              <li>Foto's toevoegen als bewijsmateriaal</li>
              <li>De inspectie opslaan en afronden</li>
            </ul>
          </ion-text>
        </ion-item>

        <ion-item-divider></ion-item-divider>

        <ion-item>
          <ion-text>
            <h3>Uitgevoerde inspecties</h3>
            <p>
              Hier vindt u alle afgeronde inspecties, inclusief de datum van
              uitvoering.
            </p>
            <ul>
              <li>Een uitgevoerde inspectie openen</li>
              <li>Gegevens van een inspectie bekijken en aanpassen</li>
            </ul>
          </ion-text>
        </ion-item>

        <ion-item-divider></ion-item-divider>

        <ion-item>
          <ion-text>
            <h3>Documentatie</h3>
            <p>Op deze pagina vindt u hulp en uitleg over de applicatie.</p>
            <ul>
              <li>Oplossingen vinden voor veelvoorkomende foutmeldingen</li>
              <li>Uitleg lezen over het inspectieproces</li>
            </ul>
          </ion-text>
        </ion-item>

        <ion-item-divider></ion-item-divider>

        <ion-item>
          <ion-text>
            <h3>Instellingen</h3>
            <p>Hier kunt u uw weergavenaam aanpassen.</p>
          </ion-text>
        </ion-item>
      </ion-list>
      <ion-item-divider mode="ios"></ion-item-divider>

      <ion-list>
        <ion-item-divider>
          <h2 class="heading"><strong>Normbladen en testprocedures</strong></h2>
        </ion-item-divider>
        <ion-item>
          <ion-text>
            <p>
              U kunt bij elk inspectiedoel de benodigde informatie invullen aan
              de hand van onderstaande templates. Bij elk punt kunnen foto's
              toegevoegd worden als bewijsmateriaal.
            </p>
          </ion-text>
        </ion-item>

        <ion-item>
          <ion-text>
            <h3>Schade opnemen</h3>
            <p>Vul onderstaande gegevens in voor het registreren van schade.</p>
            <ul>
              <li><strong>Locatie:</strong> (Vul de exacte locatie in)</li>
              <li><strong>Nieuwe schade:</strong> (Ja/Nee)</li>
              <li>
                <strong>Soort schade:</strong> (Kies uit een keuzelijst)
                <ul>
                  <li>Moedwillig</li>
                  <li>Slijtage</li>
                  <li>Geweld</li>
                  <li>Normaal gebruik</li>
                  <li>Calamiteit</li>
                  <li>Anders</li>
                </ul>
              </li>
              <li><strong>Datum:</strong> (Selecteer een datum)</li>
              <li><strong>Acute actie vereist:</strong> (Ja/Nee)</li>
              <li>
                <strong>Omschrijving:</strong> (Geef een korte beschrijving van
                de schade)
              </li>
            </ul>
          </ion-text>
        </ion-item>

        <ion-item>
          <ion-text>
            <h3>Achterstallig onderhoud opnemen</h3>
            <p>
              Vul onderstaande gegevens in om achterstallig onderhoud te
              registreren.
            </p>
            <ul>
              <li><strong>Locatie:</strong> (Vul de exacte locatie in)</li>
              <li>
                <strong>Soort onderhoud:</strong> (Kies uit een keuzelijst)
                <ul>
                  <li>Schilderwerk</li>
                  <li>Houtrot</li>
                  <li>Elektra</li>
                  <li>Leidingwerk</li>
                  <li>Beglazing</li>
                </ul>
              </li>
              <li><strong>Acute actie vereist:</strong> (Ja/Nee)</li>
              <li>
                <strong>Kostenindicatie:</strong> (Kies uit een keuzelijst)
                <ul>
                  <li>0 - 500</li>
                  <li>500 - 1.500</li>
                  <li>1.500+</li>
                </ul>
              </li>
            </ul>
          </ion-text>
        </ion-item>

        <ion-item>
          <ion-text>
            <h3>Technische installaties inspecteren</h3>
            <p>
              Vul onderstaande gegevens in om een technische installatie te
              inspecteren.
            </p>
            <ul>
              <li><strong>Locatie:</strong> (Vul de exacte locatie in)</li>
              <li>
                <strong>Soort installatie:</strong> (Kies uit een keuzelijst)
                <ul>
                  <li>Koeling</li>
                  <li>Verwarming</li>
                  <li>Luchtverversing</li>
                  <li>Elektra</li>
                  <li>Beveiliging</li>
                </ul>
              </li>
              <li>
                <strong>Gemelde storingen:</strong> (Beschrijf eventuele
                storingen)
              </li>
              <li>
                <strong>Testprocedure:</strong> (Link naar PDF bestand van
                testprocedure)
              </li>
              <li><strong>Goedgekeurd:</strong> (Ja/Nee)</li>
              <li>
                <strong>Opmerkingen:</strong> (Eventuele aanvullende
                opmerkingen)
              </li>
            </ul>
          </ion-text>
        </ion-item>

        <ion-item>
          <ion-text>
            <h3>Modificaties inventariseren</h3>
            <p>
              Vul onderstaande gegevens in bij het vastleggen van modificaties.
            </p>
            <ul>
              <li>
                <strong
                  >Bestaande situatie en reeds gedocumenteerde
                  modificaties:</strong
                >
                (Link naar PDF bestand)
              </li>
              <li>
                <strong>Locatie aangetroffen modificatie:</strong> (Vul de
                exacte locatie in)
              </li>
              <li>
                <strong>Uitgevoerd door:</strong> (Kies uit een keuzelijst)
                <ul>
                  <li>Huurder</li>
                  <li>Aannemer</li>
                  <li>Onbekend</li>
                </ul>
              </li>
              <li>
                <strong>Beschrijving modificatie:</strong> (Omschrijf de
                modificatie)
              </li>
              <li>
                <strong>Te ondernemen actie:</strong> (Kies uit een keuzelijst)
                <ul>
                  <li>Accepteren</li>
                  <li>Laten keuren</li>
                  <li>Laten verwijderen</li>
                  <li>Laten aanpassen en keuren</li>
                </ul>
              </li>
              <li>
                <strong>Opmerkingen:</strong> (Eventuele aanvullende
                opmerkingen)
              </li>
            </ul>
          </ion-text>
        </ion-item>
      </ion-list>
    </div>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonItemDivider, IonText } from "@ionic/vue";
import mixins from "../mixins/mixins.js";

export default {
  name: "KnowledgeBase",
  components: {
    IonList,
    IonItem,
    IonItemDivider,
    IonText,
  },
  data() {
    return {
      paginaTitel: "Documentatie",
      paginaTerugLink: "/",
    };
  },
  mixins: [mixins],
};
</script>

<style scoped>
.heading {
  color: var(--ion-color-primary-shade);
}
</style>
