import axios from "axios";

// const fetchPosts = async () => {
//     const res = await fetch("http://localhost:8000/posts");
//     return res.json();
// };

// export default fetchPosts

const postsApi = axios.create({
    baseURL: "http://localhost:8000"
})

export const addPost = async (post) => {
    return await postsApi.post("/posts", post)
}