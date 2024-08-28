<template>
  <q-page>
    <div class="row">
      <div class="col-12">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey q-pa-md"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="dados-gerais" label="Dados Gerais" />
          <q-tab name="notificacao-individual" label="Notificação Individual" />
          <q-tab name="dados-residencia" label="Dados da Residência" />
        </q-tabs>
      </div>
      <div class="col-12">
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="dados-gerais">
            <dados-gerais />
          </q-tab-panel>

          <q-tab-panel name="notificacao-individual"> </q-tab-panel>

          <q-tab-panel name="dados-residencia"> </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import DadosGerais from "components/forms/DadosGerais.vue";

export default defineComponent({
  components: {
    DadosGerais,
  },
  data() {
    return {
      tab: ref("mails"),
    };
  },
});
</script>
