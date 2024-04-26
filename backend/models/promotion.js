const mongoose = require('mongoose');

// Promotion Schema
const PromotionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    discount_type: {
        type: String,
        enum: ['percentage', 'fixed'], // Can be either 'percentage' or 'fixed'
        required: true
    },
    discount_amount: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    }
});

const Promotion = mongoose.model('Promotion', PromotionSchema);

module.exports = Promotion;