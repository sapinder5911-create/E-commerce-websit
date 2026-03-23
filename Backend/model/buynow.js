// const { number } = require("framer-motion");
const {Schema,model, default: mongoose}=require("mongoose")
// const mongoose = require("mongoose");

const orderSchema = new Schema({

    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true
    },




    productname: { type: String, required: true },
    price: { type: Number, required: true },

    img: { type: String, required: true },
    email: { type: String, required: true },
    
    customerName: { type: String, required: true },
    address: { type: String, required: true }
}, { timestamps: true });

const mymodel = model("Order", orderSchema)

module.exports = mymodel