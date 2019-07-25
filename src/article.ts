//   /app/models/student.ts
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// create a schema
export const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
});
