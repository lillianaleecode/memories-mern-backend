import mongoose from 'mongoose';

//Schema with mongodb to create docs
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

//turning the schema into a model
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;