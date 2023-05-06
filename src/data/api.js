import axios from "axios";

const postsApi = axios.create({
    baseURL: "http://localhost:8000"
})

export const addMessage = async (message) => {
    return await postsApi.post("/messages", message)
}

export const addPost = async (post) => {
    return await postsApi.post("/posts", post)
}