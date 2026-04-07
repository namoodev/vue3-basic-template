import { createRouter, createMemoryHistory } from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue";
import RouterTest from "@/components/RouterTest.vue";
import ParentComponent from "@/components/inheritance/ParentComponent.vue";
import ChildA from "@/components/inheritance/ChildA.vue";
import ChildB from "@/components/inheritance/ChildB.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/test",
    component: RouterTest,
  },
  {
    path: "/parent",
    component: ParentComponent,
    children: [
      {
        path: "/a",
        component: ChildA,
      },
      {
        path: "/b",
        component: ChildB,
      },
    ],
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
