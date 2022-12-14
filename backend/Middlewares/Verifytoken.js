var jwt = require("jsonwebtoken");
const JWT_SECRET = "Darshanisagoodb$oy";

const Verifytoken = (req, res, next) => {
  //Get the user from the jwt token and add id to req object
  // console.log("Verifytoken");
  // const token = req.header('auth-token');
  const token = req.body.headers["auth-token"];
  // console.log("token is:"+token);
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    // console.log(data);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = Verifytoken;
