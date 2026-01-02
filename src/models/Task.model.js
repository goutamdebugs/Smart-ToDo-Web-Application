const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        Ref: 'User',
        require: true
    }

},
    {
        timestamps: true
    }

)

const Task = mongoose.model('Task', taskSchema)

module.exports = Task