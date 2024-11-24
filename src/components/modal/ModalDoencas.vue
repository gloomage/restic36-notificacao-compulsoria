<template>
  <q-dialog
    ref="dialogDelete"
    v-model="persistent"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card style="width: 400px; max-height: 500px">
      <q-card-section>
        <div class="text-h6">Selecione a Doença</div>
      </q-card-section>
      <q-card-section>
        <q-select
          v-model="doencaEscolhida"
          ref="type"
          use-input
          hide-selected
          fill-input
          hide-dropdown-icon
          hide-bottom-space
          input-debounce="500"
          option-value="id"
          :option-label="(item) => (item === null ? null : item.nome)"
          :options="doencas"
        />
      </q-card-section>
      <div class="row flex justify-end gap-sm q-pa-md">
        <q-btn
          class="btn-padrao q-pa-md"
          rounded
          label="Cancelar"
          color="grey"
          @click="hideDialog"
        />
        <q-btn
          class="btn-padrao"
          rounded
          label="Criar Notificação"
          color="primary"
          @click="onOKClick"
        />
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalDelete",
  props: {
    nomeItem: {
      type: String,
      required: true,
    },
    countRelacoes: Number,
  },
  data() {
    return {
      persistent: true,
      items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
      selectedItem: null,
      doencaEscolhida: null,
      doencas: [
        { id: 1, nome: "Tuberculose" },
        { id: 2, nome: "Hanseníase" },
        { id: 3, nome: "HIV/Aids" },
        { id: 4, nome: "Febre Amarela" },
        { id: 5, nome: "Dengue" },
        { id: 6, nome: "Chikungunya" },
        { id: 7, nome: "Zika Vírus" },
        { id: 8, nome: "Hepatite A" },
        { id: 9, nome: "Hepatite B" },
        { id: 10, nome: "Hepatite C" },
        { id: 11, nome: "Síndrome Respiratória Aguda Grave (SRAG)" },
        { id: 12, nome: "Sarampo" },
        { id: 13, nome: "Varíola dos Macacos (Monkeypox)" },
        { id: 14, nome: "Meningite" },
        { id: 15, nome: "Raiva Humana" },
        { id: 16, nome: "Febre do Nilo Ocidental" },
        { id: 17, nome: "Malária" },
        { id: 18, nome: "Leptospirose" },
        { id: 19, nome: "Cólera" },
        { id: 20, nome: "Tétano Neonatal" },
      ],
    };
  },
  methods: {
    hideDialog() {
      this.$refs.dialogDelete.hide();
    },
    onOKClick() {
      this.$emit("ok", this.doencaEscolhida);
      this.hideDialog();
    },
  },
});
</script>

<style scoped>
.q-card {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.q-btn {
  font-weight: 600;
}

.custom-banner {
  display: flex;
  align-items: center;
  padding-left: 16px;
  background-color: #ff81473d; /* cor do fundo */
  color: #ff2e12;
  border-left: 3px solid #ff2e12;
}
</style>
