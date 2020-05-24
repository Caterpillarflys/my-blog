
<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>我的博客</router-link>
        <router-link to="/add" exact>新增博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "blog-header"
};
</script>

<style scoped>
.router-link-active {
  background-color: rgba(255, 255, 255, 0.4);
}
ul,
li {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  border-radius: 5px;
  padding: 12px;
}
nav {
  background-color: crimson;
  padding: 30px 0;
  margin-bottom: 10px;
}
</style>