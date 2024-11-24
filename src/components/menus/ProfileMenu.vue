<template>
  <q-menu class="menu-profile">
    <div class="menu-header row q-col-gutter-sm">
      <div
        class="col-auto items-center"
        style="justify-content: center; display: flex"
      >
        <q-avatar size="48px">
          <img :src="'rosto-random.png'" />
        </q-avatar>
      </div>
      <div class="col">
        <div class="profile-name">
          {{ user.name }}
        </div>
        <div class="profile-cargo q-mb-none">
          {{ user.admin ? "Administrador" : "Usuário" }}
        </div>
      </div>
    </div>
    <q-separator class="q-my-sm" />
    <div class="menu-body">
      <q-list>
        <q-item clickable v-ripple to="/usuario/perfil">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>

          <q-item-section>
            {{ "Perfil" }}
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/usuario/config">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>

          <q-item-section>
            {{ "Configurações" }}
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <q-separator class="q-my-sm" />
    <div class="menu-footer">
      <q-item clickable v-ripple @click="sair">
        <q-item-section avatar>
          <q-icon name="logout" />
        </q-item-section>

        <q-item-section>
          {{ "Sair" }}
        </q-item-section>
      </q-item>
    </div>
  </q-menu>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileMenu",
  methods: {
    async sair() {
      sessionStorage.removeItem("user_data");
      this.$router.push("/login");
    },
  },
  computed: {
    user() {
      return { name: "Matheus", admin: 1 };
      // return JSON.parse(sessionStorage.getItem('user_data'));
    },
  },
});
</script>

<style lang="scss">
.menu-profile {
  border-radius: 0.5rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.menu-profile .menu-header {
  width: 100%;
  min-width: 230px;
  padding: 0.5rem 0.7rem;
}
.menu-profile .menu-header .profile-cargo {
  color: #8898aa;
}
.menu-profile .menu-header .profile-name {
  margin: 0.4rem 0 0.6rem 0;
}
</style>
