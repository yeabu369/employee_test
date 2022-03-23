import { Router, Request, Response } from 'express';
import { errorHandler } from './errorHandler';
// import HttpStatusCode from '../util/HttpStatusCode';

// import errorHandler from './errorHandler';
import { successHandler } from './successHandler';

export default function resultHandler(func: any, statusCode?: any) {
  const wrapped = async (request: Request, response: Response) => {
    try {
      const result = await func(request, response);
      if (result?.error) {
        return errorHandler(response, result?.error);
      }
      return successHandler(response, result?.data, statusCode || 200);
    } catch (error) {
      return errorHandler(response, error);
    }
  };
  return wrapped;
}
