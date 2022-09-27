import httpStatus from "./constants/httpStatus";
import logger from "./logger";
class Exception extends Error {
  public readonly errorCode: any;
  public readonly httpStatus: any;
  constructor(error) {
    super(error.message);
    this.errorCode = error.code;
    this.httpStatus = error.httpStatus;
  }

  static exceptionHandeler(error, req, res, next) {
    logger.error(error.message);
    logger.error(error.stack);
    res.status(error.httpStatus || httpStatus.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
}

export default Exception;
