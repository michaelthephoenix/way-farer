import bookings from '../data/bookingsdb';
import trips from '../data/tripdb';
import users from '../data/userdb'
import moment from 'moment';
import Joi from 'joi';

class bookingsController {
  static getBookings(req, res) {
    return res.json({
      status: "success",
      bookings: bookings
    });
  }
  static makeABooking(req, res) {
    const newBookingId  = parseInt(bookings.length) + 1;
    const { user_id, trip_id,} = req.body;

    const schema = {
      user_id: Joi.number().required(),
      trip_id: Joi.number().required(),
    } 
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json(result.error.details[0].message);
    }

    const newBooking = {
      id : newBookingId,
      user_id,
      trip_id,
      created_at: moment.utc().format()
    };
    bookings.push(newBooking);
    return res.status(200).json({
      status: "success",
      newBooking
    });
  };


  
}
export default bookingsController