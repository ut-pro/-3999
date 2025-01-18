import express from "express";
import { Dish } from "../model/dishes.model.js";

const dishRouter = express.Router();

dishRouter.get("/", async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.send(dishes);
  } catch (error) {
    console.log(error);
  }
});

export default dishRouter;
