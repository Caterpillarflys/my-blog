<template>
  <div class="addBlog">
    <h2>写博客</h2>
    <form v-if="!submited">
      <label>主题：</label>
      <br />
      <input type="text" v-model="blog.title" />
      <br />
      <label>内容：</label>
      <br />
      <textarea v-model="blog.content"></textarea>
      <br />
      <label>分类：</label>
      <br />
      <label>vue</label>
      <input type="checkbox" value="vue" v-model="blog.categories" />
      <label>react</label>
      <input type="checkbox" value="react" v-model="blog.categories" />
      <label>angular</label>
      <input type="checkbox" value="angular" v-model="blog.categories" />
      <br />
      <label>作者：</label>
      <br />
      <select v-model="blog.author">
        <option v-for="(author,index) in authors" :key="index">{{author}}</option>
      </select>
      <br />
      <button @click.prevent="send">添加</button>
      <br />
    </form>

    <hr />
    <h2 v-if="submited">添加成功！</h2>
    <h3>添加详情：</h3>
    <div>
      主题：
      <div>{{blog.title}}</div>
    </div>
    <div>
      内容：
      <div>{{blog.content}}</div>
    </div>
    <div>
      分类：
      <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
    </div>
    <div>
      作者：
      <div>{{blog.author}}</div>
    </div>
  </div>
</template>

<script>
// import func from "../../vue-temp/vue-editor-bridge";啥玩意
export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "马云"
      },
      authors: ["马云", "王健林", "刘强东"],
      submited: false
    };
  },
  methods: {
    //jsonPlaceholder  数据提交暂存工具地址，后期换成sql
    //https://jsonplaceholder.typicode.com/posts
    send: function() {
      this.$http
        .post("http://localhost:3000/send", {
          title: this.blog.title,
          content: this.blog.content,
          author: this.blog.author,
          category: this.blog.categories.toString()
        })
        .then(data => {
          console.log("请求成功", data);
          this.submited = true;
        })
        .catch(err => {
          console.log("请求失败", err);
        });
    }
  }
};
</script>

<style scoped>
</style>