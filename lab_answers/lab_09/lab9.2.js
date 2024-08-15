// index.js

import { sendRequest } from './RequestHelper.js'; // Đảm bảo rằng 'sendRequest' đã được xuất khẩu từ RequestHelper.js

sendRequest();


const url = 'https://jsonplaceholder.typicode.com/posts';
const userID = 1;
const postID = 1;
printTargetPost(userID, postID);
printAllPosts(userID);

async function printTargetPost(userID, postID) {
    const userPosts = await getFilteredPostFor(userID);
    const targetPost = userPosts.filter(function () {
        return (post.id === postID);
    })[0];

    if (targetPost) {
        console.log(targetPost);
    } else {
        console.log(`The postID ${postID} is NOT existing for the user with userID ${userID}`);
    }
}

async function printAllPosts(userID) {
    const userPosts = getFilteredPostFor(userID);
    console.log(userPosts);
}

async function getFilteredPostFor(userID) {
    const posts = await sendRequest(url);
    return posts.filter(function (post) {
        return (post.userID === userID);
    })
}


