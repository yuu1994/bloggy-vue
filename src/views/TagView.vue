<template>
  <AllPosts :posts="filteredTags"></AllPosts>
</template>

<script>
import AllPosts from '../components/AllPosts'
import getPosts from "@/composable/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  components: { AllPosts },
  props: ["tag"],
  setup(props) {
    let route = useRoute();
    let { posts, error, loadData } = getPosts();
    loadData();

    let filteredTags = computed(() => {
      return posts.value.filter((post) => {
        return post.tags.includes(props.tag);
      });
    });

    return { posts, error, filteredTags };
  },
};
</script>

<style></style>
