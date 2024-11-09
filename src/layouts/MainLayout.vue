<template>
  <q-layout view="lHh Lpr lFf">
    <!-- HEADER -->
    <q-header elevated>
      <q-toolbar>
        <q-btn flat icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-toolbar-title style="font-weight: 600">
          Gael Jorge da Rocha
        </q-toolbar-title>

        <q-space />
        <div style="display: flex; gap: 15px" class="q-pa-sm">
          <div>
            <q-btn round flat icon="email">
              <q-badge color="green" floating transparent> 2 </q-badge>
            </q-btn>

            <q-btn round flat icon="notifications">
              <q-badge color="green" floating transparent> 5 </q-badge>
            </q-btn>
          </div>
          <q-btn class="toolbar-profile" flat round dense size="18px">
            <q-badge
              color="green"
              rounded
              style="margin-top: 1.8rem; margin-left: 1.8rem"
            />
          </q-btn>
        </div>
      </q-toolbar>
      <q-separator />
      <div class="q-pa-md">
        <div style="font-size: 1.5rem; font-weight: 600">
          {{ $route.meta.titulo }}
        </div>
        <q-breadcrumbs>
          <q-breadcrumbs-el
            v-for="(breadcrumb, index) in breadcrumbs"
            :key="index"
            :label="breadcrumb"
          />
        </q-breadcrumbs>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="270"
      :breakpoint="400"
    >
      <q-scroll-area
        style="
          height: calc(100% - 150px);
          margin-top: 150px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple v-for="tab in tabs" :key="tab.name">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> {{ tab.nome }} </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://cdn.quasar.dev/img/material.png"
        style="height: 150px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
          <div class="text-weight-bold">Razvan Stoenescu</div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      leftDrawerOpen: false,
      search: "",
      tabs: [{ nome: "Inicio" }, { nome: "Notificações" }],
    };
  },
  methods: {
    toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    },
  },
  computed: {
    breadcrumbs() {
      return this.$route.meta.breadcrumbs || [];
    },
  },
});
</script>

<style lang="scss">
.q-toolbar {
  color: #3c3f50;
  background-color: white;
}

.q-layout__section--marginal {
  background-color: white;
  color: var(--q-dark);
}

.toolbar-profile {
  background-image: url("../assets/rosto-random.PNG");
  background-size: cover;
}
</style>
