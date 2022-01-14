import express from "express";
import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..") + "/views/archivo.html");
});

router.post(
  "/",
  upload.single("archivo"),
  upload.single("archivo2"),
  (req, res) => {
    res.send("Archivo subido!");
  }
);

export default router;
