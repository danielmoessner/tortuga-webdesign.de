<template>
  <main>
    <TheHeader :title="header.title" :subtitle="header.subtitle" />
    <!-- <BaseDivider /> -->
    <TheStakes :title="stakes.title" :subtitle="stakes.subtitle" />
    <TheValue :pretitle="value.pretitle" :title="value.title" :subtitle="value.subtitle" :propositions="value.propositions" />
    <!-- <BaseDivider /> -->
    <TheGuide :title="guide.title" :subtitle="guide.subtitle" />
  </main>
</template>
<script>
import TheHeader from "../components/TheHeader.vue";
import TheStakes from "../components/TheStakes.vue";
import TheValue from "../components/TheValue.vue";
import BaseDivider from "../components/BaseDivider.vue";
import TheGuide from "../components/TheGuide.vue";

export default {
  components: {
    TheHeader,
    TheStakes,
    TheValue,
    BaseDivider,
    TheGuide
  },
  data() {
    return {
      title: "Werden Sie modern & geliebt von Ihren Webseitenbesuchern",
      description: "Viele Personen oder Unternehmen werden online nachteilig repräsentiert. Wir von Tortuga Webdesign liefern klar strukturierte & attraktive Webseiten, sodass Sie online modern dargestellt und von Webseitenbesuchern geliebt werden.",
      header: {
        title: "Werden Sie modern & geliebt von Ihren Webseitenbesuchern",
        subtitle: "Wir liefern Ihnen die klar strukturierte & attraktive Webseite."
      },
      stakes: {
        title: "Sind sie zufrieden mit Ihrer Internetpräsenz?",
        subtitle: "Lassen Sie sich online nicht nachteilig repräsentieren. Keiner sollte sich für seine Onlinepräsenz schämen müssen."
      },
      value: {
        pretitle: "Wir liefern Ihnen",
        title: "Begeisterte Webseitenbesucher",
        subtitle: "Kunden finden auf Ihrer Webseite ohne Umwege genau das, wonach sie suchen.",
        propositions: [{
            icon: { type: "fas", name: "user-tie", margin: -3 },
            title: "Professionellen Internetauftritt",
            text: "Mit Ihrer neuen Präsenz sehen Sie online modern aus und stehlen damit allen das Licht."
          },
          {
            icon: { type: "fas", name: "eye", margin: 7 },
            title: "Mehr Aufmerksamkeit",
            text: "Google & Co. zeigt Sie in den Suchergebnissen an und liefert Ihnen potentielle Kunden."
          },
          {
            icon: { type: "far", name: "smile-beam", margin: 0 },
            title: "Gutes Gefühl mit Ihrer Webseite",
            text: "Sie wissen, dass Ihre Seite jetzt perfekt zu Ihnen passt und mit Ihren Zielen im Einklang ist."
          }
        ]
      },
      guide: {
        title: "Wir bleiben langfristig an Ihrer Seite",
        subtitle: "Unsere Referenzen"
      },
      plan: {
        title: "Der Weg zur perfekten Webseite",
        subtitle: "Vier einfache Schritte",
        steps: [{
            icon: { type: "far", name: "comments", margin: 0 },
            title: "1. Erstgespräch",
            text: "Melden Sie sich einfach bei uns zur Vereinbarung eines unverbindlichen Erstgesprächs. Hier klären wir wie Ihnen am besten geholfen werden kann. Danach wissen Sie ganz genau wie eine Zusammenarbeit ausschauen würde."
          },
          {
            icon: { type: "fas", name: "bullseye", margin: 0 },
            title: "2. Strategie*",
            text: "In der Strategiephase beschäftigen wir uns mit den Zielen Ihrer Webseite. Außerdem besprechen wir die nötigen Inhalte und die visuelle Richtung Ihrer Internetpräsenz. Nach dieser Phase steht das Fundament für den späteren Projektverlauf."
          },
          {
            icon: { type: "fas", name: "pencil-alt", margin: 0 },
            title: "3. Design*",
            text: "In der Designphase nehmen wir die in der Strategie Phase besprochenen Inhalte und bringen sie in ein attraktives Design. Dafür erstellen wir Wireframes, die uns einen klaren Eindruck über das spätere Aussehen Ihrer Webseite vermitteln."
          },
          {
            icon: { type: "far", name: "file-code", margin: 6 },
            title: "4. Entwicklung*",
            text: "In der Entwicklungsphase bringen wir die im Design Prozess erstellten Wireframes in einen brauchbaren Code, sodass Ihre Webseite im Internet darstellbar ist. Am Ende dieses Prozesses haben Sie Ihre finale Webseite in der Hand."
          }
        ],
        bottom: "* Nach jeder Phase übernehmen wir Ihre Änderungs- und Anpassungswünsche, sodass Sie am Ende zu 100 % zufrieden sind."
      }
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: this.description }
      ],
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ],
    }
  }
}

</script>
<style>
body {
  height: 200vh;
}

</style>
