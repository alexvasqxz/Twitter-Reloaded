const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: {
        type: String,
        maxlength: 300,
        trim: true
    },
    postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    pinned: {
        type: Boolean
    },
    replyTo: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
}, { timestamps: true });

var Post = mongoose.model('Post', PostSchema);
module.exports = Post;