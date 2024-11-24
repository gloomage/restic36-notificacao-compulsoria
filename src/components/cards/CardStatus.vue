<template>
  <q-card class="card-stats">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h5 class="text-uppercase text-muted q-mb-sm">
            {{ title }}
          </h5>
          <span class="h2 font-weight-bold">
            {{ amount }}
          </span>
        </div>
        <div class="col-auto">
          <div class="card-circle">
            <q-icon :name="icon" size="30px" color="white" />
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardStatus",
  props: {
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
.card-stats {
  min-height: 204px;
  min-width: 240px;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.card-stats .card-body {
  padding: 1rem 1.5rem;
}

.card-stats .card-body .card-title {
  margin-bottom: 1.25rem;
}

.card-stats .card-body .card-circle {
  background: linear-gradient(87deg, $primary, $blue-5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 55px;
}
</style>
