const errorHandler = (error, req, res, next) => {
  console.error(error);

  let status = 500;
  let response = {
    error: "Internal Server Error",
    message: "An unexpected error occurred. Please try again later.",
  };
  // Check for specific Prisma errors
  if (error.code === "P2025") {
    status = 400;
    response = {
      error: "Bad Request",
      message: "Invalid input. Please check your parameters.",
    };
  } else {
    status = 500;
    response = {
      error: "Internal Server Error",
      message: "An unexpected error occurred. Please try again later.",
    };
  }

  res.status(status).json(response);
};

export { errorHandler };
