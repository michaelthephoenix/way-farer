import users from '../data/userdb';
import Joi from 'joi';
import moment from 'moment';

class tripsController {
  static getUser(req, res) {
    return res.json({
      message: "List of all users",
      posts: trips
    });
  }
  static addUser(req, res) {
    const newId = parseInt(trips.length) + 1;
    const { first_name, last_name, password, is_admin} = req.body
    const schema = {
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      password: Joi.string().required(),
      is_admin: Joi.boolean.required()
    }
  
  }

}

export  default tripsController