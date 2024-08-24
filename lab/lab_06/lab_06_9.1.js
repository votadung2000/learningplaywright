const readline = require(`readline-sync`);

// ## 9.1
// * Please using PROMISE and thenable to solve this
// * Allow user to input an userId and postId, print out that post content
// * Print all posts for that user

const url = 'https://jsonplaceholder.typicode.com/posts';
const userId = Number(readline.question('Please input UserId:'));
const postId = Number(readline.question('Please input PostId:'));

if (!isNaN(userId) && !isNaN(postId)) {
    getResponse();
    printPostsWithUserAndPostId(userId, postId);
    printPosts(userId);
} else {
    console.log('Invalid input. Please enter valid numbers for both UserId and PostId.');
}

function printPostsWithUserAndPostId(userId, postId) {
    return getResponse(url)
        .then(function (posts) {
            const filteredPostsID = posts.filter(post => post.userId === userId && post.id === postId);
            // console.log("Filter Posts With User ID and Post ID:", filteredPostsID);
            return filteredPostsID;
        })
        .then(function (filteredPostsID) {
            if (filteredPostsID.length > 0) {
                console.log("Filter Posts With User ID and Post ID:", filteredPostsID);
            } else {
                console.log("There is no post content for these User ID and Post ID.");
            }
            return filteredPostsID;
        })
}

function printPosts(userId) {
    return getResponse(url)
        .then(function (posts) {
            const filteredPosts = posts.filter(post => post.userId === userId);
            console.log("Filter Posts With User ID:", filteredPosts);
            return posts;
        })
}

function getResponse() {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}