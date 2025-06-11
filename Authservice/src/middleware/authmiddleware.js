require("dotenv").config();
const jwt = require("jsonwebtoken");

const middleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; 
    next(); 
  } catch (error) {
    console.error("JWT Middleware Error:", error.message);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Session expired. Please login again." });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

module.exports = middleware;
