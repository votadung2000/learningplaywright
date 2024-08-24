class PostController {
    constructor(baseUrl, slug) {
        this.url = `${baseUrl}${slug}`
    }
}

// service method
async getAllPostsByUserId(userId) {
    const allPosts = await this._getAllPosts();
    return allPosts.filter(function (post) {
        return (post._userId === userId);
    });
}

// service method
async getPostByUserIdAndPostId(userId, postId) {
    const allPostByUerId = await this.getAllPostsByUserId(userId);
    return allPostByUerId.find(function (post) {
        return (post._id === post.Id);
    })
}

// support method
async getAllPosts() {
    const response = await fetch(this.url);
    const jsonResponse = response.json();
    return jsonResponse.map(function (postContent) {
        const { userId, id, title, body } = postContent;
        return new Post(userId, id, title, body);
    });
}

export default PostController;