
const fetchPosts = async () => {
    const res = await fetch("http://localhost:8000/posts");
    return res.json();
};

export default fetchPosts