<template>
  <div id="app">
    <!-- <add-blog>blog</add-blog> -->
    <!-- <blog-list></blog-list> -->
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog.vue";
import BlogList from "./components/BlogList";
import BlogHeader from "./components/BlogHeader";
import Detail from "./components/Detail";
export default {
  name: "App",
  components: {
    BlogHeader,
    AddBlog,
    BlogList,
    Detail
  }
};
</script>

<style>
</style>
