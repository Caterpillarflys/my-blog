<template>
  <div id="blogDetail">
    <h1>{{blogDetail.title}}</h1>
    <article>{{blogDetail.body}}</article>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      id: this.$route.params.id,
      blogDetail: []
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(data => {
        console.log("成功", data);
        this.blogDetail = data.body;
      })
      .catch(err => {
        console.log("失败", err);
      });
  }
};
</script>

<style>
#blogDetail {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>