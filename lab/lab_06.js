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

import { default as fetch, FetchError } from 'node-fetch';
import { question } from 'readline-sync';
// import axios from 'axios';

let url = 'https://jsonplaceholder.typicode.com/posts';
 
// fetch(url)
//     .then(getUserInput)
//     .then(getResponse)





// ## 9.2
// * Please using PROMISE and ASYNC/AWAIT to solve this
// * Allow user to input an userid and postId, print out that post content
// * Print all posts for that user

Test();
async function Test(){
    const response = await fetch(url);
    const json = await response.json();
    console.log(JSON.stringify(json));
}