const multer = require("multer");
const { S3Client } = require("@aws-sdk/client-s3");

const s3Client = new S3Client({
  region: process.env.AWS_REGION, // e.g., 'us-west-1'
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const upload = multer({
  storage: multer.memoryStorage(), // stores the file as buffer in memory
  limits: {
    fileSize: 5 * 1024 * 1024, // limit to 5MB
  },
});

module.exports = { upload, s3Client };
