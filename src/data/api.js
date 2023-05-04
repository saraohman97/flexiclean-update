import axios from "axios";

const postsApi = axios.create({
    baseURL: "http://localhost:8000"
})

export const addPost = async (post) => {
    return await postsApi.post("/messages", post)
}