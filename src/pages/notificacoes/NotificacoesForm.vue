<template>
  <q-page class="q-px-lg q-pt-lg q-pb-md q-mt-md" style="min-height: auto">
    <q-card class="card-section">
      <q-form class="q-pa-lg" @submit="onSave" ref="formRef">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-5">
            <q-input filled v-model="text" label="Filled" />
          </div>
          <div class="col-12 col-md-7">
            <q-input filled v-model="text" label="Filled" />
          </div>
          <div class="col-12 col-md-3">
            <q-input filled v-model="text" label="Filled" />
          </div>
          <div class="col-12 col-md-5">
            <q-input filled v-model="text" label="Filled" />
          </div>
          <div class="col-12 col-md-4">
            <q-input filled v-model="text" label="Filled" />
          </div>
          <div class="col-12 col-md-3">
            <q-input filled v-model="text" label="Filled" />
          </div>
          <div class="col-12 col-md-9">
            <q-input filled v-model="text" label="Filled" />
          </div>
          <div class="col-12 col-md-4">
            <q-input filled v-model="text" label="Filled" />
          </div>
          <div class="col-12 col-md-4">
            <q-input filled v-model="text" label="Filled" />
          </div>
          <div class="col-12 col-md-4">
            <q-input filled v-model="text" label="Filled" />
          </div>
          <div class="col-12 col-md-6">
            <q-input filled v-model="text" label="Filled" />
          </div>
          <div class="col-12 col-md-6">
            <q-input filled v-model="text" label="Filled" />
          </div>
        </div>
      </q-form>
      <div class="flex gap-md q-py-lg justify-end q-pr-lg">
        <q-btn
          outline
          rounded
          label="Voltar"
          icon="fa-solid fa-reply"
          style="padding: 0 20px"
        />
        <q-btn
          class="btn-padrao"
          rounded
          icon="save"
          label="Salvar"
          color="primary"
          style="padding: 0 20px"
        />
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "form_notificacao",

  data() {
    return {
      notificao: {},
    };
  },
});
</script>
