import express from 'express';
import { greet } from './greet.controller.js';

const router = express.Router();

router.post("/greet", greet);

export default router;