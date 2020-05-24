// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueResource from "vue-resource";
import Router from "vue-router";
import router from "./router/index";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(Router);
//自定义全局指令
// Vue.directive("color", {
//   bind(el, binding, vnode) {
//     el.style.color =
//       "#" +
//       Math.random()
//         .toString(16)
//         .slice(2, 8);
//   }
// });
// Vue.directive("backgroundColor", {
//   bind(el, binding, vnode) {
//     if (binding.value == "default") {
//       el.style.backgroundColor = "#fff";
//     } else if (binding.value == "polychrome") {
//       el.style.backgroundColor =
//         "#" +
//         Math.random()
//           .toString(16)
//           .slice(2, 8);
//     }
//   }
// });

// 自定义全局过滤器
// Vue.filter("snippet", function(value) {
//   if (value.length > 100) {
//     return value.slice(0, 100) + "...";
//   } else {
//     return value;
//   }
// });

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
