import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const userSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    link: String,
    text: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    _creator: {
        type: Schema.ObjectId, 
        ref: 'User'
    }
})

const Post = mongoose.model('Post', userSchema)
export default Post