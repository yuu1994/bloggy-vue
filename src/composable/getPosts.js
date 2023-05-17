import { ref } from "vue";

let getPosts = () => {
  let posts = ref([]);
  let error = ref("");
  let loadData = async () => {
    try {
      // await new Promise((resolve,reject)=>{
      //   setTimeout(resolve,2000)
      // })
      let res = await fetch("http://localhost:3000/posts");
      if (res.status == 404) {
        throw new Error("Url not found ,please try again!!!");
      }
      let data = await res.json();
      // console.log(data)
      posts.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, loadData };
};
export default getPosts;
