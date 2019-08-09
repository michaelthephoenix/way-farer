import express from "express";
import bookingsController from "../controllers/bookingsController";
const bookingsRoutes = express.Router()
bookingsRoutes.get("/api/v1/bookings", bookingsController.getBookings);
bookingsRoutes.post("/api/v1/bookings", bookingsController.makeABooking);
// userRoutes.post("/api/v1/users/auth", usersController.userSignIn);
export default bookingsRoutes;