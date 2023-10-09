//Creating an error to throw when user adding short passwords etc.. which is not a true error

export const errorHandler = (statusCode, message) => {
  //Using JS error constructor
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
