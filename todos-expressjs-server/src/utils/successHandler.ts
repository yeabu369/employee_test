import { Response } from 'express';

export function successHandler<T>(
  res: Response,
  data: T | T[] | null,
  statusCode?: number,
): void {
  res.status(statusCode || 200).send(data);
}
