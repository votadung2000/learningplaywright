// ## General info:
// * url: https://jsonplaceholder.typicode.com
// * Library: `fetch`
// * slugs:

// ```javascript
// GET	/posts
// ```

// ## 9.1
// * Please using PROMISE and thenable to solve this
// * Allow user to input an userid and postId, print out that post content
// * Print all posts for that user

const readline = require('readline-sync');

let url = 'https://jsonplaceholder.typicode.com';

fetch(url)
    .then(getUserInput)
    .then(getResponse)
    // .then(postContentWithUserIDPostID)
    // .then(printUserposts)

function getUserInput() {
    const userID = readline.question(`Please input your user ID:`);
    const postID = readline.question(`Please input your post ID:`);
}

function getResponse(response){
        return response.json();
}

// function postContentWithUserIDPostID(content) {
//     for ( ; ; ) {
//         if (userID === posts.userID && postID === posts.id) {
            
//             console.log(`Contents: ${content} `);
//         } else {
//             console.log(`Your userID or postID is insufficient!`);
//         }
//         return content;
//     } 
// }

// function printUserposts(){
//     // check userID
//     // print posts
// }




// ## 9.2
// * Please using PROMISE and ASYNC/AWAIT to solve this
// * Allow user to input an userid and postId, print out that post content
// * Print all posts for that user