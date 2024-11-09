<template>
  <q-page>
    <div
      class="row"
      style="
        height: calc(100cqb - 150px);
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      "
    >
      <q-img style="max-width: 300px" :src="imageSrc" />
      <div class="text-h3" style="opacity: 0.4; text-align: center">
        Página em construção...
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import imgSrc from "assets/undraw_innovative_re_rr5i.svg"; // Importa a imagem diretamente

export default defineComponent({
  data() {
    return {
      imageSrc: imgSrc, // Define a imagem para o src
    };
  },
});
</script>
