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
          height: calc(100% - 59px);
          margin-top: 59px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item
            clickable
            v-ripple
            active-class="menu-drawer-ativo"
            class="q-ma-sm"
            tag="a"
            exact
            style="border-radius: 10px"
            v-for="tab in tabs"
            :key="tab.name"
            :to="{ name: tab.url }"
          >
            <q-item-section avatar>
              <q-icon :name="tab.icon" size="25px" />
            </q-item-section>

            <q-item-section> {{ tab.nome }} </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <div
        class="absolute-top flex"
        style="
          height: 59px;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
        "
      >
        <div
          class="q-ml-sm"
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 60px;
          "
        >
          <q-btn class="toolbar-profile" flat round size="14px">
            <profile-menu />
          </q-btn>
        </div>
        <div
          class="q-ml-sm"
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
          "
        >
          <div style="font-weight: 600; color: var(--q-primary)">
            Gael Jorge da Rocha
          </div>
          <div>gaeljorge@gmail.com</div>
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import ProfileMenu from "../components/menus/ProfileMenu.vue";
export default defineComponent({
  data() {
    return {
      leftDrawerOpen: false,
      search: "",
      tabs: [
        { nome: "Inicio", icon: "fa-solid fa-gauge", url: "inicio" },
        {
          nome: "Notificações",
          icon: "fa-solid fa-book",
          url: "listagem_notificacoes",
        },
      ],
    };
  },
  components: {
    ProfileMenu,
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

.menu-drawer-ativo {
  font-weight: bold;
  background-color: #c7c7c76b;
  color: $primary;
}
</style>
