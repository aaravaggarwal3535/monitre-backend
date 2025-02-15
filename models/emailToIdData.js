import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({
    email: { type: String, required: true },
    id: { type: String, required: true }
});

const EmailData = mongoose.model('EmailData', EmailSchema);

export default EmailData;