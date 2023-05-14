<template>
  <h3>Detail page {{ id }}</h3>
  <div class="" v-if="error">{{ error }}</div>
  <div class="" v-if="post">
    <h4>{{ post.title }}</h4>
    <p>{{ post.detail }}</p>
  </div>
  <div class="" v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "@/composable/getPost";
export default {
  components: { Spinner },
  props: ["id"],
  setup(props) {
    let { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>

<style></style>
