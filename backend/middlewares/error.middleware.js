// ! NOT FOUND
export const notFound = (req, _, next) => {
  const error = new Error(`${req.originalUrl} notfound`);
  next(error);
};

// ! ERROR HANDLER
export const errorHandler = (error, req, res, next) => {
  res.json({ message: error.message });
};
