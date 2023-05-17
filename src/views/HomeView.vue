<template>
  <div class="home">
    <h1>All Posts</h1>
    <!-- <input type="text" v-model="search">
    <p>Search - {{ search }}</p>
    <div class="" v-for="name in filterNames" :key="name">
      <p>{{ name }}</p>
    </div> -->
    <h3 v-if="error">{{ error }}</h3>
    <div class="" v-if="posts.length > 0">
      <AllPosts :posts="posts"></AllPosts>
    </div>
    <div class="" v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import AllPosts from "../components/AllPosts";
import getPosts from "../composable/getPosts";
// import { computed, ref } from 'vue';
export default {
  components: {
    Spinner,
    AllPosts,
  },
  setup(props) {
    let { posts, error, loadData } = getPosts(); //destructring

    // let names = ref(['aung aung','kyaw kyaw','aye aye','mg mg','aung hla'])
    // let search = ref("")
    // let filterNames = computed(()=>{
    //   return names.value.filter((name)=>{
    //     return name.includes(search.value)
    //   })
    // })
    // return {names,search,filterNames}

    loadData();

    return { posts, error };
  },
};
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
