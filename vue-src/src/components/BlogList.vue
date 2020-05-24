
<template>
  <div id="blogList">
    <h2>博客列表</h2>
    <input type="text" v-model="search" placeholder="search" />
    <div>
      <div class="blogList_content" v-for="(item,index) in filterBlogList" :key="index">
        <router-link :to="'detail/'+item.id">
          <div v-color>标题：{{item.title | snippet}}</div>
        </router-link>
        <div>内容：{{item.content | snippet}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-list",
  data() {
    return {
      blogList: [],
      search: ""
    };
  },
  created() {
    //如若请求本地json文件，请该json文件其置于static目录里
    this.$http
      // .get("https://jsonplaceholder.typicode.com/posts")
      .get("http://localhost:3000/list")
      .then(item => {
        console.log("成功", item);
        this.blogList = item.body.data;
        console.log("data", this.blogList);
      })
      .catch(err => {
        console.log("失败", err);
      });
  },
  computed: {
    filterBlogList: function() {
      return this.blogList.filter(item => {
        return item.title.match(this.search);
      });
    }
  },
  //局部过滤器
  filters: {
    snippet(value) {
      if (value.length > 100) {
        return value.slice(0, 100) + "...";
      } else {
        return value;
      }
    }
  },
  directives: {
    color: {
      bind(el, binding, vnode) {
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    }
  }
};
</script>

<style>
#blogList {
  max-width: 1000px;
  min-width: 400px;
  margin: 0 auto;
}
.blogList_content {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
  border: 1px dotted #aaa;
}
#blogList a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>