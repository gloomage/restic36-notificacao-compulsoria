<template>
  <q-layout>
    <q-page-container class="login">
      <q-page
        class="root row justify-center"
        :class="$q.screen.width < 640 ? '' : 'items-center'"
      >
        <q-card
          class="card-login"
          :style="
            $q.screen.width < 640
              ? 'background-color: transparent; box-shadow: none'
              : ''
          "
        >
          <div class="row">
            <div
              class="side"
              :style="
                $q.screen.width < 640 ? 'width: 100%;' : 'padding: 0 4rem'
              "
            >
              <q-form style="min-width: 100%" @submit="onLogin">
                <p style="margin: 0px; padding-bottom: 20px">
                  Bem-vindo. Por favor, faça login na sua conta.
                </p>
                <div class="col-12 q-my-sm">
                  <div class="sub-titulo">E-mail</div>
                  <q-input
                    dense
                    outlined
                    v-model="user.email"
                    placeholder="Insira seu e-mail"
                  />
                </div>
                <div class="col-12 q-my-sm">
                  <div class="sub-titulo">Senha</div>
                  <q-input
                    dense
                    outlined
                    v-model="user.senha"
                    :type="isPwd ? 'password' : 'text'"
                    placeholder="Insira sua senha"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                </div>

                <q-btn
                  class="text-white q-my-lg full-width"
                  unelevated
                  no-caps
                  color="primary"
                  label="Conecte-se"
                  type="submit"
                />
              </q-form>
            </div>
          </div>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      user: { email: null, senha: null },
      submitted: false,
      isPwd: ref(true),
    };
  },
  methods: {
    esqueceu() {
      this.$router.push("/login/esqueceu");
    },
    onLogin: function () {
      this.submitted = true;
      this.$q.loading.show({
        message: "Logando",
      });
      if (this.user.email == "teste@gmail.com" && this.user.senha == "teste") {
        sessionStorage.setItem("user_data", JSON.stringify({ id: 1 }));
        this.$router.push("/");
        this.$q.loading.hide();
      } else {
        this.$q.dialog({
          title: "Atenção",
          message: "Email ou senha inválida",
        });
        this.$q.loading.hide();
      }
    },
  },
});
</script>

<style lang="scss">
.line-on-side {
  border-bottom: 1px solid;
  line-height: 0.1em;
  margin: 10px 0 20px;
}
.font-small-3 {
  font-size: 0.9rem !important;
}
.line-on-side span {
  background: #fff;
  padding: 0 10px;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.doc-link {
  cursor: pointer;
  color: $primary;
  font-weight: 500;
  text-decoration: none;
  outline: 0;
  border-bottom: 1px dotted currentColor;
  vertical-align: center;
  transition: opacity 0.2s;
  white-space: nowrap;
}

.card-login {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 0.2rem;
}

.card-login .side {
  width: 450px;
  height: 380px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
