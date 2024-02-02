const allowedOrigins = [
  process.env.FRONTEND_DEV_URL,
  process.env.BACKEND_DEV_URL,
  "http://localhost:5173",
];

module.exports = allowedOrigins;
