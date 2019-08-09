import jwt from 'jsonwebtoken';
import { request } from 'http';
const auth = (req, res, next) => {
  const token = request.header("token");
  if(!token) {
    return res.status(401).json('acces denied')
  };
  const accessToKen = jwt.decode(token, /* "jwtprvateKey" */ "cool");
  req.user = accessToKen;
  next()
}

export default auth