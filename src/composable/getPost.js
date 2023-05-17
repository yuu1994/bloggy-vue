import { ref } from "vue";

let getPost = (id) => {
  let post = ref();
  let error = ref("");
  let load = async () => {
    try {
      // await new Promise ((resolve,reject)=> {
      //   setTimeout(resolve,2000)
      // })
      let res = await fetch("http://localhost:3000/posts/" + id);
      if (res.status == 404) {
        throw new Error("Not found URL ,Please try Again!!!");
      }
      let data = await res.json();
      //   console.log(data);
      post.value = data;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { post, error, load };
};
export default getPost;
