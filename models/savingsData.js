import mongoose from "mongoose";

const SavingsSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'SignupData', required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true }
});

const SavingsData = mongoose.model('SavingsData', SavingsSchema);

export default SavingsData;