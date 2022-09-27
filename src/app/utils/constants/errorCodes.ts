import httpStatus from './httpStatus';

export default {
  DEFAULT: {
    message: 'Internal Server Error!',
    httpStatus: httpStatus.INTERNAL_SERVER_ERROR,
  },
  UNAUTHORIZED: {
    message: 'Authentication failed!',
    httpStatus: httpStatus.UNAUTHRORIZED,
  },
  NOT_FOUND: {
    message: 'Not Found!',
    httpStatus: httpStatus.NOT_FOUND,
  },
  SLUG_NOT_AVAILABLE: {
    message: 'Slug is already exists',
    httpStatus: httpStatus.CONFLICT,
  },
  ID_NOT_AVAILABLE: {
    message: 'ID is already exists',
    httpStatus: httpStatus.CONFLICT,
  },
  EMAIL_NOT_AVAILABLE: {
    message: 'Email is already exists',
    httpStatus: httpStatus.CONFLICT,
  },
  INVALID_LOGIN: {
    message: 'Incorrect Email or Password',
    httpStatus: httpStatus.BAD_REQUEST,
  },
  NOT_EMPTY: {
    message:
      'The Statute Not Empty!, please delete all articles within the statute, and try again',
    httpStatus: httpStatus.BAD_REQUEST,
  },
  ADMIN_EXISTS: {
    message: 'Admin Already Created!',
    httpStatus: httpStatus.CONFLICT,
  },
  STATUTES_ALREADY_CREATED: {
    message: 'Statutes Already Created!',
    httpStatus: httpStatus.CONFLICT,
  },
  ARTICLES_ALREADY_CREATED: {
    message: 'Articles Already Created!',
    httpStatus: httpStatus.CONFLICT,
  },
};
