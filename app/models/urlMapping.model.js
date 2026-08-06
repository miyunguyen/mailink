import mongoose from 'mongoose';

const urlMappingSchema = new mongoose.Schema(
    {
        _id: { type: Number, required: true },
        alias: { type: String, required: true, index: true, unique: true },
        original_url: { type: String, required: true },
        click_count: { type: Number, default: 0 },
        created_at: { type: Date, default: Date.now },
        last_accessed: { type: Date, default: Date.now },
    },
    {
        versionKey: false,
        toJSON: {
            transform: (doc, ret) => {
                delete ret._id;
                return ret;
            },
        },
        toObject: {
            transform: (doc, ret) => {
                delete ret._id;
                return ret;
            },
        },
    }
);

export const UrlMapping = mongoose.model('UrlMapping', urlMappingSchema);
