const express = require("express");
const router = express.Router();
const Order = require("../model/buynow");
const { authMiddleware } = require("../Middleware/auth")

router.post("/create", authMiddleware, async (req, res) => {
    try {
        const { productname, address,img,email, price, customerName, } = req.body;
        const newcart = new Order({userId:req.userId, productname, address, price, customerName, img, email, });
        await newcart.save();
        res.status(200).json({ message: "product add suucesfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

   


router.get("/order", authMiddleware,async (req, res) => {
    
    try {
        if (!req.userId) {
            return res.status(401).json({ message: "User not authenticated" });
        }

        let orders;

        if (req.role === "admin") {
            // Admin sees all orders
            orders = await Order.find();
        } else {
            // Normal user sees only their orders
            orders = await Order.find({ userId: req.userId });
        }

        res.status(200).json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;