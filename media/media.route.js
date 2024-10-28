import express from 'express';
import { handleImageUpload } from './media.controller.js';

const router = express.Router();

router.post("/image", handleImageUpload);

export default router;