
// Sử dụng import default
const sendRequest = require('./RequestHelper.js') ;

const url = 'https://jsonplaceholder.typicode.com/posts';
const userID = 1;
const postID = 1;
// printTargetPost(userID, postID);
printAllPosts(userID);

function printTargetPost(userID, postID) {
    getFilteredPostFor(userID).then(function (userPosts) {
        const targetPost = userPosts.filter(function () {
            return (post.id === postID);
        })[0];

        if (targetPost) {
            console.log(targetPost);
        } else {
            console.log(`The postID ${postID} is NOT existing for the user with userID ${userID}`);
        }
    });
}

function printAllPosts(userID) {
    getFilteredPostFor(userID).then(function (posts) {
        console.log(posts);
    });
}

function getFilteredPostFor(userID) {
    return sendRequest(url)
        .then(function (posts) {
            console.log("posts", posts)
            // return posts.filter(function (post) {
            //     return (post.userID === userID);
            // })
        });
}

