import httpClient from "@/api/httpClient";
import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://62.217.177.152/',
    headers: {},
})

export const postsAPI = {
    getPosts() {
        return httpClient.get(`/posts/getall`).then(res => res.data)
    },
    deletePost(itemId) {
        return httpClient.delete(`/posts/del${itemId}`).then(res => res.data)
    },
    createPost(RequestItemObj) {
        return httpClient.post(`/posts/save`, RequestItemObj).then(res => res.data)
    },
    updatePost(itemId, RequestItemObj) {
        return httpClient.put(`/posts/edit${itemId}`, RequestItemObj).then(res => res.data)
    },
}