const Message = require("../models/message.model");

const sendMessage = async (req, res) => {
    try {
        const { fullName, email, message } = req.body;

        // Basic Validation
        if (!fullName || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Create new message
        const newMessage = await Message.create({
            fullName,
            email,
            message,
        });

        return res.status(201).json({
            success: true,
            message: "Message sent successfully!",
            data: newMessage,
        });
    } catch (error) {
        console.error("Send Message Error:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

module.exports = { sendMessage };
