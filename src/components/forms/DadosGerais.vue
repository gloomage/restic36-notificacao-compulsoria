<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <div class="row q-col-gutter-md q-pl-md">
      <div class="col-12">
        <q-input v-model="text" label="Tipo de Notificação" />
      </div>
      <div class="col-8">
        <q-input v-model="text" label="Agravo/doença" />
      </div>
      <div class="col-4">
        <q-input v-model="text" label="Data da Notificação" />
      </div>
    </div>
  </q-form>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      text: "",
    };
  },
});
</script>
