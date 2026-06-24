const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { connectDB } = require("./lib/db");
const auth_router = require("./routes/auth_routes");
const cookieParser = require("cookie-parser");
const message_router = require("./routes/message_routes");
const cors = require("cors");
const { app, server } = require("./lib/socket");
const path = require("path");


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api/auth", auth_router);
app.use("/api/messages", message_router);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}


server.listen(process.env.PORT, () => {
    console.log("Server is running on port 8080");
    connectDB();
});