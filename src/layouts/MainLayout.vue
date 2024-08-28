<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title style="text-align: center; text-transform: uppercase">
          Notificação Compulsória - Preenchimento
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label
          style="
            font-size: 1rem;
            font-weight: 600;
            color: rgb(41, 41, 41);
            text-align: center;
            text-transform: uppercase;
          "
          class="q-pt-md"
        >
          Lista Nacional de Doenças
        </q-item-label>
        <div class="q-mx-md q-mt-sm q-mb-md">
          <q-input standout v-model="search" dense type="search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <template v-for="(item, index) in lista_nacional" :key="index">
          <q-separator spaced inset />
          <q-item clickable v-ripple class="q-mx-sm">
            <q-item-section>{{ item }}</q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      leftDrawerOpen: false,
      search: "",
      lista_nacional: [
        "Acidente de trabalho com exposição a material biológico",
        "Acidente de trabalho",
        "Acidente por animal peçonhento",
        "Acidente por animal potencialmente transmissor da raiva",
        "Botulismo",
        "Cólera",
        "Coqueluche",
        "Covid-19",
        "Dengue - Casos",
        "Dengue - Óbitos",
        "Difteria",
        "Doença de Chagas Aguda",
        "Doença de Chagas Crônica",
        "Doença de Creutzfeldt-Jakob (DCJ)",
        "Doença Invasiva por 'Haemophilus Influenza'",
        "Doença Meningocócica e outras meningites",
        "Antraz pneumônico",
        "Tularemia",
        "Varíola",
        "Doenças febris hemorrágicas emergentes: Arenavírus, Ebola, Marburg, Lassa, Febre purpúrica brasileira",
        "Doença aguda pelo vírus Zika",
        "Doença aguda pelo vírus Zika em gestante",
        "Óbito com suspeita de doença pelo vírus Zika",
        "Síndrome congênita associada à infecção pelo vírus Zika",
        "Esquistossomose",
        "Evento de Saúde Pública (ESP)",
        "Eventos adversos graves ou óbitos pós vacinação",
        "Febre Amarela",
        "Febre de Chikungunya",
        "Febre de Chikungunya em áreas sem transmissão",
        "Óbito com suspeita de Febre de Chikungunya",
        "Febre do Nilo Ocidental e outras arboviroses",
        "Febre Maculosa e outras Riquetisioses",
        "Febre Tifoide",
        "Hanseníase",
        "Hantavirose",
        "Hepatites virais",
        "HIV/AIDS - Infecção pelo Vírus da Imunodeficiência Humana",
        "Infecção pelo HIV em gestante, parturiente ou puérpera",
        "Infecção pelo Vírus da Imunodeficiência Humana (HIV)",
        "Infecção pelo Vírus Linfotrópico de Células T Humanas (HTLV)",
        "Infecção pelo HTLV em gestante, parturiente ou puérpera",
        "Influenza humana produzida por novo subtipo viral",
        "Intoxicação Exógena",
        "Leishmaniose Tegumentar Americana",
        "Leishmaniose Visceral",
        "Leptospirose",
        "Malária na região amazônica",
        "Malária na região extra-Amazônica",
        "Monkeypox (varíola dos macacos)",
        "Óbito: Infantil, Materno",
        "Poliomielite por poliovírus selvagem",
        "Peste",
        "Raiva humana",
        "Síndrome da Rubéola Congênita",
        "Doenças Exantemáticas: Sarampo, Rubéola",
        "Sífilis: Adquirida, Congênita, Em gestante",
        "Síndrome da Paralisia Flácida Aguda",
        "Síndrome Inflamatória Multissistêmica em Adultos (SIM-A) associada à covid-19",
        "Síndrome Inflamatória Multissistêmica Pediátrica (SIM-P) associada à covid-19",
        "Síndrome Respiratória Aguda Grave (SRAG) associada a Coronavírus",
        "Síndrome Gripal suspeita de covid-19",
        "Tétano: Acidental, Neonatal",
        "Toxoplasmose gestacional e congênita",
        "Tuberculose",
        "Varicela - caso grave internado ou óbito",
        "Violência doméstica e/ou outras violências",
        "Violência sexual e tentativa de suicídio",
      ],
    };
  },
  methods: {
    toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    },
  },
});
</script>
