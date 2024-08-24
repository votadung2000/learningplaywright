// ## 9.2
// * Please using PROMISE and ASYNC/AWAIT to solve this
// * Allow user to input an userid and postId, print out that post content
// * Print all posts for that user
const readline = require(`readline-sync`);

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

async function printPostsWithUserAndPostId(userId, postId) {
    const posts = await getResponse(url);
    const filteredPostsID = posts.filter(post => post.userId === userId && post.id === postId);
    if (filteredPostsID.length > 0) {
        console.log("Filter Posts With User ID and Post ID:", filteredPostsID);
    } else {
        console.log("There is no post content for these User ID and Post ID.");
    }
    return filteredPostsID;
}

async function printPosts(userId) {
    const posts = await getResponse(url);
    const filteredPosts = posts.filter(post => post.userId === userId);
    console.log("Filter Posts With User ID:", filteredPosts);
    return posts;
}

async function getResponse() {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}