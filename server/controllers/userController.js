import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import users from '../data/userdb';
import Joi from 'joi';
import auth from '../middleware/authoriseToken'
import moment, { max, min } from 'moment';

class usersController {
  static getUsers(req, res) {
    return res.json({
      message: "success",
      posts: users
    });
  }

  static createUser(req, res) {
    const newId = parseInt(users.length) + 1;
    const admin = false;
    const { first_name, last_name, password, email} = req.body;

    const schema = {
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().required()
    };
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      res.status(400).send(result.error.details[0].message);
    }
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);


    const newUser = {
      id: newId,
      is_admin: admin,
      first_name,
      last_name,
      hashedPassword,
      email,
      created_at: moment.utc().format()
    };
    const token = jwt.sign({email, is_admin}, 'cool')

    const data = {
      token,
      first_name,
      last_name,
      email,
      hashedPassword
    }
    users.push(newUser);
    return res.status(200).json({
      message: "success",
      data,
    });
  }

  static userSignIn (req, res) {
    const { password, email} = req.body;
    const schema = {
      password: Joi.string().required().max(50).min(5),
      email: Joi.string().required().email()
      };
      const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json(result.error.details[0].message);
    }
    const user = users.find(userEmail => userEmail.email == email);
    const first_name = user.first_name;
    const last_name = user.last_name;
    const is_admin = user.is_admin;
    const id = user.id;
      const validating  = bcrypt.compareSync(password, user.password);
      if(validating === true) {
      let token = jwt.sign({email, is_admin, id}, 'cool');
        return res.status(201).json({
          status: "success",
          data: 
          token,
          first_name,
          last_name,
          email
        });
      } else {
        res.status(400).json({
          error: "invalid email or password"
        });
      }
    }

  }


    // const the_user = {
    //   password,
    //   email
    // }
    // return res.json({
    //   the_user
    // });  

    
export default usersController