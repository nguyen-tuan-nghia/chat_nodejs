<template>
  <div class="hello">
    title
    <input type="text" v-model="title" /><button @click="submit">Submit</button>
    <div v-if="err.title">{{err.title}}</div>
    <ul v-for="(post, index) in posts" :key="index">
      <li>{{ post.createdAt }}</li>
      <li>{{ post.title }}</li>
      <li @click="del(post)">delete</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "",
      posts: [],
      err:{}
    };
  },
  mounted() {
    this.get();
  },
  methods: {
    get() {
      const url = "api/posts";
      this.axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          this.posts=res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async submit() {
      try {
        const url = "api/posts";
        await this.axios.post(url, { title: this.title });
        this.err={};
        this.get();
      } catch (err) {
        console.log(err);
        if(err.response.status==422){
          console.log(err.response.data.err);
          this.err=err.response.data.err;
        }
      }
    },
    del(post){
      const url = "api/posts";
      this.axios
        .delete(`${url}/${post.id}`)
        .then((res) => {
          console.log(res.data);
        this.get();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
