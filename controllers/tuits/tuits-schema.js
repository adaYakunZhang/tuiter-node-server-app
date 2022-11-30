import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    disliked: Boolean,
    dislikes: Number,
    username: String,
    handle: String,
    time: String,
    image: String,
    retuits: Number,
    replies: Number
}, {collection: 'tuits'});
export default schema;
