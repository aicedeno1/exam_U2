const mongoose = require('mongoose');

const hdmiCableSchema = new mongoose.Schema(
    {
        cableId: {type: String, required: true, unique: true},
        brand: {type: String, required: true},
        length: {type: Number, required: true},
        lengthUnit: {type: String, required: true, default: 'meters'},
        price: {type: Number, required: true},
        connectorType: {type: String, required: true},
        resolution: {type: String, required: true},
        availableStock: {type: Number, required: true},
        color: {type: String, required: true},
        warrantyMonths: {type: Number, required: true, default: 12}
    },
    {
        collection: 'HDMI_Cable',
        timestamps: true 
    }
);

module.exports = mongoose.model('HdmiCable', hdmiCableSchema);