<template>
  <q-page>
    <div class="row q-col-gutter-lg q-mb-lg q-pa-lg">
      <div class="col-4">
        <card-status
          class="q-mb-md"
          title="Notificações Realizadas"
          amount="104=7"
          percentage="9"
          icon="fa-regular fa-handshake"
        />
      </div>
      <div class="col-4">
        <card-status
          class="q-mb-md"
          title="Notificações Enviadas"
          amount="83"
          percentage="13"
          icon="fa-regular fa-user"
        />
      </div>
      <div class="col-4">
        <card-status
          class="q-mb-md"
          title="Notificações Arquivadas"
          amount="42"
          percentage="9"
          icon="fa-regular fa-handshake"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import imgSrc from "assets/undraw_innovative_re_rr5i.svg";
import CardStatus from "components/cards/CardStatus.vue";

export default defineComponent({
  data() {
    return {
      imageSrc: imgSrc,
    };
  },
  components: {
    CardStatus,
  },
});
</script>
