const routes = [
  {
    path: "/",

    meta: { titulo: "Dashboard", breadcrumbs: ["Início"] },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "inicio",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "notificacoes",
        children: [
          {
            path: "",
            children: [
              {
                path: "",
                name: "listagem_notificacoes",
                meta: {
                  titulo: "Listagem de Notificações",
                  breadcrumbs: ["Início", "Notificações"],
                },
                component: () =>
                  import("pages/notificacoes/NotificacoesPage.vue"),
              },
              {
                path: "novo",
                name: "formulario_notificacao",
                meta: {
                  breadcrumbs: ["Início", "Notificações", "Nova Notificação"],
                },
                component: () => import("layouts/MainLayout.vue"),
              },
            ],
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
