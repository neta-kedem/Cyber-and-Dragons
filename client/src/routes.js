import Game from "./Game";
import App from "./App";
export default [
  {
    path: "/game",
    component: Game,
  },
  {
    path: "/",
    component: App,
  },
  //   {
  //     path: "/tacos",
  //     component: Tacos,
  //     routes: [
  //       {
  //         path: "/tacos/bus",
  //         component: Bus,
  //       },
  //       {
  //         path: "/tacos/cart",
  //         component: Cart,
  //       },
  //     ],
  //   },
];
