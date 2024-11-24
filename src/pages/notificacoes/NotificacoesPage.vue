<template>
  <q-page class="q-px-lg q-pt-lg q-pb-md" style="min-height: auto">
    <q-card class="card-section">
      <q-card-section class="flex q-pa-lg">
        <div class="row full-width">
          <div class="col" style="font-weight: 600; font-size: 24px">Todos</div>
          <div class="col-auto flex">
            <q-btn
              color="primary"
              label="Nova Notificação"
              @click="novaNotificacao()"
            />
            <q-input
              dense
              filled
              v-model="text"
              input-class="text-right"
              class="q-ml-md"
            >
              <template v-slot:append>
                <q-icon v-if="text === ''" name="search" />
                <q-icon
                  v-else
                  name="clear"
                  class="cursor-pointer"
                  @click="text = ''"
                />
              </template>
            </q-input>
          </div>
        </div>
      </q-card-section>
      <list-table
        :columns="colunas"
        :rows="registros"
        :last_page="last_page"
        :loading="loading"
        @edit-register="editRegister"
        @delete-register="deleteRegister"
        @feat-data="fetchData"
      />
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ListTable from "components/ListTable.vue";
import ModalDoencas from "components/modal/ModalDoencas.vue";

export default defineComponent({
  name: "page_notificacao",
  components: {
    ListTable,
  },
  data() {
    return {
      loading: false,
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: 1,
      text: "",

      registros: [
        {
          codigo: "7263",
          paciente: "EVELYN FLÁVIA PRISCILA DA ROSA",
          notificacao: "FEBRE MACULOSA E OUTRAS RIQUETISIOSES",
          status: "PROCESSADA",
        },
        {
          codigo: "7345",
          paciente: "JOÃO CARLOS SOUZA",
          notificacao: "DENGUE",
          status: "PENDENTE",
        },
        {
          codigo: "7412",
          paciente: "MARIA FERNANDA LIMA",
          notificacao: "LEPTOSPIROSE",
          status: "PROCESSADA",
        },
        {
          codigo: "7501",
          paciente: "CARLOS EDUARDO OLIVEIRA",
          notificacao: "MALÁRIA",
          status: "PENDENTE",
        },
        {
          codigo: "7620",
          paciente: "ANA BEATRIZ MARTINS",
          notificacao: "TUBERCULOSE",
          status: "PROCESSADA",
        },
        {
          codigo: "7689",
          paciente: "RICARDO DOS SANTOS",
          notificacao: "RAIVA HUMANA",
          status: "PENDENTE",
        },
        {
          codigo: "7744",
          paciente: "JULIANA PEREIRA GOMES",
          notificacao: "HANSENÍASE",
          status: "PROCESSADA",
        },
        {
          codigo: "7813",
          paciente: "JOSÉ RICARDO ALMEIDA",
          notificacao: "MENINGITE MENINGOCÓCICA",
          status: "PENDENTE",
        },
        {
          codigo: "7900",
          paciente: "PATRÍCIA COSTA ALVES",
          notificacao: "TETANO",
          status: "PROCESSADA",
        },
        {
          codigo: "7951",
          paciente: "FELIPE HENRIQUE BARBOSA",
          notificacao: "PESTE",
          status: "PENDENTE",
        },
      ],
      colunas: [
        {
          name: "codigo",
          label: "Código",
          field: "codigo",
          align: "left",
          sortable: true,
        },
        {
          name: "notificacao",
          label: "Notificação",
          field: "notificacao",
          align: "left",
          sortable: true,
        },
        {
          name: "paciente",
          label: "Paciente",
          field: "paciente",
          align: "center",
          sortable: true,
        },

        {
          name: "status",
          label: "Status",
          field: "status",
          align: "center",
          sortable: true,
        },
        { name: "actions", label: "Ações", field: "", align: "right" },
      ],
    };
  },
  methods: {
    novaNotificacao() {
      this.$q
        .dialog({
          parent: this,
          component: ModalDoencas,
        })
        .onOk((obj) => {
          this.$router.push("notificacoes/novo");
        });
    },
    changePage(num_page) {
      this.current_page = num_page;
      this.fetchData();
    },
    editRegister(obj) {
      console.log("ta editando");
      console.log(obj);
    },
    deleteRegister(obj) {
      console.log("ta deletando");
      console.log(obj);
    },
    async fetchData() {},
  },
});
</script>
