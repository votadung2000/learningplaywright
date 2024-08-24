// ## Execution
// ```javascript
// // TestPostModel.js
// const Post = require("./Post");
// const RequestHandler = require("./RequestHandler");

// // Execution
// lab11();

// // Function Declaration
// async function lab11(){
//     // Given params
//     const userId = 1;
//     const postId = 5;

//     // Create RequestHandler object

//     // const post = ...
//     // const allPost = ...
// }
// ```

// ## Model(s)
const Post = require("./Post");
const RequestHandler = require("./RequestHandler");


const userId = new Post(1,3);
// const postId = new Post(2);

let handler = new RequestHandler();
const targetPosts = handler.printTargetPost([1, 2]);
const allPosts = printAllPosts(1);




