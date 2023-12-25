import Express from "express";
import { test } from "../controlers/user.controler.js";

const router = Express.Router();

router.get("/test", test);

export default router;
