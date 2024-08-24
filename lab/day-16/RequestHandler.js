// ## Controller (Data Model Processor)

// > NOTE: This is a variant of controller where it is not procesing the Post model but returns the Model
const url = 'https://jsonplaceholder.typicode.com/posts';

class RequestHandler {
    static async getResponse() {
        try {
            const response = await fetch(url);
            const json = await response.json();
            return json;
        } catch (error) {
            console.log(error);
        };

        async function printTargetPost(userId, postId) {
            // Construct the returned data as a Post data model from class Post
            const posts = await getResponse(url);
            const filteredPostsID = posts.filter(post => post.userId === userId && post.id === postId);
            if (filteredPostsID.length > 0) {
                console.log("Filter Posts With User ID and Post ID:", filteredPostsID);
            } else {
                console.log("There is no post content for these User ID and Post ID.");
            }
            return filteredPostsID;
        }

        async function printAllPosts(userId) {
            // Construct the returned data as a [ Post data model ] from class Post
            const posts = await getResponse(url);
            const filteredPosts = posts.filter(post => post.userId === userId);
            console.log("Filter Posts With User ID:", filteredPosts);
            return posts;
        }

    }
}


module.exports = RequestHandler;