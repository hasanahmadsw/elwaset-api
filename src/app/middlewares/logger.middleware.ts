import { RequestHandler } from 'express';
import logger from '../utils/logger';

export const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
  logger.info(
    'REQUEST: ' + req.method + ' ' + req.path + ' ' + '- body:' + req.body
  );
  next();
};
