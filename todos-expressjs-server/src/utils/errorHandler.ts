import { Response } from 'express';

export function errorHandler<T>(
  res: Response,
  data: T | T[] | null,
  statusCode?: number,
): void {
  res.status(statusCode || 500).send(data);
}
