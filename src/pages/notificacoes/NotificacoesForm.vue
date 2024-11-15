<template>
  <page-formulario title="Categorias - Novo Registro">
    <div class="col row q-col-gutter-md">
      <div class="col-3">
        <input-standard
          :inputProps="{
            label: 'Código',
            type: 'text',
            maxlength: 120,
            ref: 'codigo',
          }"
          v-model="categoria.codigo"
        />
      </div>
      <div class="col-9">
        <input-standard
          :inputProps="{
            label: 'Nome',
            type: 'text',
            maxlength: 120,
            ref: 'name',
          }"
          v-model="categoria.nome"
        />
      </div>
      <div class="col-4">
        <q-tabs v-model="categoria.ativo" indicator-color="primary">
          <q-tab class="form-button" name="FISICA" label="Ativa" />
          <q-tab class="form-button q-ml-md" name="JURIDICA" label="Inativa" />
        </q-tabs>
      </div>
      <div class="col-8">
        <select-standard
          :selectProps="{
            label: 'Categoria Pai',
            options: selectOptions,
            ref: 'select',
          }"
          v-model="categoria.selecionada"
        />
      </div>
      <div class="col-12">
        <input-standard
          :inputProps="{
            label: 'Descrição',
            type: 'textarea',
            ref: 'descricao',
          }"
          v-model="categoria.descricao"
        />
      </div>
    </div>
    <div class="col-auto">
      <input-image
        style="width: 290px"
        :rounded="true"
        :src="categoria.foto ? categoria.foto : 'default_profile.png'"
        @input="chagerFoto"
      />
    </div>
  </page-formulario>
</template>

<script>
import { defineComponent } from 'vue';

import PageFormulario from 'components/pages/PageFormulario.vue';
import InputImage from 'components/input/InputImage.vue';
import InputStandard from 'components/input/InputStandard.vue';
import SelectStandard from 'components/select/SelectStandard.vue';

export default defineComponent({
  name: 'form_categorias',
  components: {
    PageFormulario,
    InputImage,
    InputStandard,
    SelectStandard,
  },
  data() {
    return {
      categoria: {},
      selectOptions: [
        { label: 'Opção 1', value: 1 },
        { label: 'Opção 2', value: 2 },
        { label: 'Opção 3', value: 3 },
      ],
    };
  },
});
</script>

<style>
.form-button {
  background: rgba(0, 0, 0, 0.05);
  padding: 0.7rem 0.7rem;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.975rem;
  text-transform: none;
  min-height: 0;
}
</style>
