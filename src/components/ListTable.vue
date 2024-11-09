<template>
  <q-table
    class="my-sticky-header-table"
    v-model:pagination="pagination"
    virtual-scroll
    :loading="local_loading"
    :inFs="inFs"
    :rows="local_row"
    :columns="columns"
  >
    <template v-slot:loading>
      <q-inner-loading showing color="primary" />
    </template>
    <template v-slot:top>
      <div class="row q-gutter-sm">
        <slot name="header"></slot>
      </div>
    </template>
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn dense round flat color="grey" icon="more_vert">
          <q-menu>
            <q-list style="min-width: 100px" class="q-pa-sm">
              <q-item
                clickable
                v-close-popup
                @click="editRegister(props.row)"
                style="border-radius: 0.5rem"
              >
                <q-item-section>Editar</q-item-section>
              </q-item>
              <q-item
                clickable
                v-close-popup
                @click="deleteRegister(props.row)"
                style="border-radius: 0.5rem"
              >
                <q-item-section>Deletar</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-td>
    </template>

    <!-- SEM DADOS -->
    <template v-slot:no-data>
      <div class="q-pa-sm flex flex-center" style="width: 100%">
        <q-pagination
          v-model="current_page"
          :max="local_last_page"
          input
          @click="fetchData"
        />
      </div>
    </template>

    <!-- RODAPÉ -->
    <template v-slot:bottom>
      <div class="q-pa-sm flex flex-center" style="width: 100%">
        <q-pagination
          v-model="current_page"
          :max="local_last_page"
          input
          @click="fetchData"
        />
      </div>
    </template>
  </q-table>
</template>

<script>
import { defineComponent, toRef } from "vue";

export default defineComponent({
  name: "ListTable",
  emits: [
    "feat-data",
    "open-form",
    "view-register",
    "edit-register",
    "delete-register",
  ],
  props: {
    last_page: {
      type: Number,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      inFs: false,
      current_page: 1,
      local_loading: toRef(this.$props, "loading"),
      local_last_page: toRef(this.$props, "last_page"),
      local_row: toRef(this.$props, "rows"),
      pagination: {
        rowsPerPage: 20,
      },
    };
  },
  methods: {
    viewRegister(obj) {
      this.$emit("view-register", obj);
    },
    editRegister(obj) {
      this.$emit("edit-register", obj);
    },
    deleteRegister(obj) {
      this.$emit("delete-register", obj);
    },
    fetchData() {
      this.$emit("feat-data", this.current_page);
    },
    openForm(obj) {
      this.$emit("open-form", obj);
    },
    setFs(props) {
      props.toggleFullscreen();
      this.inFs = props.inFullscreen;
    },
  },
  watch: {
    current_page(newVal) {
      this.local_last_page = newVal;
    },
  },
  computed: {
    paginationOptions() {
      return [10, 20, 50, 100];
    },
    paginationCopy: {
      get() {
        return { ...this.pagination };
      },
      set(value) {
        this.$emit("pagination-change", value);
      },
    },
  },
});
</script>
<style lang="scss">
.card-button {
  border: 1px solid $primary;
  color: #fff;
  background-color: $primary;
  border-color: $primary;
  font-weight: 600;
  border-radius: 0.375rem;
  text-transform: none;
}

.my-sticky-header-table {
  height: calc(100cqb - 280px);

  thead tr:first-child th {
    text-transform: uppercase;
    font-size: 0.65rem;
    font-weight: 700;
    background-color: #f6f9fc;
    color: #8898aa;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
  }

  thead tr:first-child th {
    top: 0;
  }

  &.q-table--loading thead tr:last-child th {
    top: 48px;
  }

  tbody {
    scroll-margin-top: 48px;
  }
}

.q-table__top {
  padding: 0 16px 32px 16px;
}
</style>
