import express from "express";
import tripsController from "../controllers/tripController";
const router = express.Router();
router.get("/api/v1/trips", tripsController.getTrips);
router.post("/api/v1/trips", tripsController.createTrip);
router.get("/api/v1/trips/:id", tripsController.getOneTrip);
router.put("/api/v1/trips/:id", tripsController.updateTrip);
router.delete("/api/v1/trips/:id", tripsController.deleteTrip);
export default router;