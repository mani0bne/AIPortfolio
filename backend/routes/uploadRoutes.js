import express from "express";
import multer from "multer";
import { uploadResume } from "../controller/uploadController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (_, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/upload", upload.single("resume"), uploadResume);

export default router;
