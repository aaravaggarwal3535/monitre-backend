import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    phone: { type: Number, required: true },
    pan: { type: String, required: true },
    income: { type: Number, required: true },
    expense: { type: Number, required: true },
    saving: { type: Number, required: true },
    goals: { type: String, required: true },
    id: { type: String, required: true },
});

const UserDetailData = mongoose.model('UserPersonalData', UserSchema);

export default UserDetailData;