const axios = require('axios');

let id = 2;
const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=11`;

const getUser = async (userUrl) => {
    const user = axios.get(userUrl);
    return user;
}

const getPosts = async (postUrl) => {
    const posts = axios.get(postUrl);
    return posts;
}

const getComments = async (commentsUrl) => {
    const comments = axios.get(commentsUrl);
    return comments;
}

(async () => {
    try {
        const user = await getUser(userUrl);
        console.log(`user: ${user.data.name}`);
        console.log(`email: ${user.data.email}`);
        const posts = await getPosts(postUrl);
        console.log(`number of posts: ${posts.data.length}`);
        const comments = await getComments(commentsUrl);
        console.log(`number of comments: ${comments.data.length}`);
    } catch (error) {
        console.log(error.message);
    }
})();