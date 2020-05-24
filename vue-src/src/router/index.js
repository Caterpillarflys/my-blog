import Router from "vue-router";
import AddBlog from "../components/AddBlog.vue";
import BlogList from "../components/BlogList.vue";
import Detail from "../components/Detail.vue";

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: BlogList },
    { path: "/add", component: AddBlog },
    { path: "/detail/:id", component: Detail }
    // { path: "*", redirect: "/" }
  ]
});

export default router;
