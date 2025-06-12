const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    const user = req.user;
    console.log("user",user.role)
    if (!user?.roles || !Array.isArray(user.roles)) {
      return res.status(401).json({ message: "Roles required" });
    } 

    const hasAccess = user.roles.some(role => allowedRoles.includes(role));

    if (!hasAccess) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    next();
  };
};

module.exports = authorizeRole;
