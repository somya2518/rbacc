module.exports = (req, res, next) => {
  const id = process.env.TEST_USER_ID || '6a47bcb47640a21cd74636ff';
  req.user = { id };
  next();
};
