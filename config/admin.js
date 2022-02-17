module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '04ab80cf8c6c8497d1d7de8dbef47d3d'),
  },
});
