import trips from "../data/tripdb";
import moment from "moment";
import Joi from 'joi';
import jtw from 'jsonwebtoken';
import auth from '../middleware/authoriseToken'



class tripsController {
  static getTrips(req, res) {
    return res.json({
      message: "List of all trips",
      posts: trips
    });
  }
  static createTrip(req, res) {
    const newId = parseInt(trips.length) + 1;
    const { origin, destination, seating_capacity, bus_license_number, trip_date, fare, status } = req.body;


    const schema = {
      origin: Joi.string().required(),
      destination: Joi.string().required(),
      seating_capacity: Joi.number().required(),
      bus_license_number: Joi.string().required(),
      trip_date: Joi.date().required(),
      fare: Joi.number().required(),
      status: Joi.string().required()
    };
    const result = Joi.validate(req.body, schema);
    if (result.error) {
      return res.status(400).json(result.error.details[0].message);
    }
    const newTrip = {
      id: newId,
      origin,
      destination,
      seating_capacity,
      bus_license_number,
      trip_date,
      fare,
      status,
      created_at: moment.utc().format()
    };
    trips.push(newTrip);
    return res.status(200).json({
      message: "success",
      newTrip
    });
  }
  static getOneTrip(req, res) {
    const { id } = req.params;

    let schema = {
      id: Joi.number()
    }
    let result = Joi.validate(req.params, schema);
    if (result.error) {
      res.status(400).send(result.error.details[0].message)
    }

    const trip = trips.find(oneTrip => oneTrip.id == id);
    if (trip) {
      return res.status(200).json({
        message: "success",
        oneTrip: trip
      });
    } else {
      res.status(400).json({
        error: "no trip found with that id"
      });
    }
  }
  static updateTrip(req, res) {
    const { id } = req.params;
    let schema = {
      id: Joi.number()
    }
    let result = Joi.validate(req.params, schema);
    if (result.error) {
      res.status(400).send(result.error.details[0].message)
    }

    const trip = trips.find(updateTrip => updateTrip.id == id);
    const { origin, destination, seating_capacity, bus_license_number, trip_date, fare, status } = req.body;


    schema = {
      origin: Joi.string().required(),
      destination: Joi.string().required(),
      seating_capacity: Joi.number().required(),
      bus_license_number: Joi.string().required(),
      trip_date: Joi.date().required(),
      fare: Joi.number().required(),
      status: Joi.string().required()
    };
    result = Joi.validate(req.body, schema);
    if (result.error) {
      res.status(400).send(result.error.details[0].message);
    }

    if (trip) {
      (trip.origin = origin),
        (trip.destination = destination),
        (trip.bus_license_number = bus_license_number),
        (trip.seating_capacity = seating_capacity),
        (trip.fare = fare),
        (trip.status = status),
        (trip.trip_date = trip_date);
      return res.status(201).json({
        message: "successfully updated",
        updateTrip: trip
      });
    } else {
      res.status(400).json({
        error: "trip cannot be updated"
      });
    }
  }
  static deleteTrip(req, res) {
    let { id } = req.params;
    const schema = {
      id: Joi.number()
    }
    const result = Joi.validate(req.params, schema);
    if (result.error) {
      res.status(400).send(result.error.details[0].message)
    }
    const findTrip = trips.find(trip => {
      return trip.id == id;
    });
    if (findTrip) {
      const newPosts = trips.filter(trip => {
        return trip !== findTrip;
      });
      res.status(200).json({
        message: "trip successfully deleted",
        trips: newPosts
      });
    } else {
      res.status(400).json({
        error: "could not delete a trip"
      });
    }
  }
}
export default tripsController