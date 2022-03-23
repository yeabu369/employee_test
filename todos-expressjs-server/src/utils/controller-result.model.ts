import { IErrorResponse, newError } from './error-response.model';
export interface IControllerResult<T> {
  error: IErrorResponse | null;
  data: T | null;
}

export function newControllerError<T>(
  errorMessage: string,
  statusCode?: number,
): IControllerResult<T> {
  return {
    error: newError(errorMessage, statusCode),
    data: null,
  };
}

export function newControllerData<T>(data: T): IControllerResult<T> {
  return {
    error: null,
    data: data,
  };
}
