const express = require("express");
const { PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");

const router = express.Router();

const { upload, s3Client } = require("./config");

router.get("/", (req, res) => {
  res.send("This is the index of the shemelo");
});

// Upload Route
router.post("/upload", upload.single("file"), async (req, res) => {
  const fileKey =
    "products/" + Date.now().toString() + "_" + req.file.originalname;

  const uploadParams = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: fileKey,
    Body: req.file.buffer,
  };

  await s3Client.send(new PutObjectCommand(uploadParams));
  res.send("File uploaded!");
});

// Retrieve File Route
router.get("/file/:filename", async (req, res) => {
  const fileKey = "products/" + req.params.filename;

  const downloadParams = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: fileKey,
  };

  const data = await s3Client.send(new GetObjectCommand(downloadParams));
  data.Body.pipe(res);
});

module.exports = router;
