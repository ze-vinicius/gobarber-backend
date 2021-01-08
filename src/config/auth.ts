export default {
  jwt: {
    secret: process.env.APP_SECRET || 'non-secret',
    expiresIn: '1d',
  },
};
