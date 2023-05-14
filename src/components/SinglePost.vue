<template>
  <div class="">
    <router-link :to="{name:'postdetail', params:{id:post.id}}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ postShort }}</p>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  props: ["post"],
  setup(props) {
    let postShort = computed(()=>{
        return props.post.detail.substring(0,100)+"..."
    })
    
    return {postShort}
  }
};
</script>

<style></style>
