module.exports = {
  apps: [
    {
      name: "app1",
      script: "./app.js",
      env_production: {
        NODE_ENV: "production",
        PORT: 8080,

        AWS_ACCESS_KEY_ID: "AKIARI7U6NEAJRMQY5OV",
        AWS_SECRET_ACCESS_KEY: "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",
        AWS_REGION: "ap-southeast-2",
        AWS_S3_BUCKET: "precious-garden-contents",
      },
      env_development: {
        NODE_ENV: "development",
        PORT: 8080,

        AWS_ACCESS_KEY_ID: "AKIARI7U6NEAJRMQY5OV",
        AWS_SECRET_ACCESS_KEY: "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",
        AWS_REGION: "ap-southeast-2",
        AWS_S3_BUCKET: "precious-garden-contents",
      },
    },
  ],
};
