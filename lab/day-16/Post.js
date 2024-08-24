class Post {
    constructor(userId, postId) {
        this._validateUserId(userId);
        this._validatePostId(postId);
        this._userId = userId;
        this._postId = postId;
    }

    set(userId, postId) {
        this._userId = userId;
        this._postId = postId;
    }

    get(userId, postId) {
        this._userId = userId;
        this._postId = postId;
    }

    _validateUserId(userId) {
        if (isNaN(userId) || userId <= 0) {
            throw new Error('Please enter a valid number for UserId!');
        }
    }
    _validatePostId(postId) {
        if (isNaN(postId) || postId <= 0) {
            throw new Error('Please enter valid numbers for PostId!');
        }
    }
}

module.exports = Post;