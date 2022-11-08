import { createRouter, createWebHistory } from "vue-router";
import LivroComponent from "@/components/livro/LivroComponent.vue";
import PaginasComponent from "@/components/paginas/PaginasComponent.vue";

/*Paginas */
import Pagina1Component from "@/components/paginas/paginas/Pagina1Component.vue";
import Pagina2Component from "@/components/paginas/paginas/Pagina2Component.vue";
import Pagina3Component from "@/components/paginas/paginas/Pagina3Component.vue";
import Pagina4Component from "@/components/paginas/paginas/Pagina4Component.vue";
import Pagina5Component from "@/components/paginas/paginas/Pagina5Component.vue";
import Pagina6Component from "@/components/paginas/paginas/Pagina6Component.vue";
import Pagina7Component from "@/components/paginas/paginas/Pagina7Component.vue";

const routes = [
  {
    path: "/",
    component: LivroComponent,
    name: "livro",
  },
  {
    path: "/paginas",
    components: {
      default: Pagina1Component,
    },
    name: "paginas",
  },
  {
    path: "/Pagina2Component",
    component: Pagina2Component,
    name: "segunda",
  },
  {
    path: "/Pagina3Component",
    component: Pagina3Component,
    name: "terceira",
  },
  {
    path: "/Pagina4Component",
    component: Pagina4Component,
    name: "quarta",
  },
  {
    path: "/Pagina4Component",
    component: Pagina4Component,
    name: "quarta",
  },
  {
    path: "/Pagina5Component",
    component: Pagina5Component,
    name: "quinto",
  },
  {
    path: "/Pagina6Component",
    component: Pagina6Component,
    name: "sexto",
  },
  {
    path: "/Pagina7Component",
    component: Pagina7Component,
    name: "setimo",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
